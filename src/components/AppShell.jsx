import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Boxes, ClipboardCheck, ClipboardList, Home, Link2, LogOut, Menu, Moon, Package, PawPrint, Sun, Tag, X } from "lucide-react";
import { GlobalStyle } from "./GlobalStyle";

const navItems = [
  { id: "/", label: "Dashboard", icon: Home },
  { id: "/products", label: "Produk", icon: Package },
  { id: "/categories", label: "Kategori", icon: Tag },
  { id: "/stock", label: "Stok", icon: Boxes },
  { id: "/opname", label: "Opname", icon: ClipboardCheck },
  // { id: "/integrations", label: "Integrasi", icon: Link2 },
];

function Brand({ light, compact }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-5">
      <div
        className={`rounded-lg flex items-center justify-center border ${compact ? "w-9 h-9" : "w-11 h-11"}`}
        style={{
          backgroundColor: light ? "rgba(255,255,255,0.18)" : "var(--c-soft)",
          borderColor: light ? "rgba(255,255,255,0.22)" : "rgba(46,196,182,0.25)",
        }}
      >
        <PawPrint size={compact ? 18 : 22} color={light ? "#fff" : "var(--c-primary)"} />
      </div>
      {!compact && (
        <div>
          <div className="font-heading font-extrabold text-lg leading-none" style={{ color: light ? "#fff" : "var(--c-primary)" }}>
            MyaMyu
          </div>
          <div className="text-[10px] font-bold tracking-widest uppercase" style={{ color: light ? "rgba(255,255,255,0.75)" : "var(--c-accent)" }}>
            Pet Shop Management
          </div>
        </div>
      )}
      {compact && (
        <span className="font-heading font-extrabold" style={{ color: light ? "#fff" : "var(--c-primary)" }}>
          MyaMyu
        </span>
      )}
    </div>
  );
}

function NavBtn({ item, active, onClick, badge }) {
  const Icon = item.icon;
  return (
    <button
      data-testid={`nav-${item.id.slice(1) || "dashboard"}`}
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-colors min-h-[44px] relative"
      style={{ backgroundColor: active ? "rgba(255,255,255,0.18)" : "transparent", color: "#fff" }}
    >
      <Icon size={19} />
      <span>{item.label}</span>
      {badge ? (
        <span className="ml-auto text-[10px] font-extrabold rounded-full w-5 h-5 flex items-center justify-center" style={{ backgroundColor: "var(--c-accent)" }}>
          {badge}
        </span>
      ) : null}
    </button>
  );
}

function UserControls({ user, theme, onToggleTheme, onLogout, mobile }) {
  return (
    <div className={`${mobile ? "px-4 py-4" : "px-4 py-4"} border-t border-white/15 space-y-3 text-sm`}>
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold">{user.name[0]?.toUpperCase()}</div>
        <div className="min-w-0 flex-1">
          <div className="font-bold truncate">{user.name}</div>
          <div className="text-white/70 text-xs">Full access</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button type="button" onClick={onToggleTheme} className={`${mobile ? "min-h-[44px]" : "min-h-[40px]"} rounded-lg bg-white/10 hover:bg-white/20 px-3 flex items-center justify-center gap-2 text-xs font-bold`}>
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          {theme === "dark" ? "Light" : "Dark"}
        </button>
        <button type="button" onClick={onLogout} className={`${mobile ? "min-h-[44px]" : "min-h-[40px]"} rounded-lg bg-white/10 hover:bg-white/20 px-3 flex items-center justify-center gap-2 text-xs font-bold`}>
          <LogOut size={15} /> Logout
        </button>
      </div>
    </div>
  );
}

export function AppShell({ children, user, lowStockCount, theme, onToggleTheme, onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);

  const activeTab = "/" + (location.pathname.split("/").filter(Boolean)[0] || "");

  const handleNav = (path) => {
    navigate(path);
    setNavOpen(false);
  };

  return (
    <div className={`min-h-[700px] w-full flex ${theme === "dark" ? "theme-dark" : ""}`} style={{ fontFamily: "Manrope, sans-serif", backgroundColor: "var(--c-bg)", "--tw-ring-color": "var(--c-accent)" }}>
      <GlobalStyle />

      <aside className="hidden md:flex md:flex-col w-64 shrink-0 sticky top-0 h-screen text-white shadow-xl shadow-slate-900/5" style={{ backgroundColor: "var(--c-primary)" }}>
        <Brand light />
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((n) => (
            <NavBtn key={n.id} item={n} active={activeTab === n.id} onClick={() => handleNav(n.id)} badge={n.id === "/products" && lowStockCount > 0 ? lowStockCount : null} />
          ))}
        </nav>
        <UserControls user={user} theme={theme} onToggleTheme={onToggleTheme} onLogout={onLogout} />
      </aside>

      {navOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-slate-900/40" onClick={() => setNavOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 text-white flex flex-col" style={{ backgroundColor: "var(--c-primary)" }}>
            <div className="flex items-center justify-between pr-2">
              <Brand light />
              <button aria-label="Tutup menu" onClick={() => setNavOpen(false)} className="p-2 min-h-[44px] min-w-[44px]">
                <X />
              </button>
            </div>
            <nav className="flex-1 px-3 py-2 space-y-1">
              {navItems.map((n) => (
                <NavBtn
                  key={n.id}
                  item={n}
                  active={activeTab === n.id}
                  onClick={() => handleNav(n.id)}
                  badge={n.id === "/products" && lowStockCount > 0 ? lowStockCount : null}
                />
              ))}
            </nav>
            <UserControls user={user} theme={theme} onToggleTheme={onToggleTheme} onLogout={onLogout} mobile />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0 flex flex-col">
        <div className="md:hidden flex items-center justify-between px-4 py-3 text-white sticky top-0 z-30" style={{ backgroundColor: "var(--c-primary)" }}>
          <button aria-label="Buka menu" onClick={() => setNavOpen(true)} className="p-2 -ml-2 min-h-[44px] min-w-[44px]">
            <Menu />
          </button>
          <Brand light compact />
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">{user.name[0]?.toUpperCase()}</div>
        </div>

        <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-5 md:p-8 pb-24 md:pb-8">{children}</main>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-slate-200 flex justify-around px-1 py-1.5 shadow-[0_-8px_24px_rgba(15,23,42,0.08)]">
        {navItems.map((n) => {
          const Icon = n.icon;
          const active = activeTab === n.id;
          return (
            <button key={n.id} onClick={() => handleNav(n.id)} className="flex flex-col items-center gap-0.5 px-3 py-1.5 min-h-[44px] min-w-[44px] rounded-lg relative">
              <Icon size={22} color={active ? "var(--c-primary)" : "#94a3b8"} strokeWidth={active ? 2.5 : 2} />
              <span className="text-[10px] font-bold" style={{ color: active ? "var(--c-primary)" : "#94a3b8" }}>
                {n.label}
              </span>
              {n.id === "/products" && lowStockCount > 0 && <span className="absolute top-0 right-1.5 w-2 h-2 rounded-full bg-red-500" />}
            </button>
          );
        })}
      </div>

      {!location.pathname.startsWith("/opname") && (
        <button
          aria-label="Input opname cepat"
          onClick={() => navigate("/opname")}
          className="md:hidden fixed bottom-20 right-4 z-30 w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl active:translate-y-px transition-all"
          style={{ backgroundColor: "var(--c-accent)", color: "var(--c-accent-fg)" }}
        >
          <ClipboardList size={24} />
        </button>
      )}
    </div>
  );
}
