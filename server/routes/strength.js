import express from "express";
import {
  CreateStrength,
  deleteStrength,
  getStrength,
  getSingleStrength,
  updateStrength,
} from "../controllers/strength.js";

const router = express.Router();

router.post("/", CreateStrength);
router.get("/", getStrength);
router.get("/:id", getSingleStrength);
router.delete("/:id", deleteStrength);
router.put("/:id", updateStrength);

export default router;
