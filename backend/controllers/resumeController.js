import { deleteCloudinary, uploadCloudinary } from "../config/cloudinary.js";
import Resume from "../models/resumeModel.js";


// 🧾 Get all resumes
export const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, resumes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ➕ Add a new resume
export const addResume = async (req, res) => {
  try {
    const { title, description } = req.body;
    let resumeFile = {};

    if (req.file) {
      const uploadResult = await uploadCloudinary(req.file.path, "resumes");
      resumeFile = {
        url: uploadResult.secure_url,
        public_id: uploadResult.public_id,
      };
    }

    const resume = new Resume({
      title,
      description,
      resumeFile,
    });

    await resume.save();
    res.status(201).json({ success: true, resume });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ❌ Delete a resume
export const deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume)
      return res
        .status(404)
        .json({ success: false, message: "Resume not found" });

    if (resume.resumeFile?.public_id)
      await deleteCloudinary(resume.resumeFile.public_id);

    await resume.deleteOne();
    res
      .status(200)
      .json({ success: true, message: "Resume deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
