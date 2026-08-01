import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { RefreshCw } from "lucide-react";
import { AppShell } from "./components/AppShell";
import { GlobalStyle } from "./components/GlobalStyle";
import { Dashboard } from "./pages/Dashboard";
import { IdentifyScreen } from "./pages/IdentifyScreen";
import { Integrations } from "./pages/Integrations";
import { Opname } from "./pages/Opname";
import { Products } from "./pages/Products";
import { Categories } from "./pages/Categories";
import { StockMovements } from "./pages/StockMovements";
import { THEME_KEY } from "./lib/inventory";
import { dashboardApi } from "./lib/api";
import { checkAuth, logout, getStoredUser } from "./lib/auth";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 10000,
      refetchOnWindowFocus: false,
    },
  },
});

function AppContent() {
  const [user, setUser] = useState(null);
  const [authChecking, setAuthChecking] = useState(true);
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem(THEME_KEY) || "light"; } catch { return "light"; }
  });

  const lowStock = useQuery({
    queryKey: ["low-stock"],
    queryFn: () => dashboardApi.lowStock().then((r) => r.data || []),
    enabled: !!user,
  });

  useEffect(() => {
    try { localStorage.setItem(THEME_KEY, theme); } catch { /* ok */ }
  }, [theme]);

  useEffect(() => {
    const storedUser = getStoredUser();
    if (storedUser) {
      setUser(storedUser);
      setAuthChecking(false);
      checkAuth().then((verified) => {
        if (!verified) setUser(null);
        else setUser(verified);
      });
    } else {
      setAuthChecking(false);
    }
  }, []);

  const toggleTheme = () => setTheme((c) => (c === "dark" ? "light" : "dark"));

  const handleLogout = () => {
    logout();
    setUser(null);
    queryClient.clear();
  };

  const handleEnter = (loggedInUser) => setUser(loggedInUser);

  if (authChecking) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${theme === "dark" ? "theme-dark" : ""}`}
        style={{ fontFamily: "Manrope, sans-serif", backgroundColor: "var(--c-bg)" }}
      >
        <GlobalStyle />
        <div className="flex flex-col items-center gap-3 text-slate-400">
          <RefreshCw className="animate-spin" size={28} />
          <span className="text-sm font-medium">Memeriksa sesi…</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return <IdentifyScreen onEnter={handleEnter} theme={theme} onToggleTheme={toggleTheme} />;
  }

  return (
    <BrowserRouter>
      <AppShell
        user={user}
        lowStockCount={lowStock.data?.length || 0}
        theme={theme}
        onToggleTheme={toggleTheme}
        onLogout={handleLogout}
      >
        <Routes>
          <Route path="/" element={<Dashboard user={user} />} />
          <Route path="/products" element={<Products user={user} />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/stock" element={<StockMovements user={user} />} />
          <Route path="/opname" element={<Opname user={user} />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
