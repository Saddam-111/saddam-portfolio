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
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Certificates</h3>

      <div className="flex gap-2 items-center">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="p-2 border rounded"
        />
        <button
          onClick={handleUpload}
          disabled={loading}
          className={`px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg flex items-center gap-2 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <FaPlus /> {loading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {loading && (
        <p className="text-gray-500 text-sm animate-pulse">Loading...</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.isArray(certificates) &&
          certificates.map((cert) => (
            <motion.div
              key={cert._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-900 p-3 rounded-xl shadow-md relative"
            >
              <img
                src={cert.certificateImage?.url}
                alt={cert.title || "Certificate"}
                className="w-full h-32 object-cover rounded-md"
              />
              <button
                onClick={() => handleDelete(cert._id)}
                disabled={loading}
                className="absolute top-2 right-2 text-red-500 hover:text-red-600"
              >
                <FaTrash />
              </button>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
