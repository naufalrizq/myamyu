import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { fmtDateShort } from "../lib/inventory";

export const inputCls = "w-full min-h-[44px] rounded-lg border border-slate-200 px-3.5 text-sm bg-white focus:outline-none focus:ring-2 transition-shadow";

export function DateInput({ value, onChange, className = "" }) {
  const [text, setText] = useState(value ? fmtDateShort(value) : "");

  useEffect(() => {
    const v = value ? fmtDateShort(value) : "";
    if (v !== text) setText(v);
  }, [value]);

  const handle = (e) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 8);
    let out = raw;
    if (raw.length > 4) out = `${raw.slice(0, 2)}/${raw.slice(2, 4)}/${raw.slice(4)}`;
    else if (raw.length > 2) out = `${raw.slice(0, 2)}/${raw.slice(2)}`;
    setText(out);
    onChange(raw.length === 8 ? `${raw.slice(4)}-${raw.slice(2, 4)}-${raw.slice(0, 2)}` : "");
  };

  return <input inputMode="numeric" placeholder="dd/mm/yyyy" className={`${className} ${inputCls}`} value={text} onChange={handle} />;
}

export const Badge = ({ tone = "muted", children }) => {
  const tones = {
    muted: "bg-slate-100 text-slate-600",
    danger: "bg-red-100 text-red-600",
    warn: "text-white",
    ok: "bg-emerald-100 text-emerald-700",
    accent: "text-white",
  };
  const style =
    tone === "warn"
      ? { backgroundColor: "var(--c-secondary)", color: "var(--c-secondary-fg)" }
      : tone === "accent"
        ? { backgroundColor: "var(--c-accent)" }
        : undefined;

  return (
    <span style={style} className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${tones[tone] || tones.muted}`}>
      {children}
    </span>
  );
};

export const Card = ({ children, className = "", ...props }) => (
  <div className={`rounded-lg border border-slate-200/80 bg-white shadow-sm p-5 ${className}`} {...props}>
    {children}
  </div>
);

export const Btn = ({ children, onClick, tone = "primary", type = "button", className = "", disabled, testId }) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold text-sm px-4 py-2.5 min-h-[44px] transition-all duration-150 disabled:opacity-40 disabled:pointer-events-none hover:shadow-md active:translate-y-px";
  const toneStyle = {
    primary: { backgroundColor: "var(--c-primary)", color: "var(--c-primary-fg)" },
    accent: { backgroundColor: "var(--c-accent)", color: "var(--c-accent-fg)" },
    ghost: { backgroundColor: "#ffffff", color: "var(--c-primary)", border: "1.5px solid var(--c-primary)" },
    danger: { backgroundColor: "#fee2e2", color: "#dc2626" },
  };

  return (
    <button type={type} data-testid={testId} disabled={disabled} onClick={onClick} className={`${base} ${className}`} style={toneStyle[tone]}>
      {children}
    </button>
  );
};

export const Field = ({ label, children }) => (
  <label className="block">
    <span className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">{label}</span>
    {children}
  </label>
);

export function Modal({ title, onClose, children, wide }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/40 backdrop-blur-[2px] p-0 sm:p-4">
      <div className={`bg-white w-full ${wide ? "sm:max-w-2xl" : "sm:max-w-md"} rounded-t-lg sm:rounded-lg max-h-[92vh] overflow-y-auto shadow-xl`}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 sticky top-0 bg-white z-10">
          <h3 className="font-extrabold text-lg" style={{ fontFamily: "Nunito, sans-serif", color: "var(--c-card-fg)" }}>
            {title}
          </h3>
          <button aria-label="Tutup" onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 min-h-[44px] min-w-[44px] flex items-center justify-center">
            <X size={20} />
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

export function EmptyState({ icon: Icon, text }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-8 text-slate-400 gap-2">
      <Icon size={28} />
      <p className="text-sm font-medium max-w-[220px]">{text}</p>
    </div>
  );
}
