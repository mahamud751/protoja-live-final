import express from "express";
import {
  CreateSupport,
  deleteSupport,
  getSupport,
  getSingleSupport,
  updateSupport,
} from "../controllers/support.js";

const router = express.Router();

router.post("/", CreateSupport);
router.get("/", getSupport);
router.get("/:id", getSingleSupport);
router.delete("/:id", deleteSupport);
router.put("/:id", updateSupport);

export default router;
