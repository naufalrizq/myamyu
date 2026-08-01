import { Router } from "express";
import crypto from "crypto";
import { prisma } from "../lib/prisma.js";
import {
  generateShopeeAuthUrl,
  getShopeeAccessToken,
  verifyShopeeWebhook,
} from "../services/shopee.service.js";
import {
  generateTtsAuthUrl,
  getTtsAccessToken,
  getTtsAuthorizedShops,
  verifyTtsWebhook,
} from "../services/tiktokshop.service.js";
import { triggerStockSync, getProductSyncStatus, processPendingSyncJobs } from "../services/sync.service.js";
import { processShopeeOrder, processTtsOrder } from "../services/order.service.js";

const router = Router();

// ── Status & Config ───────────────────────────────────────────────────────────

router.get("/status", async (req, res, next) => {
  try {
    const accounts = await prisma.marketplaceAccount.findMany({
      where: { isActive: true },
    });

    const shopee = accounts.find((a) => a.marketplace === "shopee");
    const tts = accounts.find((a) => a.marketplace === "tokopedia_shop");

    const envCheck = {
      shopee: {
        id: "shopee",
        name: "Shopee",
        mode: "Shopee Open Platform v2",
        connected: !!shopee,
        shopName: shopee?.shopName || null,
        tokenExpiry: shopee?.tokenExpiresAt || null,
        ready: !!(process.env.SHOPEE_PARTNER_ID && process.env.SHOPEE_PARTNER_KEY),
        checks: [
          { key: "SHOPEE_PARTNER_ID", label: "Partner ID", ok: !!process.env.SHOPEE_PARTNER_ID },
          { key: "SHOPEE_PARTNER_KEY", label: "Partner Key", ok: !!process.env.SHOPEE_PARTNER_KEY },
          { key: "SHOPEE_SHOP_ID", label: "Shop ID (token)", ok: !!shopee },
          { key: "SHOPEE_ACCESS_TOKEN", label: "Access Token (token)", ok: !!(shopee?.accessToken) },
        ],
      },
      tokopedia_shop: {
        id: "tokopedia_shop",
        name: "Tokopedia & Shop (TikTok)",
        mode: "TikTok Shop Partner Center API v2 (202309)",
        connected: !!tts,
        shopName: tts?.shopName || null,
        tokenExpiry: tts?.tokenExpiresAt || null,
        ready: !!(process.env.TTS_APP_KEY && process.env.TTS_APP_SECRET),
        checks: [
          { key: "TTS_APP_KEY", label: "App Key", ok: !!process.env.TTS_APP_KEY },
          { key: "TTS_APP_SECRET", label: "App Secret", ok: !!process.env.TTS_APP_SECRET },
          { key: "TTS_SHOP_ID", label: "Shop (token)", ok: !!tts },
          { key: "TTS_ACCESS_TOKEN", label: "Access Token (token)", ok: !!(tts?.accessToken) },
        ],
      },
    };

    res.json({ ok: true, marketplaces: Object.values(envCheck) });
  } catch (err) {
    next(err);
  }
});

// ── Marketplace Accounts ──────────────────────────────────────────────────────

// GET /api/marketplaces/accounts
router.get("/accounts", async (req, res, next) => {
  try {
    const accounts = await prisma.marketplaceAccount.findMany({
      where: { isActive: true },
      select: { id: true, marketplace: true, shopId: true, shopName: true, tokenExpiresAt: true },
    });
    res.json({ ok: true, data: accounts });
  } catch (err) {
    next(err);
  }
});

// ── OAuth Shopee ──────────────────────────────────────────────────────────────

// Step 1: Redirect ke Shopee untuk autorisasi
router.get("/shopee/auth-url", (req, res) => {
  const redirectUrl = process.env.SHOPEE_REDIRECT_URL || `${req.protocol}://${req.get("host")}/api/marketplaces/shopee/callback`;
  const url = generateShopeeAuthUrl(redirectUrl);
  res.json({ ok: true, url });
});

