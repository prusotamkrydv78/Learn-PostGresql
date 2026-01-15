import { Router } from "express";
import {
  registerUser,
  loginUser,
  logout,
} from "../controllers/authControllers.js";
const authRoutes = Router();

authRoutes.post("/register", registerUser);

authRoutes.post("/login", loginUser);
authRoutes.post("/logout", logout);
export default authRoutes;
