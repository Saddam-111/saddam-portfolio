import React, { useState, useEffect, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { motion } from "framer-motion";
import axios from "../../utils/api";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

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
        <div className="border border-[#1f521f] flex-1">
          <div className="border-b border-[#1f521f] p-2 flex items-center gap-2">
            <span className="text-[#33ff00] font-mono text-xs">projects_manager.sh</span>
          </div>
          <div className="p-2 sm:p-3">
            <h3 className="font-mono text-[#33ff00] text-sm sm:text-lg">PROJECTS_MANAGEMENT</h3>
          </div>
        </div>
        <button
          onClick={() => openModal()}
          className="font-mono text-xs px-3 sm:px-4 py-2 border border-[#33ff00] text-[#33ff00] hover:bg-[#33ff00] hover:text-[#0a0a0a] transition-all whitespace-nowrap"
        >
          [ + ] ADD_PROJECT
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center font-mono text-xs text-[#ffb000] animate-pulse">
          $ executing operation...
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {Array.isArray(projects) &&
          projects.map((proj) => (
            <motion.div
              key={proj._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-[#1f521f] bg-[#0a0a0a]"
            >
              <div className="border-b border-[#1f521f] p-2">
                <span className="font-mono text-xs text-[#666666]">
                  {proj.category || "PROJECT"}
                </span>
              </div>
              <div className="p-2 sm:p-3">
                <img
                  src={proj.thumbnail?.url || "/placeholder.png"}
                  alt={proj.title}
                  className="w-full h-24 sm:h-32 object-cover mb-2 sm:mb-3 border border-[#1f521f]"
                />
                <h4 className="font-mono text-[#33ff00] text-xs sm:text-sm mb-2">{proj.title}</h4>
                <p className="font-mono text-xs text-[#666666] line-clamp-2 mb-2 sm:mb-3">
                  {proj.description ? proj.description.split(" ").slice(0, 15).join(" ") + "..." : ""}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => openModal(proj)}
                    className="font-mono text-xs px-2 py-1 border border-[#ffb000] text-[#ffb000] hover:bg-[#ffb000] hover:text-[#0a0a0a] transition-all"
                  >
                    [EDIT]
                  </button>
                  <button
                    onClick={() => handleDelete(proj._id)}
                    className="font-mono text-xs px-2 py-1 border border-[#ff3333] text-[#ff3333] hover:bg-[#ff3333] hover:text-[#0a0a0a] transition-all"
                  >
                    [DEL]
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-3 sm:p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#0a0a0a] border border-[#1f521f] w-full max-w-lg max-h-[90vh] overflow-y-auto"
          >
            <div className="border-b border-[#1f521f] p-2 sm:p-3 flex justify-between items-center">
              <span className="font-mono text-xs text-[#33ff00]">
                {currentProject ? "edit_project.sh" : "add_project.sh"}
              </span>
              <button
                onClick={() => setModalOpen(false)}
                className="text-[#ff3333] hover:text-[#ffb000] text-lg sm:text-xl"
              >
                ×
              </button>
            </div>
            <form className="p-3 sm:p-4 flex flex-col gap-2 sm:gap-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full bg-[#0a0a0a] border border-[#1f521f] px-3 py-2 font-mono text-xs sm:text-sm text-[#cccccc] placeholder-[#666666] focus:outline-none focus:border-[#33ff00]"
              />
              <textarea
                name="description"
                placeholder="description"
                value={form.description}
                onChange={handleChange}
                rows={2}
                className="w-full bg-[#0a0a0a] border border-[#1f521f] px-3 py-2 font-mono text-xs sm:text-sm text-[#cccccc] placeholder-[#666666] focus:outline-none focus:border-[#33ff00] resize-none"
              />
              <input
                type="text"
                name="techStack"
                placeholder="tech_stack (comma separated)"
                value={form.techStack}
                onChange={handleChange}
                className="w-full bg-[#0a0a0a] border border-[#1f521f] px-3 py-2 font-mono text-xs sm:text-sm text-[#cccccc] placeholder-[#666666] focus:outline-none focus:border-[#33ff00]"
              />
              <input
                type="text"
                name="github"
                placeholder="github_link"
                value={form.github}
                onChange={handleChange}
                className="w-full bg-[#0a0a0a] border border-[#1f521f] px-3 py-2 font-mono text-xs sm:text-sm text-[#cccccc] placeholder-[#666666] focus:outline-none focus:border-[#33ff00]"
              />
              <input
                type="text"
                name="live"
                placeholder="live_demo_link"
                value={form.live}
                onChange={handleChange}
                className="w-full bg-[#0a0a0a] border border-[#1f521f] px-3 py-2 font-mono text-xs sm:text-sm text-[#cccccc] placeholder-[#666666] focus:outline-none focus:border-[#33ff00]"
              />
              <input
                type="text"
                name="category"
                placeholder="category (e.g. Frontend, Full Stack)"
                value={form.category}
                onChange={handleChange}
                className="w-full bg-[#0a0a0a] border border-[#1f521f] px-3 py-2 font-mono text-xs sm:text-sm text-[#cccccc] placeholder-[#666666] focus:outline-none focus:border-[#33ff00]"
              />
              <input
                type="file"
                name="thumbnail"
                onChange={handleChange}
                className="font-mono text-xs text-[#666666]"
              />
              <div className="flex justify-end gap-2 mt-3 sm:mt-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="font-mono text-xs px-3 sm:px-4 py-2 border border-[#666666] text-[#666666] hover:border-[#ff3333] hover:text-[#ff3333]"
                >
                  [CANCEL]
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="font-mono text-xs px-3 sm:px-4 py-2 border border-[#33ff00] text-[#33ff00] hover:bg-[#33ff00] hover:text-[#0a0a0a]"
                >
                  {loading ? "EXECUTING..." : currentProject ? "[UPDATE]" : "[ADD]"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
