import express from "express";
import { addResume, deleteResume, getResumes } from "../controllers/resumeController.js";
import { upload } from "../middleware/multer.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getResumes);
router.post("/", protect, upload.single("resumeFile"), addResume);
router.delete("/:id", protect, deleteResume);

export default router;
