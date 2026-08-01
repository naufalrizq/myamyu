Buatkan aplikasi web internal untuk manajemen stock opname (inventaris) 
pet shop khusus kucing bernama "MyaMyu".

## STATUS PROGRESS TERKINI

Progress per 20 Juli 2026:

- Frontend prototype sudah berjalan menggunakan React + Vite.
- Project sudah bisa dijalankan lokal dengan `npm run dev`.
- Backend prototype bisa dijalankan lokal dengan `npm run dev:backend`.
- Build production sudah pernah diverifikasi dengan `npm run build`.
- UI awal sudah dirapikan agar lebih cocok untuk dashboard operasional internal.
- Frontend sudah dipisahkan dari single-file prototype menjadi beberapa folder:
  - `src/App.jsx`
  - `src/main.jsx`
  - `src/components/AppShell.jsx`
  - `src/components/GlobalStyle.jsx`
  - `src/components/ui.jsx`
  - `src/pages/Dashboard.jsx`
  - `src/pages/IdentifyScreen.jsx`
  - `src/pages/Products.jsx`
  - `src/pages/StockMovements.jsx`
  - `src/pages/Opname.jsx`
  - `src/pages/Integrations.jsx`
  - `src/lib/api.js`
  - `src/lib/inventory.js`
- `index.jsx` di root sekarang hanya compatibility export ke `src/App.jsx`.
- Backend awal sudah dibuat:
  - `backend/server.js`
  - `backend/src/routes/marketplace.routes.js`
  - `backend/src/services/marketplace.service.js`
  - `.env.example`
- Fitur frontend yang sudah ada:
  - Identifikasi user ringan tanpa role.
  - Dashboard ringkasan stok.
  - Manajemen produk berbasis local storage.
  - Mutasi stok masuk/keluar manual.
  - Stock opname: buat sesi, input stok fisik, hitung selisih, finalisasi.
  - Alert stok rendah.
  - Halaman Integrasi Marketplace untuk melihat status credential dan test sync.
  - Responsive desktop/mobile dengan sidebar, bottom navigation, dan FAB opname.
  - Dark mode/light mode tersimpan di local storage.
  - Tombol logout frontend.
- Role `admin` dan `staff` sudah dihapus dari frontend. Semua user prototype
  memiliki akses penuh.
- Backend marketplace saat ini masih mode simulasi aman:
  - `GET /api/marketplaces/status`
  - `POST /api/marketplaces/sync-stock`
  - `POST /api/marketplaces/webhooks/shopee`
  - `POST /api/marketplaces/webhooks/tokopedia-shop`
  Endpoint sync belum mengirim request nyata ke marketplace sampai credential
  dan mapping produk tersedia.
- Bug blank putih setelah refactor sudah diperbaiki dengan menambahkan
  `vite.config.js` dan mengaktifkan `@vitejs/plugin-react`.
- Keputusan integrasi terbaru:
  - MyaMyu menjadi source of truth stok.
  - Shopee dan Tokopedia/Tokopedia & Shop mengikuti stok internal MyaMyu.
  - Safety stock default: 2 per channel.
  - Stok channel Shopee dan Tokopedia harus sama-sama mengikuti stok internal
    setelah dikurangi safety stock.
  - Development webhook akan memakai ngrok.
  - Production frontend bisa memakai Vercel, tetapi backend marketplace sebaiknya
    memakai layanan backend dedicated seperti Railway, Render, Fly.io, VPS,
    Google Cloud Run, atau sejenisnya.
- Catatan penting: data saat ini masih disimpan di local storage browser, belum
  memakai backend/database sungguhan.

## KONTEKS BISNIS
MyaMyu adalah pet shop yang fokus menjual produk untuk kucing (makanan, 
pasir kucing, mainan, aksesoris, obat/vitamin, perlengkapan grooming, dll). 
Aplikasi ini HANYA untuk dipakai tim internal toko, bukan untuk customer.

## FOKUS FITUR (v1 - stock opname only, belum termasuk POS/kasir)

1. **Manajemen Produk**
   - CRUD produk: nama, SKU, kategori, satuan (pcs/kg/sachet), harga beli, 
     harga jual, stok minimum, foto produk
   - Kategori produk (makanan kering, makanan basah, pasir, mainan, 
     aksesoris, kesehatan, grooming, dll)
   - Tandai produk perishable (makanan basah/obat) untuk tracking expired

2. **Manajemen Stok**
   - Stok masuk (barang masuk dari supplier) dengan catatan tanggal, 
     jumlah, supplier
   - Stok keluar (penjualan manual/adjustment)
   - Riwayat mutasi stok per produk (log lengkap: siapa, kapan, jumlah, alasan)

3. **Stock Opname (fitur utama)**
   - Buat sesi stock opname baru (periode, penanggung jawab)
   - Sistem generate daftar produk dengan stok sistem saat itu
   - Tim toko input stok fisik per produk
   - Otomatis hitung selisih (surplus/deficit)
   - Finalisasi hasil opname -> selisih otomatis 
     tercatat sebagai mutasi stok baru
   - Riwayat semua sesi opname sebelumnya

4. **Notifikasi & Alert**
   - Alert produk dengan stok di bawah minimum
   - Alert produk mendekati expired (untuk makanan basah/obat)

5. **Dashboard & Laporan**
   - Ringkasan total produk, nilai inventaris, produk stok rendah
   - Grafik pergerakan stok (masuk/keluar) per periode
   - Export laporan stock opname ke Excel/PDF

6. **Manajemen User**
   - Single-role user: semua user internal memiliki akses penuh.
   - Login sederhana dengan email/username + password saat backend auth dibuat.

## DESAIN & BRANDING

- Nama brand: MyaMyu Pet Store
- Tema warna tosca & orange, dengan color palette berikut:
  - Amber Glow: #ff9f1c (aksen CTA/tombol utama)
  - Honey Bronze: #ffbf69 (aksen sekunder)
  - White: #ffffff (background utama)
  - Frozen Water: #cbf3f0 (background section/card ringan)
  - Light Sea Green: #2ec4b6 (warna primer/brand - dipakai di header, 
    sidebar, elemen utama)
- Style logo: paw print (jejak kaki kucing) warna tosca dengan outline 
  orange, font rounded/playful untuk nama brand
- Gunakan UI yang bersih, rounded corners, cocok untuk dashboard operasional 
  sehari-hari (bukan tampilan e-commerce)
- Sertakan logo/nama "MyaMyu Pet Store" di header/sidebar

## RESPONSIVE DESIGN (WAJIB)

Aplikasi ini harus bisa diakses dan tetap nyaman digunakan di berbagai 
ukuran layar, karena tim toko kemungkinan akan input stok langsung 
dari HP saat cek barang fisik, sementara laptop/desktop dipakai untuk review.

- Gunakan pendekatan **mobile-first responsive design** dengan Tailwind CSS 
  breakpoints (sm, md, lg, xl)
- **Desktop/tablet (>= md):** tampilkan sidebar navigasi permanen, tabel 
  data lengkap dengan semua kolom, layout dashboard multi-kolom
- **Mobile (< md):** 
  - Sidebar berubah jadi hamburger menu / bottom navigation
  - Tabel produk & stok yang panjang diubah jadi tampilan card per item 
    (bukan tabel horizontal yang harus di-scroll)
  - Form input (stok masuk, opname) dioptimalkan untuk layar sempit: 
    satu kolom, tombol besar dan mudah ditekan (touch-friendly, minimal 
    ukuran tap target 44x44px)
  - Prioritaskan fitur input stok opname & scan produk supaya cepat 
    diakses dari HP (misal jadi shortcut/FAB di halaman utama mobile)
- Pastikan semua modal, dropdown, dan popup form tetap readable dan tidak 
  terpotong di layar kecil
- Test tampilan minimal di 3 breakpoint: mobile (~375px), tablet (~768px), 
  desktop (~1280px)
- Font, spacing, dan warna tetap konsisten mengikuti color palette yang 
  sudah ditentukan di semua ukuran layar

## TECH STACK PREFERENSI

- Frontend saat ini: React + Vite + Tailwind CSS via CDN + lucide-react.
- Frontend target berikutnya:
  - Tetap lanjut React + Vite agar tidak membuang progress yang sudah ada.
  - Pertimbangkan migrasi Tailwind dari CDN ke setup build Tailwind resmi saat
    project mulai stabil.
  - Pertimbangkan React Router jika halaman makin banyak.
  - Pertimbangkan TanStack Query saat frontend mulai memakai API backend.
- Backend target: Node.js + Express.js.
- Database: PostgreSQL.
- ORM/migration yang disarankan: Prisma.
- Auth target: JWT-based login tanpa role terpisah untuk fase sekarang.
- Queue/background job untuk integrasi marketplace: Redis + BullMQ.
- File upload/foto produk: mulai dari local/static storage, lalu bisa pindah ke
  object storage seperti S3-compatible storage jika dibutuhkan.
- Marketplace foundation saat ini: Express endpoint dan service simulasi untuk
  Shopee + Tokopedia & Shop. Request nyata menunggu credential dan mapping produk.

## RENCANA BACKEND & INTEGRASI MARKETPLACE

Backend harus menjadi source of truth untuk stok. Frontend tidak boleh langsung
memanggil Shopee/Tokopedia API karena token, app secret, webhook signature, dan
retry logic harus disimpan aman di server.

### Endpoint backend internal yang dibutuhkan

- `POST /auth/login`
- `POST /auth/logout`
- `GET /me`
- `GET /products`
- `POST /products`
- `PATCH /products/:id`
- `DELETE /products/:id` atau soft delete `PATCH /products/:id/archive`
- `GET /categories`
- `POST /categories`
- `POST /stock-movements`
- `GET /stock-movements`
- `POST /opname-sessions`
- `GET /opname-sessions`
- `GET /opname-sessions/:id`
- `PATCH /opname-sessions/:id/items/:productId`
- `POST /opname-sessions/:id/approve`
- `GET /dashboard/summary`
- `GET /alerts/low-stock`
- `GET /alerts/expiring-batches`

