import express from "express";
import movieRouter from "./routes/movieRoutes.js";
import {prisma,connectDB,disconnectDB} from "./config/db.js"
import "dotenv/config"
connectDB()
const app = express();

const PORT = process.env.PORT || 3000;

app.use("/movies",movieRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});