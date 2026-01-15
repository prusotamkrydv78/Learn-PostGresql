import { PrismaClient } from "../generated/prisma/index.js"
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
    adapter,
    log: process.env.NODE_ENV == "dev" ? ["query", "error", "warn"] : ["error"]
})
const userId = "3866149b-f9bb-453e-a69d-3158aaddd2ec"
// Make sure this user already exists in your User table 

export const moviesSeedData = [  {
    title: "Fight Club",
    overview:
      "An insomniac office worker forms an underground fight club that evolves into something much more.",
    releaseYear: 1999,
    genres: ["Drama", "Thriller"],
    runtime: 139,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    createBy: userId,
    userId: userId,
  },
  {
    title: "Forrest Gump",
    overview:
      "The life journey of a simple man whose kindness and optimism shape history.",
    releaseYear: 1994,
    genres: ["Drama", "Romance"],
    runtime: 142,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    createBy: userId,
    userId: userId,
  },
  {
    title: "Gladiator",
    overview:
      "A former Roman General sets out to exact vengeance against the corrupt emperor.",
    releaseYear: 2000,
    genres: ["Action", "Drama", "Adventure"],
    runtime: 155,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    createBy: userId,
    userId: userId,
  },
  {
    title: "Joker",
    overview:
      "A failed comedian spirals into madness and becomes a symbol of chaos.",
    releaseYear: 2019,
    genres: ["Crime", "Drama", "Thriller"],
    runtime: 122,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    createBy: userId,
    userId: userId,
  },
  {
    title: "The Matrix",
    overview:
      "A hacker discovers the true nature of reality and his role in the war against its controllers.",
    releaseYear: 1999,
    genres: ["Sci-Fi", "Action"],
    runtime: 136,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    createBy: userId,
    userId: userId,
  },
  {
    title: "Whiplash",
    overview:
      "A young drummer enrolls in a cutthroat music conservatory led by an abusive instructor.",
    releaseYear: 2014,
    genres: ["Drama", "Music"],
    runtime: 106,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/oPxnRhyAIzJKGUEdSiwTJQBa6dM.jpg",
    createBy: userId,
    userId: userId,
  },
  {
    title: "The Shawshank Redemption",
    overview:
      "Two imprisoned men bond over years, finding solace and eventual redemption.",
    releaseYear: 1994,
    genres: ["Drama"],
    runtime: 142,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    createBy: userId,
    userId: userId,
  },
  {
    title: "Titanic",
    overview:
      "A love story unfolds aboard the ill-fated RMS Titanic.",
    releaseYear: 1997,
    genres: ["Drama", "Romance"],
    runtime: 195,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    createBy: userId,
    userId: userId,
  },
  {
    title: "Dune",
    overview:
      "A noble family becomes embroiled in a war over the galaxy's most valuable asset.",
    releaseYear: 2021,
    genres: ["Sci-Fi", "Adventure"],
    runtime: 155,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    createBy: userId,
    userId: userId,
  },
  {
    title: "The Social Network",
    overview:
      "The story of the founding of Facebook and the legal battles that followed.",
    releaseYear: 2010,
    genres: ["Drama", "Biography"],
    runtime: 120,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    createBy: userId,
    userId: userId,
  },];
const seedData = async () => {
    await prisma.movie.createMany({
        data: moviesSeedData,
    });
    console.log("data seeded success")
}
seedData()