### Integrasi Shopee/Tokopedia

Tujuan integrasi marketplace adalah sinkronisasi stok near real-time, bukan
hard real-time mutlak. Marketplace API dapat terkena rate limit, gagal sementara,
atau tertunda, jadi perlu queue dan retry.

Keputusan bisnis sync:

- MyaMyu adalah source of truth.
- Safety stock default adalah 2.
- Rumus stok yang dikirim ke marketplace:
  `published_stock = max(0, current_stock - safety_stock)`.
- Channel aktif untuk fase ini: Shopee dan Tokopedia/Tokopedia & Shop.
- Stok semua channel mengikuti stok internal yang sama, bukan dialokasikan
  terpisah per channel.
- Kalau order Shopee dan Tokopedia masuk hampir bersamaan, backend harus:
  1. memproses webhook dengan idempotency key,
  2. memakai transaksi database untuk mengunci produk,
  3. mengurangi stok internal,
  4. mencatat mutasi stok,
  5. enqueue sync stok terbaru ke semua channel,
  6. menandai conflict/oversell risk jika stok tidak cukup.

Alur yang disarankan:

1. MyaMyu menyimpan stok internal sebagai source of truth.
2. Setiap produk punya mapping channel:
   - product internal id
   - SKU internal
   - Shopee `shop_id`, `item_id`, `model_id`
   - Tokopedia/Tokopedia & Shop/TikTok Shop `shop_id`, `product_id`, `sku_id`
   - safety stock per channel
   - status sync terakhir
3. Saat stok berubah dari mutasi manual, order marketplace, atau approval opname,
   backend membuat `stock_sync_jobs`.
4. Worker queue mengirim update stok ke masing-masing marketplace.
5. Jika gagal, job retry dengan exponential backoff.
6. Semua request/response penting dicatat di sync log untuk audit.
7. Webhook marketplace dipakai untuk menerima order baru, order cancel, refund,
   atau perubahan stok dari channel, lalu stok internal disesuaikan.

Catatan platform:

- Shopee: integrasi diarahkan lewat Shopee Open Platform atau layanan Shopee
  seperti Stoku jika cocok untuk kebutuhan toko.
- Tokopedia: untuk integrasi baru, perlu memperhatikan migrasi Tokopedia ke
  Tokopedia & Shop / TikTok Shop Partner Center. Arah API operasional baru
  menggunakan TikTok Shop API untuk Tokopedia & Shop. Jangan desain hanya
  bergantung pada Tokopedia OpenAPI lama untuk update stok.

### Credential dan data yang perlu disiapkan

Shopee Open Platform:

- `SHOPEE_PARTNER_ID`
- `SHOPEE_PARTNER_KEY`
- `SHOPEE_SHOP_ID`
- `SHOPEE_ACCESS_TOKEN`
- `SHOPEE_REFRESH_TOKEN` (perlu ditambahkan saat flow OAuth/token refresh dibuat)
- Scope/permission untuk product inventory write dan order/webhook.

Tokopedia & Shop / TikTok Shop Partner Center:

- `TTS_APP_KEY`
- `TTS_APP_SECRET`
- `TTS_SHOP_ID` atau `shop_cipher` sesuai API yang dipakai.
- `TTS_ACCESS_TOKEN`
- `TTS_REFRESH_TOKEN` (perlu ditambahkan saat flow OAuth/token refresh dibuat)
- Scope/permission untuk product/inventory write dan order/webhook.

Mapping produk minimal bisa disiapkan sebagai CSV/Excel:

```csv
sku_internal,nama_produk,stok_internal,shopee_shop_id,shopee_item_id,shopee_model_id,tts_shop_id,tts_product_id,tts_sku_id,safety_stock
MK-001,Whiskas Adult Ocean Fish 1.2kg,24,123456,987654321,111222333,78910,4455667788,99887766,2
MB-002,Me-O Pouch Tuna 80g,8,123456,987654322,111222334,78910,4455667799,99887767,2
PS-003,Pasir Gumpal Lavender 10L,30,123456,987654323,,78910,4455667800,99887768,2
```

Webhook development:

- Gunakan ngrok untuk expose backend lokal:
  `ngrok http 3001`
- Set URL webhook marketplace ke:
  - `https://xxxx.ngrok-free.app/api/marketplaces/webhooks/shopee`
  - `https://xxxx.ngrok-free.app/api/marketplaces/webhooks/tokopedia-shop`

Deployment production yang disarankan:

- Frontend: Vercel.
- Backend API + webhook: Railway, Render, Fly.io, VPS, Google Cloud Run, atau
  layanan backend dedicated lain.
- Database: PostgreSQL hosted seperti Supabase, Neon, Railway PostgreSQL, atau
  managed PostgreSQL lain.
- Redis/queue: Upstash Redis, Railway Redis, atau Redis managed lain.
- Domain ideal:
  - `app.myamyu.com` untuk frontend.
  - `api.myamyu.com` untuk backend dan webhook marketplace.

### Tabel tambahan untuk marketplace sync

Tambahkan tabel semacam ini saat backend mulai dibuat:

