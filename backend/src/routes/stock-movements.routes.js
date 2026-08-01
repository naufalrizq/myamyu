import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { triggerStockSync } from "../services/sync.service.js";

const router = Router();

// GET /api/stock-movements - List stock movements with filters
router.get("/", async (req, res, next) => {
  try {
    const { page = 1, limit = 50, productId, type, referenceType, startDate, endDate } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where = {};
    if (productId) where.productId = Number(productId);
    if (type) where.type = type;
    if (referenceType) where.referenceType = referenceType;
    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) where.createdAt.gte = new Date(startDate);
      if (endDate) where.createdAt.lte = new Date(endDate);
    }

    const [movements, total] = await Promise.all([
      prisma.stockMovement.findMany({
        where,
        include: {
          product: true,
          supplier: true,
          creator: { select: { id: true, name: true } },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: Number(limit),
      }),
      prisma.stockMovement.count({ where }),
    ]);

    res.json({
      ok: true,
      data: movements,
      pagination: { page: Number(page), limit: Number(limit), total, totalPages: Math.ceil(total / Number(limit)) },
    });
  } catch (err) {
    next(err);
  }
});

// POST /api/stock-movements - Create stock movement
router.post("/", async (req, res, next) => {
  try {
    const { productId, type, quantity, referenceType, referenceId, supplierId, note, createdById } = req.body;

    if (!productId || !type || !quantity || Number(quantity) <= 0) {
      return res.status(400).json({ message: "productId, type, dan quantity wajib diisi" });
    }

    if (!["in", "out", "adjustment"].includes(type)) {
      return res.status(400).json({ message: "type harus: in, out, atau adjustment" });
    }

    const product = await prisma.product.findUnique({ where: { id: Number(productId) } });
    if (!product) {
      return res.status(404).json({ message: "Product tidak ditemukan" });
    }

    // Jika stok keluar, cek apakah stok mencukupi
    if (type === "out" && product.currentStock < Number(quantity)) {
      return res.status(400).json({ message: `Stok tidak mencukupi. Stok saat ini: ${product.currentStock}` });
    }

    const movement = await prisma.stockMovement.create({
      data: {
        productId: Number(productId),
        type,
        quantity: Number(quantity),
        referenceType: referenceType || "manual",
        referenceId: referenceId ? Number(referenceId) : null,
        supplierId: supplierId ? Number(supplierId) : null,
        note: note || null,
        createdBy: createdById ? Number(createdById) : req.user?.userId || 1,
      },
      include: {
        product: true,
        supplier: true,
        creator: { select: { id: true, name: true } },
      },
    });

    // Update product stock manually (trigger PostgreSQL tidak dipakai dengan Prisma adapter)
    let newStock = product.currentStock;
    if (type === "in") newStock += Number(quantity);
    else if (type === "out") newStock -= Number(quantity);
    else if (type === "adjustment") newStock += Number(quantity);

    await prisma.product.update({
      where: { id: Number(productId) },
      data: { currentStock: newStock },
    });

    res.status(201).json({ ok: true, data: { ...movement, product: { ...movement.product, currentStock: newStock } } });

    // Trigger marketplace sync (async, tidak blokir response)
    triggerStockSync(Number(productId)).catch((err) =>
      console.error("[SyncTrigger] Error:", err.message)
    );
  } catch (err) {
    next(err);
  }
});

export default router;
