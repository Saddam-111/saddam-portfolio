import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const ResumeView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // ✅ Get resume URL
  const resumeUrl =
    location.state?.resumeUrl ||
    new URLSearchParams(location.search).get("url");

  // ❌ Handle missing URL
  if (!resumeUrl) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-center">
        <p className="text-xl mb-4">No resume found.</p>
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg shadow-md transition-all"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a1a] text-white overflow-hidden">
      {/* ===== Simple Glass Header ===== */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-3 backdrop-blur-xl bg-white/10 border-b border-white/10 shadow-md z-50">
        <h1 className="text-lg font-semibold text-white/90">Resume Preview</h1>

        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-white/20 rounded-full transition-all"
        >
          <FaTimes size={18} />
        </button>
      </div>

      {/* ===== Resume PDF/Image Viewer ===== */}
      <div className="flex items-center justify-center w-full h-full pt-12">
        <div className="relative w-full h-[calc(100vh-56px)] flex items-center justify-center overflow-hidden bg-black">
          {/* Resume Image */}
          <img
            src={resumeUrl}
            alt="Resume"
            onLoad={() => setLoading(false)}
            className="max-w-full max-h-full object-contain"
          />

          {/* Loading Spinner */}
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm z-10">
              <div className="w-12 h-12 border-4 border-white/30 border-t-pink-500 rounded-full animate-spin"></div>
              <p className="mt-4 text-white/70">Loading Resume...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeView;
