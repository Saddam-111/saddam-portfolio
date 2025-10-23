import express from "express";
import { getMessages, addMessage, deleteMessage } from "../controllers/messageController.js";
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router();

router.get("/", protect, getMessages);
router.post("/", addMessage);
router.delete("/:id", protect, deleteMessage);

export default router;
