import Skill from "../models/skillModel.js";
import { uploadCloudinary, deleteCloudinary } from "../config/cloudinary.js";

// ✅ Get all skills
export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, skills });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Add new skill
export const addSkill = async (req, res) => {
  try {
    const { name, level, category } = req.body;
    let icon = {};

    if (req.file) {
      const uploadResult = await uploadCloudinary(req.file.path, "skills");
      icon = { url: uploadResult.secure_url, public_id: uploadResult.public_id };
    }

    const skill = new Skill({ name, level, category, icon });
    await skill.save();
    res.status(201).json({ success: true, skill });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update skill
export const updateSkill = async (req, res) => {
  try {
    const { name, level, category } = req.body;
    const skill = await Skill.findById(req.params.id);
    if (!skill)
      return res.status(404).json({ success: false, message: "Skill not found" });

    // Handle icon replacement
    if (req.file) {
      if (skill.icon?.public_id) await deleteCloudinary(skill.icon.public_id);
      const uploadResult = await uploadCloudinary(req.file.path, "skills");
      skill.icon = { url: uploadResult.secure_url, public_id: uploadResult.public_id };
    }

    skill.name = name || skill.name;
    skill.level = level || skill.level;
    skill.category = category || skill.category;

    await skill.save();
    res.status(200).json({ success: true, skill });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Delete skill
export const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill)
      return res.status(404).json({ success: false, message: "Skill not found" });

    if (skill.icon?.public_id) await deleteCloudinary(skill.icon.public_id);
    await skill.deleteOne();

    res.status(200).json({ success: true, message: "Skill deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
