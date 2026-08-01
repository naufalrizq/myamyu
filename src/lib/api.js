import { getToken } from "./auth";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:3001";

async function request(path, options = {}) {
  const token = getToken();
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
    ...options,
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) throw new Error(data?.message || "Request gagal");
  return data;
}

// ── Products ──────────────────────────────────────────────
export const productsApi = {
  list: () => request("/api/products"),
  get: (id) => request(`/api/products/${id}`),
  create: (body) => request("/api/products", { method: "POST", body: JSON.stringify(body) }),
  update: (id, body) => request(`/api/products/${id}`, { method: "PATCH", body: JSON.stringify(body) }),
  remove: (id) => request(`/api/products/${id}`, { method: "DELETE" }),
  listBatches: (id) => request(`/api/products/${id}/batches`),
  createBatch: (id, body) => request(`/api/products/${id}/batches`, { method: "POST", body: JSON.stringify(body) }),
  updateBatch: (id, batchId, body) => request(`/api/products/${id}/batches/${batchId}`, { method: "PATCH", body: JSON.stringify(body) }),
  deleteBatch: (id, batchId) => request(`/api/products/${id}/batches/${batchId}`, { method: "DELETE" }),
};

// ── Categories ────────────────────────────────────────────
export const categoriesApi = {
  list: () => request("/api/categories"),
  create: (body) => request("/api/categories", { method: "POST", body: JSON.stringify(body) }),
  update: (id, body) => request(`/api/categories/${id}`, { method: "PATCH", body: JSON.stringify(body) }),
  remove: (id) => request(`/api/categories/${id}`, { method: "DELETE" }),
};

// ── Stock Movements ───────────────────────────────────────
export const stockMovementsApi = {
  list: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return request(`/api/stock-movements${qs ? "?" + qs : ""}`);
  },
  create: (body) => request("/api/stock-movements", { method: "POST", body: JSON.stringify(body) }),
};

// ── Opname ────────────────────────────────────────────────
export const opnameApi = {
  list: () => request("/api/opname-sessions"),
  get: (id) => request(`/api/opname-sessions/${id}`),
  create: (body) => request("/api/opname-sessions", { method: "POST", body: JSON.stringify(body) }),
  updateItem: (sessionId, productId, body) =>
    request(`/api/opname-sessions/${sessionId}/items/${productId}`, { method: "PATCH", body: JSON.stringify(body) }),
  approve: (id, body = {}) =>
    request(`/api/opname-sessions/${id}/approve`, { method: "PATCH", body: JSON.stringify(body) }),
  cancel: (id) => request(`/api/opname-sessions/${id}/cancel`, { method: "PATCH", body: JSON.stringify({}) }),
};

// ── Dashboard ─────────────────────────────────────────────
export const dashboardApi = {
  summary: () => request("/api/dashboard/summary"),
  lowStock: () => request("/api/dashboard/low-stock"),
  expiringBatches: () => request("/api/dashboard/expiring-batches"),
  stockChart: (days = 30) => request(`/api/dashboard/stock-chart?days=${days}`),
};

// ── Marketplace ───────────────────────────────────────────
export const marketplaceApi = {
  getStatus: () => request("/api/marketplaces/status"),

  // OAuth URLs
  getShopeeAuthUrl: () => request("/api/marketplaces/shopee/auth-url"),
  getTiktokAuthUrl: () => request("/api/marketplaces/tiktok/auth-url"),
  disconnectShopee: () => request("/api/marketplaces/shopee/disconnect", { method: "DELETE" }),
  disconnectTiktok: () => request("/api/marketplaces/tiktok/disconnect", { method: "DELETE" }),

  // Sync
  syncStock: (productId) =>
    request("/api/marketplaces/sync-stock", { method: "POST", body: JSON.stringify({ productId }) }),
  syncAll: () => request("/api/marketplaces/sync-all", { method: "POST" }),
  getSyncStatus: (productId) => request(`/api/marketplaces/sync-status/${productId}`),
  getSyncJobs: (status) => request(`/api/marketplaces/sync-jobs${status ? "?status=" + status : ""}`),

  // Mappings
  getMappings: (productId) =>
    request(`/api/marketplaces/mappings${productId ? "?productId=" + productId : ""}`),
  createMapping: (body) =>
    request("/api/marketplaces/mappings", { method: "POST", body: JSON.stringify(body) }),
  deleteMapping: (id) => request(`/api/marketplaces/mappings/${id}`, { method: "DELETE" }),
};
