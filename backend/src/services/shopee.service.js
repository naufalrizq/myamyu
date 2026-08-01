/**
 * Shopee Open Platform v2 Service
 * Docs: https://open.shopee.com/documents
 *
 * Signature formula (with access_token):
 *   base = partner_id + api_path + timestamp + access_token + shop_id
 *   sign = HMAC-SHA256(partner_key, base).hexdigest()
 *
 * Signature formula (without access_token, e.g. auth endpoints):
 *   base = partner_id + api_path + timestamp
 *   sign = HMAC-SHA256(partner_key, base).hexdigest()
 */

import crypto from "crypto";
import { prisma } from "../lib/prisma.js";

const BASE_URL = process.env.SHOPEE_BASE_URL || "https://partner.test-stable.shopeemobile.com";
const PARTNER_ID = Number(process.env.SHOPEE_PARTNER_ID || 0);
const PARTNER_KEY = process.env.SHOPEE_PARTNER_KEY || "";
const SAFETY_STOCK = Number(process.env.SAFETY_STOCK_DEFAULT || 2);

const IS_SANDBOX = BASE_URL.includes("test-stable");
console.log(`[Shopee] Mode: ${IS_SANDBOX ? "SANDBOX" : "PRODUCTION"} — ${BASE_URL}`);

// ── Signature ────────────────────────────────────────────────────────────────

export function generateShopeeSign(apiPath, timestamp, accessToken = "", shopId = "") {
  const base = accessToken
    ? `${PARTNER_ID}${apiPath}${timestamp}${accessToken}${shopId}`
    : `${PARTNER_ID}${apiPath}${timestamp}`;
  return crypto.createHmac("sha256", PARTNER_KEY).update(base).digest("hex");
}

// ── HTTP helper ───────────────────────────────────────────────────────────────

async function shopeeRequest(apiPath, { method = "GET", body = null, accessToken, shopId }) {
  const timestamp = Math.floor(Date.now() / 1000);
  const sign = generateShopeeSign(apiPath, timestamp, accessToken, String(shopId));

  const url = new URL(`${BASE_URL}${apiPath}`);
  url.searchParams.set("partner_id", PARTNER_ID);
  url.searchParams.set("timestamp", timestamp);
  url.searchParams.set("sign", sign);
  if (accessToken) url.searchParams.set("access_token", accessToken);
  if (shopId) url.searchParams.set("shop_id", shopId);

  const options = {
    method,
    headers: { "Content-Type": "application/json" },
  };
  if (body) options.body = JSON.stringify(body);

  const res = await fetch(url.toString(), options);
  const data = await res.json();

  if (data.error && data.error !== "") {
    throw new Error(`Shopee API error [${data.error}]: ${data.message}`);
  }
  return data;
}

// ── OAuth helpers ─────────────────────────────────────────────────────────────

/**
 * Generate Shopee OAuth authorization URL
 * Redirect pengguna ke URL ini untuk mendapatkan code
 */
export function generateShopeeAuthUrl(redirectUrl) {
  const apiPath = "/api/v2/shop/auth_partner";
  const timestamp = Math.floor(Date.now() / 1000);
  const sign = generateShopeeSign(apiPath, timestamp);

  const url = new URL(`${BASE_URL}${apiPath}`);
  url.searchParams.set("partner_id", PARTNER_ID);
  url.searchParams.set("timestamp", timestamp);
  url.searchParams.set("sign", sign);
  url.searchParams.set("redirect", redirectUrl);
  return url.toString();
}

/**
 * Exchange auth code for access + refresh token
 */
