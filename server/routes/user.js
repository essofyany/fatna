import express from "express";
import { isAuthenticatedUser, authorizeRoles } from "../middlewares/auth.js";
import {
  getCurrentUser,
  updatePassword,
  updateProfile,
  getAlltUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/current", isAuthenticatedUser, getCurrentUser);
router.get(
  "/admin/allUsers",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAlltUsers
);
router.get(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getUser
);

router.put("/update/profile", isAuthenticatedUser, updateProfile);
router.put("/update/password", isAuthenticatedUser, updatePassword);

router.put(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateUser
);
router.delete(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteUser
);

export default router;
