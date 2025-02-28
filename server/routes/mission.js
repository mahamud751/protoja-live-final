import express from "express";
import {
  CreateMission,
  deleteMission,
  getMission,
  getSingleMission,
  updateMission,
} from "../controllers/mission.js";

const router = express.Router();

router.post("/", CreateMission);
router.get("/", getMission);
router.get("/:id", getSingleMission);
router.delete("/:id", deleteMission);
router.put("/:id", updateMission);

export default router;
