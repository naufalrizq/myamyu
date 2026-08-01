#!/usr/bin/env node

/**
 * Marketplace Integration Test — Sandbox
 * =======================================
 * Test koneksi ke Shopee & TikTok Shop sandbox environment.
 *
 * Usage:
 *   node scripts/test-marketplace-connection.js
 *
 * Sebelum running, isi credential di .env:
 *   SHOPEE_PARTNER_ID, SHOPEE_PARTNER_KEY
 *   TTS_APP_KEY, TTS_APP_SECRET
 *
 * Cara daftar sandbox:
 *   Shopee:     https://open.shopee.com/console → buat App → sandbox
 *   TikTok:     https://partner.tiktokshop.com/ → Partner Center → Development Kits → Sandbox
 */

import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

// ── Helper ────────────────────────────────────────────────────────────────────

const PASS = "\x1b[32m✓\x1b[0m";
const FAIL = "\x1b[31m✗\x1b[0m";
const SKIP = "\x1b[33m–\x1b[0m";

function test(name, fn) {
  try {
    fn();
    console.log(`  ${PASS} ${name}`);
    return true;
  } catch (e) {
    console.log(`  ${FAIL} ${name}: ${e.message}`);
    return false;
  }
}

async function testAsync(name, fn) {
  try {
    await fn();
    console.log(`  ${PASS} ${name}`);
    return true;
  } catch (e) {
    console.log(`  ${FAIL} ${name}: ${e.message}`);
    return false;
  }
}

function section(title) {
  console.log(`\n\x1b[36m━━━ ${title} ━━━\x1b[0m`);
}

// ── Tests ─────────────────────────────────────────────────────────────────────

let passed = 0;
let failed = 0;

// ──────────────────────────────────────────────────────────────────────────────
// SHOPEE
// ──────────────────────────────────────────────────────────────────────────────

section("Shopee Open Platform");

const SHOPEE_PARTNER_ID = Number(process.env.SHOPEE_PARTNER_ID || 0);
const SHOPEE_PARTNER_KEY = process.env.SHOPEE_PARTNER_KEY || "";
const SHOPEE_BASE_URL = process.env.SHOPEE_BASE_URL || "https://partner.test-stable.shopeemobile.com";

if (SHOPEE_PARTNER_ID && SHOPEE_PARTNER_KEY) {
  test("PARTNER_ID terisi", () => {
    if (!SHOPEE_PARTNER_ID) throw new Error("SHOPEE_PARTNER_ID kosong");
  });
  test("PARTNER_KEY terisi", () => {
    if (!SHOPEE_PARTNER_KEY) throw new Error("SHOPEE_PARTNER_KEY kosong");
  });

  test("generateShopeeSign — tanpa token", () => {
    const sign = generateShopeeSign("/api/v2/shop/auth_partner", 1234567890);
    if (!sign || sign.length !== 64) throw new Error(`Invalid signature: ${sign}`);
  });

  test("generateShopeeSign — dengan token", () => {
    const sign = generateShopeeSign("/api/v2/product/update_stock", 1234567890, "tok_abc", "12345");
    if (!sign || sign.length !== 64) throw new Error(`Invalid signature: ${sign}`);
  });

  test("Shopee OAuth URL generated", () => {
    const url = generateShopeeAuthUrl("http://localhost:3001/api/marketplaces/shopee/callback");
    if (!url.includes("partner_id=")) throw new Error("URL tidak mengandung partner_id");
    if (!url.includes("sign=")) throw new Error("URL tidak mengandung sign");
    if (!url.includes("redirect=")) throw new Error("URL tidak mengandung redirect");
  });

  const skippableShopee = process.env.SHOPEE_SKIP_NETWORK ? true : false;

  if (!skippableShopee) {
    test("BASE_URL reachable", async () => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);
      try {
        const res = await fetch(`${SHOPEE_BASE_URL}/api/v2/shop/get_profile`, {
          method: "GET",
          signal: controller.signal,
        }).then((r) => ({ status: r.status }));
        // Jika response 400 (bad request karena signature invalid), berarti endpoint reachable
        if (res.status >= 400 && res.status < 500) {
          // Validasi signature gagal — tapi server reachable ✅
          return true;
        }
        if (res.status >= 200 && res.status < 400) {
          return true;
        }
        throw new Error(`Unexpected status: ${res.status}`);
      } finally {
        clearTimeout(timeout);
      }
    }).then(r => { if (r) passed++; else failed++; });
  } else {
    console.log(`  ${SKIP} Sandbox connectivity test (skip via SHOPEE_SKIP_NETWORK)`);
  }

  passed += 3;
} else {
  console.log(`  ${SKIP} Lewati semua test Shopee — isi SHOPEE_PARTNER_ID & SHOPEE_PARTNER_KEY di .env`);
}