```sql
CREATE TABLE marketplace_accounts (
    id              SERIAL PRIMARY KEY,
    marketplace     VARCHAR(30) NOT NULL CHECK (marketplace IN ('shopee', 'tokopedia_shop')),
    shop_id         VARCHAR(100) NOT NULL,
    shop_name       VARCHAR(150),
    access_token    TEXT,
    refresh_token   TEXT,
    token_expires_at TIMESTAMPTZ,
    is_active       BOOLEAN NOT NULL DEFAULT true,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (marketplace, shop_id)
);

CREATE TABLE product_channel_mappings (
    id                     SERIAL PRIMARY KEY,
    product_id             INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    marketplace_account_id INTEGER NOT NULL REFERENCES marketplace_accounts(id) ON DELETE CASCADE,
    external_product_id    VARCHAR(100) NOT NULL,
    external_variant_id    VARCHAR(100),
    external_sku           VARCHAR(100),
    safety_stock           INTEGER NOT NULL DEFAULT 0,
    last_synced_stock      INTEGER,
    last_synced_at         TIMESTAMPTZ,
    sync_status            VARCHAR(30) NOT NULL DEFAULT 'pending',
    sync_error             TEXT,
    created_at             TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at             TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (marketplace_account_id, external_product_id, external_variant_id)
);

CREATE TABLE stock_sync_jobs (
    id                     SERIAL PRIMARY KEY,
    product_id             INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    marketplace_account_id INTEGER REFERENCES marketplace_accounts(id) ON DELETE SET NULL,
    target_stock           INTEGER NOT NULL,
    status                 VARCHAR(30) NOT NULL DEFAULT 'queued',
    attempts               INTEGER NOT NULL DEFAULT 0,
    last_error             TEXT,
    created_at             TIMESTAMPTZ NOT NULL DEFAULT now(),
    processed_at           TIMESTAMPTZ
);
```

## SKEMA DATABASE

Gunakan skema PostgreSQL berikut sebagai referensi struktur data 
(boleh disesuaikan penamaan/konvensi sesuai best practice platform, 
tapi pertahankan relasi dan alur bisnisnya):

```sql
-- =========================================================
-- MyaMyu Pet Store - Database Schema
-- Aplikasi Stock Opname Internal
-- PostgreSQL
-- =========================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. USERS
CREATE TABLE users (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(100) NOT NULL,
    email           VARCHAR(150) UNIQUE NOT NULL,
    password_hash   VARCHAR(255) NOT NULL,
    is_active       BOOLEAN NOT NULL DEFAULT true,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. SUPPLIERS
CREATE TABLE suppliers (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(150) NOT NULL,
    contact_name    VARCHAR(100),
    phone           VARCHAR(30),
    email           VARCHAR(150),
    address         TEXT,
    is_active       BOOLEAN NOT NULL DEFAULT true,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. CATEGORIES
CREATE TABLE categories (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(100) NOT NULL UNIQUE,
    description     TEXT,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 4. PRODUCTS
CREATE TABLE products (
    id              SERIAL PRIMARY KEY,
    sku             VARCHAR(50) UNIQUE NOT NULL,
    name            VARCHAR(150) NOT NULL,
    category_id     INTEGER REFERENCES categories(id) ON DELETE SET NULL,
    unit            VARCHAR(20) NOT NULL DEFAULT 'pcs',
    purchase_price  NUMERIC(12,2) NOT NULL DEFAULT 0,
    selling_price   NUMERIC(12,2) NOT NULL DEFAULT 0,
    min_stock       INTEGER NOT NULL DEFAULT 0,
    current_stock   INTEGER NOT NULL DEFAULT 0,
    image_url       TEXT,
    is_perishable   BOOLEAN NOT NULL DEFAULT false,
    is_active       BOOLEAN NOT NULL DEFAULT true,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_sku ON products(sku);

-- 5. PRODUCT_BATCHES (untuk produk perishable, tracking expired)
CREATE TABLE product_batches (
    id              SERIAL PRIMARY KEY,
    product_id      INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    batch_code      VARCHAR(50),
    quantity        INTEGER NOT NULL DEFAULT 0,
    expired_date    DATE,
    received_date   DATE NOT NULL DEFAULT CURRENT_DATE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_batches_product ON product_batches(product_id);
CREATE INDEX idx_batches_expired ON product_batches(expired_date);

-- 6. STOCK_MOVEMENTS (source of truth pergerakan stok)
CREATE TABLE stock_movements (
    id              SERIAL PRIMARY KEY,
    product_id      INTEGER NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
    type            VARCHAR(20) NOT NULL
                        CHECK (type IN ('in', 'out', 'adjustment')),
    quantity        INTEGER NOT NULL,
    reference_type  VARCHAR(30)
                        CHECK (reference_type IN ('purchase', 'sale', 'opname', 'manual', 'return')),
    reference_id    INTEGER,
    supplier_id     INTEGER REFERENCES suppliers(id) ON DELETE SET NULL,
    note            TEXT,
    created_by      INTEGER NOT NULL REFERENCES users(id),
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_movements_product ON stock_movements(product_id);
CREATE INDEX idx_movements_type ON stock_movements(type);
CREATE INDEX idx_movements_created_at ON stock_movements(created_at);

-- 7. OPNAME_SESSIONS
CREATE TABLE opname_sessions (
    id              SERIAL PRIMARY KEY,
    code            VARCHAR(30) UNIQUE NOT NULL,
    title           VARCHAR(150),
    status          VARCHAR(20) NOT NULL DEFAULT 'draft'
                        CHECK (status IN ('draft', 'in_progress', 'completed', 'cancelled')),
    started_at      TIMESTAMPTZ,
    completed_at    TIMESTAMPTZ,
    created_by      INTEGER NOT NULL REFERENCES users(id),
    approved_by     INTEGER REFERENCES users(id),
    approved_at     TIMESTAMPTZ,
    notes           TEXT,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 8. OPNAME_ITEMS
CREATE TABLE opname_items (
    id              SERIAL PRIMARY KEY,
    session_id      INTEGER NOT NULL REFERENCES opname_sessions(id) ON DELETE CASCADE,
    product_id      INTEGER NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
    system_stock    INTEGER NOT NULL,
    physical_stock  INTEGER,
    difference      INTEGER GENERATED ALWAYS AS (COALESCE(physical_stock, 0) - system_stock) STORED,
    note            TEXT,
    counted_by      INTEGER REFERENCES users(id),
    counted_at      TIMESTAMPTZ,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (session_id, product_id)
);

CREATE INDEX idx_opname_items_session ON opname_items(session_id);
CREATE INDEX idx_opname_items_product ON opname_items(product_id);

-- TRIGGER: auto-update current_stock saat ada stock_movements baru
CREATE OR REPLACE FUNCTION fn_update_product_stock()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.type = 'in' THEN
        UPDATE products SET current_stock = current_stock + NEW.quantity,
                             updated_at = now()
        WHERE id = NEW.product_id;
    ELSIF NEW.type = 'out' THEN
        UPDATE products SET current_stock = current_stock - NEW.quantity,
                             updated_at = now()
        WHERE id = NEW.product_id;
    ELSIF NEW.type = 'adjustment' THEN
        UPDATE products SET current_stock = current_stock + NEW.quantity,
                             updated_at = now()
        WHERE id = NEW.product_id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_product_stock
AFTER INSERT ON stock_movements
FOR EACH ROW
EXECUTE FUNCTION fn_update_product_stock();
```

