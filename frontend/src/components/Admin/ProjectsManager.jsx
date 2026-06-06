import React, { useState, useEffect, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { motion } from "framer-motion";
import axios from "../../utils/api";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "../Common";

export default function ProjectsManager() {
  const { error, setError } = useContext(AdminContext);
  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    techStack: "",
    github: "",
    live: "",
    category: "",
    thumbnail: null,
  });

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/projects");
      setProjects(res.data?.projects || []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const openModal = (project = null) => {
    setCurrentProject(project);
    setForm({
      title: project?.title || "",
      description: project?.description || "",
      techStack: Array.isArray(project?.techStack)
        ? project.techStack.join(", ")
        : project?.techStack || "",
      github: project?.github || "",
      live: project?.live || "",
      category: project?.category || "",
      thumbnail: null,
    });
    setModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      if (form.title) formData.append("title", form.title);
      if (form.description) formData.append("description", form.description);
      if (form.techStack) formData.append("techStack", form.techStack);
      if (form.github) formData.append("github", form.github);
      if (form.live) formData.append("live", form.live);
      if (form.category) formData.append("category", form.category);
      if (form.thumbnail) formData.append("thumbnail", form.thumbnail);

      if (currentProject) {
        await axios.put(`/projects/${currentProject._id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post("/projects", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      await fetchProjects();
      setModalOpen(false);
    } catch (err) {
      setError(err.response?.data?.message || "Operation failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this project?")) return;
    try {
      setLoading(true);
      await axios.delete(`/projects/${id}`);
      await fetchProjects();
    } catch (err) {
      setError(err.response?.data?.message || "Delete failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex-1">
          <h3 className="font-display font-semibold text-lg sm:text-xl text-text-primary mb-1">
            Projects Management
          </h3>
          <p className="text-text-secondary text-sm">Manage your project portfolio</p>
        </div>
        <button
          onClick={() => openModal()}
          className="font-mono text-xs px-3 sm:px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all whitespace-nowrap rounded-lg"
        >
          + Add Project
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="p-3 bg-error/10 border border-error/20 rounded-lg">
          <p className="text-error font-mono text-sm">{error}</p>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="text-center text-text-secondary text-sm animate-pulse">
          Loading...
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(projects) &&
          projects.map((proj) => (
            <motion.div
              key={proj._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <div className="p-3">
                {proj.thumbnail?.url && (
                  <img
                    src={proj.thumbnail.url}
                    alt={proj.title}
                    className="w-full h-32 object-cover mb-3 rounded-lg border border-border"
                  />
                )}
                <span className="inline-block px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded-md mb-2">
                  {proj.category || "Project"}
                </span>
                <h4 className="font-display font-semibold text-text-primary text-sm mb-2">{proj.title}</h4>
                <p className="text-text-secondary text-xs line-clamp-2 mb-3">
                  {proj.description ? proj.description : ""}
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => openModal(proj)}
                    className="font-mono text-xs px-2 py-1 border border-accent text-accent hover:bg-accent hover:text-background transition-all rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(proj._id)}
                    className="font-mono text-xs px-2 py-1 border border-error text-error hover:bg-error hover:text-white transition-all rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-card border border-border w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl"
          >
            <div className="border-b border-border p-4 flex justify-between items-center">
              <h3 className="font-display font-semibold text-text-primary">
                {currentProject ? "Edit Project" : "Add Project"}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-text-secondary hover:text-text-primary text-xl"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <form className="p-4 flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border px-3 py-2 font-mono text-sm text-text-primary placeholder:text-text-secondary/50 rounded-lg focus:outline-none focus:border-primary"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                rows={3}
                className="w-full bg-background border border-border px-3 py-2 font-mono text-sm text-text-primary placeholder:text-text-secondary/50 rounded-lg focus:outline-none focus:border-primary resize-none"
              />
              <input
                type="text"
                name="techStack"
                placeholder="Tech Stack (comma separated)"
                value={form.techStack}
                onChange={handleChange}
                className="w-full bg-background border border-border px-3 py-2 font-mono text-sm text-text-primary placeholder:text-text-secondary/50 rounded-lg focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                name="github"
                placeholder="GitHub Link"
                value={form.github}
                onChange={handleChange}
                className="w-full bg-background border border-border px-3 py-2 font-mono text-sm text-text-primary placeholder:text-text-secondary/50 rounded-lg focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                name="live"
                placeholder="Live Demo Link"
                value={form.live}
                onChange={handleChange}
                className="w-full bg-background border border-border px-3 py-2 font-mono text-sm text-text-primary placeholder:text-text-secondary/50 rounded-lg focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                name="category"
                placeholder="Category (e.g. Frontend, Full Stack)"
                value={form.category}
                onChange={handleChange}
                className="w-full bg-background border border-border px-3 py-2 font-mono text-sm text-text-primary placeholder:text-text-secondary/50 rounded-lg focus:outline-none focus:border-primary"
              />
              <input
                type="file"
                name="thumbnail"
                onChange={handleChange}
                className="text-text-secondary text-sm"
                accept="image/*"
              />
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="font-mono text-xs px-4 py-2 border border-border text-text-secondary hover:text-text-primary rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="font-mono text-xs px-4 py-2 bg-primary text-white hover:bg-primary-hover rounded-lg disabled:opacity-50"
                >
                  {loading ? "Saving..." : currentProject ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}