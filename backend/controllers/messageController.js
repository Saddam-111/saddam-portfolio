import Message from "../models/messageModel.js";

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, messages });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();

    res.status(201).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) return res.status(404).json({ success: false, message: "Message not found" });

    await message.deleteOne();
    res.status(200).json({ success: true, message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