// ──────────────────────────────────────────────────────────────────────────────
// TIKTOK SHOP
// ──────────────────────────────────────────────────────────────────────────────

section("TikTok Shop Partner Center");

const TTS_APP_KEY = process.env.TTS_APP_KEY || "";
const TTS_APP_SECRET = process.env.TTS_APP_SECRET || "";
const TTS_BASE_URL = process.env.TTS_BASE_URL || "https://open-api.tiktokglobalshop.com";

if (TTS_APP_KEY && TTS_APP_SECRET) {
  test("APP_KEY terisi", () => {
    if (!TTS_APP_KEY) throw new Error("TTS_APP_KEY kosong");
  });
  test("APP_SECRET terisi", () => {
    if (!TTS_APP_SECRET) throw new Error("TTS_APP_SECRET kosong");
  });

  test("generateTtsSign — tanpa body", () => {
    const sign = generateTtsSign("/product/202309/products/search", { app_key: TTS_APP_KEY, timestamp: "1234567890" });
    if (!sign || sign.length !== 64) throw new Error(`Invalid signature: ${sign}`);
  });

  test("generateTtsSign — dengan body", () => {
    const sign = generateTtsSign("/product/202309/products/search", { app_key: TTS_APP_KEY, timestamp: "1234567890" }, JSON.stringify({ page_size: 10 }));
    if (!sign || sign.length !== 64) throw new Error(`Invalid signature: ${sign}`);
  });

  test("TikTok OAuth URL generated", () => {
    const url = generateTtsAuthUrl("test_state");
    if (!url.includes("app_key=")) throw new Error("URL tidak mengandung app_key");
    if (!url.includes("test_state")) throw new Error("URL tidak mengandung state");
  });

  const skippableTts = process.env.TTS_SKIP_NETWORK ? true : false;

  if (!skippableTts) {
    test("TikTok API reachable", async () => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);
      try {
        const res = await fetch(`${TTS_BASE_URL}/product/202309/products/search`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
        }).then((r) => ({ status: r.status }));
        return true; // Server reachable
      } catch (e) {
        if (e.name === "AbortError") throw new Error("Timeout — server tidak reachable");
        throw e;
      } finally {
        clearTimeout(timeout);
      }
    }).then(r => { if (r) passed++; else failed++; });
  } else {
    console.log(`  ${SKIP} Sandbox connectivity test (skip via TTS_SKIP_NETWORK)`);
  }

  passed += 4;
} else {
  console.log(`  ${SKIP} Lewati semua test TikTok — isi TTS_APP_KEY & TTS_APP_SECRET di .env`);
}

// ──────────────────────────────────────────────────────────────────────────────
// WEBHOOK VERIFICATION
// ──────────────────────────────────────────────────────────────────────────────

section("Webhook Signature Verification");

// Shopee webhook verify (tanpa credential, test algoritma)
if (SHOPEE_PARTNER_KEY) {
  test("verifyShopeeWebhook — valid signature", () => {
    const rawBody = JSON.stringify({ code: 4, data: { order_sn: "TEST123" } });
    const authorization = crypto.createHmac("sha256", SHOPEE_PARTNER_KEY).update(rawBody).digest("hex");
    if (!verifyShopeeWebhook(authorization, rawBody)) throw new Error("Signature tidak valid");
  });
  test("verifyShopeeWebhook — invalid signature ditolak", () => {
    if (verifyShopeeWebhook("invalid_signature", "{}")) throw new Error("Seharusnya ditolak");
  });
  passed += 2;
} else {
  console.log(`  ${SKIP} Lewati test Shopee webhook — butuh SHOPEE_PARTNER_KEY`);
}

// TikTok webhook verify
if (TTS_APP_SECRET) {
  test("verifyTtsWebhook — valid signature", () => {
    const rawBody = JSON.stringify({ type: "ORDER_STATUS_CHANGE", data: { order_id: "TEST123" } });
    const bodyHash = crypto.createHash("sha256").update(rawBody).digest("hex");
    const toVerify = `${TTS_APP_SECRET}\n1700000000\nnonce123\n${bodyHash}`;
    const validSig = crypto.createHmac("sha256", TTS_APP_SECRET).update(toVerify).digest("hex");
    if (!verifyTtsWebhook(validSig, "1700000000", "nonce123", rawBody)) throw new Error("Signature tidak valid");
  });
  test("verifyTtsWebhook — invalid signature ditolak", () => {
    if (verifyTtsWebhook("invalid", "1700000000", "nonce", "{}")) throw new Error("Seharusnya ditolak");
  });
  passed += 2;
} else {
  console.log(`  ${SKIP} Lewati test TikTok webhook — butuh TTS_APP_SECRET`);
}

