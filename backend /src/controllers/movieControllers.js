import { prisma } from "../config/db.js";
const getAllMovies = async (req, res) => {
  try {
    const moves = await prisma.movie.findMany();
    res.status(200).json({
      sucess: true,
      data: moves,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};
const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const move = await prisma.movie.findUnique({ where: { id: Number(id) } });
    res.status(200).json({
      sucess: true,
      data: move,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};
const createMovie = async (req, res) => {
  try {
    const {
      title,
      overview,
      releaseYear,
      genres,
      runtime,
      posterUrl,
      createBy,
    } = req.body;
    if (!title || !releaseYear || !runtime || !createBy) {
      return res.status(400).json({
        sucess: false,
        message: "All fields are required",
      });
    }

    const move = await prisma.movie.create({
      data: {
        title,
        overview,
        releaseYear,
        genres,
        runtime,
        posterUrl,
        createBy,
      },
    });
    res.status(200).json({
      sucess: true,
      data: move,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};
const updateMovie = async (req, res) => {
  try {
    const { movieId } = req.params;

    const move = await prisma.movie.update({
      where: { id: movieId },
      data: req.body,
    });
    res.status(200).json({
      sucess: true,
      data: move,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};
const deleteMovie = async (req, res) => {
  try {
    const { movieId } = req.params;

    const move = await prisma.movie.delete({
      where: { id: movieId },
    });
    res.status(200).json({
      sucess: true,
      data: move,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
};
export { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie };
