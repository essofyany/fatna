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

router.get("/", isAuthenticatedUser, getProducts);
router.get("/:id", getSingleProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
