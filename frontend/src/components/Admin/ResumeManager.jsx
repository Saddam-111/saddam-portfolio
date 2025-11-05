import React, { useEffect, useState, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import axios from "../../utils/api";
import { motion } from "framer-motion";
import { FaPlus, FaTrash, FaEye, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ResumeManager() {
  const { setError } = useContext(AdminContext);
  const [resume, setResume] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  // Fetch resume
  const fetchResume = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/resume");
      console.log(res.data.resumes[0]);
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

  // Upload resume
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

  // Delete resume
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
    <div className="space-y-6 p-4 sm:p-6 bg-gray-50 dark:bg-gray-950 rounded-xl shadow-sm">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center sm:text-left">
        Resume
      </h3>

      {/* Upload Section */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full sm:w-auto p-2 border rounded-lg text-sm bg-white dark:bg-gray-800 dark:text-white"
        />
        <button
          onClick={handleUpload}
          disabled={loading}
          className={`w-full sm:w-auto px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          <FaPlus /> {loading ? "Uploading..." : "Upload / Replace"}
        </button>
      </div>

      {loading && (
        <p className="text-gray-500 text-sm animate-pulse text-center">
          Loading...
        </p>
      )}

      {/* Resume Display */}
      {resume ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <FaFilePdf className="text-pink-600 text-3xl" />
            <span className="font-medium text-gray-800 dark:text-gray-200">
              {resume.title || "My Resume"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
  onClick={() =>
    navigate("/resume-view", { state: { resumeUrl: resume.resumeFile?.url } })
  }
  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg flex items-center gap-2 transition-all"
>
  <FaEye /> View
</button>

            <button
              onClick={() => handleDelete(resume._id)}
              disabled={loading}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg flex items-center gap-2 transition-all"
            >
              <FaTrash /> Delete
            </button>
          </div>
        </motion.div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400">
          No resume uploaded yet.
        </p>
      )}
    </div>
  );
}

// small icon fix
const FaFilePdf = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6z" />
    <path
      fill="#fff"
      d="M9 13h1.5v2H9v-2zm4.5 0h1v2h-1v-2zM12 8h4v4h-1.5V9.5H12V8z"
    />
  </svg>
);
