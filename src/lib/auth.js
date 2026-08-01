const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:3001";
const TOKEN_KEY = "myamyu-token";
const USER_KEY = "myamyu-user";

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) throw new Error(data?.message || "Request gagal");
  return data;
}

export async function login(email, password) {
  const data = await request("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  localStorage.setItem(TOKEN_KEY, data.token);
  localStorage.setItem(USER_KEY, JSON.stringify(data.user));
  return data.user;
}

export async function register(name, email, password) {
  const data = await request("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
  localStorage.setItem(TOKEN_KEY, data.token);
  localStorage.setItem(USER_KEY, JSON.stringify(data.user));
  return data.user;
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getStoredUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export async function checkAuth() {
  const token = getToken();
  if (!token) return null;
  try {
    const data = await request("/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.user;
  } catch {
    logout();
    return null;
  }
}
