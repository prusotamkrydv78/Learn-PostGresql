import express from "express";
import movieRouter from "./routes/movieRoutes.js";
import { prisma, connectDB, disconnectDB } from "./config/db.js";
import "dotenv/config";
import authRoutes from "./routes/authRoutes.js";
import watchlistRouter from "./routes/watchlistRoutes.js";
connectDB();
const app = express();
const jsonParser = express.json({ strict: false });

app.use((req, res, next) => {
  jsonParser(req, res, (err) => {
    if (
      err &&
      err instanceof SyntaxError &&
      err.status === 400 &&
      "body" in err
    ) {
      // Allow DELETE requests to proceed even with invalid JSON (e.g. empty body with content-type json)
      if (req.method === "DELETE") {
        return next();
      }
      return res
        .status(400)
        .json({ success: false, message: "Invalid JSON payload", err });
    }
    if (err) return next(err);
    next();
  });
});

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Your server is running",
  });
});
app.use("/auth/", authRoutes);
app.use("/movie", movieRouter);
app.use("/watchlist", watchlistRouter);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