### Alur bisnis penting (referensi logic backend)
1. Stok masuk/keluar manual -> insert ke `stock_movements`, `products.current_stock` 
   ter-update otomatis lewat trigger.
2. Mulai opname: buat row baru di `opname_sessions` (status draft) -> generate 
   `opname_items` untuk semua produk aktif dengan `system_stock` = stok saat itu 
   -> status jadi `in_progress`.
3. Tim toko input `physical_stock` per produk di `opname_items`, `difference` 
   otomatis terhitung.
4. Finalisasi opname: status -> `completed`, isi `approved_by` & 
   `approved_at`. Untuk tiap item dengan `difference != 0`, insert row baru 
   ke `stock_movements` (type = `adjustment`, reference_type = `opname`, 
   reference_id = session_id) supaya stok sistem match stok fisik.
5. Alert stok rendah: query produk dengan `current_stock <= min_stock`.
6. Alert mendekati expired: query `product_batches` dengan 
   `expired_date <= CURRENT_DATE + INTERVAL '30 days'`.

## SCOPE
Ini untuk tim internal kecil, jadi prioritaskan kecepatan penggunaan 
sehari-hari (form input cepat, tabel yang mudah di-scan) dibanding 
fitur marketing/customer-facing. Belum perlu integrasi payment gateway 
atau fitur POS di versi ini.
## UPDATE: 20 Juli 2026 (Progress database + backend)

### Progress yang berhasil:
✅ PostgreSQL database "myamyu" berhasil dibuat di localhost
✅ Skema database sesuai dengan rencana: users, suppliers, categories, products, product_batches, stock_movements, opname_sessions, opname_items, marketplace_accounts, product_channel_mappings, stock_sync_jobs
✅ Trigger PostgreSQL untuk auto-update stok berhasil dibuat
✅ Prisma schema.prisma dibuat dengan model yang sesuai
✅ Migration SQL berhasil dijalankan

### Progress yang sedang dikerjakan:
⚙️ Backend API sedang di-debug (masalah module resolution)
- File routes: products.routes.js, stock-movements.routes.js, opname.routes.js, marketplace.routes.js
- Masalah: Prisma Client versi 7 generate .ts files, tapi backend masih ES modules
- Solusi: Ubah import dari `index.js` ke `client.js`

### Update status:
- Database sudah ready
- Backend API 90% selesai (hanya masalah import path)
- Frontend masih memakai localStorage, perlu update ke API backend nanti


### Update Progress (20 Juli 2026 - 20:00)

✅ **BACKEND BERHASIL JALAN!**
- Backend server running di http://127.0.0.1:3001
- Health check API berhasil: `GET /api/health` → `{"ok":true,"service":"myamyu-backend"}`
- Database PostgreSQL terhubung dengan sukses
- Prisma Client terinisialisasi menggunakan @prisma/adapter-pg

