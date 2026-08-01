import { PrismaClient } from "../../../generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const needsSsl =
  /sslmode=require/.test(process.env.DATABASE_URL || "") ||
  process.env.DATABASE_URL?.includes("neon.tech");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: needsSsl ? { rejectUnauthorized: false } : false,
});

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({
  adapter,
});
