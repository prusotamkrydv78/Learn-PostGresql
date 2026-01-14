import express from "express";
import movieRouter from "./routes/movieRoutes.js";
import { prisma, connectDB, disconnectDB } from "./config/db.js"
import "dotenv/config"
import authRoutes from "./routes/authRoutes.js";
connectDB()
const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3000;
app.use("/auth/", authRoutes)
app.use("/movies", movieRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});