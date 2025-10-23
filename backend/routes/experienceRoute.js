import express from "express";
import {
  getExperiences,
  addExperience,
  updateExperience,
  deleteExperience,
} from "../controllers/experienceController.js";
import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();

router.get("/", getExperiences);
router.post("/", protect, upload.single("thumbnail"), addExperience);
router.put("/:id", protect, upload.single("thumbnail"), updateExperience);
router.delete("/:id", protect, deleteExperience);

export default router;
