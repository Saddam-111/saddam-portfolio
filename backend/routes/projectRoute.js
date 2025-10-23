import express from "express";
import { getProjects, addProject, deleteProject, updateProject } from "../controllers/projectController.js";
import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();

router.get("/", getProjects);
router.post("/", protect, upload.single("thumbnail"), addProject);
router.put("/:id", protect, upload.single("thumbnail"), updateProject);
router.delete("/:id", protect, deleteProject);

export default router;
