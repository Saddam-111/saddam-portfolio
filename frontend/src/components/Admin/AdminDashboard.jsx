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
  FaBriefcase,
  FaChartBar,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
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
  const [collapsed, setCollapsed] = useState(false);
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

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("rememberMe");
    navigate("/admin");
  };

  const isDashboardRoot = location.pathname === "/admin/dashboard";
  const sidebarWidth = collapsed ? "lg:w-[72px]" : "lg:w-56";
  const contentOffset = collapsed ? "lg:ml-[72px]" : "lg:ml-56";

  const SidebarContent = ({ showLabels, onNavigate }) => (
    <>
      <div className="h-16 flex items-center justify-between gap-2 px-3 border-b border-border shrink-0">
        <Link
          to="/admin/dashboard"
          onClick={onNavigate}
          className="min-w-0 flex items-center gap-2 font-display font-semibold text-sm text-text-primary"
          title="Admin Panel"
        >
          <span className="w-8 h-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0 text-xs font-bold">
            A
          </span>
          {showLabels && <span className="truncate">Admin Panel</span>}
        </Link>
        <button
          type="button"
          className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-card text-text-secondary shrink-0"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>
      </div>

      <nav className="flex-1 flex flex-col gap-1 p-2 overflow-y-auto overflow-x-hidden">
        {menuItems.map((item) => {
          const isActive =
            item.path === "" ? isDashboardRoot : location.pathname.includes(item.path);
          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={onNavigate}
              title={item.name}
              className={`
                flex items-center gap-3 rounded-lg text-sm transition-all
                ${showLabels ? "px-3 py-2.5" : "px-0 py-2.5 justify-center"}
                ${isActive ? "bg-primary text-white" : "text-text-secondary hover:text-text-primary hover:bg-card"}
              `}
            >
              <span className="text-base shrink-0 w-5 flex items-center justify-center">{item.icon}</span>
              {showLabels && <span className="truncate">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-2 border-t border-border shrink-0 space-y-1">
        <button
          type="button"
          onClick={handleLogout}
          title="Logout"
          className={`
            w-full flex items-center gap-3 rounded-lg text-sm text-text-secondary hover:text-error hover:bg-card transition-all
            ${showLabels ? "px-3 py-2.5" : "px-0 py-2.5 justify-center"}
          `}
        >
          <span className="text-base shrink-0 w-5 flex items-center justify-center">
            <FaSignOutAlt />
          </span>
          {showLabels && <span className="truncate">Logout</span>}
        </button>
        <button
          type="button"
          onClick={() => setCollapsed((v) => !v)}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className={`
            hidden lg:flex w-full items-center gap-3 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-card transition-all
            ${showLabels ? "px-3 py-2.5" : "px-0 py-2.5 justify-center"}
          `}
        >
          <span className="text-base shrink-0 w-5 flex items-center justify-center">
            {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </span>
          {showLabels && <span className="truncate">{collapsed ? "Expand" : "Collapse"}</span>}
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex relative">
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-screen w-56 glass border-r border-border flex flex-col z-50
          transition-transform duration-200 ease-out lg:translate-x-0 lg:transition-[width] lg:duration-200
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          ${sidebarWidth}
        `}
      >
        <SidebarContent showLabels={!collapsed || mobileOpen} onNavigate={() => setMobileOpen(false)} />
      </aside>

      <div className={`flex-1 flex flex-col min-w-0 transition-[margin] duration-200 ${contentOffset}`}>
        <header className="h-16 glass border-b border-border flex items-center justify-between px-4 sm:px-6 sticky top-0 z-30">
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-card text-text-secondary shrink-0"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <FaBars />
            </button>
            <span className="font-mono text-lg sm:text-2xl text-primary truncate">
              SADDAM ANSARI<span className="text-primary">.</span>
            </span>
          </div>
          <Link
            to="/"
            className="text-xs text-text-secondary hover:text-primary transition-colors shrink-0 ml-3"
          >
            â† Back to Site
          </Link>
        </header>

        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto overflow-x-hidden">
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

              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4">
                {[
                  { icon: FaProjectDiagram, label: "Projects", value: stats.projects, delay: 0 },
                  { icon: FaEnvelope, label: "Messages", value: stats.messages, delay: 0.1 },
                  { icon: FaCogs, label: "Skills", value: stats.skills, delay: 0.2 },
                  { icon: FaBriefcase, label: "Experience", value: stats.experiences, delay: 0.3 },
                  { icon: FaCertificate, label: "Certificates", value: stats.certificates, delay: 0.4 },
                ].map((card) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: card.delay }}
                      className="glass-card rounded-2xl p-5 text-center"
                    >
                      <Icon className="text-2xl text-primary mx-auto mb-3" />
                      <span className="block font-display font-bold text-2xl text-text-primary mb-1">
                        {loading ? "â€”" : card.value}
                      </span>
                      <span className="font-mono text-xs text-text-secondary uppercase">{card.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h2 className="font-display font-semibold text-lg text-text-primary mb-4">Quick Actions</h2>
                <div className="flex flex-wrap gap-3">
                  <Link to="/admin/dashboard/projects">
                    <button type="button" className="px-4 py-2 bg-primary text-white font-mono text-xs rounded-lg hover:bg-primary-hover transition-all">
                      + Add Project
                    </button>
                  </Link>
                  <Link to="/admin/dashboard/messages">
                    <button type="button" className="px-4 py-2 border border-border text-text-secondary font-mono text-xs rounded-lg hover:bg-card transition-all">
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
