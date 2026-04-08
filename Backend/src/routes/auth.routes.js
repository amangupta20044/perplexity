import { Router } from "express";
import { register, verifyEmail, login ,getMe } from "../controllers/auth.controller.js";
import { registerValidator } from "../validators/auth.validator.js";
import { authUser } from "../middleware/auth.middleware.js";


const authRouter = Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * @body { username, email, password }
 */
authRouter.post("/register", registerValidator, register);

authRouter.post("/login", login);

/**
 * @route GET /api/auth/get-me
 * @desc Get current logged in user's details
 * @access Private
 */
authRouter.get('/get-me', authUser, getMe)

authRouter.get("/verify-email", verifyEmail);

export default authRouter;