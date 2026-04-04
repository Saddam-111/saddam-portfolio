import React, { useEffect, useState, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import axios from "../../utils/api";
import { motion } from "framer-motion";
import { FaPlus, FaTrash, FaEye } from "react-icons/fa";
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
      <div className="border border-[#1f521f]">
        <div className="border-b border-[#1f521f] p-2 flex items-center gap-2">
          <span className="text-[#33ff00] font-mono text-xs">resume_manager.sh</span>
        </div>
        <div className="p-3">
          <h3 className="font-mono text-[#33ff00] text-lg">RESUME_MANAGEMENT</h3>
        </div>
      </div>

      {/* Upload Section */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="font-mono text-xs text-[#666666] bg-[#0a0a0a] border border-[#1f521f] px-3 py-2"
        />
        <button
          onClick={handleUpload}
          disabled={loading}
          className="font-mono text-xs px-4 py-2 border border-[#33ff00] text-[#33ff00] hover:bg-[#33ff00] hover:text-[#0a0a0a] transition-all"
        >
          {loading ? "UPLOADING..." : "[ + ] UPLOAD / REPLACE"}
        </button>
      </div>

      {loading && (
        <p className="font-mono text-xs text-[#ffb000] animate-pulse text-center">
          $ executing operation...
        </p>
      )}

      {/* Resume Display */}
      {resume ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-[#1f521f] bg-[#0a0a0a] p-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-2xl text-[#ff3333]">PDF</span>
              <span className="font-mono text-sm text-[#33ff00]">
                {resume.title || "my_resume.pdf"}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  navigate("/resume-view", { state: { resumeUrl: resume.resumeFile?.url } })
                }
                className="font-mono text-xs px-3 py-2 border border-[#33ff00] text-[#33ff00] hover:bg-[#33ff00] hover:text-[#0a0a0a]"
              >
                [VIEW]
              </button>
              <button
                onClick={() => handleDelete(resume._id)}
                disabled={loading}
                className="font-mono text-xs px-3 py-2 border border-[#ff3333] text-[#ff3333] hover:bg-[#ff3333] hover:text-[#0a0a0a]"
              >
                [DELETE]
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <p className="font-mono text-xs text-[#666666] text-center">
          error: no resume found
        </p>
      )}
    </div>
  );
}