**Setup yang digunakan:**
- Prisma 7 dengan TypeScript-generated client
- tsx untuk menjalankan backend (karena Prisma generate `.ts` files)
- @prisma/adapter-pg untuk PostgreSQL connection
- Script `npm run dev:backend` menggunakan `tsx backend/server.js`

**Masalah yang masih ada:**
- Endpoint `/api/products` error: prisma.product undefined
- Perlu fix model access dari Prisma Client
- Belum ada seed data di database

**Next steps:**
1. Fix Prisma model access issue
2. Run seed script untuk populate data awal
3. Test semua API endpoints
4. Update frontend untuk connect ke backend API


---

## UPDATE: 21 Juli 2026 — Backend Fully Working ✅

**Setup final yang digunakan:**
- Prisma 7 generator: `prisma-client-js` → output ke `./generated/prisma`
- `tsx` untuk run backend (`npm run dev:backend` = `tsx backend/server.js`)
- `@prisma/adapter-pg` dengan Pool dari `pg` untuk koneksi PostgreSQL
- Import Prisma di routes: `import { PrismaClient } from "../../../generated/prisma/index.js"`
- PostgreSQL harus running (Docker) sebelum backend dijalankan
- DATABASE_URL: `postgresql://postgres:postgres@localhost:5432/myamyu?schema=public`
- Seed data: 1 user (admin@myamyu.com), 7 kategori, 3 produk sample

**API Endpoints yang sudah berjalan dan tested:**
- `GET /api/health` ✅
- `GET/POST /api/products`, `PATCH/DELETE /api/products/:id` ✅
- `GET/POST /api/categories`, `PATCH /api/categories/:id` ✅
- `GET/POST /api/stock-movements` ✅
- `GET/POST /api/opname-sessions` ✅
- `GET /api/opname-sessions/:id` ✅
- `PATCH /api/opname-sessions/:sessionId/items/:productId` ✅
- `PATCH /api/opname-sessions/:id/approve` ✅
- `PATCH /api/opname-sessions/:id/cancel` ✅
- `GET /api/dashboard/summary` ✅
- `GET /api/dashboard/low-stock` ✅
- `GET /api/dashboard/expiring-batches` ✅
- `GET /api/marketplaces/status` ✅

**Backend files yang sudah dibuat:**
- `backend/server.js`
- `backend/src/lib/prisma.js`
- `backend/src/routes/index.js`
- `backend/src/routes/products.routes.js`
- `backend/src/routes/categories.routes.js`
- `backend/src/routes/stock-movements.routes.js`
- `backend/src/routes/opname.routes.js`
- `backend/src/routes/dashboard.routes.js`
- `backend/src/routes/marketplace.routes.js`
- `prisma/seed.js`

**Next steps:**
1. Integrasi frontend dengan backend API (ganti localStorage → API calls)
2. Export hasil opname ke Excel/PDF
3. Auth JWT (login/logout backend)
4. Integrasi Shopee / Tokopedia & Shop real API


---

## UPDATE: 21 Juli 2026 — Frontend Integrasi ke Backend API ✅

### Yang berubah:
- `src/lib/api.js` — API client lengkap: productsApi, categoriesApi, stockMovementsApi, opnameApi, dashboardApi, marketplaceApi
- `src/lib/inventory.js` — disederhanakan, hapus semua localStorage logic. Hanya berisi helper fmtIDR, fmtDate, THEME_KEY
- `src/lib/useApi.js` — helper hook useAsync untuk loading/error state
- `src/App.jsx` — load dari backend, tidak lagi dari localStorage. Cek backend online sebelum render
- `src/pages/Dashboard.jsx` — data dari dashboardApi.summary() dan dashboardApi.lowStock()
- `src/pages/Products.jsx` — CRUD produk via productsApi, kategori via categoriesApi
- `src/pages/StockMovements.jsx` — list + create via stockMovementsApi, dengan pagination
- `src/pages/Opname.jsx` — full opname flow via opnameApi
- `src/pages/Integrations.jsx` — load products dari backend untuk test sync

### Semua halaman:
- Menampilkan loading spinner saat fetch
- Menampilkan error message dengan tombol "Coba lagi" jika gagal
- Build production sukses (255KB, 4.12s)

### Next steps:
1. ~~Integrasi frontend ke backend API~~ ✅ Done
2. Export hasil opname ke Excel/PDF
3. Auth JWT (login/logout backend)
4. Integrasi Shopee / Tokopedia & Shop real API


---

## UPDATE: 21 Juli 2026 — Integrasi Marketplace (Shopee + TikTok Shop) ✅

### Backend services yang dibuat:
- `backend/src/services/shopee.service.js` — Shopee Open Platform v2
  - `generateShopeeSign()` — HMAC-SHA256 signature sesuai spec Shopee
  - `generateShopeeAuthUrl()` — OAuth redirect URL
  - `getShopeeAccessToken()` — Exchange code → access+refresh token
  - `refreshShopeeToken()` — Auto-refresh token, simpan ke DB
  - `updateShopeeStock()` — Update stok via `/api/v2/product/update_stock`
  - `verifyShopeeWebhook()` — Verifikasi signature webhook Shopee