export async function getShopeeAccessToken(code, shopId) {
  const apiPath = "/api/v2/auth/token/get";
  const timestamp = Math.floor(Date.now() / 1000);
  const sign = generateShopeeSign(apiPath, timestamp);

  const url = `${BASE_URL}${apiPath}?partner_id=${PARTNER_ID}&timestamp=${timestamp}&sign=${sign}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code, shop_id: Number(shopId), partner_id: PARTNER_ID }),
  });
  const data = await res.json();
  if (data.error) throw new Error(`[${data.error}] ${data.message}`);
  return data; // { access_token, refresh_token, expire_in, shop_id, ... }
}

/**
 * Refresh access token using refresh token
 */
export async function refreshShopeeToken(shopId, refreshToken) {
  const apiPath = "/api/v2/auth/access_token/get";
  const timestamp = Math.floor(Date.now() / 1000);
  const sign = generateShopeeSign(apiPath, timestamp);

  const url = `${BASE_URL}${apiPath}?partner_id=${PARTNER_ID}&timestamp=${timestamp}&sign=${sign}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh_token: refreshToken, shop_id: Number(shopId), partner_id: PARTNER_ID }),
  });
  const data = await res.json();
  if (data.error) throw new Error(`[${data.error}] ${data.message}`);

  // Simpan token baru ke database
  await prisma.marketplaceAccount.updateMany({
    where: { marketplace: "shopee", shopId: String(shopId) },
    data: {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      tokenExpiresAt: new Date(Date.now() + (data.expire_in || 14400) * 1000),
    },
  });

  return data;
}

/**
 * Ambil access token aktif, auto-refresh jika sudah mau expired
 */
async function getActiveToken(account) {
  const expiresAt = account.tokenExpiresAt ? new Date(account.tokenExpiresAt) : null;
  const isExpiring = !expiresAt || expiresAt < new Date(Date.now() + 5 * 60 * 1000); // refresh 5 menit sebelum expired

  if (isExpiring && account.refreshToken) {
    console.log(`[Shopee] Token expired/expiring for shop ${account.shopId}, refreshing...`);
    const refreshed = await refreshShopeeToken(account.shopId, account.refreshToken);
    return refreshed.access_token;
  }
  return account.accessToken;
}

// ── Product & Stock ───────────────────────────────────────────────────────────

/**
 * Update stok satu produk/variant di Shopee
 * Butuh product_channel_mappings sudah diisi
 */
export async function updateShopeeStock(account, externalProductId, externalVariantId, newStock) {
  const accessToken = await getActiveToken(account);
  const shopId = account.shopId;
  const publishedStock = Math.max(0, newStock - SAFETY_STOCK);

  const apiPath = "/api/v2/product/update_stock";

  // Shopee API butuh item_id dan model_id (variant)
  const stockInfo = externalVariantId
    ? [{ model_id: Number(externalVariantId), normal_stock: publishedStock }]
    : [{ normal_stock: publishedStock }];

  const body = {
    item_id: Number(externalProductId),
    stock_list: stockInfo,
  };

  const result = await shopeeRequest(apiPath, { method: "POST", body, accessToken, shopId: Number(shopId) });
  return { ...result, publishedStock, rawStock: newStock };
}

/**
 * Get list produk dari toko Shopee
 */
export async function getShopeeProducts(account, offset = 0, pageSize = 50) {
  const accessToken = await getActiveToken(account);
  const apiPath = "/api/v2/product/get_item_list";

  const res = await shopeeRequest(apiPath, {
    method: "GET",
    accessToken,
    shopId: Number(account.shopId),
  });

  // Tambahkan offset & page_size ke querystring secara manual
  const timestamp = Math.floor(Date.now() / 1000);
  const sign = generateShopeeSign(apiPath, timestamp, accessToken, account.shopId);
  const url = `${BASE_URL}${apiPath}?partner_id=${PARTNER_ID}&timestamp=${timestamp}&sign=${sign}&access_token=${accessToken}&shop_id=${account.shopId}&offset=${offset}&page_size=${pageSize}&item_status=NORMAL`;

  const response = await fetch(url);
  const data = await response.json();
  if (data.error) throw new Error(`[${data.error}] ${data.message}`);
  return data;
}

// ── Webhook Verification ──────────────────────────────────────────────────────

/**
 * Verifikasi signature webhook Shopee
 * Authorization header = SHA256(partner_key + raw_body)
 */
export function verifyShopeeWebhook(authorization, rawBody) {
  const expected = crypto
    .createHmac("sha256", PARTNER_KEY)
    .update(rawBody)
    .digest("hex");
  return authorization === expected;
}
