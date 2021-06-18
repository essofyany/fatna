import express from "express";
import { createOrder } from "../controllers/order.js";
import { isAuthenticatedUser, authorizeRoles } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", isAuthenticatedUser, createOrder);

export default router;