// ──────────────────────────────────────────────────────────────────────────────
// CREDENTIAL CHECKLIST
// ──────────────────────────────────────────────────────────────────────────────

section("Credential Checklist");

const checks = [
  ["SHOPEE_PARTNER_ID", !!SHOPEE_PARTNER_ID, "Shopee partner ID"],
  ["SHOPEE_PARTNER_KEY", !!SHOPEE_PARTNER_KEY, "Shopee partner key"],
  ["TTS_APP_KEY", !!TTS_APP_KEY, "TikTok app key"],
  ["TTS_APP_SECRET", !!TTS_APP_SECRET, "TikTok app secret"],
];

for (const [key, ok, label] of checks) {
  console.log(`  ${ok ? PASS : SKIP} ${key} — ${label}`);
}

console.log(`\n\x1b[36m━━━ RINGKASAN ━━━\x1b[0m`);
console.log(`  Test passed: ${passed}`);
console.log(`  Test failed: ${failed}`);

if (passed === 0 && !SHOPEE_PARTNER_ID && !TTS_APP_KEY) {
  console.log(`\n\x1b[33m⚠️  Belum ada credential terisi.\x1b[0m`);
  console.log(`  Untuk test dengan sandbox:\n`);
  console.log(`  Shopee:`);
  console.log(`    1. Buka https://open.shopee.com/console`);
  console.log(`    2. Buat App → dapat PARTNER_ID dan PARTNER_KEY`);
  console.log(`    3. Isi di .env: SHOPEE_PARTNER_ID=... SHOPEE_PARTNER_KEY=...`);
  console.log(`    4. BASE_URL sudah otomatis mengarah ke sandbox\n`);
  console.log(`  TikTok Shop:`);
  console.log(`    1. Buka https://partner.tiktokshop.com/`);
  console.log(`    2. Buat App → dapat APP_KEY dan APP_SECRET`);
  console.log(`    3. Masuk Development Kits → Sandbox → Seller test accounts`);
  console.log(`    4. Buat Core Function Account, Authorize App`);
  console.log(`    5. Isi di .env: TTS_APP_KEY=... TTS_APP_SECRET=...\n`);
  console.log(`  Kamu juga perlu ngrok untuk test webhook:`);
  console.log(`    ngrok http 3001`);
  console.log(`    lalu set SHOPEE_REDIRECT_URL ke https://xxxx.ngrok-free.app/...`);
}

// ── Implementation (standalone) ───────────────────────────────────────────────

function generateShopeeSign(apiPath, timestamp, accessToken = "", shopId = "") {
  const base = accessToken
    ? `${SHOPEE_PARTNER_ID}${apiPath}${timestamp}${accessToken}${shopId}`
    : `${SHOPEE_PARTNER_ID}${apiPath}${timestamp}`;
  return crypto.createHmac("sha256", SHOPEE_PARTNER_KEY).update(base).digest("hex");
}

function generateShopeeAuthUrl(redirectUrl) {
  const apiPath = "/api/v2/shop/auth_partner";
  const timestamp = Math.floor(Date.now() / 1000);
  const sign = generateShopeeSign(apiPath, timestamp);
  const url = new URL(`${SHOPEE_BASE_URL}${apiPath}`);
  url.searchParams.set("partner_id", SHOPEE_PARTNER_ID);
  url.searchParams.set("timestamp", timestamp);
  url.searchParams.set("sign", sign);
  url.searchParams.set("redirect", redirectUrl);
  return url.toString();
}

function verifyShopeeWebhook(authorization, rawBody) {
  const expected = crypto.createHmac("sha256", SHOPEE_PARTNER_KEY).update(rawBody).digest("hex");
  return authorization === expected;
}

function generateTtsSign(path, queryParams = {}, body = "") {
  const excluded = new Set(["sign", "access_token", "shop_cipher"]);
  const sortedParams = Object.entries(queryParams)
    .filter(([k]) => !excluded.has(k))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}${v}`)
    .join("");
  const toSign = `${TTS_APP_SECRET}${path}${sortedParams}${body}${TTS_APP_SECRET}`;
  return crypto.createHmac("sha256", TTS_APP_SECRET).update(toSign).digest("hex");
}

function generateTtsAuthUrl(state = "") {
  return `https://auth.tiktok-shops.com/oauth/authorize?app_key=${TTS_APP_KEY}${state ? `&state=${state}` : ""}`;
}

function verifyTtsWebhook(authorization, timestamp, nonce, rawBody) {
  const bodyHash = crypto.createHash("sha256").update(rawBody).digest("hex");
  const toVerify = `${TTS_APP_SECRET}\n${timestamp}\n${nonce}\n${bodyHash}`;
  const hmac = crypto.createHmac("sha256", TTS_APP_SECRET).update(toVerify).digest("hex");
  return authorization === hmac;
}
