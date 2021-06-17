import express from "express";
import { isAuthenticatedUser } from "../middlewares/auth.js";
import {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getSingleProduct);

router.post("/", isAuthenticatedUser, createProduct);
router.put("/:id", isAuthenticatedUser, updateProduct);
router.delete("/:id", isAuthenticatedUser, deleteProduct);

export default router;
