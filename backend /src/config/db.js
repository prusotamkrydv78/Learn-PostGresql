import { PrismaClient } from "../../generated/prisma/index.js";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV == "dev" ? ["query", "error", "warn"] : ["error"],
});

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("Database connection sucess");
  } catch (error) {
    console.log("Error at database connection", error);
    process.exit(1);
  }
};
const disconnectDB = async () => {
  await prisma.$disconnect();
};

export { prisma, connectDB, disconnectDB };
