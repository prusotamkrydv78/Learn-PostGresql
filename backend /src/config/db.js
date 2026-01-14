import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient({
    log: process.env.NODE_ENV == "dev" ? ["query", "error", "warn"] : ["error"]
})

const connectDB = async () => {
    try {
        await prisma.$connect()
        console.log("Database connection sucess")
    } catch (error) {
        console.log("Error at database connection", error)
        process.exit(1)
    }

}
const disconnectDB = async () => {
    await prisma.$disconnect()
}

export { prisma, connectDB, disconnectDB }