import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { triggerStockSync } from "../services/sync.service.js";

const router = Router();

// GET /api/opname-sessions - List all opname sessions
router.get("/", async (req, res, next) => {
  try {
    const sessions = await prisma.opnameSession.findMany({
      include: {
        items: {
          include: {
            product: {
              include: {
                batches: { orderBy: { expiredDate: "asc" } },
              },
            },
          },
        },
        creator: { select: { id: true, name: true } },
        approver: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    const sessionsWithStats = sessions.map((s) => ({
      ...s,
      countedItems: s.items.filter((i) => i.physicalStock !== null).length,
      totalItems: s.items.length,
      diffCount: s.items.filter((i) => i.physicalStock !== null && i.physicalStock !== i.systemStock).length,
    }));

    res.json({ ok: true, data: sessionsWithStats });
  } catch (err) {
    next(err);
  }
});

// GET /api/opname-sessions/:id - Get single session with items
router.get("/:id", async (req, res, next) => {
  try {
    const session = await prisma.opnameSession.findUnique({
      where: { id: Number(req.params.id) },
      include: {
        items: {
          include: {
            product: {
              include: {
                batches: { orderBy: { expiredDate: "asc" } },
              },
            },
            counter: true,
          },
        },
        creator: { select: { id: true, name: true } },
        approver: { select: { id: true, name: true } },
      },
    });

    if (!session) {
      return res.status(404).json({ message: "Sesi opname tidak ditemukan" });
    }

    res.json({
      ok: true,
      data: {
        ...session,
        countedItems: session.items.filter((i) => i.physicalStock !== null).length,
        totalItems: session.items.length,
      },
    });
  } catch (err) {
    next(err);
  }
});

// POST /api/opname-sessions - Create new opname session
router.post("/", async (req, res, next) => {
  try {
    const { title, createdById, note } = req.body;
    const now = new Date();
    const seq = (await prisma.opnameSession.count()) + 1;
    const code = `OPN-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}-${String(seq).padStart(3, "0")}`;

    const products = await prisma.product.findMany({ where: { isActive: true } });

    const session = await prisma.opnameSession.create({
      data: {
        code,
        title: title || `Opname ${now.toLocaleDateString("id-ID", { month: "long", year: "numeric" })}`,
        status: "in_progress",
        startedAt: now,
        createdBy: createdById ? Number(createdById) : req.user?.userId || 1,
        notes: note || null,
        items: {
          create: products.map((p) => ({
            productId: p.id,
            systemStock: p.currentStock,
            physicalStock: null,
            difference: null,
            note: null,
          })),
        },
      },
      include: {
        items: { include: { product: true } },
        creator: { select: { id: true, name: true } },
      },
    });

    res.status(201).json({ ok: true, data: session });
  } catch (err) {
    next(err);
  }
});

// PATCH /api/opname-sessions/:sessionId/items/:productId - Update item physical stock
router.patch("/:sessionId/items/:productId", async (req, res, next) => {
  try {
    const { physicalStock, note, countedById } = req.body;
    const { sessionId, productId } = req.params;

    const session = await prisma.opnameSession.findUnique({ where: { id: Number(sessionId) } });
    if (!session) return res.status(404).json({ message: "Sesi opname tidak ditemukan" });
    if (session.status !== "in_progress") return res.status(400).json({ message: "Sesi opname tidak lagi berjalan" });

    // Ambil item untuk hitung difference
    const existingItem = await prisma.opnameItem.findUnique({
      where: { sessionId_productId: { sessionId: Number(sessionId), productId: Number(productId) } },
    });

    const newPhysical = physicalStock === null || physicalStock === undefined ? null : Number(physicalStock);
    const difference = newPhysical !== null ? newPhysical - existingItem.systemStock : null;

    const item = await prisma.opnameItem.update({
      where: { sessionId_productId: { sessionId: Number(sessionId), productId: Number(productId) } },
      data: {
        physicalStock: newPhysical,
        difference,
        note: note || null,
        countedBy: countedById ? Number(countedById) : null,
        countedAt: newPhysical !== null ? new Date() : null,
      },
      include: { product: true },
    });

    res.json({ ok: true, data: item });
  } catch (err) {
    next(err);
  }
});

// PATCH /api/opname-sessions/:id/approve - Finalize opname session
router.patch("/:id/approve", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { approvedById } = req.body;

    const session = await prisma.opnameSession.findUnique({
      where: { id: Number(id) },
      include: { items: true },
    });

    if (!session) return res.status(404).json({ message: "Sesi opname tidak ditemukan" });
    if (session.status !== "in_progress") return res.status(400).json({ message: "Sesi opname sudah selesai atau dibatalkan" });

    // Update stok produk dan buat stock movements untuk setiap item yang berbeda
    const adjustmentsCreated = [];
    for (const item of session.items) {
      if (item.physicalStock === null || item.physicalStock === undefined) continue;
      const diff = item.physicalStock - item.systemStock;
      if (diff === 0) continue;

      // Update product stock
      await prisma.product.update({
        where: { id: item.productId },
        data: { currentStock: { increment: diff } },
      });

      // Create adjustment stock movement
      const movement = await prisma.stockMovement.create({
        data: {
          productId: item.productId,
          type: "adjustment",
          quantity: diff,
          referenceType: "opname",
          referenceId: Number(id),
          note: `Penyesuaian hasil ${session.code}`,
          createdBy: approvedById ? Number(approvedById) : req.user?.userId || 1,
        },
      });
      adjustmentsCreated.push(movement);
    }

    // Update session to completed
    const updatedSession = await prisma.opnameSession.update({
      where: { id: Number(id) },
      data: {
        status: "completed",
        completedAt: new Date(),
        approvedBy: approvedById ? Number(approvedById) : req.user?.userId || null,
        approvedAt: (approvedById || req.user?.userId) ? new Date() : null,
      },
      include: {
        creator: { select: { id: true, name: true } },
        approver: { select: { id: true, name: true } },
        items: { include: { product: true } },
      },
    });

    res.json({ ok: true, data: updatedSession, adjustments: adjustmentsCreated.length });

    // Trigger sync untuk semua produk yang stoknya berubah (async)
    const changedProductIds = [...new Set(adjustmentsCreated.map((m) => m.productId))];
    changedProductIds.forEach((pid) =>
      triggerStockSync(pid).catch((err) => console.error("[SyncTrigger] Error:", err.message))
    );
  } catch (err) {
    next(err);
  }
});

// PATCH /api/opname-sessions/:id/cancel - Cancel opname session
router.patch("/:id/cancel", async (req, res, next) => {
  try {
    const session = await prisma.opnameSession.update({
      where: { id: Number(req.params.id) },
      data: { status: "cancelled" },
    });
    res.json({ ok: true, data: session });
  } catch (err) {
    next(err);
  }
});

export default router;
