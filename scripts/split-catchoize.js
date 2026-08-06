import pg from 'pg';
import 'dotenv/config';

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

async function nextSkuFor(prefix, client) {
  const res = await client.query(
    `SELECT COALESCE(MAX(CAST(substring(sku from '^PDT-([0-9]+)$') AS integer)), 0) AS m
     FROM products WHERE sku ~ '^PDT-[0-9]+$'`
  );
  return `${prefix}-${String(res.rows[0].m + 1).padStart(3, '0')}`;
}

async function main() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const cur = await client.query(`SELECT id, name, current_stock, category_id FROM products WHERE sku = 'PDT-008'`);
    if (cur.rows.length === 0) throw new Error('PDT-008 not found');
    const base = cur.rows[0];

    // Base becomes KALENG (Makanan Basah), stok 24
    await client.query(
      `UPDATE products SET name = $1, category_id = 2, current_stock = 24, updated_at = now() WHERE id = $2`,
      ['Cat Choize Adult Tuna (Kaleng)', base.id]
    );

    // New POUCH product, stok 5
    const newSku = await nextSkuFor('PDT', client);
    const ins = await client.query(
      `INSERT INTO products (sku, name, category_id, unit, purchase_price, selling_price, min_stock, current_stock, is_perishable, is_active, created_at, updated_at)
       VALUES ($1, $2, 2, 'pcs', 0, 0, 5, 5, true, true, now(), now())
       RETURNING id`,
      [newSku, 'Cat Choize Adult Tuna (Pouch)']
    );
    const pouchId = ins.rows[0].id;

    // Redirect pouch movement (qty 5) to the new pouch product
    const mv = await client.query(
      `UPDATE stock_movements SET product_id = $1
       WHERE product_id = $2 AND quantity = 5`,
      [pouchId, base.id]
    );

    await client.query('COMMIT');
    console.log(`ROK: PDT-008 -> "${base.name}" -> "Cat Choize Adult Tuna (Kaleng)" stok=24, cat=2`);
    console.log(`     baru ${newSku}: "Cat Choize Adult Tuna (Pouch)" stok=5, cat=2`);
    console.log(`     motif dipindah: ${mv.rowCount} movement(qty5) ke pouch`);
  } catch (e) {
    await client.query('ROLLBACK').catch(() => {});
    console.error('ERROR', e.message);
  } finally {
    client.release();
    await pool.end();
  }
}

main();