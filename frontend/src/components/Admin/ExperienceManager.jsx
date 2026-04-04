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
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="border border-[#1f521f] flex-1">
          <div className="border-b border-[#1f521f] p-2 flex items-center gap-2">
            <span className="text-[#33ff00] font-mono text-xs">experience_manager.sh</span>
          </div>
          <div className="p-3">
            <h3 className="font-mono text-[#33ff00] text-lg">EXPERIENCE_MANAGEMENT</h3>
          </div>
        </div>
        <button
          onClick={() => openModal()}
          className="font-mono text-xs px-4 py-2 border border-[#33ff00] text-[#33ff00] hover:bg-[#33ff00] hover:text-[#0a0a0a] transition-all"
        >
          [ + ] ADD_EXPERIENCE
        </button>
      </div>

      {loading && (
        <div className="flex justify-center py-4">
          <FaSpinner className="animate-spin text-[#33ff00] text-xl" />
        </div>
      )}

      {/* Experience List */}
      <div className="grid gap-3">
        {Array.isArray(experiences) &&
          experiences.map((exp) => (
            <motion.div
              key={exp._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-[#1f521f] bg-[#0a0a0a] p-4"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                <div className="flex-1">
                  <h4 className="font-mono text-[#33ff00] text-sm">{exp.role}</h4>
                  <p className="font-mono text-xs text-[#ffb000]">
                    @ {exp.company} • {exp.duration}
                  </p>
                  <p className="font-mono text-xs text-[#666666] mt-2">{exp.description}</p>
                  {exp.thumbnail?.url && (
                    <img
                      src={exp.thumbnail.url}
                      alt={exp.role}
                      className="w-20 h-20 object-cover mt-2 border border-[#1f521f]"
                    />
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => openModal(exp)}
                    className="font-mono text-xs px-2 py-1 border border-[#ffb000] text-[#ffb000] hover:bg-[#ffb000] hover:text-[#0a0a0a]"
                  >
                    [EDIT]
                  </button>
                  <button
                    onClick={() => handleDelete(exp._id)}
                    className="font-mono text-xs px-2 py-1 border border-[#ff3333] text-[#ff3333] hover:bg-[#ff3333] hover:text-[#0a0a0a]"
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
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#0a0a0a] border border-[#1f521f] w-full max-w-md"
          >
            <div className="border-b border-[#1f521f] p-3 flex justify-between items-center">
              <span className="font-mono text-xs text-[#33ff00]">
                {currentExp ? "edit_experience.sh" : "add_experience.sh"}
              </span>
              <button
                onClick={() => setModalOpen(false)}
                className="text-[#ff3333] hover:text-[#ffb000]"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-3">
              <input
                type="text"
                placeholder="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-[#1f521f] px-3 py-2 font-mono text-sm text-[#cccccc] placeholder-[#666666] focus:outline-none focus:border-[#33ff00]"
                required
              />
              <input
                type="text"
                placeholder="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-[#1f521f] px-3 py-2 font-mono text-sm text-[#cccccc] placeholder-[#666666] focus:outline-none focus:border-[#33ff00]"
                required
              />
              <input
                type="text"
                placeholder="duration (e.g. Jan 2023 - Dec 2023)"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-[#1f521f] px-3 py-2 font-mono text-sm text-[#cccccc] placeholder-[#666666] focus:outline-none focus:border-[#33ff00]"
              />
              <textarea
                placeholder="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-[#1f521f] px-3 py-2 font-mono text-sm text-[#cccccc] placeholder-[#666666] focus:outline-none focus:border-[#33ff00] resize-none"
                rows={3}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFormData({ ...formData, thumbnail: e.target.files[0] })}
                className="font-mono text-xs text-[#666666]"
              />
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="font-mono text-xs px-4 py-2 border border-[#666666] text-[#666666] hover:border-[#ff3333] hover:text-[#ff3333]"
                >
                  [CANCEL]
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="font-mono text-xs px-4 py-2 border border-[#33ff00] text-[#33ff00] hover:bg-[#33ff00] hover:text-[#0a0a0a]"
                >
                  {loading && <FaSpinner className="animate-spin mr-1" />}
                  {currentExp ? "[UPDATE]" : "[ADD]"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
