import express from "express";
import { getHero, updateHero } from "../controllers/heroController.js";
import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();

router.get("/", getHero);
router.put("/", protect, upload.single("profileImage"), updateHero);

export default router;
