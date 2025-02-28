import express from "express";
import {
  CreateSupplier,
  deleteSupplier,
  getSupplier,
  getSingleSupplier,
  updateSupplier,
} from "../controllers/supplier.js";

const router = express.Router();

router.post("/", CreateSupplier);
router.get("/", getSupplier);
router.get("/:id", getSingleSupplier);
router.delete("/:id", deleteSupplier);
router.put("/:id", updateSupplier);

export default router;
