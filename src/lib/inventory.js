export const THEME_KEY = "myamyu-theme";

export const fmtIDR = (n) => "Rp" + Math.round(n || 0).toLocaleString("id-ID");

export const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

export const fmtDateShort = (iso) => {
  const d = new Date(iso);
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
};
