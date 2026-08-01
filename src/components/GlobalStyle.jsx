export function GlobalStyle() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap');
      :root {
        --c-primary: #2ec4b6; --c-primary-fg: #ffffff;
        --c-accent: #ff9f1c; --c-accent-fg: #ffffff;
        --c-secondary: #ffbf69; --c-secondary-fg: #1e293b;
        --c-bg: #f8fafc; --c-card: #ffffff; --c-soft: #e8fbf9; --c-card-fg: #1e293b;
      }
      h1,h2,h3,h4,.font-heading { font-family: 'Nunito', sans-serif; letter-spacing: 0; }
      body { background: var(--c-bg); }
      input:focus, select:focus, textarea:focus { --tw-ring-color: var(--c-accent); box-shadow: 0 0 0 2px var(--c-accent); border-color: var(--c-accent); }
      .theme-dark {
        --c-bg: #0f172a;
        --c-card: #111827;
        --c-soft: #123b3b;
        --c-card-fg: #e5e7eb;
      }
      /* Pastikan body ikut warna dark saat login screen */
      body:has(.theme-dark) {
        background-color: #0f172a;
      }
      .theme-dark .bg-white { background-color: #111827 !important; }
      .theme-dark .bg-slate-50 { background-color: #172033 !important; }
      .theme-dark .bg-slate-100 { background-color: #1e293b !important; }
      .theme-dark .border-slate-100,
      .theme-dark .border-slate-200,
      .theme-dark .border-slate-200\\/80 { border-color: rgba(148, 163, 184, 0.22) !important; }
      .theme-dark .text-slate-800,
      .theme-dark .text-slate-700,
      .theme-dark .text-slate-600 { color: #e5e7eb !important; }
      .theme-dark .text-slate-500,
      .theme-dark .text-slate-400 { color: #94a3b8 !important; }
      .theme-dark input,
      .theme-dark select,
      .theme-dark textarea {
        background-color: #0f172a;
        border-color: rgba(148, 163, 184, 0.28);
        color: #e5e7eb;
      }
      .theme-dark input::placeholder,
      .theme-dark textarea::placeholder { color: #64748b; }
      .theme-dark tr:hover { background-color: #172033 !important; }
      .theme-dark .shadow-sm { box-shadow: 0 1px 2px rgba(0, 0, 0, 0.28); }
    `}</style>
  );
}
