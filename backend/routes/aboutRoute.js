import express from "express";
import { getAbout, updateAbout } from "../controllers/aboutController.js";
import { protect } from "../middleware/authMiddleware.js";
import {upload} from '../middleware/multer.js'

const router = express.Router();

router.get("/", getAbout);
router.put("/", protect, upload.single("profileImage"), updateAbout);

export default router;
