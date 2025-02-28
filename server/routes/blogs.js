import express from "express";
import {
  CreateBlogs,
  deleteBlogs,
  getBlogs,
  getSingleBlogs,
  updateBlogs,
} from "../controllers/blogs.js";

const router = express.Router();

router.post("/", CreateBlogs);
router.get("/", getBlogs);
router.get("/:id", getSingleBlogs);
router.delete("/:id", deleteBlogs);
router.put("/:id", updateBlogs);

export default router;
