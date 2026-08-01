import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Boxes, ClipboardCheck, Plus, RefreshCw, Save, TrendingDown, TrendingUp } from "lucide-react";
import { Btn, Card, EmptyState, Field, inputCls, Modal } from "../components/ui";
import { fmtDate } from "../lib/inventory";
import { stockMovementsApi, productsApi } from "../lib/api";

const LIMIT = 30;

export function StockMovements({ user }) {
  const queryClient = useQueryClient();
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);

  const movementsQ = useQuery({
    queryKey: ["stock-movements", page],
    queryFn: () => stockMovementsApi.list({ page, limit: LIMIT }).then((r) => r),
    keepPreviousData: true,
  });

  const productsQ = useQuery({
    queryKey: ["products"],
    queryFn: () => productsApi.list().then((r) => r.data || []),
  });

  const addMutation = useMutation({
    mutationFn: (data) => stockMovementsApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stock-movements"] });
      queryClient.invalidateQueries({ queryKey: ["low-stock"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard-summary"] });
      setPage(1);
      setModal(false);
    },
    onError: (e) => alert("Gagal catat mutasi: " + e.message),
  });

  const loading = movementsQ.isLoading;
  const error = movementsQ.error;
  const movements = movementsQ.data?.data || [];
  const total = movementsQ.data?.pagination?.total || 0;
  const products = productsQ.data || [];

  if (loading && movements.length === 0) return (
    <div className="flex items-center justify-center py-20 text-slate-400 gap-3">
      <RefreshCw className="animate-spin" size={22} />
      <span className="text-sm font-medium">Memuat mutasi stok…</span>
    </div>
  );

  if (error) return (
    <Card className="border-red-200 bg-red-50 !p-4">
      <p className="text-sm font-semibold text-red-600">Gagal memuat: {error.message}</p>
      <button onClick={() => movementsQ.refetch()} className="mt-2 text-xs font-bold text-red-500 underline">Coba lagi</button>
    </Card>
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="font-heading font-extrabold text-2xl text-slate-800">Mutasi Stok</h1>
          <p className="text-slate-500 text-sm mt-1">Catatan stok masuk & keluar · {total} total mutasi</p>
        </div>
        <Btn testId="btn-add-movement" tone="accent" onClick={() => setModal(true)}>
          <Plus size={17} /> Catat Mutasi
        </Btn>
      </div>

      {movements.length === 0 ? (
        <Card>
          <EmptyState icon={Boxes} text="Belum ada mutasi stok. Mulai dengan mencatat stok masuk pertama." />
        </Card>
      ) : (
        <div className="space-y-2">
          {movements.map((m) => {
            const isIn = m.type === "in";
            const isAdj = m.type === "adjustment";
            return (
              <Card key={m.id} className="!p-4 flex items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: isAdj ? "#e2e8f0" : isIn ? "#d1fae5" : "#fee2e2" }}>
                  {isAdj ? <ClipboardCheck size={17} className="text-slate-500" /> :
                    isIn ? <TrendingUp size={17} color="#059669" /> : <TrendingDown size={17} color="#dc2626" />}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-slate-800 leading-snug sm:truncate">
                    {m.product?.name || "Produk dihapus"}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    {fmtDate(m.createdAt)} · oleh {m.creator?.name || "sistem"}
                    {m.note ? ` · ${m.note}` : ""}
                  </div>
                </div>
                <div className="font-heading font-extrabold text-lg shrink-0 leading-none pt-1 sm:pt-0"
                  style={{ color: isAdj ? "#64748b" : isIn ? "#059669" : "#dc2626" }}>
                  {!isAdj && (isIn ? "+" : "-")}{isAdj && m.quantity >= 0 ? "+" : ""}{m.quantity}
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {total > LIMIT && (
        <div className="flex items-center justify-center gap-2 pt-2">
          <Btn tone="ghost" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
            ← Sebelumnya
          </Btn>
          <span className="text-sm text-slate-500 font-semibold">
            {page} / {Math.ceil(total / LIMIT)}
          </span>
          <Btn tone="ghost" disabled={page >= Math.ceil(total / LIMIT)} onClick={() => setPage((p) => p + 1)}>
            Berikutnya →
          </Btn>
        </div>
      )}

      {modal && (
        <MovementModal
          products={products}
          onClose={() => setModal(false)}
          onSave={(data) => addMutation.mutate({ ...data, referenceType: "manual", createdById: user?.id })}
        />
      )}
    </div>
  );
}

function MovementModal({ products, onClose, onSave }) {
  const [productId, setProductId] = useState(products[0]?.id || "");
  const [type, setType] = useState("in");
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try { await onSave({ productId: Number(productId), type, quantity: Number(quantity), note }); }
    finally { setSaving(false); }
  };

  return (
    <Modal title="Catat Mutasi Stok" onClose={onClose}>
      <div className="space-y-4">
        <Field label="Produk">
          <select data-testid="select-movement-product" className={inputCls}
            value={productId} onChange={(e) => setProductId(e.target.value)}>
            {products.map((p) => (
              <option key={p.id} value={p.id}>{p.name} (stok: {p.currentStock})</option>
            ))}
          </select>
        </Field>
        <Field label="Jenis Mutasi">
          <div className="grid grid-cols-2 gap-2">
            <button data-testid="btn-type-in" onClick={() => setType("in")}
              className="min-h-[44px] rounded-lg font-bold text-sm border-2 flex items-center justify-center gap-1.5"
              style={type === "in" ? { borderColor: "#059669", backgroundColor: "#d1fae5", color: "#059669" } : { borderColor: "#e2e8f0", color: "#64748b" }}>
              <TrendingUp size={15} /> Stok Masuk
            </button>
            <button data-testid="btn-type-out" onClick={() => setType("out")}
              className="min-h-[44px] rounded-lg font-bold text-sm border-2 flex items-center justify-center gap-1.5"
              style={type === "out" ? { borderColor: "#dc2626", backgroundColor: "#fee2e2", color: "#dc2626" } : { borderColor: "#e2e8f0", color: "#64748b" }}>
              <TrendingDown size={15} /> Stok Keluar
            </button>
          </div>
        </Field>
        <Field label="Jumlah">
          <input data-testid="input-movement-qty" type="number" min="1" className={inputCls}
            value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </Field>
        <Field label="Catatan (opsional)">
          <input data-testid="input-movement-note" className={inputCls}
            placeholder="Contoh: kiriman dari supplier A"
            value={note} onChange={(e) => setNote(e.target.value)} />
        </Field>
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 mt-6">
        <Btn tone="ghost" className="w-full sm:w-auto" onClick={onClose}>Batal</Btn>
        <Btn tone="accent" className="w-full sm:w-auto" testId="btn-save-movement"
          disabled={!productId || quantity <= 0 || saving}
          onClick={handleSave}>
          <Save size={15} /> {saving ? "Menyimpan…" : "Simpan"}
        </Btn>
      </div>
    </Modal>
  );
}
