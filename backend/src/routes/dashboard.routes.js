import { Router } from "express";
import { prisma } from "../lib/prisma.js";

const router = Router();

// GET /api/dashboard/summary
router.get("/summary", async (req, res, next) => {
  try {
    const [totalProducts, products, opnameCount, recentMovements] = await Promise.all([
      prisma.product.count({ where: { isActive: true } }),
      prisma.product.findMany({
        where: { isActive: true },
        select: { currentStock: true, purchasePrice: true, minStock: true },
      }),
      prisma.opnameSession.count(),
      prisma.stockMovement.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: { product: { select: { name: true, sku: true } } },
      }),
    ]);

    const lowStockCount = products.filter((p) => p.currentStock <= p.minStock).length;
    const totalInventoryValue = products.reduce(
      (sum, p) => sum + Number(p.currentStock) * Number(p.purchasePrice),
      0
    );

    res.json({
      ok: true,
      data: {
        totalProducts,
        lowStockCount,
        opnameCount,
        totalInventoryValue,
        recentMovements,
      },
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/dashboard/low-stock
router.get("/low-stock", async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({ where: { isActive: true } });
    const lowStock = products.filter((p) => p.currentStock <= p.minStock);

    // Re-fetch with category
    const lowStockWithCategory = await prisma.product.findMany({
      where: { id: { in: lowStock.map((p) => p.id) } },
      include: { category: true },
      orderBy: { currentStock: "asc" },
    });

    res.json({ ok: true, data: lowStockWithCategory });
  } catch (err) {
    next(err);
  }
});

// GET /api/dashboard/stock-chart?days=30
router.get("/stock-chart", async (req, res, next) => {
  try {
    const days = Number(req.query.days || 30);
    const since = new Date();
    since.setDate(since.getDate() - days);

    const movements = await prisma.stockMovement.findMany({
      where: { createdAt: { gte: since } },
      select: { type: true, quantity: true, createdAt: true },
      orderBy: { createdAt: "asc" },
    });

    // Group by date
    const byDate = {};
    movements.forEach((m) => {
      const date = m.createdAt.toISOString().slice(0, 10);
      if (!byDate[date]) byDate[date] = { date, masuk: 0, keluar: 0, adjustment: 0 };
      if (m.type === "in") byDate[date].masuk += m.quantity;
      else if (m.type === "out") byDate[date].keluar += m.quantity;
      else if (m.type === "adjustment") byDate[date].adjustment += Math.abs(m.quantity);
    });

    // Fill missing dates
    const result = [];
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      result.push(byDate[key] || { date: key, masuk: 0, keluar: 0, adjustment: 0 });
    }

    res.json({ ok: true, data: result });
  } catch (err) {
    next(err);
  }
});
router.get("/expiring-batches", async (req, res, next) => {
  try {
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

    const batches = await prisma.productBatch.findMany({
      where: {
        expiredDate: { lte: thirtyDaysFromNow },
        quantity: { gt: 0 },
      },
      include: { product: { include: { category: true } } },
      orderBy: { expiredDate: "asc" },
    });

    res.json({ ok: true, data: batches });
  } catch (err) {
    next(err);
  }
});

export default router;
