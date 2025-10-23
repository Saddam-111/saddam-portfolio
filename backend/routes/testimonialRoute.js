import express from "express";
import { getTestimonials, addTestimonial, deleteTestimonial } from "../controllers/testimonialController.js";
import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();

router.get("/", getTestimonials);
router.post("/", protect, upload.single("image"), addTestimonial);
router.delete("/:id", protect, deleteTestimonial);

export default router;
