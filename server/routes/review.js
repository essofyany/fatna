import express from "express";
import { createAndUpdateReview } from "../controllers/review.js";
import { isAuthenticatedUser, authorizeRoles } from "../middlewares/auth.js";

const router = express.Router();

router.put("/", isAuthenticatedUser, createAndUpdateReview);

export default router;
