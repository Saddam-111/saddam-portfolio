import React, { useEffect, useState, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import axios from "../../utils/api";
import { motion } from "framer-motion";
import { FaPlus, FaEdit, FaTrash, FaSpinner } from "react-icons/fa";

export default function ExperienceManager() {
  const { setError } = useContext(AdminContext);
  const [experiences, setExperiences] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentExp, setCurrentExp] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    duration: "",
    description: "",
    thumbnail: null,
  });

  const fetchExperiences = async () => {
    try {
      const res = await axios.get("/experience");
      setExperiences(res.data.experiences || []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch experiences");
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  const openModal = (exp = null) => {
    setCurrentExp(exp);
    setFormData({
      company: exp?.company || "",
      role: exp?.role || "",
      duration: exp?.duration || "",
      description: exp?.description || "",
      thumbnail: null,
    });
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append("company", formData.company);
      data.append("role", formData.role);
      data.append("duration", formData.duration);
      data.append("description", formData.description);
      if (formData.thumbnail) data.append("thumbnail", formData.thumbnail);

      if (currentExp) {
        await axios.put(`/experience/${currentExp._id}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post("/experience", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      await fetchExperiences();
      setModalOpen(false);
    } catch (err) {
      setError(err.response?.data?.message || "Operation failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this experience?")) return;
    setLoading(true);
    try {
      await axios.delete(`/experience/${id}`);
      await fetchExperiences();
    } catch (err) {
      setError(err.response?.data?.message || "Delete failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Experiences</h3>
        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg shadow-md"
        >
          <FaPlus /> Add Experience
        </button>
      </div>

      {loading && (
        <div className="flex justify-center py-4">
          <FaSpinner className="animate-spin text-pink-600 text-2xl" />
        </div>
      )}

      <div className="grid gap-4">
        {Array.isArray(experiences) &&
          experiences.map((exp) => (
            <motion.div
              key={exp._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md flex justify-between items-start gap-4"
            >
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-lg">{exp.role}</h4>
                <p className="text-gray-500 dark:text-gray-400 font-medium">
                  {exp.company} • {exp.duration}
                </p>
                <p className="text-sm">{exp.description}</p>
                {exp.thumbnail?.url && (
                  <img
                    src={exp.thumbnail.url}
                    alt={exp.role}
                    className="w-24 h-24 object-cover rounded-md mt-2"
                  />
                )}
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => openModal(exp)}
                  className="text-blue-500 hover:text-blue-600"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(exp._id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            </motion.div>
          ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl w-full max-w-md shadow-2xl"
          >
            <h4 className="text-xl font-bold mb-4">
              {currentExp ? "Edit Experience" : "Add Experience"}
            </h4>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                required
              />
              <input
                type="text"
                placeholder="Role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                required
              />
              <input
                type="text"
                placeholder="Duration (e.g. Jan 2023 - Dec 2023)"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
              />
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                rows={3}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setFormData({ ...formData, thumbnail: e.target.files[0] })
                }
                className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
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
                  className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all flex items-center gap-2"
                >
                  {loading && <FaSpinner className="animate-spin" />}{" "}
                  {currentExp ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
