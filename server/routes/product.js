import express from "express";
import {
  CreateProduct,
  deleteProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
} from "../controllers/product.js";

const router = express.Router();

router.post("/", CreateProduct);
router.get("/", getProduct);
router.get("/:id", getSingleProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export default router;
