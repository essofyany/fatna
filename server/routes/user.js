import express from "express";
import { isAuthenticatedUser, authorizeRoles } from "../middlewares/auth.js";
import { getCurrentUser } from "../controllers/user.js";

const router = express.Router();

router.get("/current", isAuthenticatedUser, getCurrentUser);

export default router;
