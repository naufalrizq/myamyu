/**
 * TikTok Shop Open API v2 (202309+) Service
 * Covers: Tokopedia & Shop / TikTok Shop Partner Center
 * Docs: https://partner.tiktokshop.com/docv2
 *
 * Signature algorithm (HMAC-SHA256):
 *   1. Sort query params alphabetically (exclude sign, access_token, shop_cipher)
 *   2. Concatenate: app_secret + path + sorted_query_string + body_string + app_secret
 *   3. sign = HMAC-SHA256(app_secret, concat_string).hexdigest()
 */

import crypto from "crypto";
import { prisma } from "../lib/prisma.js";

const BASE_URL = process.env.TTS_BASE_URL || "https://open-api.tiktokglobalshop.com";
const APP_KEY = process.env.TTS_APP_KEY || "";
const APP_SECRET = process.env.TTS_APP_SECRET || "";
const SAFETY_STOCK = Number(process.env.SAFETY_STOCK_DEFAULT || 2);

console.log(`[TikTokShop] Mode: ${APP_KEY ? "CREDENTIAL_SET" : "NO_CREDENTIAL"} — ${BASE_URL}`);

// ── Signature ─────────────────────────────────────────────────────────────────

/**
 * Generate TikTok Shop API signature
 * @param {string} path - API path, e.g. "/product/202309/products/.../inventory/update"
 * @param {object} queryParams - query parameters (exclude sign, access_token, shop_cipher)
 * @param {string} body - JSON stringified request body (or "" for GET)
 * @returns {string} hex signature
 */
export function generateTtsSign(path, queryParams = {}, body = "") {
  // Sort query params alphabetically, exclude sign, access_token, shop_cipher
  const excluded = new Set(["sign", "access_token", "shop_cipher"]);
  const sortedParams = Object.entries(queryParams)
    .filter(([k]) => !excluded.has(k))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}${v}`)
    .join("");

  const toSign = `${APP_SECRET}${path}${sortedParams}${body}${APP_SECRET}`;
  return crypto.createHmac("sha256", APP_SECRET).update(toSign).digest("hex");
}

// ── HTTP helper ───────────────────────────────────────────────────────────────

async function ttsRequest(apiPath, { method = "GET", body = null, accessToken, shopCipher }) {
  const timestamp = Math.floor(Date.now() / 1000);

  const queryParams = {
    app_key: APP_KEY,
    timestamp: String(timestamp),
    ...(shopCipher ? { shop_cipher: shopCipher } : {}),
  };

  const bodyStr = body ? JSON.stringify(body) : "";
  const sign = generateTtsSign(apiPath, queryParams, bodyStr);

  const url = new URL(`${BASE_URL}${apiPath}`);
  Object.entries(queryParams).forEach(([k, v]) => url.searchParams.set(k, v));
  url.searchParams.set("sign", sign);

  const headers = {
    "Content-Type": "application/json",
    ...(accessToken ? { "x-tts-access-token": accessToken } : {}),
  };

  const options = { method, headers };
  if (body) options.body = bodyStr;

  const res = await fetch(url.toString(), options);
  const data = await res.json();

  if (data.code !== 0) {
    throw new Error(`TikTok Shop API error [${data.code}]: ${data.message}`);
  }
  return data;
}

// ── OAuth helpers ──────────────────────────────────────────────────────────────

/**
 * Generate OAuth authorization URL
 */
export function generateTtsAuthUrl(state = "") {
  return `https://auth.tiktok-shops.com/oauth/authorize?app_key=${APP_KEY}${state ? `&state=${state}` : ""}`;
}

/**
 * Exchange auth code for access + refresh token
 */
