import React, { useEffect, useState, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import axios from "../../utils/api";
import { motion } from "framer-motion";
import { FaTrash, FaSpinner } from "react-icons/fa";
import { Card, Badge, Button } from "../Common";

const CertificatesManager = () => {
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

  useEffect(() => { fetchCertificates(); }, []);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const data = new FormData();
      data.append("certificateImage", file);
      await axios.post("/certificates", data, { headers: { "Content-Type": "multipart/form-data" } });
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
    setLoading(true);
    try {
      await axios.delete(`/certificates/${id}`);
      await fetchCertificates();
    } catch (err) {
      setError(err.response?.data?.message || "Delete failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-display font-semibold text-lg sm:text-xl text-text-primary mb-1">
          Certificates
        </h3>
        <p className="text-text-secondary text-sm">Upload and manage your certificates.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-text-secondary font-mono text-sm"
        />
        <button
          onClick={handleUpload}
          disabled={!file || loading}
          className="px-4 py-2 bg-primary text-white font-mono text-xs rounded-lg hover:bg-primary-hover transition-all disabled:opacity-50 whitespace-nowrap"
        >
          {loading ? "Uploading..." : "+ Add Certificate"}
        </button>
      </div>

      {loading && certificates.length === 0 ? (
        <div className="flex justify-center py-12"><FaSpinner className="animate-spin text-primary text-2xl" /></div>
      ) : certificates.length === 0 ? (
        <p className="text-text-secondary text-center py-12">No certificates uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {certificates.map((cert) => (
            <motion.div key={cert._id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <Card hoverable className="rounded-xl overflow-hidden p-0">
                <img src={cert.certificateImage?.url} alt="Certificate" className="w-full h-32 object-cover" />
                <button
                  onClick={() => handleDelete(cert._id)}
                  className="absolute top-2 right-2 bg-error/80 text-white p-1 rounded-full hover:bg-error transition-all"
                  aria-label="Delete certificate"
                >
                  <FaTrash className="text-xs" />
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CertificatesManager;