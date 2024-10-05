import express from "express";

import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";

import nasaRoutes from "./routes/nasa.routes.js";

dotenv.config();

const app = express();

/* === Server PORT === */
const PORT = process.env.PORT || 5000;

/* ===================================== */
/* ===========  Middlewares  =========== */
/* ===================================== */
/* Allow Cross Origin Request */
app.use(
  cors({
    origin: "*",
    credentials: true,
    allowedHeaders: [
      "Authorization",
      "authorization",
      "withCredentials",
      "content-type",
    ],
  })
);
/* All request is encoded with x-www-form-urlencoded */
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));
/* Extra protection */
app.use(helmet());

/* ===================================== */
/* ============   Routes    ============ */
/* ===================================== */

app.use("/", nasaRoutes);

/* ======================================
 ** ========= Server connection =========
 ** ===================================== */
app.listen(PORT, async () => {
  try {
    /* === Connection information === */
    process.stdout.write("\x1Bc");
    console.log("=== Welcome to NASA Server Development ===");
    console.log(`\nServer\t : \x1b[4m%s\x1b[0m`, `http://localhost:${PORT}`);
    console.log("\nRead README.MD if you have any confusion!");
  } catch (error) {
    throw new Error(error);
  }
});
