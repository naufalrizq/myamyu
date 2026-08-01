import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const passwordHash = await bcrypt.hash("admin123", 10);
await prisma.user.update({
  where: { email: "admin@myamyu.com" },
  data: { passwordHash },
});
console.log("✅ Password updated. Login: admin@myamyu.com / admin123");

await prisma.$disconnect();
await pool.end();
