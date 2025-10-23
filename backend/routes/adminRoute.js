import express from "express";
import { loginAdmin, logoutAdmin } from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Login route
router.post("/login", loginAdmin);

// Logout route (protected optional, frontend can just remove token)
router.post("/logout", protect, logoutAdmin);

export default router;
