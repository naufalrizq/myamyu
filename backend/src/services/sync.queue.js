import { Queue, Worker } from "bullmq";
import IORedis from "ioredis";
import { syncToMarketplace } from "./sync.service.js";

const REDIS_URL = process.env.REDIS_URL || "redis://127.0.0.1:6379";

let connection = null;
let syncQueue = null;
let syncWorker = null;

function getConnection() {
  if (!connection) {
    connection = new IORedis(REDIS_URL, {
      maxRetriesPerRequest: null,
      enableOfflineQueue: false,
      retryStrategy(times) {
        if (times > 3) return null; // stop retrying after 3 attempts
        return Math.min(times * 200, 2000);
      },
      lazyConnect: true,
    });
  }
  return connection;
}

export async function getQueue() {
  if (syncQueue) return syncQueue;
  const conn = getConnection();
  try {
    await conn.connect();
    syncQueue = new Queue("stock-sync", { connection: conn });
    return syncQueue;
  } catch (err) {
    console.warn(`[Sync/Queue] Redis not available (${err.message}), running sync inline`);
    return null;
  }
}

export function startSyncWorker() {
  const conn = getConnection();
  conn
    .connect()
    .then(() => {
      syncWorker = new Worker(
        "stock-sync",
        async (job) => {
          const { productId, marketplaceAccountId, targetStock } = job.data;
          console.log(`[Sync/Worker] Processing job ${job.id}: product=${productId}`);
          await syncToMarketplace({ productId, marketplaceAccountId, targetStock });
        },
        { connection: conn, concurrency: 5 }
      );

      syncWorker.on("completed", (job) => {
        console.log(`[Sync/Worker] Job ${job.id} completed`);
      });

      syncWorker.on("failed", (job, err) => {
        console.error(`[Sync/Worker] Job ${job.id} failed: ${err.message}`);
      });

      console.log("[Sync/Worker] BullMQ worker started");
    })
    .catch((err) => {
      console.warn(`[Sync/Worker] Redis unavailable (${err.message}), sync jobs run inline`);
    });
}

export async function stopSyncWorker() {
  if (syncWorker) await syncWorker.close();
  if (syncQueue) await syncQueue.close();
  if (connection) {
    connection.disconnect();
    connection = null;
  }
  syncQueue = null;
  syncWorker = null;
}
