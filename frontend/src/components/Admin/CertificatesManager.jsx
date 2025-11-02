import React, { useEffect, useState, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import axios from "../../utils/api";
import { motion } from "framer-motion";
import { FaPlus, FaTrash } from "react-icons/fa";

export default function CertificatesManager() {
  const { setError } = useContext(AdminContext);
  const [certificates, setCertificates] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCertificates = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/certificates");
      setCertificates(res.data.certificates);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch certificates");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  const handleUpload = async () => {
    if (!file) return alert("Select a file!");
    try {
      setLoading(true);
      const data = new FormData();
      data.append("certificateImage", file);
      await axios.post("/certificates", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFile(null);
      fetchCertificates();
    } catch (err) {
      setError(err.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this certificate?")) return;
    try {
      setLoading(true);
      await axios.delete(`/certificates/${id}`);
      fetchCertificates();
    } catch (err) {
      setError(err.response?.data?.message || "Delete failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 p-4 sm:p-6 bg-gray-50 dark:bg-gray-950 rounded-xl shadow-sm">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center sm:text-left">
        Certificates
      </h3>

      {/* Upload Section */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <input
          type="file"
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
          <FaPlus /> {loading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {loading && (
        <p className="text-gray-500 text-sm animate-pulse text-center">
          Loading...
        </p>
      )}

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.isArray(certificates) && certificates.length > 0 ? (
          certificates.map((cert) => (
            <motion.div
              key={cert._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative bg-white dark:bg-gray-900 p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={cert.certificateImage?.url}
                alt={cert.title || "Certificate"}
                className="w-full h-40 sm:h-48 object-cover rounded-md"
              />
              <button
                onClick={() => handleDelete(cert._id)}
                disabled={loading}
                className="absolute top-2 right-2 text-red-500 hover:text-red-600 bg-white/70 dark:bg-gray-800/70 rounded-full p-1"
              >
                <FaTrash />
              </button>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400 col-span-full">
            No certificates uploaded yet.
          </p>
        )}
      </div>
    </div>
  );
}
