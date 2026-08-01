import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  AlertTriangle, Boxes, CalendarX2, CheckCircle2, ChevronRight,
  ClipboardCheck, Package, RefreshCw, TrendingDown, TrendingUp
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend
} from "recharts";
import { Badge, Card, EmptyState } from "../components/ui";
import { fmtDate, fmtIDR } from "../lib/inventory";
import { dashboardApi } from "../lib/api";

export function Dashboard({ user }) {
  const navigate = useNavigate();
  const [chartDays, setChartDays] = useState(30);

  const summaryQ = useQuery({
    queryKey: ["dashboard-summary"],
    queryFn: () => dashboardApi.summary().then((r) => r.data),
  });

  const lowStockQ = useQuery({
    queryKey: ["low-stock"],
    queryFn: () => dashboardApi.lowStock().then((r) => r.data || []),
  });

  const chartQ = useQuery({
    queryKey: ["stock-chart", chartDays],
    queryFn: () => dashboardApi.stockChart(chartDays).then((r) => r.data || []),
  });

  const expiringQ = useQuery({
    queryKey: ["expiring-batches"],
    queryFn: () => dashboardApi.expiringBatches().then((r) => r.data || []),
  });

  const loading = summaryQ.isLoading || lowStockQ.isLoading || chartQ.isLoading || expiringQ.isLoading;
  const error = summaryQ.error || lowStockQ.error || chartQ.error || expiringQ.error;

  if (loading) return (
    <div className="flex items-center justify-center py-20 text-slate-400 gap-3">
      <RefreshCw className="animate-spin" size={22} />
      <span className="text-sm font-medium">Memuat dashboard…</span>
    </div>
  );

  if (error) return (
    <Card className="border-red-200 bg-red-50 !p-4">
      <p className="text-sm font-semibold text-red-600">Gagal memuat: {error.message}</p>
      <button onClick={() => { summaryQ.refetch(); lowStockQ.refetch(); chartQ.refetch(); expiringQ.refetch(); }} className="mt-2 text-xs font-bold text-red-500 underline">Coba lagi</button>
    </Card>
  );

  const summary = summaryQ.data;
  const lowStock = lowStockQ.data || [];
  const chartData = chartQ.data || [];
  const expiringBatches = expiringQ.data || [];

  const stats = [
    { label: "Total Produk", value: summary?.totalProducts ?? 0, icon: Package, tone: "primary" },
    { label: "Nilai Inventaris", value: fmtIDR(summary?.totalInventoryValue ?? 0), icon: TrendingUp, tone: "accent" },
    { label: "Stok Rendah", value: summary?.lowStockCount ?? 0, icon: AlertTriangle, tone: "warn" },
    { label: "Total Opname", value: summary?.opnameCount ?? 0, icon: ClipboardCheck, tone: "primary" },
  ];

  const recentMoves = summary?.recentMovements || [];

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return `${d.getDate()}/${d.getMonth() + 1}`;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading font-extrabold text-2xl text-slate-800">Halo, {user.name}</h1>
        <p className="text-slate-500 text-sm mt-1">Ringkasan kondisi stok MyaMyu Pet Store hari ini.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          const bg = s.tone === "accent" ? "var(--c-accent)" : s.tone === "warn" ? "var(--c-secondary)" : "var(--c-primary)";
          const fg = s.tone === "warn" ? "var(--c-secondary-fg)" : "#fff";
          return (
            <div key={s.label} className="rounded-lg p-4 sm:p-5 min-h-[100px] border border-black/5 shadow-sm flex"
              style={{ backgroundColor: bg, color: fg }}>
              <div className="flex items-start justify-between gap-2 w-full">
                <div>
                  <div className="font-heading font-extrabold text-xl sm:text-2xl leading-none">{s.value}</div>
                  <div className="text-xs font-bold opacity-90 mt-2 leading-snug">{s.label}</div>
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {expiringBatches.length > 0 && (
        <Card className="border-orange-200 bg-orange-50/60 !p-4">
          <div className="flex items-start gap-3">
            <CalendarX2 size={20} className="text-orange-500 shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-orange-700">
                {expiringBatches.length} batch produk mendekati/melewati expired
              </p>
              <div className="mt-2 space-y-1">
                {expiringBatches.slice(0, 3).map((b) => {
                  const daysLeft = Math.ceil((new Date(b.expiredDate) - new Date()) / 86400000);
                  return (
                    <div key={b.id} className="flex items-center justify-between text-xs text-orange-600">
                      <span className="font-semibold truncate">{b.product?.name}</span>
                      <span className="ml-2 shrink-0">
                        {daysLeft <= 0
                          ? <Badge tone="danger">Sudah expired</Badge>
                          : <Badge tone="warn">{daysLeft} hari lagi</Badge>}
                      </span>
                    </div>
                  );
                })}
                {expiringBatches.length > 3 && (
                  <p className="text-xs text-orange-500 font-semibold">+{expiringBatches.length - 3} lainnya</p>
                )}
              </div>
            </div>
          </div>
        </Card>
      )}

      <Card>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h2 className="font-heading font-extrabold text-slate-800">Pergerakan Stok</h2>
          <div className="flex gap-1">
            {[7, 14, 30].map((d) => (
              <button
                key={d}
                onClick={() => setChartDays(d)}
                className="px-3 py-1.5 rounded-lg text-xs font-bold transition-colors"
                style={chartDays === d
                  ? { backgroundColor: "var(--c-primary)", color: "#fff" }
                  : { backgroundColor: "#f1f5f9", color: "#64748b" }}
              >
                {d}H
              </button>
            ))}
          </div>
        </div>
        {chartData.every((d) => d.masuk === 0 && d.keluar === 0 && d.adjustment === 0) ? (
          <EmptyState icon={Boxes} text="Belum ada pergerakan stok dalam periode ini." />
        ) : (
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorMasuk" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2ec4b6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#2ec4b6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorKeluar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff9f1c" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#ff9f1c" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="date" tickFormatter={formatDate} tick={{ fontSize: 11, fill: "#94a3b8" }} />
              <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} allowDecimals={false} />
              <Tooltip
                formatter={(val, name) => [val, name === "masuk" ? "Stok Masuk" : name === "keluar" ? "Stok Keluar" : "Adjustment"]}
                labelFormatter={(label) => new Date(label).toLocaleDateString("id-ID", { day: "numeric", month: "long" })}
                contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e8f0" }}
              />
              <Legend formatter={(val) => val === "masuk" ? "Masuk" : val === "keluar" ? "Keluar" : "Adjustment"}
                iconType="circle" wrapperStyle={{ fontSize: 12 }} />
              <Area type="monotone" dataKey="masuk" stroke="#2ec4b6" strokeWidth={2} fill="url(#colorMasuk)" />
              <Area type="monotone" dataKey="keluar" stroke="#ff9f1c" strokeWidth={2} fill="url(#colorKeluar)" />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-stretch">
        <Card className="lg:col-span-2 h-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading font-extrabold text-slate-800">Stok di Bawah Minimum</h2>
            <button onClick={() => navigate("/products")}
              className="text-xs font-bold flex items-center gap-1" style={{ color: "var(--c-primary)" }}>
              Lihat semua <ChevronRight size={14} />
            </button>
          </div>
          {lowStock.length === 0 ? (
            <EmptyState icon={CheckCircle2} text="Semua stok aman." />
          ) : (
            <div className="space-y-2">
              {lowStock.slice(0, 6).map((p) => (
                <div key={p.id} className="flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2.5 border border-slate-100">
                  <div className="min-w-0">
                    <div className="font-bold text-sm text-slate-800 truncate">{p.name}</div>
                    <div className="text-xs text-slate-500">SKU {p.sku}</div>
                  </div>
                  <Badge tone="danger">{p.currentStock}/{p.minStock} {p.unit}</Badge>
                </div>
              ))}
            </div>
          )}
        </Card>

        <Card className="lg:col-span-2 h-full">
          <h2 className="font-heading font-extrabold text-slate-800 mb-4">Mutasi Stok Terbaru</h2>
          {recentMoves.length === 0 ? (
            <EmptyState icon={Boxes} text="Belum ada mutasi stok." />
          ) : (
            <div className="space-y-3">
              {recentMoves.map((m) => {
                const isIn = m.type === "in";
                const isAdj = m.type === "adjustment";
                return (
                  <div key={m.id} className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: isAdj ? "#e2e8f0" : isIn ? "#d1fae5" : "#fee2e2" }}>
                      {isAdj ? <ClipboardCheck size={15} className="text-slate-500" /> :
                        isIn ? <TrendingUp size={15} color="#059669" /> : <TrendingDown size={15} color="#dc2626" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-slate-700 truncate">{m.product?.name || "—"}</div>
                      <div className="text-xs text-slate-400">{fmtDate(m.createdAt)}</div>
                    </div>
                    <div className="font-extrabold text-sm shrink-0"
                      style={{ color: isAdj ? "#64748b" : isIn ? "#059669" : "#dc2626" }}>
                      {!isAdj && (isIn ? "+" : "-")}{isAdj && m.quantity >= 0 ? "+" : ""}{m.quantity}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
