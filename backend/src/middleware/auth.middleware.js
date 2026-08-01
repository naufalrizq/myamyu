import { verifyToken } from "../services/auth.service.js";

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token tidak ditemukan. Silakan login." });
  }

  const token = authHeader.slice(7);
  try {
    const payload = verifyToken(token);
    req.user = payload; // { userId, email, name }
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token tidak valid atau sudah expired. Silakan login ulang." });
  }
}
