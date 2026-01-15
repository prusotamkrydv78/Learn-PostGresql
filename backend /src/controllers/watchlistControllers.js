import { prisma } from "../config/db.js";
const getAllWatchlist = async (req, res) => {
  const watchlist = await prisma.watchListItem.findMany({
    where: { userId: req.user.id },
  });

  res.status(200).json({
    sucess: true,
    data: watchlist,
  });
};

const createWatchlist = async (req, res) => {
  const { movieId, notes, rating, status } = req.body;
  const userId = req.user.id;
  const movie = await prisma.movie.findUnique({ where: { id: movieId } });
  if (!movie) {
    res.status(402).json({ sucess: true, message: "Movie not found" });
  }

  const existing = await prisma.watchListItem.findUnique({
    where: {
      userId_movieId: {
        userId,
        movieId,
      },
    },
  });
  if (existing) {
    res
      .status(402)
      .json({ sucess: true, message: "Movie is already in watchlist" });
  }
  console.log({
    movieId,
    notes,
    rating,
    status: status || "PLANNED",
    userId: req.user.id,
  });
  const addedMovie = await prisma.watchListItem.create({
    data: {
      movieId,
      notes,
      rating,
      status: status || "PLANNED",
      userId,
    },
  });
  res.status(200).json({
    sucess: true,
    data: addedMovie,
  });
};

const updateWatchlist = async (req, res) => {
  const movieId = req.params.watchlistId;
  console.log(movieId);
  const { notes, rating, status } = req.body;
  const userId = req.user.id;

  const movie = await prisma.watchListItem.findUnique({
    where: {
      userId_movieId: {
        movieId,
        userId,
      },
    },
  });
  if (!movie) {
    res.status(402).json({ sucess: true, message: "Movie not found" });
  }

  const updateMovie = await prisma.watchListItem.update({
    data: {
      notes,
      rating,
      status: status || "PLANNED",
      userId,
    },
    where: {
      userId_movieId: {
        movieId,
        userId,
      },
    },
  });
  res.status(200).json({
    sucess: true,
    data: updateMovie,
  });
};
const deleteWatchlist = async (req, res) => {
  const movieId = req.params.watchlistId;
  const userId = req.user.id;
  console.log(movieId);

  const watchListItem = await prisma.watchListItem.findUnique({
    where: {
      userId_movieId: {
        movieId,
        userId,
      },
    },
  });

  if (!watchListItem) {
    return res
      .status(404)
      .json({ sucess: false, message: "Watchlist item not found" });
  }

  const deletedItem = await prisma.watchListItem.delete({
    where: {
      userId_movieId: {
        movieId,
        userId,
      },
    },
  });

  res.status(200).json({
    sucess: true,
    data: deletedItem,
  });
};
export { getAllWatchlist, createWatchlist, updateWatchlist, deleteWatchlist };