export async function getTtsAccessToken(authCode) {
  const apiPath = "/authorization/202309/token";
  const timestamp = Math.floor(Date.now() / 1000);
  const queryParams = { app_key: APP_KEY, timestamp: String(timestamp) };
  const body = { auth_code: authCode, grant_type: "authorized_code" };
  const bodyStr = JSON.stringify(body);
  const sign = generateTtsSign(apiPath, queryParams, bodyStr);

  const url = `${BASE_URL}${apiPath}?app_key=${APP_KEY}&timestamp=${timestamp}&sign=${sign}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: bodyStr,
  });
  const data = await res.json();
  if (data.code !== 0) throw new Error(`[${data.code}] ${data.message}`);
  return data.data; // { access_token, refresh_token, access_token_expire_in, ... }
}

/**
 * Refresh access token
 */
export async function refreshTtsToken(shopId, refreshToken) {
  const apiPath = "/authorization/202309/token";
  const timestamp = Math.floor(Date.now() / 1000);
  const queryParams = { app_key: APP_KEY, timestamp: String(timestamp) };
  const body = { refresh_token: refreshToken, grant_type: "refresh_token" };
  const bodyStr = JSON.stringify(body);
  const sign = generateTtsSign(apiPath, queryParams, bodyStr);

  const url = `${BASE_URL}${apiPath}?app_key=${APP_KEY}&timestamp=${timestamp}&sign=${sign}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: bodyStr,
  });
  const data = await res.json();
  if (data.code !== 0) throw new Error(`[${data.code}] ${data.message}`);

  const tokenData = data.data;

  // Simpan token baru ke database
  await prisma.marketplaceAccount.updateMany({
    where: { marketplace: "tokopedia_shop", shopId: String(shopId) },
    data: {
      accessToken: tokenData.access_token,
      refreshToken: tokenData.refresh_token,
      tokenExpiresAt: new Date(Date.now() + (tokenData.access_token_expire_in || 86400) * 1000),
    },
  });

  return tokenData;
}

/**
 * Get authorized shops for this app
 */
export async function getTtsAuthorizedShops(accessToken) {
  const apiPath = "/authorization/202309/shops";
  const data = await ttsRequest(apiPath, { method: "GET", accessToken });
  return data.data?.shops || [];
}

/**
 * Ambil active token, auto-refresh jika expired
 */
async function getActiveToken(account) {
  const expiresAt = account.tokenExpiresAt ? new Date(account.tokenExpiresAt) : null;
  const isExpiring = !expiresAt || expiresAt < new Date(Date.now() + 5 * 60 * 1000);

  if (isExpiring && account.refreshToken) {
    console.log(`[TikTokShop] Token expired/expiring for shop ${account.shopId}, refreshing...`);
    const refreshed = await refreshTtsToken(account.shopId, account.refreshToken);
    return refreshed.access_token;
  }
  return account.accessToken;
}

// ── Product & Stock ───────────────────────────────────────────────────────────

/**
 * Update stok produk di TikTok Shop
 * @param {object} account - MarketplaceAccount dari database
 * @param {string} externalProductId - TikTok product_id
 * @param {string} externalVariantId - TikTok sku_id (variant)
 * @param {number} newStock - stok internal MyaMyu
 * @param {string} warehouseId - warehouse_id (required by TikTok Shop API)
 */
export async function updateTtsStock(account, externalProductId, externalVariantId, newStock, warehouseId) {
  const accessToken = await getActiveToken(account);
  const shopCipher = account.shopId; // TikTok Shop pakai shop_cipher
  const publishedStock = Math.max(0, newStock - SAFETY_STOCK);

  const apiPath = `/product/202309/products/${externalProductId}/inventory/update`;

  const body = {
    skus: [
      {
        id: externalVariantId,
        inventory: [
          {
            quantity: publishedStock,
            ...(warehouseId ? { warehouse_id: warehouseId } : {}),
          },
        ],
      },
    ],
  };

  const result = await ttsRequest(apiPath, { method: "POST", body, accessToken, shopCipher });
  return { ...result, publishedStock, rawStock: newStock };
}

/**
 * Get list produk dari toko TikTok Shop
 */
export async function getTtsProducts(account, pageToken = "", pageSize = 20) {
  const accessToken = await getActiveToken(account);
  const shopCipher = account.shopId;
  const apiPath = "/product/202309/products/search";

  const body = {
    page_token: pageToken,
    page_size: pageSize,
    status: "ACTIVATE",
  };

  const result = await ttsRequest(apiPath, { method: "POST", body, accessToken, shopCipher });
  return result.data;
}

// ── Webhook Verification ──────────────────────────────────────────────────────

/**
 * Verifikasi webhook TikTok Shop
 * Header: x-tts-timestamp, x-tts-nonce, content-type
 * Authorization: app_secret + timestamp + nonce + body_hash
 */
export function verifyTtsWebhook(authorization, timestamp, nonce, rawBody) {
  const bodyHash = crypto.createHash("sha256").update(rawBody).digest("hex");
  const toVerify = `${APP_SECRET}\n${timestamp}\n${nonce}\n${bodyHash}`;
  const hmac = crypto.createHmac("sha256", APP_SECRET).update(toVerify).digest("hex");
  return authorization === hmac;
}
