import express from "express";
import {
  getCertificates,
  addCertificate,
  deleteCertificate,
} from "../controllers/certificateController.js";
import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();

router.get("/", getCertificates);
router.post("/", protect, upload.single("certificateImage"), addCertificate);
router.delete("/:id", protect, deleteCertificate);

export default router;
