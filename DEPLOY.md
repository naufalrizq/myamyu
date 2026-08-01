# Panduan Deploy MyaMyu

## Stack Deploy yang Disarankan
- **Frontend**: Vercel (gratis)
- **Backend + API**: Railway (gratis tier)
- **Database PostgreSQL**: Railway PostgreSQL (atau Supabase)
- **Domain**: `app.myamyu.com` (frontend), `api.myamyu.com` (backend)

---

## 1. Deploy Database di Railway

1. Buka [railway.app](https://railway.app) → New Project → PostgreSQL
2. Setelah database jalan, klik tab **Variables** → copy `DATABASE_URL`
3. Jalankan migrasi:
   ```bash
   DATABASE_URL="postgresql://..." npx prisma db push
   ```
4. Jalankan seed:
   ```bash
   DATABASE_URL="postgresql://..." npx tsx prisma/seed.js
   ```

---

## 2. Deploy Backend di Railway

1. Di Railway project yang sama → **Add Service** → GitHub Repo
2. Set **Root Directory**: `/` (root project)
3. Set **Start Command**: `node backend/server.js`
4. Tambahkan **Environment Variables** berikut:
   ```
   PORT=3001
   DATABASE_URL=<dari Railway PostgreSQL>
   JWT_SECRET=<buat random string panjang>
   JWT_EXPIRES_IN=7d
   FRONTEND_ORIGIN=https://app.myamyu.com
   SAFETY_STOCK_DEFAULT=2
   SHOPEE_PARTNER_ID=<isi jika sudah punya>
   SHOPEE_PARTNER_KEY=<isi jika sudah punya>
   SHOPEE_BASE_URL=https://partner.shopeemobile.com
   SHOPEE_REDIRECT_URL=https://api.myamyu.com/api/marketplaces/shopee/callback
   TTS_APP_KEY=<isi jika sudah punya>
   TTS_APP_SECRET=<isi jika sudah punya>
   TTS_BASE_URL=https://open-api.tiktokglobalshop.com
   ```
5. Railway otomatis deploy saat push ke GitHub

---

## 3. Deploy Frontend di Vercel

1. Buka [vercel.com](https://vercel.com) → New Project → Import GitHub Repo
2. **Framework**: Vite
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`
5. Tambahkan **Environment Variables**:
   ```
   VITE_API_BASE_URL=https://api.myamyu.com
   ```
   *(Ganti dengan URL backend Railway kamu)*
6. Deploy!

---

## 4. Custom Domain (Opsional)

### Frontend (Vercel):
- Settings → Domains → Add `app.myamyu.com`
- Tambahkan CNAME record di DNS provider: `app → cname.vercel-dns.com`

### Backend (Railway):
- Settings → Networking → Custom Domain → `api.myamyu.com`
- Tambahkan CNAME di DNS: `api → <railway-domain>.railway.app`

---

## 5. Webhook Marketplace (Production)

Setelah backend di-deploy, update URL webhook di dashboard marketplace:

**Shopee Open Platform:**
- Webhook URL: `https://api.myamyu.com/api/marketplaces/webhooks/shopee`

**TikTok Shop Partner Center:**
- Webhook URL: `https://api.myamyu.com/api/marketplaces/webhooks/tiktok`

Update juga `SHOPEE_REDIRECT_URL` ke:
```
https://api.myamyu.com/api/marketplaces/shopee/callback
```

---

## Checklist Sebelum Deploy

- [ ] Ganti `JWT_SECRET` dengan string random yang kuat (min. 32 karakter)
- [ ] Set `FRONTEND_ORIGIN` ke domain frontend production
- [ ] Jalankan `prisma db push` di database production
- [ ] Jalankan seed script untuk buat user admin
- [ ] Test login dengan `admin@myamyu.com` / `admin123`
- [ ] **Ganti password admin** setelah pertama login!
- [ ] Isi credential marketplace jika sudah siap

---

## Generate JWT Secret yang Kuat

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
