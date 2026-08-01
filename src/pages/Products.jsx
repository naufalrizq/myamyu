import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Calendar, PackageSearch, Pencil, Plus, RefreshCw, Save, Search, Trash2 } from "lucide-react";
import { Badge, Btn, Card, DateInput, EmptyState, Field, inputCls, Modal } from "../components/ui";
import { fmtDateShort, fmtIDR } from "../lib/inventory";
import { productsApi, categoriesApi } from "../lib/api";

export function Products({ user }) {
  const queryClient = useQueryClient();
  const [query, setQuery] = useState("");
  const [catFilter, setCatFilter] = useState("all");
  const [modal, setModal] = useState(null);

  const productsQ = useQuery({
    queryKey: ["products"],
    queryFn: () => productsApi.list().then((r) => r.data || []),
  });

  const categoriesQ = useQuery({
    queryKey: ["categories"],
    queryFn: () => categoriesApi.list().then((r) => r.data || []),
  });

  const saveMutation = useMutation({
    mutationFn: async (product) => {
      const saved = product.id
        ? await productsApi.update(product.id, product)
        : await productsApi.create(product);
      if (product._pendingBatches?.length && saved.data?.id) {
        for (const b of product._pendingBatches) {
          await productsApi.createBatch(saved.data.id, b);
        }
      }
      return saved;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["low-stock"] });
      setModal(null);
    },
    onError: (e) => alert("Gagal simpan produk: " + e.message),
  });

  const removeMutation = useMutation({
    mutationFn: (id) => productsApi.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["low-stock"] });
    },
    onError: (e) => alert("Gagal hapus: " + e.message),
  });

  const loading = productsQ.isLoading || categoriesQ.isLoading;
  const error = productsQ.error || categoriesQ.error;
  const products = productsQ.data || [];
  const categories = categoriesQ.data || [];

  const filtered = products.filter((p) => {
    const matchQ = (p.name + p.sku).toLowerCase().includes(query.toLowerCase());
    const matchC = catFilter === "all" || p.categoryId === Number(catFilter);
    return matchQ && matchC;
  });

  const catName = (id) => categories.find((c) => c.id === id)?.name || "-";
  const nearBatch = (p) =>
    (p.batches || []).filter((b) => b.expiredDate).sort((a, b) => new Date(a.expiredDate) - new Date(b.expiredDate))[0];

  const nextSku = (() => {
    let max = 0;
    for (const p of products) {
      const m = /^PDT-(\d+)$/.exec(p.sku);
      if (m) max = Math.max(max, Number(m[1]));
    }
    return `PDT-${String(max + 1).padStart(3, "0")}`;
  })();

  if (loading) return (
    <div className="flex items-center justify-center py-20 text-slate-400 gap-3">
      <RefreshCw className="animate-spin" size={22} />
      <span className="text-sm font-medium">Memuat produk…</span>
    </div>
  );

  if (error) return (
    <Card className="border-red-200 bg-red-50 !p-4">
      <p className="text-sm font-semibold text-red-600">Gagal memuat: {error.message}</p>
      <button onClick={() => { productsQ.refetch(); categoriesQ.refetch(); }} className="mt-2 text-xs font-bold text-red-500 underline">Coba lagi</button>
    </Card>
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="font-heading font-extrabold text-2xl text-slate-800">Produk</h1>
          <p className="text-slate-500 text-sm mt-1">Kelola katalog produk kucing MyaMyu.</p>
        </div>
        <Btn testId="btn-add-product" tone="accent" onClick={() => setModal({ mode: "add" })}>
          <Plus size={17} /> Tambah Produk
        </Btn>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            data-testid="input-search-product"
            className={`${inputCls} pl-10`}
            placeholder="Cari nama atau SKU produk…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <select
          data-testid="select-category-filter"
          className={`${inputCls} sm:w-56`}
          value={catFilter}
          onChange={(e) => setCatFilter(e.target.value)}
        >
          <option value="all">Semua Kategori</option>
          {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
      </div>

      {filtered.length === 0 ? (
        <Card>
          <EmptyState icon={PackageSearch} text="Produk tidak ditemukan. Coba kata kunci lain atau tambah produk baru." />
        </Card>
      ) : (
        <>
          <div className="hidden md:block rounded-lg border border-slate-200/80 overflow-hidden shadow-sm bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
                  <th className="text-left px-4 py-3">Produk</th>
                  <th className="text-left px-4 py-3">Kategori</th>
                  <th className="text-right px-4 py-3">Stok</th>
                  <th className="text-right px-4 py-3">Harga Jual</th>
                  <th className="text-right px-4 py-3">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => {
                  const low = p.currentStock <= p.minStock;
                  const near = nearBatch(p);
                  return (
                    <tr key={p.id} className="border-t border-slate-100 hover:bg-slate-50">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <div className="font-bold text-slate-800 truncate max-w-[260px]">{p.name}</div>
                              {p.isPerishable && <Badge tone="warn">Mudah Kedaluwarsa</Badge>}
                            </div>
                            <div className="text-xs text-slate-400 mt-0.5">SKU {p.sku}</div>
                            {near && (
                              <div className="text-xs text-slate-500 mt-0.5">
                                Exp {fmtDateShort(near.expiredDate)}{near.batchCode ? ` · ${near.batchCode}` : ""}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-500">{catName(p.categoryId)}</td>
                      <td className="px-4 py-3 text-right">
                        {low
                          ? <Badge tone="danger">{p.currentStock} {p.unit}</Badge>
                          : <span className="font-bold text-slate-700">{p.currentStock} {p.unit}</span>}
                      </td>
                      <td className="px-4 py-3 text-right text-slate-700 font-semibold">{fmtIDR(p.sellingPrice)}</td>
                      <td className="px-4 py-3">
                        <div className="flex justify-end gap-1">
                          <button data-testid={`btn-edit-${p.id}`}
                            onClick={() => setModal({ mode: "edit", product: p })}
                            className="p-2 rounded-lg hover:bg-slate-100 min-h-[44px] min-w-[44px] flex items-center justify-center">
                            <Pencil size={15} className="text-slate-500" />
                          </button>
                          <button data-testid={`btn-delete-${p.id}`}
                            onClick={() => { if (confirm("Yakin hapus produk ini?")) removeMutation.mutate(p.id); }}
                            className="p-2 rounded-lg hover:bg-red-50 min-h-[44px] min-w-[44px] flex items-center justify-center">
                            <Trash2 size={15} className="text-red-400" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="md:hidden grid grid-cols-1 gap-3">
            {filtered.map((p) => {
              const low = p.currentStock <= p.minStock;
              const near = nearBatch(p);
              return (
                <Card key={p.id} className="!p-4">
                  <div className="flex gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="font-bold text-slate-800 leading-snug">{p.name}</div>
                        {p.isPerishable && <Badge tone="warn">Mudah Kedaluwarsa</Badge>}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">SKU {p.sku} · {catName(p.categoryId)}</div>
                      {near && (
                        <div className="text-xs text-slate-500 mt-1">
                          Exp {fmtDateShort(near.expiredDate)}{near.batchCode ? ` · ${near.batchCode}` : ""}
                        </div>
                      )}
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        {low ? <Badge tone="danger">{p.currentStock} {p.unit}</Badge> : <Badge tone="ok">{p.currentStock} {p.unit}</Badge>}
                        <span className="text-sm font-bold text-slate-700">{fmtIDR(p.sellingPrice)}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <button onClick={() => setModal({ mode: "edit", product: p })}
                        className="p-2.5 rounded-lg bg-slate-50 min-h-[44px] min-w-[44px] flex items-center justify-center">
                        <Pencil size={15} className="text-slate-600" />
                      </button>
                      <button onClick={() => { if (confirm("Yakin hapus produk ini?")) removeMutation.mutate(p.id); }}
                        className="p-2.5 rounded-lg bg-red-50 min-h-[44px] min-w-[44px] flex items-center justify-center">
                        <Trash2 size={15} className="text-red-400" />
                      </button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </>
      )}

      {modal && (
        <ProductModal
          categories={categories}
          initial={modal.product}
          nextSku={nextSku}
          onClose={() => setModal(null)}
          onSave={(product) => saveMutation.mutate(product)}
        />
      )}
    </div>
  );
}

function ProductModal({ initial, categories, onClose, onSave, nextSku }) {
  const queryClient = useQueryClient();
  const blank = { sku: nextSku || "", name: "", categoryId: categories[0]?.id || "", unit: "pcs", purchasePrice: 0, sellingPrice: 0, minStock: 5, imageUrl: "", isPerishable: false };
  const [f, setF] = useState(initial ? { ...initial } : blank);
  const [saving, setSaving] = useState(false);
  const [batchPanel, setBatchPanel] = useState(false);
  const [pendingBatches, setPendingBatches] = useState([]);

  const batchesQ = useQuery({
    queryKey: ["product-batches", initial?.id],
    queryFn: () => productsApi.listBatches(initial.id).then((r) => r.data || []),
    enabled: !!initial?.id,
  });

  const addBatchMutation = useMutation({
    mutationFn: (data) => productsApi.createBatch(initial.id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["product-batches", initial?.id] }),
  });

  const deleteBatchMutation = useMutation({
    mutationFn: (batchId) => productsApi.deleteBatch(initial.id, batchId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["product-batches", initial?.id] }),
  });

  const batchCount = initial?.id ? batchesQ.data?.length || 0 : pendingBatches.length;

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const setNum = (k) => (e) => setF({ ...f, [k]: Number(e.target.value) });
  const setPrice = (k) => (e) => setF({ ...f, [k]: Number(String(e.target.value).replace(/\D/g, "")) || 0 });
  const priceVal = (n) => (n ? Number(n).toLocaleString("id-ID") : "");

  const handleSave = async () => {
    setSaving(true);
    try { await onSave({ ...f, _pendingBatches: pendingBatches }); } finally { setSaving(false); }
  };

  return (
    <Modal title={initial ? "Edit Produk" : "Tambah Produk"} onClose={onClose} wide>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Nama Produk">
          <input data-testid="input-product-name" className={inputCls} value={f.name} onChange={set("name")} />
        </Field>
        <Field label="SKU">
          <input data-testid="input-product-sku" className={inputCls} value={f.sku} onChange={set("sku")} />
        </Field>
        <Field label="Kategori">
          <select data-testid="select-product-category" className={inputCls} value={f.categoryId} onChange={(e) => setF({ ...f, categoryId: Number(e.target.value) })}>
            {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </Field>
        <Field label="Satuan">
          <select data-testid="select-product-unit" className={inputCls} value={f.unit} onChange={set("unit")}>
            {["pcs", "kg", "sachet", "dus"].map((u) => <option key={u} value={u}>{u}</option>)}
          </select>
        </Field>
        <Field label="Harga Beli (Rp)">
          <input data-testid="input-purchase-price" inputMode="numeric" className={inputCls} value={priceVal(f.purchasePrice)} onChange={setPrice("purchasePrice")} />
        </Field>
        <Field label="Harga Jual (Rp)">
          <input data-testid="input-selling-price" inputMode="numeric" className={inputCls} value={priceVal(f.sellingPrice)} onChange={setPrice("sellingPrice")} />
        </Field>
        <Field label="Stok Minimum">
          <input data-testid="input-min-stock" type="number" className={inputCls} value={f.minStock} onChange={setNum("minStock")} />
        </Field>
        <div className="sm:col-span-2 flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3">
          <input id="perishable" type="checkbox" data-testid="checkbox-perishable" className="mt-0.5 w-5 h-5"
            checked={f.isPerishable} onChange={(e) => setF({ ...f, isPerishable: e.target.checked })} />
          <label htmlFor="perishable" className="text-sm font-semibold text-slate-600">
            Produk mudah kedaluwarsa (makanan basah / obat)
          </label>
        </div>
      </div>

      {(initial?.id || f.isPerishable) && (
        <div className="mt-6 border-t border-slate-200 pt-4">
          <button onClick={() => setBatchPanel((v) => !v)} className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-slate-900">
            <Calendar size={16} />
            Manajemen Batch / Kedaluwarsa {batchCount ? `(${batchCount})` : ""}
            <span className="text-slate-400 ml-1">{batchPanel ? "▲" : "▼"}</span>
          </button>
          {batchPanel && (
            <div className="mt-3 space-y-2">
              {initial?.id ? (
                <>
                  {batchesQ.isLoading && <p className="text-xs text-slate-400">Memuat batch…</p>}
                  {(batchesQ.data || []).map((b) => {
                    const expired = b.expiredDate && new Date(b.expiredDate) < new Date();
                    const daysLeft = b.expiredDate ? Math.ceil((new Date(b.expiredDate) - new Date()) / 86400000) : null;
                    return (
                      <div key={b.id} className="flex items-center gap-3 bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                        <div className="flex-1 min-w-0 text-sm">
                          <span className="font-semibold text-slate-700">{b.batchCode || "Tanpa kode"}</span>
                          <span className="text-slate-400 ml-2">×{b.quantity}</span>
                          {b.expiredDate && (
                            <span className={`ml-2 text-xs ${expired ? "text-red-500" : daysLeft <= 30 ? "text-amber-500" : "text-slate-400"}`}>
                              {expired ? "Sudah expired" : `${daysLeft} hari lagi`} ({fmtDateShort(b.expiredDate)})
                            </span>
                          )}
                        </div>
                        <button onClick={() => { if (confirm("Hapus batch ini?")) deleteBatchMutation.mutate(b.id); }}
                          className="p-1.5 rounded-lg hover:bg-red-50 min-h-[32px] min-w-[32px] flex items-center justify-center">
                          <Trash2 size={13} className="text-red-400" />
                        </button>
                      </div>
                    );
                  })}
                  <AddBatchForm onAdd={(data) => addBatchMutation.mutate(data)} />
                </>
              ) : (
                <>
                  {pendingBatches.length === 0 && (
                    <p className="text-xs text-slate-400">Belum ada batch. Batch akan disimpan setelah produk dibuat.</p>
                  )}
                  {pendingBatches.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                      <div className="flex-1 min-w-0 text-sm">
                        <span className="font-semibold text-slate-700">{b.batchCode || "Tanpa kode"}</span>
                        <span className="text-slate-400 ml-2">×{b.quantity}</span>
                        {b.expiredDate && <span className="ml-2 text-xs text-slate-500">{fmtDateShort(b.expiredDate)}</span>}
                      </div>
                      <button onClick={() => setPendingBatches(pendingBatches.filter((_, j) => j !== i))}
                        className="p-1.5 rounded-lg hover:bg-red-50 min-h-[32px] min-w-[32px] flex items-center justify-center">
                        <Trash2 size={13} className="text-red-400" />
                      </button>
                    </div>
                  ))}
                  <AddBatchForm onAdd={(data) => setPendingBatches([...pendingBatches, data])} />
                </>
              )}
            </div>
          )}
        </div>
      )}

      <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 mt-6">
        <Btn tone="ghost" className="w-full sm:w-auto" onClick={onClose}>Batal</Btn>
        <Btn tone="accent" className="w-full sm:w-auto" testId="btn-save-product"
          disabled={!f.name.trim() || !f.sku.trim() || saving}
          onClick={handleSave}>
          <Save size={15} /> {saving ? "Menyimpan…" : "Simpan"}
        </Btn>
      </div>
    </Modal>
  );
}

function AddBatchForm({ onAdd }) {
  const [batchCode, setBatchCode] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [expiredDate, setExpiredDate] = useState("");

  const handleAdd = () => {
    if (!quantity || quantity <= 0) return;
    onAdd({ batchCode: batchCode || null, quantity: Number(quantity), expiredDate: expiredDate || null });
    setBatchCode("");
    setQuantity(0);
    setExpiredDate("");
  };

  return (
    <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
      <div className="flex flex-col sm:flex-row gap-2 sm:items-end">
        <label className="flex-1">
          <span className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Kode batch <span className="normal-case font-medium text-slate-400">(opsional)</span></span>
          <input className={inputCls + " text-xs"} placeholder="mis. B1, LOT0326" value={batchCode} onChange={(e) => setBatchCode(e.target.value)} />
        </label>
        <label className="sm:w-28">
          <span className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Jumlah</span>
          <input type="number" min="1" className={inputCls + " text-xs"} placeholder="Barang" value={quantity || ""} onChange={(e) => setQuantity(Number(e.target.value))} />
        </label>
        <label className="sm:w-40">
          <span className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Tanggal expired</span>
          <DateInput className="text-xs" value={expiredDate} onChange={setExpiredDate} />
        </label>
        <Btn tone="accent" className="text-xs whitespace-nowrap" disabled={!quantity || quantity <= 0} onClick={handleAdd}>
          <Plus size={13} /> Tambah Batch
        </Btn>
      </div>
      <p className="text-[11px] text-slate-500 mt-2">
        "Jumlah" = banyaknya unit barang pada batch ini. Kode batch & tanggal expired boleh dikosongkan.
      </p>
    </div>
  );
}