- `backend/src/services/tiktokshop.service.js` — TikTok Shop API v2 (202309)
  - `generateTtsSign()` — HMAC-SHA256 dengan sorted query params
  - `generateTtsAuthUrl()` — OAuth URL ke TikTok Shop Partner Center
  - `getTtsAccessToken()` — Exchange auth_code → token
  - `refreshTtsToken()` — Auto-refresh, simpan ke DB
  - `getTtsAuthorizedShops()` — Ambil daftar toko yang diotorisasi
  - `updateTtsStock()` — Update stok via `/product/202309/products/{id}/inventory/update`
  - `verifyTtsWebhook()` — Verifikasi signature webhook TikTok

- `backend/src/services/sync.service.js` — Stock Sync Orchestrator
  - `enqueueSyncJobs()` — Tambah sync jobs ke DB untuk semua channel
  - `processPendingSyncJobs()` — Proses queue (run after each stock change)
  - `triggerStockSync()` — Dipanggil setelah mutasi/opname approval
  - `getProductSyncStatus()` — Status sync per produk

### Backend routes yang dibuat/diupdate:
- `GET /api/marketplaces/status` — Status koneksi + credential check
- `GET /api/marketplaces/accounts` — List connected marketplace accounts
- `GET /api/marketplaces/shopee/auth-url` — Generate Shopee OAuth URL
- `GET /api/marketplaces/shopee/callback` — Callback OAuth Shopee
- `DELETE /api/marketplaces/shopee/disconnect`
- `GET /api/marketplaces/tiktok/auth-url` — Generate TikTok Shop OAuth URL
- `GET /api/marketplaces/tiktok/callback` — Callback OAuth TikTok Shop
- `DELETE /api/marketplaces/tiktok/disconnect`
- `GET/POST/DELETE /api/marketplaces/mappings` — Product channel mappings
- `POST /api/marketplaces/sync-stock` — Trigger sync satu produk
- `POST /api/marketplaces/sync-all` — Trigger sync semua produk
- `GET /api/marketplaces/sync-status/:productId`
- `GET /api/marketplaces/sync-jobs` — Lihat antrian sync jobs
- `POST /api/marketplaces/process-jobs` — Manual trigger process queue
- `POST /api/marketplaces/webhooks/shopee` — Shopee webhook receiver
- `POST /api/marketplaces/webhooks/tiktok` — TikTok Shop webhook receiver

### Frontend Integrations.jsx diupdate:
- Kartu marketplace dengan status koneksi, token expiry, OAuth button
- Setup guide (cara daftar Shopee Open Platform + TikTok Shop Partner Center)
- Product mapping list (tambah/hapus/sync per produk)
- Sync jobs log

### Flow stok sync:
1. Mutasi stok masuk/keluar → `triggerStockSync(productId)` dipanggil async
2. Opname approval → sync dipicu untuk semua produk yang berubah
3. `published_stock = max(0, current_stock - safety_stock)` (default safety_stock = 2)
4. Retry otomatis sampai 3x jika gagal

### Cara setup (butuh credential):
1. Isi `SHOPEE_PARTNER_ID` dan `SHOPEE_PARTNER_KEY` di `.env`
2. Isi `TTS_APP_KEY` dan `TTS_APP_SECRET` di `.env`
3. Restart backend, klik "Hubungkan via OAuth" di halaman Integrasi
4. Setelah callback berhasil, token tersimpan di database
5. Tambahkan mapping produk (internal ID → external product ID)

### Next steps:
1. ~~Integrasi frontend ke backend API~~ ✅
2. ~~Integrasi Shopee + TikTok Shop~~ ✅
3. Export hasil opname ke Excel/PDF
4. Auth JWT (login/logout backend)


---

## UPDATE: 21 Juli 2026 — Export Excel & PDF Opname ✅

### Yang dibuat:
- `src/lib/export.js` — Export utility (lazy loaded, tidak membesarkan main bundle)
  - `exportOpnameToExcel(session)` — Generate file `.xlsx` via ExcelJS dengan 3 sheet:
    - **Ringkasan** — Info sesi + statistik (total produk, dihitung, selisih, surplus/kurang)
    - **Detail Opname** — Semua item dengan warna hijau/merah per baris selisih
    - **Selisih Saja** — Hanya item yang ada perbedaan + nilai selisih (Rp)
  - `exportOpnameToPdf(session)` — Generate file `.pdf` via jsPDF + autoTable
    - Header branding MyaMyu warna tosca
    - Stat boxes (total, dihitung, selisih, belum dihitung)
    - Tabel lengkap dengan warna teks merah/hijau untuk kolom selisih

### UI update di Opname.jsx:
- **SessionCard** — Tombol Excel + PDF muncul di bawah card untuk sesi yang `completed`
- **OpnameDetail** — Tombol Excel + PDF di header, bisa export kapan saja (berjalan atau selesai)

