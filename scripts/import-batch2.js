import "dotenv/config";
import pg from "pg";

const { Pool } = pg;

// [name, qty]
const ITEMS = [
  ["Cat Choize Adult Tuna", 24],
  ["Life Cat Adult Chicken & Salmon", 24],
  ["Life Cat Adult Tuna", 25],
  ["Life Cat Kitten Salmon", 18],
  ["Life Cat Kitten Tuna", 43],
  ["Bio Creamy Chicken Tuna", 16],
  ["Bio Creamy Salmon", 7],
  ["Bio Creamy Tuna", 12],
  ["Cat Choize Adult Makarel", 9],
  ["Cat Choize Adult Tuna", 5],
  ["Life Cat Adult Salmon", 11],
  ["Life Cat Kitten Chicken", 17],
  ["Life Cat Kitten Salmon", 23],
  ["Life Cat Kitten Tuna", 14],
  ["Me-O Adult Beef & Lamb", 10],
  ["Me-O Adult Chicken Chunk", 8],
  ["Me-O Adult Mackerel", 9],
  ["Me-O Adult Sardine with Chicken", 12],
  ["Me-O Adult Tuna", 2],
  ["Me-O Adult Tuna Chicken Jelly", 12],
  ["Me-O Adult Tuna with White Fish", 12],
  ["Me-O Kitten Tuna", 9],
  ["Me-O Kitten Tuna Sardine Jelly", 8],
  ["Whiskas Junior Makarel", 32],
  ["Whiskas Junior Tuna", 20],
  ["Whiskas Makarel", 24],
  ["Whiskas Makarel Salmon", 22],
  ["Whiskas Ocean Fish", 17],
  ["Whiskas Tuna", 2],
  ["Drontal", 5],
  ["Susu Growsy", 8],
  ["Susu Top Growth", 15],
];

// Kategori: kaleng/pouch -> 2 (Makanan Basah); obat/susu -> 6 (Kesehatan)
const CAT_BASAH = new Set([
  "Cat Choize Adult Tuna",
  "Life Cat Adult Chicken & Salmon",
  "Life Cat Adult Tuna",
  "Life Cat Kitten Salmon",
  "Life Cat Kitten Tuna",
  "Bio Creamy Chicken Tuna",
  "Bio Creamy Salmon",
  "Bio Creamy Tuna",
  "Cat Choize Adult Makarel",
  "Life Cat Adult Salmon",
  "Life Cat Kitten Chicken",
  "Me-O Adult Beef & Lamb",
  "Me-O Adult Chicken Chunk",
  "Me-O Adult Mackerel",
  "Me-O Adult Sardine with Chicken",
  "Me-O Adult Tuna",
  "Me-O Adult Tuna Chicken Jelly",
  "Me-O Adult Tuna with White Fish",
  "Me-O Kitten Tuna",
  "Me-O Kitten Tuna Sardine Jelly",
  "Whiskas Junior Makarel",
  "Whiskas Junior Tuna",
  "Whiskas Makarel",
  "Whiskas Makarel Salmon",
  "Whiskas Ocean Fish",
  "Whiskas Tuna",
]);
const CAT_KESEHATAN = new Set(["Drontal", "Susu Growsy", "Susu Top Growth"]);
const MIN_STOCK = 5;
const CREATED_BY = 1;

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL belum di-set");
  process.exit(1);
}
const needsSsl = /sslmode=require/.test(url) || url.includes("neon.tech");
const pool = new Pool({ connectionString: url, ssl: needsSsl ? { rejectUnauthorized: false } : false });

async function main() {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const maxRes = await client.query(
      `SELECT COALESCE(MAX(CAST(SUBSTRING(sku FROM '^PDT-(\\d+)') AS INTEGER)), 0) AS m
       FROM products WHERE sku ~ '^PDT-[0-9]+$'`
    );
    let counter = Number(maxRes.rows[0].m);

    // Group by nama (akumulasi qty) + mapping nama -> product id
    const totals = new Map();
    for (const [name, qty] of ITEMS) totals.set(name, (totals.get(name) || 0) + qty);

    const idByName = new Map();
    let createdCount = 0;
    let updatedCount = 0;

    for (const [name, total] of totals) {
      const categoryId = CAT_KESEHATAN.has(name) ? 6 : CAT_BASAH.has(name) ? 2 : 2;

      const existing = await client.query("SELECT id FROM products WHERE name = $1", [name]);
      let productId;

      if (existing.rows.length > 0) {
        productId = existing.rows[0].id;
        await client.query(
          "UPDATE products SET current_stock = current_stock + $1, updated_at = now() WHERE id = $2",
          [total, productId]
        );
        updatedCount += 1;
        console.log(`+ akumulasi ${name} (+${total}) -> stok total sekarang`);
      } else {
        counter += 1;
        const sku = `PDT-${String(counter).padStart(3, "0")}`;
        const prodRes = await client.query(
          `INSERT INTO products
             (sku, name, category_id, unit, purchase_price, selling_price, min_stock, current_stock, is_perishable, is_active, created_at, updated_at)
           VALUES ($1,$2,$3,'pcs',0,0,$4,$5,false,true, now(), now())
           RETURNING id`,
          [sku, name, categoryId, MIN_STOCK, total]
        );
        productId = prodRes.rows[0].id;
        createdCount += 1;
        console.log(`+ created ${sku} | ${name} | stok=${total} | cat=${categoryId}`);
      }
      idByName.set(name, productId);
    }

    // Catatan mutasi per entri asli
    for (const [name, qty] of ITEMS) {
      await client.query(
        `INSERT INTO stock_movements (product_id, type, quantity, reference_type, note, created_by)
         VALUES ($1,'in',$2,'manual','Stok awal digitasi',$3)`,
        [idByName.get(name), qty, CREATED_BY]
      );
    }

    await client.query("COMMIT");
    console.log(`\nDone: ${createdCount} produk baru, ${updatedCount} produk diakumulasi, ${ITEMS.length} catatan mutasi.`);
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("GAGAL, rollback:", err.message);
    process.exitCode = 1;
  } finally {
    client.release();
    await pool.end();
  }
}

main();