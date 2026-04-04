import React, { useEffect, useState, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import axios from "../../utils/api";
import { motion } from "framer-motion";
import { FaPlus, FaEdit, FaTrash, FaSpinner } from "react-icons/fa";

export default function SkillsManager() {
  const { setError } = useContext(AdminContext);
  const [skills, setSkills] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(null);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("Intermediate");
  const [category, setCategory] = useState("");
  const [icon, setIcon] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSkills = async () => {
    try {
      const res = await axios.get("/skills");
      setSkills(res.data.skills);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch skills");
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const openModal = (skill = null) => {
    setCurrentSkill(skill);
    setName(skill?.name || "");
    setLevel(skill?.level || "Intermediate");
    setCategory(skill?.category || "");
    setIcon(null);
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("level", level);
      formData.append("category", category);
      if (icon) formData.append("icon", icon);

      if (currentSkill) {
        await axios.put(`/skills/${currentSkill._id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post("/skills", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      await fetchSkills();
      setModalOpen(false);
    } catch (err) {
      setError(err.response?.data?.message || "Operation failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this skill?")) return;
    setLoading(true);
    try {
      await axios.delete(`/skills/${id}`);
      await fetchSkills();
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
            <span className="text-[#33ff00] font-mono text-xs">skills_manager.sh</span>
          </div>
          <div className="p-3">
            <h3 className="font-mono text-[#33ff00] text-lg">SKILLS_MANAGEMENT</h3>
          </div>
        </div>
        <button
          onClick={() => openModal()}
          className="font-mono text-xs px-4 py-2 border border-[#33ff00] text-[#33ff00] hover:bg-[#33ff00] hover:text-[#0a0a0a] transition-all"
        >
          [ + ] ADD_SKILL
        </button>
      </div>

      {loading && (
        <div className="flex justify-center py-4">
          <FaSpinner className="animate-spin text-[#33ff00] text-xl" />
        </div>
      )}

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Array.isArray(skills) &&
          skills.map((skill) => (
            <motion.div
              key={skill._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-[#1f521f] bg-[#0a0a0a] p-3"
            >
              {skill.icon?.url && (
                <img
                  src={skill.icon.url}
                  alt={skill.name}
                  className="w-10 h-10 object-contain mx-auto mb-2"
                />
              )}
              <h4 className="font-mono text-[#33ff00] text-sm text-center">{skill.name}</h4>
              <p className="font-mono text-xs text-[#666666] text-center">{skill.category}</p>
              <span className="block font-mono text-xs text-[#ffb000] text-center mt-1">
                {skill.level}
              </span>
              <div className="flex justify-center gap-3 mt-2">
                <button
                  onClick={() => openModal(skill)}
                  className="text-[#ffb000] hover:text-[#33ff00]"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(skill._id)}
                  className="text-[#ff3333] hover:text-[#ffb000]"
                >
                  <FaTrash />
                </button>
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
                {currentSkill ? "edit_skill.sh" : "add_skill.sh"}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="skill_name"
                className="w-full bg-[#0a0a0a] border border-[#1f521f] px-3 py-2 font-mono text-sm text-[#cccccc] placeholder-[#666666] focus:outline-none focus:border-[#33ff00]"
                required
              />
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="category (e.g. Frontend, Backend)"
                className="w-full bg-[#0a0a0a] border border-[#1f521f] px-3 py-2 font-mono text-sm text-[#cccccc] placeholder-[#666666] focus:outline-none focus:border-[#33ff00]"
              />
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-[#1f521f] px-3 py-2 font-mono text-sm text-[#cccccc] focus:outline-none focus:border-[#33ff00]"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setIcon(e.target.files[0])}
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
                  {currentSkill ? "[UPDATE]" : "[ADD]"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
