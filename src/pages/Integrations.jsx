import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  AlertTriangle, CheckCircle2, ExternalLink, Link2, Link2Off,
  Loader2, Plus, RefreshCw, Send, Store, Trash2, XCircle
} from "lucide-react";
import { Badge, Btn, Card, EmptyState, Field, inputCls, Modal } from "../components/ui";
import { marketplaceApi, productsApi } from "../lib/api";
import { fmtDate } from "../lib/inventory";

export function Integrations() {
  const queryClient = useQueryClient();
  const [mappingModal, setMappingModal] = useState(null);
  const [syncing, setSyncing] = useState(false);

  const statusQ = useQuery({
    queryKey: ["marketplace-status"],
    queryFn: () => marketplaceApi.getStatus().then((r) => r),
  });

  const productsQ = useQuery({
    queryKey: ["products"],
    queryFn: () => productsApi.list().then((r) => r.data || []),
  });

  const syncJobsQ = useQuery({
    queryKey: ["sync-jobs"],
    queryFn: () => marketplaceApi.getSyncJobs().then((r) => r.data || []),
  });

  const mappingsQ = useQuery({
    queryKey: ["marketplace-mappings"],
    queryFn: () => marketplaceApi.getMappings().then((r) => r.data || []),
  });

  const deleteMappingMutation = useMutation({
    mutationFn: (id) => marketplaceApi.deleteMapping(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["marketplace-mappings"] }),
  });

  const handleSyncAll = async () => {
    setSyncing(true);
    try {
      await marketplaceApi.syncAll();
      queryClient.invalidateQueries({ queryKey: ["sync-jobs"] });
    } catch (e) {
      alert(e.message);
    } finally {
      setSyncing(false);
    }
  };

  const handleSyncProduct = async (productId) => {
    try {
      await marketplaceApi.syncStock(productId);
      queryClient.invalidateQueries({ queryKey: ["sync-jobs"] });
      queryClient.invalidateQueries({ queryKey: ["marketplace-mappings"] });
    } catch (e) {
      alert(e.message);
    }
  };

  const loading = statusQ.isLoading || productsQ.isLoading || syncJobsQ.isLoading;
  const error = statusQ.error || productsQ.error || syncJobsQ.error;
  const status = statusQ.data;
  const products = productsQ.data || [];
  const syncJobs = syncJobsQ.data || [];
  const mappings = mappingsQ.data || [];

  if (loading) return (
    <div className="flex items-center justify-center py-20 text-slate-400 gap-3">
      <RefreshCw className="animate-spin" size={22} />
      <span className="text-sm font-medium">Memuat status integrasi…</span>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="font-heading font-extrabold text-2xl text-slate-800">Integrasi Marketplace</h1>
          <p className="text-slate-500 text-sm mt-1">
            Sinkronisasi stok MyaMyu ke Shopee dan Tokopedia & Shop (TikTok Shop).
          </p>
        </div>
        <div className="flex gap-2">
          <Btn tone="ghost" onClick={() => { statusQ.refetch(); productsQ.refetch(); syncJobsQ.refetch(); mappingsQ.refetch(); }}>
            <RefreshCw size={16} /> Refresh
          </Btn>
          <Btn tone="accent" disabled={syncing} onClick={handleSyncAll}>
            {syncing ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            Sync Semua
          </Btn>
        </div>
      </div>

      {error && (
        <Card className="!p-4 border-red-200 bg-red-50">
          <div className="flex items-center gap-2 text-sm font-semibold text-red-600">
            <XCircle size={18} /> {error.message}
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {status?.marketplaces?.map((mp) => (
          <MarketplaceCard
            key={mp.id}
            marketplace={mp}
            onConnect={async () => {
              try {
                const res = mp.id === "shopee"
                  ? await marketplaceApi.getShopeeAuthUrl()
                  : await marketplaceApi.getTiktokAuthUrl();
                window.open(res.url, "_blank", "noopener,noreferrer");
              } catch (e) { alert(e.message); }
            }}
            onDisconnect={async () => {
              if (!confirm(`Yakin putuskan koneksi ${mp.name}?`)) return;
              try {
                if (mp.id === "shopee") await marketplaceApi.disconnectShopee();
                else await marketplaceApi.disconnectTiktok();
                statusQ.refetch();
                mappingsQ.refetch();
              } catch (e) { alert(e.message); }
            }}
          />
        ))}
      </div>

      <SetupGuide />

      <Card>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-heading font-extrabold text-slate-800">Mapping Produk ke Channel</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Hubungkan SKU internal MyaMyu ke product ID di masing-masing marketplace.
            </p>
          </div>
          <Btn tone="ghost" onClick={() => setMappingModal({ product: null })}>
            <Plus size={15} /> Tambah Mapping
          </Btn>
        </div>

        {mappings.length === 0 ? (
          <EmptyState icon={Store} text="Belum ada mapping produk. Tambah mapping untuk mulai sinkronisasi stok." />
        ) : (
          <div className="space-y-2">
            {mappings.map((m) => {
              const statusColor = { synced: "ok", error: "danger", pending: "warn", disabled: "muted" }[m.syncStatus] || "muted";
              return (
                <div key={m.id} className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 px-3 py-3">
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm text-slate-800 truncate">
                      {m.product?.name || "—"} <span className="text-slate-400 font-normal">({m.product?.sku})</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {m.marketplaceAccount?.marketplace === "shopee" ? "Shopee" : "TikTok Shop"}
                      {" · "}ID: {m.externalProductId}
                      {m.externalVariantId && ` · Variant: ${m.externalVariantId}`}
                      {" · "}Safety stock: {m.safetyStock}
                    </div>
                    {m.lastSyncedAt && (
                      <div className="text-xs text-slate-400">Sync terakhir: {fmtDate(m.lastSyncedAt)} → stok {m.lastSyncedStock}</div>
                    )}
                    {m.syncError && (
                      <div className="text-xs text-red-500 mt-0.5 truncate">Error: {m.syncError}</div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge tone={statusColor}>{m.syncStatus}</Badge>
                    <button onClick={() => handleSyncProduct(m.productId)}
                      className="p-2 rounded-lg hover:bg-white min-h-[36px] min-w-[36px] flex items-center justify-center" title="Sync sekarang">
                      <Send size={13} className="text-slate-500" />
                    </button>
                    <button onClick={() => { if (confirm("Hapus mapping ini?")) deleteMappingMutation.mutate(m.id); }}
                      className="p-2 rounded-lg hover:bg-red-50 min-h-[36px] min-w-[36px] flex items-center justify-center" title="Hapus mapping">
                      <Trash2 size={13} className="text-red-400" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Card>

      <Card>
        <h2 className="font-heading font-extrabold text-slate-800 mb-4">
          Antrian Sync Stok
          {syncJobs.length > 0 && (
            <span className="ml-2 text-xs font-normal text-slate-400">({syncJobs.length} job terbaru)</span>
          )}
        </h2>
        {syncJobs.length === 0 ? (
          <EmptyState icon={Send} text="Belum ada sync job. Sync akan otomatis berjalan saat stok berubah." />
        ) : (
          <div className="space-y-2">
            {syncJobs.slice(0, 10).map((job) => (
              <SyncJobRow key={job.id} job={job} />
            ))}
          </div>
        )}
      </Card>

      {mappingModal !== null && (
        <AddMappingModal
          products={products}
          status={status}
          initialProduct={mappingModal.product}
          onClose={() => setMappingModal(null)}
          onSaved={() => { mappingsQ.refetch(); syncJobsQ.refetch(); }}
        />
      )}
    </div>
  );
}

function MarketplaceCard({ marketplace, onConnect, onDisconnect }) {
  const isShopee = marketplace.id === "shopee";
  const bgColor = isShopee ? "#ee4d2d" : "#010101";

  return (
    <Card className="space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-extrabold text-lg" style={{ backgroundColor: bgColor }}>
            {isShopee ? "S" : "T"}
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-slate-800">{marketplace.name}</h2>
            <p className="text-xs text-slate-500">{marketplace.mode}</p>
          </div>
        </div>
        <Badge tone={marketplace.connected ? "ok" : marketplace.ready ? "warn" : "muted"}>
          {marketplace.connected ? "Terhubung" : marketplace.ready ? "Siap OAuth" : "Belum Setup"}
        </Badge>
      </div>
      <div className="space-y-1.5 text-sm">
        {marketplace.checks.map((check) => (
          <div key={check.key} className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 border border-slate-100 px-3 py-2">
            <span className="font-semibold text-slate-600">{check.label}</span>
            {check.ok ? <CheckCircle2 size={16} className="text-emerald-600 shrink-0" /> : <XCircle size={16} className="text-amber-500 shrink-0" />}
          </div>
        ))}
      </div>
      {marketplace.connected && marketplace.tokenExpiry && (
        <p className="text-xs text-slate-400">Token berlaku hingga: {fmtDate(marketplace.tokenExpiry)}</p>
      )}
      <div className="flex gap-2 pt-1">
        {marketplace.connected ? (
          <Btn tone="danger" className="flex-1" onClick={onDisconnect}><Link2Off size={15} /> Putuskan</Btn>
        ) : (
          <Btn tone="accent" className="flex-1" disabled={!marketplace.ready} onClick={onConnect}>
            <Link2 size={15} /> {marketplace.ready ? "Hubungkan via OAuth" : "Isi Credential di .env dulu"}
          </Btn>
        )}
      </div>
    </Card>
  );
}

function SetupGuide() {
  const [open, setOpen] = useState(false);
  return (
    <Card className="border-blue-100 bg-blue-50/50">
      <button onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left">
        <div className="flex items-center gap-2">
          <AlertTriangle size={16} className="text-blue-500 shrink-0" />
          <span className="font-bold text-sm text-blue-700">Cara Setup Integrasi</span>
        </div>
        <span className="text-xs text-blue-500 font-semibold">{open ? "Tutup" : "Lihat"}</span>
      </button>
      {open && (
        <div className="mt-4 space-y-4 text-sm text-slate-700">
          <div>
            <p className="font-bold text-slate-800 mb-1">1. Shopee Open Platform</p>
            <ol className="list-decimal ml-4 space-y-1 text-slate-600">
              <li>Daftar di <a href="https://open.shopee.com" target="_blank" rel="noreferrer" className="text-blue-600 underline inline-flex items-center gap-0.5">open.shopee.com <ExternalLink size={11} /></a></li>
              <li>Buat App → dapatkan Partner ID dan Partner Key</li>
              <li>Isi <code className="bg-slate-100 px-1 rounded text-xs">SHOPEE_PARTNER_ID</code> dan <code className="bg-slate-100 px-1 rounded text-xs">SHOPEE_PARTNER_KEY</code> di .env</li>
              <li>Restart backend, lalu klik "Hubungkan via OAuth"</li>
            </ol>
          </div>
          <div>
            <p className="font-bold text-slate-800 mb-1">2. TikTok Shop / Tokopedia & Shop</p>
            <ol className="list-decimal ml-4 space-y-1 text-slate-600">
              <li>Daftar di <a href="https://partner.tiktokshop.com" target="_blank" rel="noreferrer" className="text-blue-600 underline inline-flex items-center gap-0.5">partner.tiktokshop.com <ExternalLink size={11} /></a></li>
              <li>Buat App → dapatkan App Key dan App Secret</li>
              <li>Isi <code className="bg-slate-100 px-1 rounded text-xs">TTS_APP_KEY</code> dan <code className="bg-slate-100 px-1 rounded text-xs">TTS_APP_SECRET</code> di .env</li>
              <li>Restart backend, lalu klik "Hubungkan via OAuth"</li>
            </ol>
          </div>
          <div>
            <p className="font-bold text-slate-800 mb-1">3. Webhook (untuk terima order real-time)</p>
            <p className="text-slate-600">Gunakan ngrok untuk expose backend lokal:</p>
            <code className="block bg-slate-100 rounded px-3 py-2 text-xs mt-1">ngrok http 3001</code>
            <p className="text-slate-600 mt-1">Set URL webhook di dashboard marketplace ke:</p>
            <code className="block bg-slate-100 rounded px-3 py-2 text-xs mt-1">
              https://xxxx.ngrok-free.app/api/marketplaces/webhooks/shopee<br />
              https://xxxx.ngrok-free.app/api/marketplaces/webhooks/tiktok
            </code>
          </div>
        </div>
      )}
    </Card>
  );
}

function SyncJobRow({ job }) {
  const statusColor = { done: "ok", failed: "danger", processing: "warn", queued: "muted" }[job.status] || "muted";
  const mp = job.marketplaceAccount?.marketplace === "shopee" ? "Shopee" : "TikTok Shop";

  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5 text-sm">
      <div className="flex-1 min-w-0">
        <span className="font-bold text-slate-700">{job.product?.name || "—"}</span>
        <span className="text-slate-400 ml-1.5 text-xs">
          {mp} · stok target: {job.targetStock} · percobaan: {job.attempts}
        </span>
        {job.lastError && <div className="text-xs text-red-500 mt-0.5 truncate">{job.lastError}</div>}
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <Badge tone={statusColor}>{job.status}</Badge>
        <span className="text-xs text-slate-400">{fmtDate(job.createdAt)}</span>
      </div>
    </div>
  );
}

function AddMappingModal({ products, status, initialProduct, onClose, onSaved }) {
  const accounts = status?.marketplaces?.filter((m) => m.connected) || [];
  const [productId, setProductId] = useState(initialProduct?.id || products[0]?.id || "");
  const [marketplace, setMarketplace] = useState(accounts[0]?.id || "shopee");
  const [externalProductId, setExternalProductId] = useState("");
  const [externalVariantId, setExternalVariantId] = useState("");
  const [externalSku, setExternalSku] = useState("");
  const [safetyStock, setSafetyStock] = useState(2);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");

  const handleSave = async () => {
    if (!productId || !externalProductId) {
      setErr("Produk dan External Product ID wajib diisi");
      return;
    }
    setSaving(true);
    setErr("");
    try {
      const BASE = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:3001";
      const accRes = await fetch(`${BASE}/api/marketplaces/accounts`).then((r) => r.json());
      const account = (accRes.data || []).find((a) => a.marketplace === marketplace);
      if (!account) {
        setErr("Marketplace belum terkoneksi. Hubungkan dulu via OAuth.");
        return;
      }
      await marketplaceApi.createMapping({
        productId: Number(productId),
        marketplaceAccountId: account.id,
        externalProductId,
        externalVariantId: externalVariantId || null,
        externalSku: externalSku || null,
        safetyStock: Number(safetyStock),
      });
      onSaved();
      onClose();
    } catch (e) {
      setErr(e.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal title="Tambah Mapping Produk" onClose={onClose}>
      <div className="space-y-4">
        {err && <div className="text-sm text-red-600 font-semibold bg-red-50 rounded-lg px-3 py-2">{err}</div>}
        <Field label="Produk MyaMyu">
          <select className={inputCls} value={productId} onChange={(e) => setProductId(e.target.value)}>
            {products.map((p) => <option key={p.id} value={p.id}>{p.sku} – {p.name}</option>)}
          </select>
        </Field>
        <Field label="Marketplace">
          <select className={inputCls} value={marketplace} onChange={(e) => setMarketplace(e.target.value)}>
            <option value="shopee">Shopee</option>
            <option value="tokopedia_shop">TikTok Shop / Tokopedia & Shop</option>
          </select>
        </Field>
        <Field label="External Product ID (item_id / product_id di marketplace)">
          <input className={inputCls} placeholder="Contoh: 987654321" value={externalProductId}
            onChange={(e) => setExternalProductId(e.target.value)} />
        </Field>
        <Field label="External Variant ID (opsional)">
          <input className={inputCls} placeholder="Contoh: 111222333" value={externalVariantId}
            onChange={(e) => setExternalVariantId(e.target.value)} />
        </Field>
        <Field label="External SKU (opsional)">
          <input className={inputCls} placeholder="SKU di marketplace" value={externalSku}
            onChange={(e) => setExternalSku(e.target.value)} />
        </Field>
        <Field label="Safety Stock (stok cadangan, tidak dipublish ke marketplace)">
          <input type="number" min="0" className={inputCls} value={safetyStock}
            onChange={(e) => setSafetyStock(Number(e.target.value))} />
        </Field>
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 mt-6">
        <Btn tone="ghost" className="w-full sm:w-auto" onClick={onClose}>Batal</Btn>
        <Btn tone="accent" className="w-full sm:w-auto" disabled={saving} onClick={handleSave}>
          {saving ? <Loader2 size={15} className="animate-spin" /> : <Plus size={15} />}
          {saving ? "Menyimpan…" : "Simpan Mapping"}
        </Btn>
      </div>
    </Modal>
  );
}
