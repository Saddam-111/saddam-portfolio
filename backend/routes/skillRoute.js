import express from "express";
import {
  getSkills,
  addSkill,
  updateSkill,
  deleteSkill,
} from "../controllers/skillController.js";
import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();

router.get("/", getSkills);
router.post("/", protect, upload.single("icon"), addSkill);
router.put("/:id", protect, upload.single("icon"), updateSkill);
router.delete("/:id", protect, deleteSkill);

export default router;
