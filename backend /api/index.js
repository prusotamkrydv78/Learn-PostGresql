import app from "../src/app.js";
import { connectDB } from "../src/config/db.js";

// Initialize DB connection for serverless
connectDB();

export default app;
