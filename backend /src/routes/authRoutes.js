import { Router } from 'express'
import { registerUser, loginUser } from '../middlewares/authMiddlewares.js';
const authRoutes = Router()

authRoutes.post("/register", registerUser)

authRoutes.post("/login", loginUser)
export default authRoutes;