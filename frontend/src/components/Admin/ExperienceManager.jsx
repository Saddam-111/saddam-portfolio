import React, { useEffect, useState, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import axios from "../../utils/api";
import { motion } from "framer-motion";
import { Button, Input, TextArea } from "../Common";

export default function ExperienceManager() {
  const { setError } = useContext(AdminContext);
  const [experiences, setExperiences] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentExp, setCurrentExp] = useState(null);
  const [form, setForm] = useState({ role: "", company: "", duration: "", description: "", thumbnail: null });
  const [loading, setLoading] = useState(false);

  const fetchExperiences = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/experience");
      setExperiences(res.data.experiences);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch experiences");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchExperiences(); }, []);

  const openModal = (exp = null) => {
    setCurrentExp(exp);
    setForm({
      role: exp?.role || "",
      company: exp?.company || "",
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
      data.append("role", form.role);
      data.append("company", form.company);
      data.append("duration", form.duration);
      data.append("description", form.description);
      if (form.thumbnail) data.append("thumbnail", form.thumbnail);

      if (currentExp) {
        await axios.put(`/experience/${currentExp._id}`, data, { headers: { "Content-Type": "multipart/form-data" } });
      } else {
        await axios.post("/experience", data, { headers: { "Content-Type": "multipart/form-data" } });
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
    if (!confirm("Delete this experience entry?")) return;
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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h3 className="font-display font-semibold text-lg sm:text-xl text-text-primary mb-1">
            Experience Management
          </h3>
          <p className="text-text-secondary text-sm">Add, edit, or remove work experiences.</p>
        </div>
        <Button onClick={() => openModal()} size="sm">+ Add Experience</Button>
      </div>

      {loading && experiences.length === 0 ? (
        <p className="text-center text-text-secondary">Loading...</p>
      ) : (
        <div className="space-y-3">
          {experiences.map((exp) => (
            <motion.div key={exp._id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card border border-border p-4 rounded-xl">
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <div>
                  <h4 className="font-display font-medium text-text-primary">{exp.role}</h4>
                  <p className="text-text-secondary text-sm">{exp.company} • {exp.duration}</p>
                  <p className="text-text-secondary text-xs mt-1 line-clamp-2">{exp.description}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => openModal(exp)} className="text-text-secondary hover:text-primary" aria-label="Edit">✏️</button>
                  <button onClick={() => handleDelete(exp._id)} className="text-text-secondary hover:text-error" aria-label="Delete">🗑️</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setModalOpen(false)}>
          <div className="bg-card border border-border rounded-xl w-full max-w-lg p-4 sm:p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-display font-semibold text-lg text-text-primary mb-4">{currentExp ? "Edit Experience" : "Add Experience"}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input label="Role" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} required />
              <Input label="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required />
              <Input label="Duration" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} placeholder="e.g. Jan 2023 - Present" />
              <TextArea label="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} />
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-text-secondary mb-1.5">Logo (optional)</label>
                <input type="file" accept="image/*" onChange={(e) => setForm({ ...form, thumbnail: e.target.files[0] })} className="w-full text-sm text-text-secondary" />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <Button variant="ghost" size="sm" onClick={() => setModalOpen(false)}>Cancel</Button>
                <Button type="submit" size="sm" disabled={loading} isLoading={loading}>{currentExp ? "Update" : "Add"}</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}