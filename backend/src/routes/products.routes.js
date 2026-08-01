import { Router } from "express";
import { prisma } from "../lib/prisma.js";

const router = Router();

async function generateNextSku() {
  const products = await prisma.product.findMany({
    where: { sku: { startsWith: "PDT-" } },
    select: { sku: true },
  });
  let max = 0;
  for (const p of products) {
    const m = /^PDT-(\d+)$/.exec(p.sku);
    if (m) max = Math.max(max, Number(m[1]));
  }
  return `PDT-${String(max + 1).padStart(3, "0")}`;
}

// GET /api/products - List all products
router.get("/", async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        isActive: true,
      },
      include: {
        category: true,
        batches: { orderBy: { expiredDate: "asc" } },
      },
      orderBy: {
        name: "asc",
      },
    });
    res.json({ ok: true, data: products });
  } catch (err) {
    next(err);
  }
});

// GET /api/products/:id - Get single product
router.get("/:id", async (req, res, next) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(req.params.id) },
      include: {
        category: true,
        batches: true,
        stockMovements: true,
      },
    });
    if (!product) {
      return res.status(404).json({ message: "Product tidak ditemukan" });
    }
    res.json({ ok: true, data: product });
  } catch (err) {
    next(err);
  }
});

// POST /api/products - Create product
router.post("/", async (req, res, next) => {
  try {
    const { sku, name, categoryId, unit, purchasePrice, sellingPrice, minStock, imageUrl, isPerishable } = req.body;
    const skuValue = sku && sku.trim() ? sku.trim() : await generateNextSku();
    const product = await prisma.product.create({
      data: {
        sku: skuValue,
        name,
        categoryId: categoryId || null,
        unit: unit || "pcs",
        purchasePrice: purchasePrice || 0,
        sellingPrice: sellingPrice || 0,
        minStock: minStock || 0,
        imageUrl: imageUrl || null,
        isPerishable: isPerishable || false,
        currentStock: 0,
      },
    });
    res.status(201).json({ ok: true, data: product });
  } catch (err) {
    next(err);
  }
});

// PATCH /api/products/:id - Update product
router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const allowed = ["sku", "name", "categoryId", "unit", "purchasePrice", "sellingPrice", "minStock", "imageUrl", "isPerishable", "isActive"];
    const data = {};
    for (const k of allowed) {
      if (req.body[k] !== undefined) data[k] = req.body[k];
    }
    const product = await prisma.product.update({
      where: { id: Number(id) },
      data,
    });
    res.json({ ok: true, data: product });
  } catch (err) {
    next(err);
  }
});

// DELETE /api/products/:id - Soft delete product
router.delete("/:id", async (req, res, next) => {
  try {
    const product = await prisma.product.update({
      where: { id: Number(req.params.id) },
      data: { isActive: false },
    });
    res.json({ ok: true, data: product });
  } catch (err) {
    next(err);
  }
});

// ── Batch Management ───────────────────────────────────────────────────────────

// GET /api/products/:id/batches — list batches for a product
router.get("/:id/batches", async (req, res, next) => {
  try {
    const batches = await prisma.productBatch.findMany({
      where: { productId: Number(req.params.id) },
      orderBy: { expiredDate: "asc" },
    });
    res.json({ ok: true, data: batches });
  } catch (err) {
    next(err);
  }
});

// POST /api/products/:id/batches — create a new batch
router.post("/:id/batches", async (req, res, next) => {
  try {
    const productId = Number(req.params.id);
    const { batchCode, quantity, expiredDate, receivedDate } = req.body;

    const batch = await prisma.productBatch.create({
      data: {
        productId,
        batchCode: batchCode || null,
        quantity: Number(quantity) || 0,
        expiredDate: expiredDate ? new Date(expiredDate) : null,
        receivedDate: receivedDate ? new Date(receivedDate) : new Date(),
      },
    });

    res.status(201).json({ ok: true, data: batch });
  } catch (err) {
    next(err);
  }
});

// PATCH /api/products/:id/batches/:batchId — update a batch
router.patch("/:id/batches/:batchId", async (req, res, next) => {
  try {
    const batchId = Number(req.params.batchId);
    const { batchCode, quantity, expiredDate, receivedDate } = req.body;

    const batch = await prisma.productBatch.update({
      where: { id: batchId },
      data: {
        ...(batchCode !== undefined && { batchCode }),
        ...(quantity !== undefined && { quantity: Number(quantity) }),
        ...(expiredDate !== undefined && { expiredDate: expiredDate ? new Date(expiredDate) : null }),
        ...(receivedDate !== undefined && { receivedDate: new Date(receivedDate) }),
      },
    });

    res.json({ ok: true, data: batch });
  } catch (err) {
    next(err);
  }
});

// DELETE /api/products/:id/batches/:batchId — delete a batch
router.delete("/:id/batches/:batchId", async (req, res, next) => {
  try {
    await prisma.productBatch.delete({
      where: { id: Number(req.params.batchId) },
    });
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});

// GET /api/categories - List all categories
router.get("/categories", async (req, res, next) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { name: "asc" },
    });
    res.json({ ok: true, data: categories });
  } catch (err) {
    next(err);
  }
});

// POST /api/categories - Create category
router.post("/categories", async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const category = await prisma.category.create({
      data: { name, description: description || null },
    });
    res.status(201).json({ ok: true, data: category });
  } catch (err) {
    next(err);
  }
});

// GET /api/categories/:id - Get single category
router.get("/categories/:id", async (req, res, next) => {
  try {
    const category = await prisma.category.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!category) {
      return res.status(404).json({ message: "Category tidak ditemukan" });
    }
    res.json({ ok: true, data: category });
  } catch (err) {
    next(err);
  }
});

export default router;
