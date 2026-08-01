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

async function main() {
  console.log("🌱 Seeding database...");

  // Cek apakah user sudah ada
  const existingUser = await prisma.user.findUnique({ where: { email: "admin@myamyu.com" } });

  let user;
  if (existingUser) {
    console.log("⚠️  User admin sudah ada, skip create user");
    user = existingUser;
  } else {
    const passwordHash = await bcrypt.hash("admin123", 10);
    user = await prisma.user.create({
      data: {
        name: "Admin MyaMyu",
        email: "admin@myamyu.com",
        passwordHash,
        isActive: true,
      },
    });
    console.log("✅ User created:", user.email, "(password: admin123)");
  }

  // Cek apakah kategori sudah ada
  const existingCats = await prisma.category.count();
  if (existingCats === 0) {
    await prisma.category.createMany({
      data: [
        { name: "Makanan Kering", description: "Dry cat food" },
        { name: "Makanan Basah", description: "Wet cat food" },
        { name: "Pasir Kucing", description: "Cat litter" },
        { name: "Mainan", description: "Cat toys" },
        { name: "Aksesoris", description: "Cat accessories" },
        { name: "Kesehatan", description: "Health & medicine" },
        { name: "Grooming", description: "Grooming products" },
      ],
    });
    console.log("✅ Categories created");
  } else {
    console.log("⚠️  Kategori sudah ada, skip");
  }

  // Cek apakah produk sudah ada
  const existingProducts = await prisma.product.count();
  if (existingProducts === 0) {
    const catFood = await prisma.category.findFirst({ where: { name: "Makanan Kering" } });
    const wetFood = await prisma.category.findFirst({ where: { name: "Makanan Basah" } });
    const litter = await prisma.category.findFirst({ where: { name: "Pasir Kucing" } });

    await prisma.product.createMany({
      data: [
        {
          sku: "MK-001",
          name: "Whiskas Adult Ocean Fish 1.2kg",
          categoryId: catFood.id,
          unit: "pcs",
          purchasePrice: 45000,
          sellingPrice: 55000,
          minStock: 5,
          currentStock: 24,
          isPerishable: false,
          isActive: true,
        },
        {
          sku: "MB-002",
          name: "Me-O Pouch Tuna 80g",
          categoryId: wetFood.id,
          unit: "pcs",
          purchasePrice: 5000,
          sellingPrice: 7000,
          minStock: 10,
          currentStock: 8,
          isPerishable: true,
          isActive: true,
        },
        {
          sku: "PS-003",
          name: "Pasir Gumpal Lavender 10L",
          categoryId: litter.id,
          unit: "pcs",
          purchasePrice: 35000,
          sellingPrice: 45000,
          minStock: 3,
          currentStock: 30,
          isPerishable: false,
          isActive: true,
        },
      ],
    });
    console.log("✅ Sample products created");
  } else {
    console.log("⚠️  Produk sudah ada, skip");
  }

  console.log("🎉 Seeding completed!");
  console.log("📧 Login: admin@myamyu.com / admin123");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
