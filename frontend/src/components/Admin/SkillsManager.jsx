import React, { useEffect, useState, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import axios from "../../utils/api";
import { motion } from "framer-motion";
import { FaPlus, FaEdit, FaTrash, FaSpinner } from "react-icons/fa";
import { Card, Badge, Button, Input } from "../Common";

const SkillsManager = () => {
  const { skills, fetchSkills, loading: contextLoading, setError } = useContext(AdminContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(null);
  const [form, setForm] = useState({ name: "", level: "Intermediate", category: "", icon: null });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSkills();
  }, [fetchSkills]);

  const openModal = (skill = null) => {
    setCurrentSkill(skill);
    setForm({
      name: skill?.name || "",
      level: skill?.level || "Intermediate",
      category: skill?.category || "",
      icon: null,
    });
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("level", form.level);
      data.append("category", form.category);
      if (form.icon) data.append("icon", form.icon);

      if (currentSkill) {
        await axios.put(`/skills/${currentSkill._id}`, data, { headers: { "Content-Type": "multipart/form-data" } });
      } else {
        await axios.post("/skills", data, { headers: { "Content-Type": "multipart/form-data" } });
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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h3 className="font-display font-semibold text-lg sm:text-xl text-text-primary mb-1">
            Skills Management
          </h3>
          <p className="text-text-secondary text-sm">Add, edit, or remove skills from the list.</p>
        </div>
        <Button onClick={() => openModal()} size="sm">+ Add Skill</Button>
      </div>

      {contextLoading && skills.length === 0 ? (
        <div className="flex justify-center py-12">
          <FaSpinner className="animate-spin text-primary text-2xl" />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {Array.isArray(skills) && skills.map((skill) => (
            <Card key={skill._id} hoverable className="rounded-xl text-center p-4">
              {skill.icon?.url && (
                <img src={skill.icon.url} alt={skill.name} className="w-10 h-10 object-contain mx-auto mb-2" />
              )}
              <h4 className="font-display font-medium text-text-primary text-sm">{skill.name}</h4>
              <p className="text-text-secondary text-xs mt-1">{skill.category}</p>
              <Badge variant="primary" size="sm" className="mt-2">{skill.level}</Badge>
              <div className="flex justify-center gap-2 mt-3">
                <button onClick={() => openModal(skill)} className="text-text-secondary hover:text-primary transition-colors" aria-label="Edit skill">
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(skill._id)} className="text-text-secondary hover:text-error transition-colors" aria-label="Delete skill">
                  <FaTrash />
                </button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setModalOpen(false)}>
          <div className="bg-card border border-border rounded-xl w-full max-w-md p-4 sm:p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-display font-semibold text-lg text-text-primary mb-4">{currentSkill ? "Edit Skill" : "Add Skill"}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input label="Skill Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              <Input label="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-text-secondary mb-1.5">Level</label>
                <select value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })} className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-text-primary font-sans text-sm focus:outline-none focus:border-primary">
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-text-secondary mb-1.5">Icon (optional)</label>
                <input type="file" accept="image/*" onChange={(e) => setForm({ ...form, icon: e.target.files[0] })} className="w-full text-sm text-text-secondary file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-primary file:text-white file:text-xs" />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <Button variant="ghost" size="sm" onClick={() => setModalOpen(false)}>Cancel</Button>
                <Button type="submit" size="sm" disabled={loading} isLoading={loading}>{currentSkill ? "Update" : "Add"}</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsManager;