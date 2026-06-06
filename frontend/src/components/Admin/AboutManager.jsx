import React, { useState, useEffect, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import axios from "../../utils/api";
import { motion } from "framer-motion";

export default function AboutManager() {
  const { setError } = useContext(AdminContext);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
  });

  const fetchStats = async () => {
    try {
      setLoading(true);
      const [projRes, expRes] = await Promise.all([
        axios.get("/projects"),
        axios.get("/experience"),
      ]);
      setStats({
        projects: projRes.data?.projects?.length || 0,
        clients: 50,
        experience: expRes.data?.experiences?.length || 0,
      });
    } catch (err) {
      setError("Failed to load stats");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-display font-semibold text-lg sm:text-xl text-text-primary mb-1">
          About Section
        </h3>
        <p className="text-text-secondary text-sm">Manage your about section content</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border p-4 rounded-xl text-center"
        >
          <span className="block font-display font-bold text-2xl sm:text-3xl text-primary mb-2">{stats.projects}+</span>
          <span className="font-mono text-xs text-text-secondary uppercase tracking-wider">Projects</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border p-4 rounded-xl text-center"
        >
          <span className="block font-display font-bold text-2xl sm:text-3xl text-primary mb-2">{stats.clients}+</span>
          <span className="font-mono text-xs text-text-secondary uppercase tracking-wider">Clients</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border p-4 rounded-xl text-center"
        >
          <span className="block font-display font-bold text-2xl sm:text-3xl text-primary mb-2">{stats.experience}+</span>
          <span className="font-mono text-xs text-text-secondary uppercase tracking-wider">Experience</span>
        </motion.div>
      </div>

      <div className="bg-card border border-border rounded-xl p-4">
        <p className="text-text-secondary text-sm">
          Content is managed through individual sections. Use Projects Manager and Experience Manager to update your portfolio.
        </p>
      </div>
    </div>
  );
}