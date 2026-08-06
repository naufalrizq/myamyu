import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ChevronLeft, Circle, ClipboardCheck, ClipboardList, FileSpreadsheet, FileText, Loader2, Plus, RefreshCw, ShieldCheck, X } from "lucide-react";
import { Badge, Btn, Card, EmptyState, inputCls } from "../components/ui";
import { opnameApi } from "../lib/api";
const getExportExcel = () => import("../lib/export").then((m) => m.exportOpnameToExcel);
const getExportPdf = () => import("../lib/export").then((m) => m.exportOpnameToPdf);

export function Opname({ user }) {
  const queryClient = useQueryClient();
  const [activeId, setActiveId] = useState(null);

  const sessionsQ = useQuery({
    queryKey: ["opname-sessions"],
    queryFn: () => opnameApi.list().then((r) => r.data || []),
  });

  const activeSessionQ = useQuery({
    queryKey: ["opname-session", activeId],
    queryFn: () => opnameApi.get(activeId).then((r) => r.data),
    enabled: !!activeId,
  });

  const createMutation = useMutation({
    mutationFn: () => opnameApi.create({ createdById: user?.id }),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["opname-sessions"] });
      setActiveId(res.data.id);
    },
    onError: (e) => alert("Gagal buat sesi: " + e.message),
  });

  const updateItemMutation = useMutation({
    mutationFn: ({ sessionId, productId, patch }) =>
      opnameApi.updateItem(sessionId, productId, patch),
    onMutate: async ({ sessionId, productId, patch }) => {
      await queryClient.cancelQueries({ queryKey: ["opname-session", sessionId] });
      const prev = queryClient.getQueryData(["opname-session", sessionId]);
      if (prev) {
        queryClient.setQueryData(["opname-session", sessionId], (old) => ({
          ...old,
          items: old.items.map((it) =>
            it.productId === productId
              ? {
                  ...it,
                  ...patch,
                  difference:
                    patch.physicalStock !== null && patch.physicalStock !== undefined
                      ? Number(patch.physicalStock) - it.systemStock
                      : null,
                }
              : it
          ),
        }));
      }
      return { prev };
    },
    onError: (e, vars, context) => {
      if (context?.prev) queryClient.setQueryData(["opname-session", vars.sessionId], context.prev);
      alert("Gagal update item: " + e.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["opname-sessions"] });
    },
  });

  const approveMutation = useMutation({
    mutationFn: (sessionId) => opnameApi.approve(sessionId, { approvedById: user?.id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["opname-sessions"] });
      queryClient.invalidateQueries({ queryKey: ["opname-session", activeId] });
      queryClient.invalidateQueries({ queryKey: ["low-stock"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard-summary"] });
      setActiveId(null);
    },
    onError: (e) => alert("Gagal finalisasi: " + e.message),
  });

  const cancelMutation = useMutation({
    mutationFn: (sessionId) => opnameApi.cancel(sessionId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["opname-sessions"] });
      queryClient.invalidateQueries({ queryKey: ["opname-session", activeId] });
      setActiveId(null);
    },
    onError: (e) => alert("Gagal batalkan sesi: " + e.message),
  });

  const loading = sessionsQ.isLoading && !sessionsQ.data;
  const error = sessionsQ.error;
  const sessions = sessionsQ.data || [];

  if (loading) return (
    <div className="flex items-center justify-center py-20 text-slate-400 gap-3">
      <RefreshCw className="animate-spin" size={22} />
      <span className="text-sm font-medium">Memuat sesi opname…</span>
    </div>
  );

  if (error) return (
    <Card className="border-red-200 bg-red-50 !p-4">
      <p className="text-sm font-semibold text-red-600">Gagal memuat: {error.message}</p>
      <button onClick={() => sessionsQ.refetch()} className="mt-2 text-xs font-bold text-red-500 underline">Coba lagi</button>
    </Card>
  );

  if (activeId) {
    if (!activeSessionQ.data) return (
      <div className="flex items-center justify-center py-20 text-slate-400 gap-3">
        <RefreshCw className="animate-spin" size={22} />
        <span className="text-sm font-medium">Memuat sesi…</span>
      </div>
    );
    return (
      <OpnameDetail
        session={activeSessionQ.data}
        onBack={() => { setActiveId(null); }}
        onUpdateItem={(productId, patch) => updateItemMutation.mutate({ sessionId: activeId, productId, patch })}
        onApprove={() => approveMutation.mutate(activeId)}
        onCancel={() => cancelMutation.mutate(activeId)}
      />
    );
  }

  const inProgress = sessions.find((s) => s.status === "in_progress");

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="font-heading font-extrabold text-2xl text-slate-800">Stock Opname</h1>
          <p className="text-slate-500 text-sm mt-1">Hitung stok fisik dan bandingkan dengan sistem.</p>
        </div>
        {inProgress ? (
          <Btn tone="accent" testId="btn-continue-opname" onClick={() => setActiveId(inProgress.id)}>
            <ClipboardList size={17} /> Lanjutkan Sesi Berjalan
          </Btn>
        ) : (
          <Btn tone="accent" testId="btn-new-opname" onClick={() => createMutation.mutate()}>
            <Plus size={17} /> Mulai Sesi Baru
          </Btn>
        )}
      </div>

      {sessions.length === 0 ? (
        <Card>
          <EmptyState icon={ClipboardCheck} text="Belum ada sesi opname. Mulai sesi baru untuk menghitung stok fisik." />
        </Card>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[...sessions].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((s) => (
            <SessionCard key={s.id} session={s} onClick={() => setActiveId(s.id)} />
          ))}
        </div>
      )}
    </div>
  );
}

