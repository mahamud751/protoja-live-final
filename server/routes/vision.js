import express from "express";
import {
  CreateVision,
  deleteVision,
  getVision,
  getSingleVision,
  updateVision,
} from "../controllers/vision.js";

const router = express.Router();

router.post("/", CreateVision);
router.get("/", getVision);
router.get("/:id", getSingleVision);
router.delete("/:id", deleteVision);
router.put("/:id", updateVision);

export default router;
