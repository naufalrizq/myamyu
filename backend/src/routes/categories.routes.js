import { Router } from "express";
import { prisma } from "../lib/prisma.js";

const router = Router();

// GET /api/categories
router.get("/", async (req, res, next) => {
  try {
    const categories = await prisma.category.findMany({ orderBy: { name: "asc" } });
    res.json({ ok: true, data: categories });
  } catch (err) {
    next(err);
  }
});

// POST /api/categories
router.post("/", async (req, res, next) => {
  try {
    const { name, description } = req.body;
    if (!name) return res.status(400).json({ message: "Nama kategori wajib diisi" });
    const category = await prisma.category.create({ data: { name, description: description || null } });
    res.status(201).json({ ok: true, data: category });
  } catch (err) {
    next(err);
  }
});

// PATCH /api/categories/:id
router.patch("/:id", async (req, res, next) => {
  try {
    const category = await prisma.category.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json({ ok: true, data: category });
  } catch (err) {
    next(err);
  }
});

// DELETE /api/categories/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    // Cek apakah ada produk yang pakai kategori ini
    const productCount = await prisma.product.count({ where: { categoryId: id } });
    if (productCount > 0) {
      return res.status(400).json({
        message: `Tidak bisa hapus — ${productCount} produk masih menggunakan kategori ini.`,
      });
    }
    await prisma.category.delete({ where: { id } });
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});

export default router;
