import express from "express";
import { isAuthenticatedUser, authorizeRoles } from "../middlewares/auth.js";
import {
  getCurrentUser,
  updatePassword,
  updateProfile,
} from "../controllers/user.js";

const router = express.Router();

router.get("/current", isAuthenticatedUser, getCurrentUser);

router.put("/update/profile", isAuthenticatedUser, updateProfile);
router.put("/update/password", isAuthenticatedUser, updatePassword);

export default router;
