/**
 * Order Processing Service
 * Menangani webhook order dari Shopee dan TikTok Shop:
 *   1. Verifikasi idempotency key (cek order_sn/order_id sudah diproses)
 *   2. Cari mapping produk berdasarkan external_product_id
 *   3. Buat stock movement (type: out, referenceType: sale)
 *   4. Trigger sync ke marketplace lain
 */

import { prisma } from "../lib/prisma.js";
import { triggerStockSync } from "./sync.service.js";

/**
 * Proses order dari Shopee
 * Format webhook: { code: 4, data: { order_sn, item_list: [{ item_id, model_id, quantity }] } }
 */
export async function processShopeeOrder(data) {
  const { order_sn, item_list } = data || {};
  if (!order_sn || !item_list?.length) {
    console.warn(`[Order/Shopee] Invalid order data: missing order_sn or item_list`);
    return;
  }

  // Cek idempotency — sudah diproses?
  const alreadyProcessed = await prisma.stockMovement.findFirst({
    where: { referenceType: "sale", referenceId: order_sn },
  });
  if (alreadyProcessed) {
    console.log(`[Order/Shopee] Order ${order_sn} already processed, skipping`);
    return;
  }

  console.log(`[Order/Shopee] Processing order ${order_sn} with ${item_list.length} items`);

  for (const item of item_list) {
    const { item_id, model_id, quantity } = item;

    // Cari mapping produk berdasarkan externalProductId
    const mapping = await prisma.productChannelMapping.findFirst({
      where: {
        marketplaceAccount: { marketplace: "shopee", isActive: true },
        externalProductId: String(item_id),
        ...(model_id ? { externalVariantId: String(model_id) } : {}),
      },
      include: { product: true, marketplaceAccount: true },
    });

    if (!mapping) {
      console.warn(`[Order/Shopee] No mapping found for item_id=${item_id}, model_id=${model_id}`);
      continue;
    }

    const qty = Number(quantity) || 0;
    if (qty <= 0) continue;

    // Cari user admin untuk createdBy default
    const adminUser = await prisma.user.findFirst({ where: { isActive: true } });

    // Buat stock movement
    await prisma.stockMovement.create({
      data: {
        productId: mapping.productId,
        type: "out",
        quantity: qty,
        referenceType: "sale",
        referenceId: order_sn,
        note: `Order Shopee ${order_sn}`,
        createdById: adminUser?.id || 1,
      },
    });

    // Update currentStock secara manual (trigger database handle otomatis)
    await prisma.product.update({
      where: { id: mapping.productId },
      data: { currentStock: { decrement: qty } },
    });

    console.log(`[Order/Shopee] Stock reduced: product=${mapping.productId}, qty=${qty}`);

    // Trigger sync ke marketplace lain
    await triggerStockSync(mapping.productId).catch((e) =>
      console.error(`[Order/Shopee] Sync error for product ${mapping.productId}:`, e.message)
    );
  }

  console.log(`[Order/Shopee] Order ${order_sn} processed successfully`);
}

/**
 * Proses order dari TikTok Shop
 * Format webhook: { type: "ORDER_STATUS_CHANGE", data: { order_id, ... } }
 */
export async function processTtsOrder(data) {
  const { order_id } = data || {};
  if (!order_id) {
    console.warn(`[Order/TikTok] Invalid order data: missing order_id`);
    return;
  }

  // Cek idempotency
  const alreadyProcessed = await prisma.stockMovement.findFirst({
    where: { referenceType: "sale", referenceId: order_id },
  });
  if (alreadyProcessed) {
    console.log(`[Order/TikTok] Order ${order_id} already processed, skipping`);
    return;
  }

  console.log(`[Order/TikTok] Processing order ${order_id}`);

  // TikTok Shop webhook memberikan detail item via API call terpisah
  // Untuk prototype: kita catat order_id dan tunggu sync manual
  // TODO: Implementasi penuh — panggil TikTok GetOrderDetail API untuk dapat item_list

  // Buat log entry sebagai pending order
  // Jika tidak ada item detail, kita skip dulu sampai ada webhook dengan item list
  const { item_list } = data;
  if (!item_list?.length) {
    console.log(`[Order/TikTok] Order ${order_id} received (no item details yet, waiting for fulfillment webhook)`);
    return;
  }

  for (const item of item_list) {
    const { product_id, sku_id, quantity } = item;

    const mapping = await prisma.productChannelMapping.findFirst({
      where: {
        marketplaceAccount: { marketplace: "tokopedia_shop", isActive: true },
        externalProductId: String(product_id),
        ...(sku_id ? { externalVariantId: String(sku_id) } : {}),
      },
      include: { product: true },
    });

    if (!mapping) {
      console.warn(`[Order/TikTok] No mapping found for product_id=${product_id}, sku_id=${sku_id}`);
      continue;
    }

    const qty = Number(quantity) || 0;
    if (qty <= 0) continue;

    const adminUser = await prisma.user.findFirst({ where: { isActive: true } });

    await prisma.stockMovement.create({
      data: {
        productId: mapping.productId,
        type: "out",
        quantity: qty,
        referenceType: "sale",
        referenceId: order_id,
        note: `Order TikTok Shop ${order_id}`,
        createdById: adminUser?.id || 1,
      },
    });

    await prisma.product.update({
      where: { id: mapping.productId },
      data: { currentStock: { decrement: qty } },
    });

    console.log(`[Order/TikTok] Stock reduced: product=${mapping.productId}, qty=${qty}`);

    await triggerStockSync(mapping.productId).catch((e) =>
      console.error(`[Order/TikTok] Sync error for product ${mapping.productId}:`, e.message)
    );
  }

  console.log(`[Order/TikTok] Order ${order_id} processed successfully`);
}
