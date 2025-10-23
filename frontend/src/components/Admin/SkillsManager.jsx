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
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Skills</h3>
        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg shadow-md"
        >
          <FaPlus /> Add Skill
        </button>
      </div>

      {loading && (
        <div className="flex justify-center py-4">
          <FaSpinner className="animate-spin text-pink-600 text-2xl" />
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.isArray(skills) &&
          skills.map((skill) => (
            <motion.div
              key={skill._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-900 p-3 rounded-xl shadow-md flex flex-col items-center text-center gap-2"
            >
              {skill.icon?.url && (
                <img
                  src={skill.icon.url}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
              )}
              <h4 className="font-semibold">{skill.name}</h4>
              <p className="text-sm text-gray-500">{skill.category}</p>
              <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">
                {skill.level}
              </span>
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => openModal(skill)}
                  className="text-blue-500 hover:text-blue-600"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(skill._id)}
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
              {currentSkill ? "Edit Skill" : "Add Skill"}
            </h4>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3"
              encType="multipart/form-data"
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Skill Name"
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                required
              />

              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category (e.g. Frontend, Backend)"
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
              />

              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => setIcon(e.target.files[0])}
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
                  {currentSkill ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
