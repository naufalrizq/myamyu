/**
 * Stock Sync Orchestrator
 * Mengelola sinkronisasi stok dari MyaMyu (source of truth) ke semua marketplace.
 *
 * Formula: published_stock = max(0, current_stock - safety_stock)
 *
 * Flow:
 *  1. Stok internal berubah (mutasi/opname)
 *  2. Cari semua product_channel_mappings untuk produk tersebut
 *  3. Buat stock_sync_jobs
 *  4. Jalankan sync ke masing-masing marketplace
 *  5. Catat hasil di sync_status dan sync_error
 */

import { prisma } from "../lib/prisma.js";
import { updateShopeeStock } from "./shopee.service.js";
import { updateTtsStock } from "./tiktokshop.service.js";
import { getQueue } from "./sync.queue.js";

const MAX_RETRIES = 3;

// ── Enqueue ───────────────────────────────────────────────────────────────────

/**
 * Tambahkan sync job untuk setiap channel yang punya mapping untuk produk ini
 */
export async function enqueueSyncJobs(productId, targetStock) {
  const mappings = await prisma.productChannelMapping.findMany({
    where: { productId, syncStatus: { not: "disabled" } },
    include: { marketplaceAccount: true },
  });

  if (mappings.length === 0) return [];

  const jobs = await prisma.stockSyncJob.createManyAndReturn({
    data: mappings.map((m) => ({
      productId,
      marketplaceAccountId: m.marketplaceAccountId,
      targetStock,
      status: "queued",
      attempts: 0,
    })),
  });

  console.log(`[Sync] Enqueued ${jobs.length} sync jobs for product ${productId} → stock ${targetStock}`);
  return jobs;
}

// ── Process ───────────────────────────────────────────────────────────────────

/**
 * Proses semua job yang belum selesai
 * Panggil ini dari setInterval atau cron job
 */
export async function processPendingSyncJobs() {
  const jobs = await prisma.stockSyncJob.findMany({
    where: {
      status: { in: ["queued", "failed"] },
      attempts: { lt: MAX_RETRIES },
    },
    include: {
      product: true,
      marketplaceAccount: true,
    },
    orderBy: { createdAt: "asc" },
    take: 20,
  });

  if (jobs.length === 0) return;

  console.log(`[Sync] Processing ${jobs.length} pending jobs...`);

  for (const job of jobs) {
    await processSingleSyncJob(job);
  }
}

/**
 * Core sync function — update stok ke satu marketplace
 * Digunakan oleh inline processor maupun BullMQ worker
 */
export async function syncToMarketplace({ productId, marketplaceAccountId, targetStock }) {
  const marketplaceAccount = await prisma.marketplaceAccount.findUnique({
    where: { id: marketplaceAccountId },
  });
  if (!marketplaceAccount) throw new Error(`Marketplace account ${marketplaceAccountId} not found`);

  const mapping = await prisma.productChannelMapping.findFirst({
    where: { productId, marketplaceAccountId },
  });
  if (!mapping) throw new Error("Mapping tidak ditemukan");

  let result;

  if (marketplaceAccount.marketplace === "shopee") {
    result = await updateShopeeStock(
      marketplaceAccount,
      mapping.externalProductId,
      mapping.externalVariantId,
      targetStock
    );
  } else if (marketplaceAccount.marketplace === "tokopedia_shop") {
    result = await updateTtsStock(
      marketplaceAccount,
      mapping.externalProductId,
      mapping.externalVariantId,
      targetStock,
      null
    );
  } else {
    throw new Error(`Marketplace tidak dikenali: ${marketplaceAccount.marketplace}`);
  }

  await prisma.productChannelMapping.update({
    where: { id: mapping.id },
    data: {
      lastSyncedStock: result.publishedStock,
      lastSyncedAt: new Date(),
      syncStatus: "synced",
      syncError: null,
    },
  });

  return result;
}

export async function processSingleSyncJob(job) {
  const { id, productId, marketplaceAccount, targetStock } = job;

  await prisma.stockSyncJob.update({
    where: { id },
    data: { status: "processing", attempts: { increment: 1 } },
  });

  try {
    const result = await syncToMarketplace({
      productId,
      marketplaceAccountId: marketplaceAccount.id,
      targetStock,
    });

    await prisma.stockSyncJob.update({
      where: { id },
      data: { status: "done", processedAt: new Date() },
    });

    console.log(`[Sync] ✅ Job ${id} done — ${marketplaceAccount.marketplace} → ${result.publishedStock}`);
  } catch (err) {
    const attempts = job.attempts + 1;
    const status = attempts >= MAX_RETRIES ? "failed" : "queued";

    await prisma.stockSyncJob.update({
      where: { id },
      data: { status, lastError: err.message },
    });

    const mapping = await prisma.productChannelMapping.findFirst({
      where: { productId, marketplaceAccountId: marketplaceAccount.id },
    });
    if (mapping) {
      await prisma.productChannelMapping.update({
        where: { id: mapping.id },
        data: { syncStatus: "error", syncError: err.message },
      });
    }

    console.error(`[Sync] ❌ Job ${id} failed (attempt ${attempts}/${MAX_RETRIES}): ${err.message}`);
  }
}

// ── Trigger from stock change ─────────────────────────────────────────────────

/**
 * Dipanggil setelah stok berubah (mutasi manual atau approval opname)
 * Enqueue ke BullMQ queue jika Redis tersedia, fallback ke inline processing
 */
export async function triggerStockSync(productId) {
  const product = await prisma.product.findUnique({ where: { id: productId } });
  if (!product) return;

  const queue = await getQueue();

  if (queue) {
    // Pakai BullMQ queue
    const mappings = await prisma.productChannelMapping.findMany({
      where: { productId, syncStatus: { not: "disabled" } },
      include: { marketplaceAccount: true },
    });

    for (const m of mappings) {
      await queue.add("sync", {
        productId,
        mappingId: m.id,
        marketplaceAccountId: m.marketplaceAccountId,
        targetStock: product.currentStock,
      });
    }

    console.log(`[Sync] Queued ${mappings.length} BullMQ jobs for product ${productId}`);
  } else {
    // Fallback ke inline (tanpa Redis)
    const jobs = await enqueueSyncJobs(productId, product.currentStock);
    if (jobs.length === 0) return;
    await processPendingSyncJobs();
  }
}

// ── Status ────────────────────────────────────────────────────────────────────

/**
 * Ambil status sync semua channel untuk satu produk
 */
export async function getProductSyncStatus(productId) {
  const mappings = await prisma.productChannelMapping.findMany({
    where: { productId },
    include: { marketplaceAccount: true },
  });

  return mappings.map((m) => ({
    marketplace: m.marketplaceAccount.marketplace,
    shopName: m.marketplaceAccount.shopName,
    externalProductId: m.externalProductId,
    externalSku: m.externalSku,
    safetyStock: m.safetyStock,
    lastSyncedStock: m.lastSyncedStock,
    lastSyncedAt: m.lastSyncedAt,
    syncStatus: m.syncStatus,
    syncError: m.syncError,
  }));
}
