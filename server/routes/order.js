import express from "express";
import {
  createOrder,
  getSingleOrder,
  getCurrentUserOrders,
} from "../controllers/order.js";
import { isAuthenticatedUser, authorizeRoles } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", isAuthenticatedUser, createOrder);

router.get("/myOrders", isAuthenticatedUser, getCurrentUserOrders);
router.get("/:id", isAuthenticatedUser, getSingleOrder);

export default router;
