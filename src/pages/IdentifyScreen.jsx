import { useState } from "react";
import { ArrowRight, Eye, EyeOff, Loader2, Moon, PawPrint, Sun } from "lucide-react";
import { Btn, Card, Field, inputCls } from "../components/ui";
import { GlobalStyle } from "../components/GlobalStyle";
import { login, register } from "../lib/auth";

export function IdentifyScreen({ onEnter, theme, onToggleTheme }) {
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const user = mode === "login"
        ? await login(email, password)
        : await register(name, email, password);
      onEnter(user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden ${theme === "dark" ? "theme-dark" : ""}`}
      style={{ fontFamily: "Manrope, sans-serif", backgroundColor: "var(--c-bg)" }}
    >
      <GlobalStyle />

      {/* Theme toggle */}
      <button
        type="button"
        aria-label="Ganti tema"
        onClick={onToggleTheme}
        className="absolute right-4 top-4 z-10 min-h-[44px] min-w-[44px] rounded-lg border border-slate-200 bg-white shadow-sm flex items-center justify-center"
        style={{ color: "var(--c-primary)" }}
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* Background image subtle */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <img
          src="https://images.pexels.com/photos/38195854/pexels-photo-38195854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          className="w-full h-full object-cover opacity-5"
          alt=""
        />
      </div>

      <Card className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-3 shadow-sm"
            style={{ backgroundColor: "var(--c-primary)" }}>
            <PawPrint size={30} color="#fff" />
          </div>
          <h1 className="font-heading font-extrabold text-2xl" style={{ color: "var(--c-primary)" }}>
            MyaMyu
          </h1>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--c-accent)" }}>
            Pet Store · Stock Opname
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex rounded-lg overflow-hidden border border-slate-200 mb-5">
          <button
            onClick={() => { setMode("login"); setError(""); }}
            className="flex-1 py-2 text-sm font-bold transition-colors"
            style={mode === "login"
              ? { backgroundColor: "var(--c-primary)", color: "#fff" }
              : { color: "var(--c-primary)" }}
          >
            Masuk
          </button>
          <button
            onClick={() => { setMode("register"); setError(""); }}
            className="flex-1 py-2 text-sm font-bold transition-colors"
            style={mode === "register"
              ? { backgroundColor: "var(--c-primary)", color: "#fff" }
              : { color: "var(--c-primary)" }}
          >
            Daftar
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <Field label="Nama">
              <input
                className={inputCls}
                placeholder="Nama kamu"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Field>
          )}

          <Field label="Email">
            <input
              type="email"
              className={inputCls}
              placeholder="admin@myamyu.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Field>

          <Field label="Password">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className={`${inputCls} pr-11`}
                placeholder={mode === "register" ? "Min. 6 karakter" : "Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={mode === "register" ? 6 : 1}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </Field>

          {error && (
            <div className="text-sm font-semibold text-red-600 bg-red-50 rounded-lg px-3 py-2">
              {error}
            </div>
          )}

          <Btn
            type="submit"
            className="w-full"
            tone="accent"
            disabled={loading || !email || !password || (mode === "register" && !name)}
          >
            {loading
              ? <Loader2 size={16} className="animate-spin" />
              : <ArrowRight size={16} />}
            {loading ? "Memproses…" : mode === "login" ? "Masuk" : "Daftar & Masuk"}
          </Btn>
        </form>

        {mode === "login" && (
          <p className="text-[11px] text-slate-400 text-center mt-4 leading-relaxed">
            Default: admin@myamyu.com / admin123
          </p>
        )}
      </Card>
    </div>
  );
}
