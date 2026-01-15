import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  createWatchlist,
  deleteWatchlist,
  getAllWatchlist,
  updateWatchlist,
} from "../controllers/watchlistControllers.js";

const watchlistRouter = Router();
watchlistRouter.use(authMiddleware);

watchlistRouter.get("/", getAllWatchlist);
watchlistRouter.post("/", createWatchlist);
watchlistRouter.put("/:watchlistId", updateWatchlist);
watchlistRouter.delete("/:watchlistId", deleteWatchlist);

export default watchlistRouter;
