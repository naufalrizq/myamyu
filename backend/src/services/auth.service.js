import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";

const JWT_SECRET = process.env.JWT_SECRET || "myamyu-secret-change-in-production";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

export async function loginUser(email, password) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !user.isActive) {
    throw new Error("Email atau password salah");
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    throw new Error("Email atau password salah");
  }

  const token = jwt.sign(
    { userId: user.id, email: user.email, name: user.name },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  return {
    token,
    user: { id: user.id, name: user.name, email: user.email },
  };
}

export async function registerUser(name, email, password) {
  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) throw new Error("Email sudah dipakai");

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, passwordHash, isActive: true },
  });

  const token = jwt.sign(
    { userId: user.id, email: user.email, name: user.name },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  return {
    token,
    user: { id: user.id, name: user.name, email: user.email },
  };
}

export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}
