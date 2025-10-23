import Experience from "../models/experienceModel.js";
import { uploadCloudinary, deleteCloudinary } from "../config/cloudinary.js";

// ✅ Get all experiences
export const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, experiences });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Add new experience
export const addExperience = async (req, res) => {
  try {
    const { company, role, duration, description } = req.body;
    let thumbnail = {};

    if (req.file) {
      const uploadResult = await uploadCloudinary(req.file.path, "experiences");
      thumbnail = { url: uploadResult.secure_url, public_id: uploadResult.public_id };
    }

    const experience = new Experience({ company, role, duration, description, thumbnail });
    await experience.save();

    res.status(201).json({ success: true, experience });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update experience
export const updateExperience = async (req, res) => {
  try {
    const { company, role, duration, description } = req.body;
    const experience = await Experience.findById(req.params.id);
    if (!experience)
      return res.status(404).json({ success: false, message: "Experience not found" });

    if (req.file) {
      if (experience.thumbnail?.public_id) await deleteCloudinary(experience.thumbnail.public_id);
      const uploadResult = await uploadCloudinary(req.file.path, "experiences");
      experience.thumbnail = { url: uploadResult.secure_url, public_id: uploadResult.public_id };
    }

    experience.company = company || experience.company;
    experience.role = role || experience.role;
    experience.duration = duration || experience.duration;
    experience.description = description || experience.description;

    await experience.save();
    res.status(200).json({ success: true, experience });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Delete experience
export const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience)
      return res.status(404).json({ success: false, message: "Experience not found" });

    if (experience.thumbnail?.public_id)
      await deleteCloudinary(experience.thumbnail.public_id);

    await experience.deleteOne();
    res.status(200).json({ success: true, message: "Experience deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
