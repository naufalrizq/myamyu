import crypto from "crypto";

const envPresent = (name) => Boolean(process.env[name] && process.env[name].trim());

const marketplaceConfigs = [
  {
    id: "shopee",
    name: "Shopee",
    mode: "Shopee Open Platform",
    checks: [
      ["SHOPEE_PARTNER_ID", "Partner ID"],
      ["SHOPEE_PARTNER_KEY", "Partner Key"],
      ["SHOPEE_SHOP_ID", "Shop ID"],
      ["SHOPEE_ACCESS_TOKEN", "Access Token"],
    ],
  },
  {
    id: "tokopedia_shop",
    name: "Tokopedia & Shop",
    mode: "TikTok Shop Partner Center API",
    checks: [
      ["TTS_APP_KEY", "App Key"],
      ["TTS_APP_SECRET", "App Secret"],
      ["TTS_SHOP_ID", "Shop ID"],
      ["TTS_ACCESS_TOKEN", "Access Token"],
    ],
  },
];

export function getMarketplaceStatus() {
  const marketplaces = marketplaceConfigs.map((marketplace) => {
    const checks = marketplace.checks.map(([key, label]) => ({ key, label, ok: envPresent(key) }));
    return {
      id: marketplace.id,
      name: marketplace.name,
      mode: marketplace.mode,
      ready: checks.every((check) => check.ok),
      checks,
    };
  });

  return {
    ok: true,
    marketplaces,
  };
}

export async function syncStockToMarketplaces({ sku, productName, stock }) {
  const status = getMarketplaceStatus();
  const tasks = status.marketplaces.map(async (marketplace) => {
    if (!marketplace.ready) {
      return {
        marketplace: marketplace.id,
        skipped: true,
        reason: "Credential belum lengkap",
      };
    }

    if (marketplace.id === "shopee") {
      return syncShopeeStock({ sku, productName, stock });
    }

    if (marketplace.id === "tokopedia_shop") {
      return syncTokopediaShopStock({ sku, productName, stock });
    }

    return { marketplace: marketplace.id, skipped: true, reason: "Marketplace belum didukung" };
  });

  return {
    ok: true,
    queued: false,
    note: "Prototype sync berjalan langsung. Pada versi production, pindahkan ke Redis + BullMQ agar ada retry dan audit log.",
    results: await Promise.all(tasks),
  };
}

async function syncShopeeStock({ sku, productName, stock }) {
  const baseUrl = process.env.SHOPEE_BASE_URL || "https://partner.shopeemobile.com";
  const path = "/api/v2/product/update_stock";
  const timestamp = Math.floor(Date.now() / 1000);
  const partnerId = process.env.SHOPEE_PARTNER_ID;
  const partnerKey = process.env.SHOPEE_PARTNER_KEY;
  const shopId = process.env.SHOPEE_SHOP_ID;
  const accessToken = process.env.SHOPEE_ACCESS_TOKEN;
  const signBase = `${partnerId}${path}${timestamp}${accessToken}${shopId}`;
  const sign = crypto.createHmac("sha256", partnerKey).update(signBase).digest("hex");

  return {
    marketplace: "shopee",
    simulated: true,
    endpoint: `${baseUrl}${path}`,
    queryDraft: { partner_id: partnerId, timestamp, access_token: mask(accessToken), shop_id: shopId, sign: mask(sign) },
    payloadDraft: {
      sku,
      product_name: productName,
      stock,
      note: "Butuh mapping internal SKU ke Shopee item_id/model_id sebelum request nyata dikirim.",
    },
  };
}

async function syncTokopediaShopStock({ sku, productName, stock }) {
  const baseUrl = process.env.TTS_BASE_URL || "https://open-api.tiktokglobalshop.com";
  const path = "/product/202309/products/{product_id}/inventory/update";

  return {
    marketplace: "tokopedia_shop",
    simulated: true,
    endpoint: `${baseUrl}${path}`,
    headersDraft: {
      "x-tts-access-token": mask(process.env.TTS_ACCESS_TOKEN),
    },
    payloadDraft: {
      sku,
      product_name: productName,
      stock,
      note: "Butuh mapping internal SKU ke Tokopedia & Shop/TikTok product_id dan sku_id sebelum request nyata dikirim.",
    },
  };
}

function mask(value) {
  if (!value) return "";
  if (value.length <= 8) return "****";
  return `${value.slice(0, 4)}...${value.slice(-4)}`;
}
