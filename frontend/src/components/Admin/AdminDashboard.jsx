import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaSignOutAlt,
  FaProjectDiagram,
  FaEnvelope,
  FaCogs,
  FaCertificate,
  FaFileAlt,
  FaBars,
  FaUsers,
  FaBriefcase,
  FaChartBar,
} from "react-icons/fa";
import { AdminContext } from "../../context/AdminContext";
import axios from "../../utils/api";

const menuItems = [
  { name: "Dashboard", icon: <FaChartBar />, path: "" },
  { name: "Projects", icon: <FaProjectDiagram />, path: "projects" },
  { name: "Messages", icon: <FaEnvelope />, path: "messages" },
  { name: "Skills", icon: <FaCogs />, path: "skills" },
  { name: "Experience", icon: <FaBriefcase />, path: "experience" },
  { name: "Certificates", icon: <FaCertificate />, path: "certificates" },
  { name: "Resume", icon: <FaFileAlt />, path: "resume" },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [stats, setStats] = useState({
    projects: 0,
    messages: 0,
    skills: 0,
    experiences: 0,
    certificates: 0,
  });
  const [loading, setLoading] = useState(false);

  const { setError } = useContext(AdminContext);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const [projRes, msgRes, skillRes, expRes, certRes] = await Promise.all([
          axios.get("/projects"),
          axios.get("/messages"),
          axios.get("/skills"),
          axios.get("/experience"),
          axios.get("/certificates"),
        ]);
        setStats({
          projects: projRes.data?.projects?.length || 0,
          messages: msgRes.data?.messages?.length || 0,
          skills: skillRes.data?.skills?.length || 0,
          experiences: expRes.data?.experiences?.length || 0,
          certificates: certRes.data?.certificates?.length || 0,
        });
      } catch (err) {
        setError("Failed to load stats");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("rememberMe");
    navigate("/admin");
  };

  const isDashboardRoot = location.pathname === "/admin/dashboard";

  return (
    <div className="min-h-screen bg-background flex">
      <aside className="fixed top-0 left-0 h-screen w-56 bg-surface border-r border-border flex flex-col z-50">
        <div className="h-16 flex items-center px-4 border-b border-border">
          <Link to="/admin/dashboard" className="font-display font-semibold text-sm text-text-primary">
            Admin Panel
          </Link>
        </div>

        <nav className="flex-1 flex flex-col gap-1 p-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = item.path === ""
              ? isDashboardRoot
              : location.pathname.includes(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all
                  ${isActive
                    ? "bg-primary text-white"
                    : "text-text-secondary hover:text-text-primary hover:bg-card"}
                `}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-text-secondary hover:text-error transition-all"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 lg:ml-56">
        <header className="h-16 bg-surface border-b border-border flex items-center justify-between px-4 sm:px-6 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-card text-text-secondary"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <FaBars />
            </button>
            <span className="font-mono text-2xl text-primary hidden sm:block">
              SADDAM ANSARI<span className="text-primary">.</span>
            </span>
          </div>
          <Link
            to="/"
            className="text-xs text-text-secondary hover:text-primary transition-colors"
          >
            ← Back to Site
          </Link>
        </header>

        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
          {isDashboardRoot && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-primary block mb-2">
                  Dashboard Overview
                </span>
                <h1 className="font-display font-bold text-2xl sm:text-3xl text-text-primary">
                  Welcome back, Admin
                </h1>
                <p className="text-text-secondary text-sm mt-1 max-w-2xl">
                  Manage your portfolio's content, view messages, and monitor your online presence.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card border border-border rounded-xl p-5 text-center"
                >
                  <FaProjectDiagram className="text-2xl text-primary mx-auto mb-3" />
                  <span className="block font-display font-bold text-2xl text-text-primary mb-1">
                    {stats.projects}
                  </span>
                  <span className="font-mono text-xs text-text-secondary uppercase">
                    Projects
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-card border border-border rounded-xl p-5 text-center"
                >
                  <FaEnvelope className="text-2xl text-primary mx-auto mb-3" />
                  <span className="block font-display font-bold text-2xl text-text-primary mb-1">
                    {stats.messages}
                  </span>
                  <span className="font-mono text-xs text-text-secondary uppercase">
                    Messages
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-card border border-border rounded-xl p-5 text-center"
                >
                  <FaCogs className="text-2xl text-primary mx-auto mb-3" />
                  <span className="block font-display font-bold text-2xl text-text-primary mb-1">
                    {stats.skills}
                  </span>
                  <span className="font-mono text-xs text-text-secondary uppercase">
                    Skills
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-card border border-border rounded-xl p-5 text-center"
                >
                  <FaBriefcase className="text-2xl text-primary mx-auto mb-3" />
                  <span className="block font-display font-bold text-2xl text-text-primary mb-1">
                    {stats.experiences}
                  </span>
                  <span className="font-mono text-xs text-text-secondary uppercase">
                    Experience
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-card border border-border rounded-xl p-5 text-center"
                >
                  <FaCertificate className="text-2xl text-primary mx-auto mb-3" />
                  <span className="block font-display font-bold text-2xl text-text-primary mb-1">
                    {stats.certificates}
                  </span>
                  <span className="font-mono text-xs text-text-secondary uppercase">
                    Certificates
                  </span>
                </motion.div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="font-display font-semibold text-lg text-text-primary mb-4">
                  Quick Actions
                </h2>
                <div className="flex flex-wrap gap-3">
                  <Link to="/admin/dashboard/projects">
                    <button className="px-4 py-2 bg-primary text-white font-mono text-xs rounded-lg hover:bg-primary-hover transition-all">
                      + Add Project
                    </button>
                  </Link>
                  <Link to="/admin/dashboard/messages">
                    <button className="px-4 py-2 border border-border text-text-secondary font-mono text-xs rounded-lg hover:bg-card transition-all">
                      View Messages
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
          {!isDashboardRoot && <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;