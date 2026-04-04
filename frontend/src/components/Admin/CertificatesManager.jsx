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
      {/* Header */}
      <div className="border border-[#1f521f]">
        <div className="border-b border-[#1f521f] p-2 flex items-center gap-2">
          <span className="text-[#33ff00] font-mono text-xs">certificates_manager.sh</span>
        </div>
        <div className="p-3">
          <h3 className="font-mono text-[#33ff00] text-lg">CERTIFICATES_MANAGEMENT</h3>
        </div>
      </div>

      {/* Upload Section */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="font-mono text-xs text-[#666666] bg-[#0a0a0a] border border-[#1f521f] px-3 py-2"
        />
        <button
          onClick={handleUpload}
          disabled={loading}
          className="font-mono text-xs px-4 py-2 border border-[#33ff00] text-[#33ff00] hover:bg-[#33ff00] hover:text-[#0a0a0a] transition-all"
        >
          {loading ? "UPLOADING..." : "[ + ] UPLOAD"}
        </button>
      </div>

      {loading && (
        <p className="font-mono text-xs text-[#ffb000] animate-pulse text-center">
          $ executing operation...
        </p>
      )}

      {/* Certificates Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {Array.isArray(certificates) && certificates.length > 0 ? (
          certificates.map((cert) => (
            <motion.div
              key={cert._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-[#1f521f] bg-[#0a0a0a] p-2"
            >
              <img
                src={cert.certificateImage?.url}
                alt="Certificate"
                className="w-full h-24 object-cover mb-2 border border-[#1f521f]"
              />
              <button
                onClick={() => handleDelete(cert._id)}
                disabled={loading}
                className="w-full font-mono text-xs px-2 py-1 border border-[#ff3333] text-[#ff3333] hover:bg-[#ff3333] hover:text-[#0a0a0a]"
              >
                [DELETE]
              </button>
            </motion.div>
          ))
        ) : (
          <p className="font-mono text-xs text-[#666666] col-span-full text-center">
            error: no certificates found
          </p>
        )}
      </div>
    </div>
  );
}
