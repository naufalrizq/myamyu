import "dotenv/config";
import pg from "pg";

const { Pool } = pg;

const ITEMS = [
  ["Beauty Adult & Kitten Chicken & Salmon", 18],
  ["Bolt Donat 800 gr", 3],
  ["Bolt Mother Kitten Salmon 500 gr", 38],
  ["Bolt Mother Kitten Tuna 500 gr", 47],
  ["Bolt Salmon 800 gr", 4],
  ["Bolt Tuna 800 gr", 31],
  ["Cat Choize Adult Salmon", 22],
  ["Cat Choize Adult Tuna", 0],
  ["Cat Choize Kitten Salmon Milk", 17],
  ["Cat Choize Kitten Tuna Milk", 20],
  ["Cat Choize Mother Kitten 800 gr", 25],
  ["Chester 800 gr", 8],
  ["Excel Chicken Tuna", 22],
  ["Excel Mother Kitten", 24],
  ["Excel Tuna Flavor", 19],
  ["Lezato Adult 1 kg", 14],
  ["Lezato Kitten Tuna 800 gr", 24],
  ["Life Cat Repack 1 kg", 24],
  ["Maxi 1 kg", 11],
];

const CATEGORY_ID = 1; // Makanan Kering
const MIN_STOCK = 5;
const CREATED_BY = 1; // admin

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

    for (const [name, qty] of ITEMS) {
      counter += 1;
      const sku = `PDT-${String(counter).padStart(3, "0")}`;

      const prodRes = await client.query(
        `INSERT INTO products
           (sku, name, category_id, unit, purchase_price, selling_price, min_stock, current_stock, is_perishable, is_active, created_at, updated_at)
         VALUES ($1,$2,$3,$4,0,0,$5,$6,false,true, now(), now())
         RETURNING id`,
        [sku, name, CATEGORY_ID, "pcs", MIN_STOCK, qty]
      );
      const productId = prodRes.rows[0].id;

      await client.query(
        `INSERT INTO stock_movements
           (product_id, type, quantity, reference_type, note, created_by)
         VALUES ($1,'in',$2,'manual','Stok awal digitasi',$3)`,
        [productId, qty, CREATED_BY]
      );

      console.log(`+ created ${sku} | ${name} | stok=${qty}`);
    }

    await client.query("COMMIT");
    console.log(`\nDone: ${ITEMS.length} produk diimport.`);
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