### Dependency:
- `exceljs` — Generate .xlsx
- `jspdf` + `jspdf-autotable` — Generate .pdf
- Keduanya lazy loaded (dynamic import), hanya dimuat saat user klik export

### Bundle sizes:
- Main bundle: ~272KB (sebelumnya 1.6MB)
- Export chunk: ~1.37MB (dimuat on-demand)

### Test yang sudah diverifikasi:
- ✅ Buat sesi opname OPN-202607-001 (3 produk)
- ✅ Input stok fisik per item dengan selisih
- ✅ Approve sesi → 2 adjustments dibuat, stok terupdate
- ✅ Full backend flow berjalan

### Next steps:
1. ~~Integrasi frontend ke backend API~~ ✅
2. ~~Integrasi Shopee + TikTok Shop~~ ✅
3. ~~Export Excel/PDF Opname~~ ✅
4. Auth JWT (login/logout backend)


---

## UPDATE: 21 Juli 2026 — Auth JWT + Bug Fixes ✅

### Auth JWT selesai:
- `backend/src/services/auth.service.js` — login, register, verifyToken
- `backend/src/middleware/auth.middleware.js` — middleware JWT untuk protect routes
- `backend/src/routes/auth.routes.js` — POST /api/auth/login, POST /api/auth/register, GET /api/auth/me, POST /api/auth/logout
- Semua routes protected kecuali: /api/health, /api/auth/*, webhook endpoints
- `src/lib/auth.js` — frontend auth helper (login, logout, getToken, checkAuth, getStoredUser)
- `src/lib/api.js` — semua request otomatis include `Authorization: Bearer <token>`
- `src/App.jsx` — cek token di localStorage saat app load, auto-verify dengan /api/auth/me
- `src/pages/IdentifyScreen.jsx` — login page real dengan email+password+tab register

### Login credentials:
- Email: admin@myamyu.com
- Password: admin123

### Bug fixes:
- PDF export: simbol ▲▼✓ diganti teks ASCII (Surplus, Kurang, Sesuai) — font jsPDF tidak support Unicode symbols
- Login page belang: ganti `min-h-[700px]` → `min-h-screen w-full`
- GlobalStyle: tambah `body:has(.theme-dark) { background-color: #0f172a }` untuk cover full page dark mode

### Files yang diupdate:
- `scripts/update-admin-password.js` — one-time script update password hash
- `prisma/seed.js` — idempotent (tidak duplicate jika dirun ulang), password di-hash dengan bcrypt

### Next steps:
1. ~~Integrasi frontend ke backend API~~ ✅
2. ~~Integrasi Shopee + TikTok Shop~~ ✅
3. ~~Export Excel/PDF Opname~~ ✅
4. ~~Auth JWT~~ ✅
5. Supplier management (CRUD supplier, stok masuk bisa pilih supplier)
6. Dashboard grafik stok
7. Deploy (Vercel + Railway/Render)


---

## UPDATE: 21 Juli 2026 — Dashboard Grafik, Expiring Alert, Deploy Guide ✅

### Dashboard Grafik Stok:
- `GET /api/dashboard/stock-chart?days=7|14|30` — endpoint baru, group mutasi per hari
- Dashboard.jsx diupdate dengan AreaChart (Recharts) untuk stok masuk/keluar
- Filter periode: 7H, 14H, 30H (bisa switch langsung di UI)

### Expiring Alert:
- `GET /api/dashboard/expiring-batches` — produk batch mendekati expired (30 hari)
- Banner alert kuning di Dashboard jika ada batch yang mendekati/melewati expired
- Tampilkan nama produk + berapa hari lagi

### Bug Fix Tambah Kategori:
- `addCategory` tidak lagi panggil `load()` (yang menutup modal)
- Langsung update local state `categories` — dropdown langsung ter-refresh tanpa tutup modal

### Deploy Guide:
- `DEPLOY.md` dibuat dengan panduan lengkap:
  - Deploy PostgreSQL di Railway
  - Deploy Backend di Railway
  - Deploy Frontend di Vercel
  - Custom domain setup
  - Webhook URL production
  - Security checklist (JWT secret, ganti password admin)

### Status project saat ini:
✅ Frontend React + Vite + Tailwind
✅ Backend Express + Prisma + PostgreSQL
✅ Auth JWT (login/register/logout)
✅ CRUD Produk + Kategori
✅ Mutasi Stok (masuk/keluar/adjustment) + pagination
✅ Stock Opname (buat sesi, input fisik, finalisasi, approve)
✅ Export Opname → Excel (3 sheet) + PDF
✅ Dashboard dengan grafik stok + expiring alert + low stock alert
✅ Integrasi Shopee (OAuth, signature, update stock, webhook)
✅ Integrasi TikTok Shop/Tokopedia & Shop (OAuth, signature, update stock, webhook)
✅ Product channel mapping + sync jobs queue
✅ DEPLOY.md panduan deploy ke Railway + Vercel

### Belum dikerjakan:
- Supplier management (CRUD supplier, pilih supplier saat stok masuk)
- Test marketplace dengan credential nyata
- Grafik nilai inventaris per kategori
