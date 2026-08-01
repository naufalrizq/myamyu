import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import routes from "./src/routes/index.js";
import { startSyncWorker } from "./src/services/sync.queue.js";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors({ origin: process.env.FRONTEND_ORIGIN || "http://127.0.0.1:5173" }));
app.use(express.json({ limit: "10mb" }));

app.use("/api", routes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || "Terjadi kesalahan server",
  });
});

app.listen(port, () => {
  console.log(`MyaMyu backend listening at http://0.0.0.0:${port}`);
  startSyncWorker();
});
