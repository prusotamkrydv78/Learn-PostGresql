import { Router } from "express";
import {
  createMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
} from "../controllers/movieControllers.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const movieRouter = Router();

movieRouter.use(authMiddleware);
movieRouter.get("/", getAllMovies);
movieRouter.get("/:movieId", getMovieById);
movieRouter.post("/", createMovie);
movieRouter.put("/:movieId", updateMovie);
movieRouter.delete("/:movieId", deleteMovie);

export default movieRouter;