function SessionCard({ session: s, onClick }) {
  const [exporting, setExporting] = useState(false);
  const isDone = s.status === "completed";
  const isCancelled = s.status === "cancelled";

  const handleExportExcel = async (e) => {
    e.stopPropagation();
    setExporting(true);
    try {
      const res = await opnameApi.get(s.id);
      const exportFn = await getExportExcel();
      await exportFn(res.data);
    } catch (err) {
      alert("Gagal export: " + err.message);
    } finally {
      setExporting(false);
    }
  };

  const handleExportPdf = async (e) => {
    e.stopPropagation();
    try {
      const res = await opnameApi.get(s.id);
      const exportFn = await getExportPdf();
      exportFn(res.data);
    } catch (err) {
      alert("Gagal export: " + err.message);
    }
  };

  return (
    <Card className="!p-4 cursor-pointer hover:shadow-md transition-shadow" onClick={onClick}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="font-heading font-extrabold text-slate-800">{s.code}</div>
          <div className="text-xs text-slate-500 mt-0.5">{s.title}</div>
        </div>
        <Badge tone={isDone ? "ok" : isCancelled ? "danger" : "warn"}>
          {isDone ? "Selesai" : isCancelled ? "Dibatalkan" : "Berjalan"}
        </Badge>
      </div>
      <div className="flex items-center justify-between mt-3 text-xs text-slate-500">
        <span>{s.countedItems}/{s.totalItems} produk dihitung</span>
        {s.diffCount > 0 && (
          <span className="font-bold" style={{ color: "var(--c-accent)" }}>
            {s.diffCount} selisih
          </span>
        )}
      </div>
      {isDone && (
        <div className="flex gap-2 mt-3 pt-3 border-t border-slate-100" onClick={(e) => e.stopPropagation()}>
          <button onClick={handleExportExcel} disabled={exporting}
            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold py-2 rounded-lg border border-slate-200 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-colors">
            {exporting ? <Loader2 size={13} className="animate-spin" /> : <FileSpreadsheet size={13} />}
            Excel
          </button>
          <button onClick={handleExportPdf}
            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold py-2 rounded-lg border border-slate-200 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors">
            <FileText size={13} /> PDF
          </button>
        </div>
      )}
    </Card>
  );
}

