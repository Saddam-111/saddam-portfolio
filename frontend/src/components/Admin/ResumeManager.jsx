import React, { useEffect, useState, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import axios from "../../utils/api";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ResumeManager() {
  const { setError } = useContext(AdminContext);
  const [resume, setResume] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchResume = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/resume");
      setResume(res.data.resumes[0] || null);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch resume");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResume();
  }, []);

  const handleUpload = async () => {
    if (!file) return alert("Select a PDF file!");
    if (file.type !== "application/pdf")
      return alert("Only PDF files are allowed!");
    try {
      setLoading(true);
      const data = new FormData();
      data.append("resumeFile", file);
      await axios.post("/resume", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFile(null);
      fetchResume();
    } catch (err) {
      setError(err.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete your resume?")) return;
    try {
      setLoading(true);
      await axios.delete(`/resume/${id}`);
      setResume(null);
    } catch (err) {
      setError(err.response?.data?.message || "Delete failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex-1">
        <h3 className="font-display font-semibold text-lg sm:text-xl text-text-primary mb-1">
          Resume Management
        </h3>
        <p className="text-text-secondary text-sm">Upload and manage your resume</p>
      </div>

      {/* Upload Section */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="font-mono text-xs text-text-secondary bg-card border border-border px-3 py-2 rounded-lg"
        />
        <button
          onClick={handleUpload}
          disabled={loading}
          className="font-mono text-xs px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-lg disabled:opacity-50"
        >
          {loading ? "Uploading..." : "+ Upload / Replace"}
        </button>
      </div>

      {loading && (
        <p className="text-text-secondary text-sm animate-pulse text-center">
          Processing...
        </p>
      )}

      {/* Resume Display */}
      {resume ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border p-4 rounded-xl"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-2xl text-error">PDF</span>
              <span className="font-mono text-sm text-primary">
                {resume.title || "my_resume.pdf"}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  navigate("/resume-view", { state: { resumeUrl: resume.resumeFile?.url } })
                }
                className="font-mono text-xs px-3 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-all"
              >
                View
              </button>
              <button
                onClick={() => handleDelete(resume._id)}
                disabled={loading}
                className="font-mono text-xs px-3 py-2 border border-error text-error hover:bg-error hover:text-white rounded-lg transition-all disabled:opacity-50"
              >
                Delete
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <p className="text-text-secondary text-sm text-center">
          No resume found. Upload one above.
        </p>
      )}
    </div>
  );
}