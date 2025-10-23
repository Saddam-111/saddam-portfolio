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

  // Fetch all projects
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

      // append only filled fields
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
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Projects</h3>
        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg shadow-md"
        >
          <FaPlus /> Add Project
        </button>
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="text-center text-gray-600 dark:text-gray-400 animate-pulse">
          Loading projects...
        </div>
      )}

      {/* Projects List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {!loading &&
          Array.isArray(projects) &&
          projects.map((proj) => (
            <motion.div
              key={proj._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={proj.thumbnail?.url || "/placeholder.png"}
                alt={proj.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-lg">{proj.title}</h4>
                  {proj.category && (
                    <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">
                      {proj.category}
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {proj.description
                    ? proj.description.split(" ").slice(0, 25).join(" ") +
                      (proj.description.split(" ").length > 25 ? "..." : "")
                    : ""}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Tech:{" "}
                  {Array.isArray(proj.techStack)
                    ? proj.techStack.join(", ")
                    : proj.techStack || "N/A"}
                </p>

                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => openModal(proj)}
                    className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-all"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(proj._id)}
                    className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-all"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
      </div>

      {/* Add/Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl w-full max-w-lg shadow-2xl relative"
          >
            <h4 className="text-xl font-bold mb-4">
              {currentProject ? "Edit Project" : "Add Project"}
            </h4>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
                required
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
              />

              <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
              />

              <input
                type="text"
                name="techStack"
                placeholder="Tech Stack (comma separated)"
                value={form.techStack}
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
              />

              <input
                type="text"
                name="github"
                placeholder="Github Link"
                value={form.github}
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
              />

              <input
                type="text"
                name="live"
                placeholder="Live Demo Link"
                value={form.live}
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
              />

              <input
                type="text"
                name="category"
                placeholder="Category (e.g. Frontend, Full Stack)"
                value={form.category}
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
              />

              <input
                type="file"
                name="thumbnail"
                onChange={handleChange}
                className="p-3 text-sm text-gray-700 dark:text-gray-300"
              />

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-gray-400 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-4 py-2 rounded-lg text-white transition-all ${
                    loading
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-pink-600 hover:bg-pink-700"
                  }`}
                >
                  {loading
                    ? currentProject
                      ? "Updating..."
                      : "Adding..."
                    : currentProject
                    ? "Update"
                    : "Add"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
