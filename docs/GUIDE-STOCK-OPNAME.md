# Panduan Stock Opname — MyaMyu Pet Store

Panduan ini menjelaskan cara menggunakan fitur **Stock Opname** untuk tim toko.
Ditulis dengan bahasa yang sederhana, jadi bisa langsung dipakai di lapangan.

---

## 1. Apa itu Stock Opname?

Stock opname adalah kegiatan **menghitung stok fisik** produk di rak/gudang dan
**membandingkannya dengan catatan stok di sistem**.

Tujuannya:

- Memastikan jumlah barang di catatan sesuai dengan barang yang benar-benar ada.
- Menemukan selisih (lebih banyak atau lebih sedikit dari catatan) yang mungkin
  disebabkan barang hilang, rusak, salah input, atau salah jual.
- Membuat stok sistem jadi **akurat kembali** sebagai dasar penjualan dan
  sinkronisasi ke marketplace.

> Contoh: sistem mencatat 10 kaleng Whiskas, tapi di rak tinggal 8. Setelah
> opname, sistem akan dikoreksi menjadi 8 dan selisihnya tercatat sebagai
> penyesuaian stok.

---

## 2. Alur Ringkas

1. **Mulai Sesi Baru** — sistem membuat daftar semua produk aktif dengan stok
   saat ini.
2. **Hitung stok fisik** — isi jumlah barang yang benar-benar ada di lapangan.
3. **Selesaikan & Setujui** — selisih otomatis disesuaikan ke sistem.
4. **Export laporan** — unduh hasil opname ke Excel atau PDF.

---

## 3. Langkah Demi Langkah

### Langkah 1 — Mulai Sesi Baru

Buka menu **Stock Opname**, lalu klik tombol **Mulai Sesi Baru**.

- Sistem otomatis membuat daftar **semua produk aktif** beserta **stok sistem**
  saat itu.
- Setiap sesi punya kode unik, contoh: `OPN-202608-001`.
- **Hanya boleh ada 1 sesi berjalan.** Jika masih ada sesi yang belum selesai,
  tombol akan berubah menjadi **Lanjutkan Sesi Berjalan** untuk meneruskan
  pekerjaan sebelumnya (misal: lanjut hitung besok).

> Tips: tidak perlu khawatir salah isi. Semua input tersimpan otomatis dan
> bisa diubah kembali sebelum sesi disetujui.

### Langkah 2 — Hitung Stok Fisik

Di halaman sesi, kamu akan melihat daftar produk dengan informasi:

- Nama & SKU produk.
- **Stok sistem** — jumlah yang tercatat di aplikasi.
- Kolom kosong untuk mengisi **stok fisik**.

Cara mengisi:

1. Hitung barang di rak/gudang.
2. Ketik jumlahnya di kolom **Fisik**.
3. Hasil selisih muncul otomatis:
   - **Sesuai** — jumlah fisik sama dengan sistem.
   - **+N** — fisik lebih banyak dari sistem (surplus).
   - **−N** — fisik lebih sedikit dari sistem (kurang).

> Tips: isi kolom Fisik dengan **0** jika barangnya tidak ada sama sekali
> (jangan dibiarkan kosong) supaya selisihnya terhitung.

### Langkah 3 — Selesaikan & Setujui

Setelah selesai menghitung, klik tombol **Selesaikan & Setujui** di bagian bawah.

Yang terjadi setelah disetujui:

- Setiap produk dengan **selisih ≠ 0** dicatat sebagai mutasi stok jenis
  **adjustment** dengan keterangan *"Penyesuaian hasil OPN-…"*.
- Stok sistem otomatis dikoreksi mengikuti hasil fisik.
- Sinkronisasi stok ke **Shopee & TikTok Shop** terpicu otomatis untuk produk
  yang berubah.
- Sesi berubah status menjadi **Selesai**.

Penting:

- **Hanya produk yang sudah diisi stok fisiknya** yang akan disesuaikan.
  Produk yang masih kosong **diabaikan** dan stoknya tidak berubah.
- Kamu tetap bisa menyetujui meskipun belum semua produk diisi, tapi sebaiknya
  pastikan semua sudah dihitung agar hasilnya akurat.
- **Perubahan stok bersifat permanen** setelah disetujui. Pastikan fisik sudah
  dicek ulang sebelum menekan tombol ini.

### Langkah 4 — Export Laporan

Sesi yang sudah **Selesai** bisa diexport:

- **Excel** — 3 sheet: Ringkasan, Detail Opname, dan Selisih Saja.
- **PDF** — laporan siap cetak dengan branding MyaMyu.

Tombol export tersedia di kartu sesi (halaman daftar) dan di halaman detail
sesi.

---

## 4. Membatalkan Sesi

Jika sesi berjalan **tidak jadi dilanjutkan** (misal salah buat atau ingin
mulai dari awal):

1. Buka sesi tersebut.
2. Klik tombol **Batalkan** di bagian bawah.
3. Konfirmasi pembatalan.

Efek pembatalan:

- Sesi ditandai **Dibatalkan**.
- **Tidak ada stok yang diubah** — semua input fisik dibuang.
- Kamu bisa langsung membuat sesi baru.

> Pembatalan hanya bisa dilakukan pada sesi yang **masih berjalan**. Sesi yang
> sudah Selesai tidak bisa dibatalkan.

---

## 5. FAQ

**Kenapa stok sistem berbeda dengan stok fisik?**
Bisa karena barang hilang, rusak, salah catat, salah kasir, atau barang
dipindah tanpa tercatat. Opname adalah cara untuk menemukan dan meluruskan.

**Kalau saya salah ketik stok fisik?**
Ulangi saja — input masih bisa diedit selama sesi belum disetujui.

**Apakah bisa 2 orang menghitung bersamaan?**
Saat ini satu sesi dioperasikan bergantian. Namun semua input tersimpan
otomatis, jadi bisa istirahat dan lanjut kapan saja.

**Apa bedanya sesi Selesai dan Dibatalkan?**
- **Selesai**: stok sudah disesuaikan ke hasil fisik, laporan bisa diexport.
- **Dibatalkan**: sesi dibuang tanpa mengubah stok.

**Apakah opname memengaruhi stok marketplace?**
Ya. Produk yang stoknya berubah otomatis disinkronkan ke Shopee dan TikTok
Shop (dikurangi safety stock). Jika sinkron gagal, sistem akan mencoba ulang.

---

## 6. Ringkasan Status Sesi

| Status         | Arti                                  | Bisa diubah?      | Stok diubah? |
| -------------- | ------------------------------------- | ----------------- | ------------ |
| **Berjalan**   | Sedang dihitung, input masih terbuka  | Ya                | Belum        |
| **Selesai**    | Sudah disetujui, stok sudah dikoreksi | Tidak             | Ya           |
| **Dibatalkan** | Dibatalkan, tidak mengubah stok       | Tidak             | Tidak        |
