import express from "express";
import {
  createOrder,
  getSingleOrder,
  getCurrentUserOrders,
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/order.js";
import { isAuthenticatedUser, authorizeRoles } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", isAuthenticatedUser, createOrder);

router.get(
  // admin route
  "/admin",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllOrders
);
router.put(
  // admin route
  "/admin/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateOrderStatus
);
router.delete(
  // admin route
  "/admin/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteOrder
);

router.get("/myOrders", isAuthenticatedUser, getCurrentUserOrders);
router.get("/:id", isAuthenticatedUser, getSingleOrder);
export default router;
