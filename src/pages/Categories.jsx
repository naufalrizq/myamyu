import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AlertTriangle, Pencil, Plus, RefreshCw, Save, Tag, Trash2 } from "lucide-react";
import { Btn, Card, EmptyState, Field, inputCls, Modal } from "../components/ui";
import { categoriesApi, productsApi } from "../lib/api";

export function Categories() {
  const queryClient = useQueryClient();
  const [modal, setModal] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const categoriesQ = useQuery({
    queryKey: ["categories"],
    queryFn: () => categoriesApi.list().then((r) => r.data || []),
  });

  const productsQ = useQuery({
    queryKey: ["products"],
    queryFn: () => productsApi.list().then((r) => r.data || []),
  });

  const saveMutation = useMutation({
    mutationFn: ({ id, name, description }) =>
      id ? categoriesApi.update(id, { name, description: description || null })
         : categoriesApi.create({ name, description: description || null }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      setModal(null);
    },
    onError: (e) => alert("Gagal simpan kategori: " + e.message),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => categoriesApi.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      setDeleteConfirm(null);
    },
    onError: (e) => {
      setDeleteConfirm(null);
      alert("Gagal hapus: " + e.message);
    },
  });

  const loading = categoriesQ.isLoading || productsQ.isLoading;
  const categories = categoriesQ.data || [];
  const productCounts = {};
  (productsQ.data || []).forEach((p) => {
    if (p.categoryId) productCounts[p.categoryId] = (productCounts[p.categoryId] || 0) + 1;
  });

  const handleDeleteClick = (cat) => {
    const count = productCounts[cat.id] || 0;
    setDeleteConfirm({ ...cat, blocked: count > 0, count });
  };

  if (loading) return (
    <div className="flex items-center justify-center py-20 text-slate-400 gap-3">
      <RefreshCw className="animate-spin" size={22} />
      <span className="text-sm font-medium">Memuat kategori…</span>
    </div>
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="font-heading font-extrabold text-2xl text-slate-800">Kategori Produk</h1>
          <p className="text-slate-500 text-sm mt-1">{categories.length} kategori terdaftar.</p>
        </div>
        <Btn tone="accent" onClick={() => setModal({ mode: "add" })}>
          <Plus size={17} /> Tambah Kategori
        </Btn>
      </div>

      {categoriesQ.error && (
        <Card className="border-red-200 bg-red-50 !p-4">
          <p className="text-sm font-semibold text-red-600">{categoriesQ.error.message}</p>
        </Card>
      )}

      {categories.length === 0 ? (
        <Card><EmptyState icon={Tag} text="Belum ada kategori." /></Card>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {categories.map((cat) => {
            const count = productCounts[cat.id] || 0;
            return (
              <Card key={cat.id} className="!p-4 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--c-soft)" }}>
                    <Tag size={18} style={{ color: "var(--c-primary)" }} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-slate-800 leading-snug">{cat.name}</div>
                    {cat.description && (
                      <div className="text-xs text-slate-500 mt-0.5 line-clamp-2">{cat.description}</div>
                    )}
                    <div className="text-xs text-slate-400 mt-1">{count} produk</div>
                  </div>
                </div>
                <div className="flex gap-1 shrink-0">
                  <button onClick={() => setModal({ mode: "edit", category: cat })}
                    className="p-2 rounded-lg hover:bg-slate-100 min-h-[40px] min-w-[40px] flex items-center justify-center" title="Edit">
                    <Pencil size={14} className="text-slate-500" />
                  </button>
                  <button onClick={() => handleDeleteClick(cat)}
                    className="p-2 rounded-lg hover:bg-red-50 min-h-[40px] min-w-[40px] flex items-center justify-center" title="Hapus">
                    <Trash2 size={14} className="text-red-400" />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      <Card className="border-blue-100 bg-blue-50/50 !p-4">
        <p className="text-xs text-slate-500 leading-relaxed">
          <span className="font-bold text-slate-600">Tip:</span>{" "}
          Kategori yang masih digunakan produk tidak bisa dihapus. Edit nama atau deskripsi bisa dilakukan kapan saja.
        </p>
      </Card>

      {modal && (
        <CategoryModal
          initial={modal.category}
          onClose={() => setModal(null)}
          onSave={(data) => saveMutation.mutate(data)}
        />
      )}

      {deleteConfirm && (
        <Modal title="Hapus Kategori" onClose={() => setDeleteConfirm(null)}>
          <div className="space-y-4">
            {deleteConfirm.blocked ? (
              <div className="flex gap-3 p-4 rounded-lg bg-amber-50 border border-amber-200">
                <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm text-amber-800">Tidak bisa dihapus</p>
                  <p className="text-sm text-amber-700 mt-1">
                    Kategori <strong>"{deleteConfirm.name}"</strong> masih digunakan oleh{" "}
                    <strong>{deleteConfirm.count} produk</strong>.
                    Pindahkan produknya ke kategori lain terlebih dahulu.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                <Trash2 size={20} className="text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm text-red-800">Hapus permanen?</p>
                  <p className="text-sm text-red-700 mt-1">
                    Kategori <strong>"{deleteConfirm.name}"</strong> akan dihapus dan tidak bisa dikembalikan.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 mt-5">
            <Btn tone="ghost" className="w-full sm:w-auto" onClick={() => setDeleteConfirm(null)}>
              {deleteConfirm.blocked ? "Mengerti" : "Batal"}
            </Btn>
            {!deleteConfirm.blocked && (
              <Btn tone="danger" className="w-full sm:w-auto" onClick={() => deleteMutation.mutate(deleteConfirm.id)}>
                <Trash2 size={15} /> Hapus Sekarang
              </Btn>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}

function CategoryModal({ initial, onClose, onSave }) {
  const [name, setName] = useState(initial?.name || "");
  const [description, setDescription] = useState(initial?.description || "");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setSaving(true);
    try { await onSave({ id: initial?.id, name: name.trim(), description: description.trim() }); }
    finally { setSaving(false); }
  };

  return (
    <Modal title={initial ? "Edit Kategori" : "Tambah Kategori"} onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Nama Kategori">
          <input className={inputCls} placeholder="Contoh: Makanan Kering" value={name}
            onChange={(e) => setName(e.target.value)} autoFocus required />
        </Field>
        <Field label="Deskripsi (opsional)">
          <input className={inputCls} placeholder="Contoh: Dry food untuk kucing dewasa"
            value={description} onChange={(e) => setDescription(e.target.value)} />
        </Field>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 pt-2">
          <Btn tone="ghost" className="w-full sm:w-auto" type="button" onClick={onClose}>Batal</Btn>
          <Btn tone="accent" className="w-full sm:w-auto" type="submit" disabled={!name.trim() || saving}>
            <Save size={15} /> {saving ? "Menyimpan…" : "Simpan"}
          </Btn>
        </div>
      </form>
    </Modal>
  );
}
