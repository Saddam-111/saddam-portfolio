import Project from "../models/projectModel.js";
import { uploadCloudinary, deleteCloudinary } from "../config/cloudinary.js";

// ✅ Get all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, projects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Add new project
export const addProject = async (req, res) => {
  try {
    const { title, description, category, techStack, github, live } = req.body;
    let thumbnail = {};

    if (req.file) {
      const uploadResult = await uploadCloudinary(req.file.path, "projects");
      thumbnail = { url: uploadResult.secure_url, public_id: uploadResult.public_id };
    }

    const project = new Project({
      title,
      description,
      category,
      techStack: techStack ? techStack.split(",").map(t => t.trim()) : [],
      github,
      live,
      thumbnail,
    });

    await project.save();
    res.status(201).json({ success: true, project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update project
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category, techStack, github, live } = req.body;

    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ success: false, message: "Project not found" });

    if (req.file) {
      if (project.thumbnail?.public_id) {
        await deleteCloudinary(project.thumbnail.public_id);
      }
      const uploadResult = await uploadCloudinary(req.file.path, "projects");
      project.thumbnail = {
        url: uploadResult.secure_url,
        public_id: uploadResult.public_id,
      };
    }

    project.title = title || project.title;
    project.description = description || project.description;
    project.category = category || project.category;
    project.techStack = techStack ? techStack.split(",").map(t => t.trim()) : project.techStack;
    project.github = github || project.github;
    project.live = live || project.live;

    await project.save();
    res.status(200).json({ success: true, project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Delete project
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ success: false, message: "Project not found" });

    if (project.thumbnail?.public_id) await deleteCloudinary(project.thumbnail.public_id);
    await project.deleteOne();

    res.status(200).json({ success: true, message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
