import { Router } from "express";
import authRoutes from "./auth.routes.js";
import marketplaceRoutes from "./marketplace.routes.js";
import productsRoutes from "./products.routes.js";
import categoriesRoutes from "./categories.routes.js";
import stockMovementsRoutes from "./stock-movements.routes.js";
import opnameRoutes from "./opname.routes.js";
import dashboardRoutes from "./dashboard.routes.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

// ── Public routes (tidak butuh token) ─────────────────────────────────────────
router.get("/health", (_req, res) => res.json({ ok: true, service: "myamyu-backend" }));
router.use("/auth", authRoutes);

// Webhook tidak pakai JWT — verifikasi signature sendiri di dalam handler
router.post("/marketplaces/webhooks/shopee", ...marketplaceRoutes.stack
  .filter((l) => l.route?.path === "/webhooks/shopee")
  .map((l) => l.route.stack[0].handle));
router.post("/marketplaces/webhooks/tiktok", ...marketplaceRoutes.stack
  .filter((l) => l.route?.path === "/webhooks/tiktok")
  .map((l) => l.route.stack[0].handle));

// ── Protected routes (butuh JWT) ──────────────────────────────────────────────
router.use(authMiddleware);

router.use("/marketplaces", marketplaceRoutes);
router.use("/products", productsRoutes);
router.use("/categories", categoriesRoutes);
router.use("/stock-movements", stockMovementsRoutes);
router.use("/opname-sessions", opnameRoutes);
router.use("/dashboard", dashboardRoutes);

export default router;