function OpnameDetail({ session, onBack, onUpdateItem, onApprove, onCancel }) {
  const isDone = session.status === "completed";
  const isCancelled = session.status === "cancelled";
  const isInProgress = !isDone && !isCancelled;
  const countedAll = session.items?.every((i) => i.physicalStock !== null && i.physicalStock !== undefined);
  const [approving, setApproving] = useState(false);
  const [exporting, setExporting] = useState(false);

  const handleApprove = async () => {
    setApproving(true);
    try { await onApprove(); } finally { setApproving(false); }
  };

  const handleCancel = () => {
    if (window.confirm("Batalkan sesi opname ini? Data perhitungan yang sudah diinput akan diabaikan dan tidak memengaruhi stok.")) {
      onCancel();
    }
  };

  const handleExportExcel = async () => {
    setExporting(true);
    try {
      const exportFn = await getExportExcel();
      await exportFn(session);
    } catch (e) { alert("Gagal export Excel: " + e.message); }
    finally { setExporting(false); }
  };

  const handleExportPdf = async () => {
    try {
      const exportFn = await getExportPdf();
      exportFn(session);
    } catch (e) { alert("Gagal export PDF: " + e.message); }
  };

  return (
    <div className="space-y-5">
      <button data-testid="btn-back-opname" onClick={onBack}
        className="flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-slate-700">
        <ChevronLeft size={16} /> Kembali ke daftar sesi
      </button>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="font-heading font-extrabold text-2xl text-slate-800">{session.code}</h1>
          <p className="text-slate-500 text-sm mt-1">
            {session.title} · dibuat oleh {session.creator?.name || "sistem"}
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Badge tone={isDone ? "ok" : isCancelled ? "danger" : "warn"}>
            {isDone ? "Selesai & Disetujui" : isCancelled ? "Dibatalkan" : "Sedang Berjalan"}
          </Badge>
          <Btn tone="ghost" disabled={exporting} onClick={handleExportExcel}
            className="text-xs px-3 py-2 min-h-[36px]">
            {exporting ? <Loader2 size={14} className="animate-spin" /> : <FileSpreadsheet size={14} />}
            Excel
          </Btn>
          <Btn tone="ghost" onClick={handleExportPdf}
            className="text-xs px-3 py-2 min-h-[36px]">
            <FileText size={14} /> PDF
          </Btn>
        </div>
      </div>

      <div className="space-y-2">
        {session.items?.map((it) => {
          const p = it.product;
          if (!p) return null;
          const diff = it.physicalStock === null || it.physicalStock === undefined
            ? null
            : (it.difference ?? it.physicalStock - it.systemStock);
          return (
            <Card key={it.productId} className="!p-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-slate-800 leading-snug">{p.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    SKU {p.sku} · Stok sistem: <strong>{it.systemStock} {p.unit}</strong>
                    {p.isPerishable && p.batches?.length > 0 && (
                      <span className="ml-2 text-amber-600">
                        · Exp: {(() => {
                          const nearest = p.batches.find((b) => b.expiredDate);
                          if (!nearest) return null;
                          const days = Math.ceil((new Date(nearest.expiredDate) - new Date()) / 86400000);
                          return days <= 0 ? "Sudah expired" : `${days} hari lagi`;
                        })()}
                      </span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_auto] sm:flex sm:items-center gap-3">
                  <div className="sm:w-28">
                    <input
                      data-testid={`input-physical-${p.id}`}
                      type="number"
                      disabled={isDone}
                      className={`${inputCls} text-center font-bold`}
                      placeholder="Fisik"
                      value={it.physicalStock === null || it.physicalStock === undefined ? "" : it.physicalStock}
                      onChange={(e) => onUpdateItem(it.productId, {
                        physicalStock: e.target.value === "" ? null : Number(e.target.value),
                      })}
                    />
                  </div>
                  <div className="min-w-[74px] flex items-center justify-end">
                    {diff === null
                      ? <Circle size={16} className="text-slate-300" />
                      : diff === 0
                        ? <Badge tone="ok">Sesuai</Badge>
                        : <Badge tone="danger">{diff > 0 ? `+${diff}` : diff}</Badge>}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {isInProgress && (
        <div className="sticky bottom-20 md:bottom-4 flex justify-end">
          <Card className="!p-3 w-full sm:w-auto flex flex-col sm:flex-row sm:items-center gap-3 shadow-lg">
            <span className="text-xs font-semibold text-slate-600 hidden sm:inline">
              {countedAll ? "Semua produk sudah dihitung." : "Beberapa produk belum diisi stok fisiknya."}
            </span>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Btn tone="ghost" className="w-full sm:w-auto" onClick={handleCancel}>
                <X size={16} /> Batalkan
              </Btn>
              <Btn tone="accent" className="w-full sm:w-auto" testId="btn-approve-opname"
                disabled={approving} onClick={handleApprove}>
                <ShieldCheck size={16} />
                {approving ? "Memproses…" : "Selesaikan & Setujui"}
              </Btn>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