// Step 2: Callback dari Shopee setelah user authorize
router.get("/shopee/callback", async (req, res, next) => {
  try {
    const { code, shop_id } = req.query;
    if (!code || !shop_id) {
      return res.status(400).json({ message: "code dan shop_id diperlukan" });
    }

    const tokenData = await getShopeeAccessToken(code, shop_id);

    await prisma.marketplaceAccount.upsert({
      where: { marketplace_shopId: { marketplace: "shopee", shopId: String(shop_id) } },
      update: {
        accessToken: tokenData.access_token,
        refreshToken: tokenData.refresh_token,
        tokenExpiresAt: new Date(Date.now() + (tokenData.expire_in || 14400) * 1000),
        isActive: true,
      },
      create: {
        marketplace: "shopee",
        shopId: String(shop_id),
        shopName: `Shopee Shop ${shop_id}`,
        accessToken: tokenData.access_token,
        refreshToken: tokenData.refresh_token,
        tokenExpiresAt: new Date(Date.now() + (tokenData.expire_in || 14400) * 1000),
        isActive: true,
      },
    });

    res.json({ ok: true, message: "Shopee berhasil terkoneksi", shopId: shop_id });
  } catch (err) {
    next(err);
  }
});

// Disconnect Shopee
router.delete("/shopee/disconnect", async (req, res, next) => {
  try {
    await prisma.marketplaceAccount.updateMany({
      where: { marketplace: "shopee" },
      data: { isActive: false },
    });
    res.json({ ok: true, message: "Shopee berhasil diputus" });
  } catch (err) {
    next(err);
  }
});

// ── OAuth TikTok Shop ─────────────────────────────────────────────────────────

// Step 1: Redirect ke TikTok Shop Partner Center
router.get("/tiktok/auth-url", (req, res) => {
  const state = crypto.randomBytes(8).toString("hex");
  const url = generateTtsAuthUrl(state);
  res.json({ ok: true, url });
});

// Step 2: Callback dari TikTok Shop
router.get("/tiktok/callback", async (req, res, next) => {
  try {
    const { code } = req.query;
    if (!code) {
      return res.status(400).json({ message: "auth code diperlukan" });
    }

    const tokenData = await getTtsAccessToken(code);
    const shops = await getTtsAuthorizedShops(tokenData.access_token);

    // Simpan semua shop yang diotorisasi
    for (const shop of shops) {
      await prisma.marketplaceAccount.upsert({
        where: { marketplace_shopId: { marketplace: "tokopedia_shop", shopId: String(shop.cipher || shop.id) } },
        update: {
          shopName: shop.name,
          accessToken: tokenData.access_token,
          refreshToken: tokenData.refresh_token,
          tokenExpiresAt: new Date(Date.now() + (tokenData.access_token_expire_in || 86400) * 1000),
          isActive: true,
        },
        create: {
          marketplace: "tokopedia_shop",
          shopId: String(shop.cipher || shop.id),
          shopName: shop.name,
          accessToken: tokenData.access_token,
          refreshToken: tokenData.refresh_token,
          tokenExpiresAt: new Date(Date.now() + (tokenData.access_token_expire_in || 86400) * 1000),
          isActive: true,
        },
      });
    }

    res.json({ ok: true, message: `TikTok Shop berhasil terkoneksi. ${shops.length} toko ditemukan.`, shops });
  } catch (err) {
    next(err);
  }
});

// Disconnect TikTok Shop
router.delete("/tiktok/disconnect", async (req, res, next) => {
  try {
    await prisma.marketplaceAccount.updateMany({
      where: { marketplace: "tokopedia_shop" },
      data: { isActive: false },
    });
    res.json({ ok: true, message: "TikTok Shop berhasil diputus" });
  } catch (err) {
    next(err);
  }
});

// ── Product Channel Mappings ──────────────────────────────────────────────────

// GET /api/marketplaces/mappings?productId=xxx
router.get("/mappings", async (req, res, next) => {
  try {
    const where = {};
    if (req.query.productId) where.productId = Number(req.query.productId);
    const mappings = await prisma.productChannelMapping.findMany({
      where,
      include: { marketplaceAccount: true, product: { select: { id: true, name: true, sku: true } } },
    });
    res.json({ ok: true, data: mappings });
  } catch (err) {
    next(err);
  }
});

