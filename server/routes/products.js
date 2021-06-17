import express from "express";
import { isAuthenticatedUser, authorizeRoles } from "../middlewares/auth.js";
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

router.post("/", isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router.put("/:id", isAuthenticatedUser, authorizeRoles("admin"), updateProduct);
router.delete(
  "/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteProduct
);

export default router;
