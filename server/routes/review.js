import express from "express";
import {
  createAndUpdateReview,
  getProductReviews,
  deleteReview,
} from "../controllers/review.js";
import { isAuthenticatedUser, authorizeRoles } from "../middlewares/auth.js";

const router = express.Router();

router.put("/", isAuthenticatedUser, createAndUpdateReview);
router.get("/", isAuthenticatedUser, getProductReviews);
router.delete("/", isAuthenticatedUser, deleteReview);

export default router;