// POST /api/marketplaces/mappings - Tambah mapping produk ke channel
router.post("/mappings", async (req, res, next) => {
  try {
    const { productId, marketplaceAccountId, externalProductId, externalVariantId, externalSku, safetyStock } = req.body;

    if (!productId || !marketplaceAccountId || !externalProductId) {
      return res.status(400).json({ message: "productId, marketplaceAccountId, externalProductId wajib diisi" });
    }

    const mapping = await prisma.productChannelMapping.create({
      data: {
        productId: Number(productId),
        marketplaceAccountId: Number(marketplaceAccountId),
        externalProductId,
        externalVariantId: externalVariantId || null,
        externalSku: externalSku || null,
        safetyStock: safetyStock !== undefined ? Number(safetyStock) : 2,
        syncStatus: "pending",
      },
      include: { marketplaceAccount: true, product: true },
    });

    res.status(201).json({ ok: true, data: mapping });
  } catch (err) {
    next(err);
  }
});

// DELETE /api/marketplaces/mappings/:id
router.delete("/mappings/:id", async (req, res, next) => {
  try {
    await prisma.productChannelMapping.delete({ where: { id: Number(req.params.id) } });
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});

// ── Manual Stock Sync ─────────────────────────────────────────────────────────

// POST /api/marketplaces/sync-stock - Trigger sync untuk satu produk
router.post("/sync-stock", async (req, res, next) => {
  try {
    const { productId } = req.body;
    if (!productId) {
      return res.status(400).json({ message: "productId wajib diisi" });
    }

    await triggerStockSync(Number(productId));
    const status = await getProductSyncStatus(Number(productId));
    res.json({ ok: true, data: status });
  } catch (err) {
    next(err);
  }
});

// POST /api/marketplaces/sync-all - Trigger sync untuk semua produk
router.post("/sync-all", async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({ where: { isActive: true } });
    for (const p of products) {
      await triggerStockSync(p.id);
    }
    res.json({ ok: true, message: `Sync dipicu untuk ${products.length} produk` });
  } catch (err) {
    next(err);
  }
});

// GET /api/marketplaces/sync-status/:productId
router.get("/sync-status/:productId", async (req, res, next) => {
  try {
    const status = await getProductSyncStatus(Number(req.params.productId));
    res.json({ ok: true, data: status });
  } catch (err) {
    next(err);
  }
});

// GET /api/marketplaces/sync-jobs - Lihat antrian sync jobs
router.get("/sync-jobs", async (req, res, next) => {
  try {
    const jobs = await prisma.stockSyncJob.findMany({
      where: req.query.status ? { status: req.query.status } : {},
      include: {
        product: { select: { id: true, name: true, sku: true } },
        marketplaceAccount: { select: { marketplace: true, shopName: true } },
      },
      orderBy: { createdAt: "desc" },
      take: 50,
    });
    res.json({ ok: true, data: jobs });
  } catch (err) {
    next(err);
  }
});

// POST /api/marketplaces/process-jobs - Manual trigger untuk proses pending jobs
router.post("/process-jobs", async (req, res, next) => {
  try {
    await processPendingSyncJobs();
    res.json({ ok: true, message: "Sync jobs diproses" });
  } catch (err) {
    next(err);
  }
});

// ── Webhooks ──────────────────────────────────────────────────────────────────

// Shopee Webhook
router.post("/webhooks/shopee", async (req, res, next) => {
  try {
    const authorization = req.headers.authorization || "";
    const rawBody = JSON.stringify(req.body);

    if (!verifyShopeeWebhook(authorization, rawBody)) {
      console.warn("[Webhook Shopee] Invalid signature");
      return res.status(401).json({ message: "Invalid webhook signature" });
    }

    const { code, data } = req.body;
    console.log(`[Webhook Shopee] event code: ${code}`, data);

    if (code === 4 && data?.order_sn) {
      await processShopeeOrder(data);
    }

    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});

// TikTok Shop Webhook
router.post("/webhooks/tiktok", async (req, res, next) => {
  try {
    const authorization = req.headers["x-tts-signature"] || "";
    const timestamp = req.headers["x-tts-timestamp"] || "";
    const nonce = req.headers["x-tts-nonce"] || "";
    const rawBody = JSON.stringify(req.body);

    if (!verifyTtsWebhook(authorization, timestamp, nonce, rawBody)) {
      console.warn("[Webhook TikTok] Invalid signature");
      return res.status(401).json({ message: "Invalid webhook signature" });
    }

    const { type, data } = req.body;
    console.log(`[Webhook TikTok] event type: ${type}`, data);

    if (type === "ORDER_STATUS_CHANGE") {
      await processTtsOrder(data);
    }

    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});

export default router;
