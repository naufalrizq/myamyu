import { Router } from "express";
import { loginUser, registerUser } from "../services/auth.service.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

// POST /api/auth/login
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email dan password wajib diisi" });
    }
    const result = await loginUser(email, password);
    res.json({ ok: true, ...result });
  } catch (err) {
    // Jangan beri detail error yang bisa dipakai untuk enumeration
    res.status(401).json({ message: err.message });
  }
});

// POST /api/auth/register (hanya untuk setup awal)
router.post("/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Nama, email, dan password wajib diisi" });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: "Password minimal 6 karakter" });
    }
    const result = await registerUser(name, email, password);
    res.status(201).json({ ok: true, ...result });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /api/auth/me — cek token masih valid
router.get("/me", authMiddleware, (req, res) => {
  res.json({ ok: true, user: req.user });
});

// POST /api/auth/logout — client-side only (hapus token di frontend)
router.post("/logout", authMiddleware, (req, res) => {
  res.json({ ok: true, message: "Logout berhasil" });
});

export default router;
