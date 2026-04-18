import React, { useState } from "react";
import {
  Link,
  useNavigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import {
  FaSignOutAlt,
  FaProjectDiagram,
  FaEnvelope,
  FaCogs,
  FaCertificate,
  FaBriefcase,
  FaFileAlt,
  FaHome
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("rememberMe");
    navigate("/admin");
  };

  const menuItems = [
    { name: "PROJECTS", icon: <FaProjectDiagram />, path: "projects" },
    { name: "MESSAGES", icon: <FaEnvelope />, path: "messages" },
    { name: "SKILLS", icon: <FaCogs />, path: "skills" },
    { name: "EXPERIENCE", icon: <FaBriefcase />, path: "experience" },
    { name: "CERTIFICATES", icon: <FaCertificate />, path: "certificates" },
    { name: "RESUME", icon: <FaFileAlt />, path: "resume" },
  ];

  const isDashboardRoot =
    location.pathname === "/admin/dashboard" || location.pathname === "/admin/dashboard/";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#cccccc] flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:relative top-0 left-0 h-screen bg-[#0a0a0a] border-r border-[#1f521f] flex flex-col transform transition-all duration-300 z-50 ${
          sidebarCollapsed ? "w-16" : "w-56"
        } ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Sidebar Header */}
        <div className="border-b border-[#1f521f] p-3 flex items-center justify-between">
          {!sidebarCollapsed && (
            <Link to="/admin/dashboard" className="font-mono text-xs sm:text-sm text-[#33ff00]">
              ADMIN_PANEL
            </Link>
          )}

          <button
            className="lg:hidden text-[#33ff00] text-xl"
            onClick={() => setSidebarOpen(false)}
          >
            ×
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex-1 flex flex-col gap-1 p-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname.includes(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 p-2 font-mono text-xs transition-all ${
                  isActive
                    ? "bg-[#33ff00] text-[#0a0a0a]"
                    : "text-[#33ff00] hover:bg-[#1f521f]/50"
                } ${sidebarCollapsed ? "justify-center" : ""}`}
                title={sidebarCollapsed ? item.name : ""}
              >
                <span className="text-sm">{item.icon}</span>
                {!sidebarCollapsed && (
                  <span className="whitespace-nowrap hidden sm:inline">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Collapse Toggle */}
        <button
          className="hidden lg:block p-3 border-t border-[#1f521f] text-[#666666] hover:text-[#33ff00] text-xs font-mono text-center"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        >
          {sidebarCollapsed ? "[ + ]" : "[ - ]"}
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0a] border-b border-[#1f521f] transition-all duration-300 flex justify-between items-center p-2 sm:p-3 md:p-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              className="lg:hidden text-[#33ff00] text-lg sm:text-xl px-2"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>
            
            {/* Logo */}
            <Link to="/admin/dashboard" className="font-mono text-xs text-[#33ff00] hover:text-[#ffb000]">
              <span className="text-[#ffb000]">root@</span>admin:~
            </Link>

            {/* Back to Home */}
            <Link 
              to="/" 
              className="hidden lg:block font-mono text-xs text-[#666666] hover:text-[#33ff00] ml-4"
            >
              [ &lt; ] HOME
            </Link>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 font-mono text-xs px-2 sm:px-3 py-2 border border-[#ff3333] text-[#ff3333] hover:bg-[#ff3333] hover:text-[#0a0a0a] transition-all"
          >
            <FaSignOutAlt />
            <span className="hidden sm:inline">LOGOUT</span>
          </button>
        </header>

        {/* Scrollable Page Content */}
        <main className="mt-12 sm:mt-14 lg:mt-16 p-2 sm:p-4 md:p-6 overflow-y-auto min-h-[calc(100vh-3rem)]">
          <Outlet />

          {/* Default Dashboard Overview */}
          {isDashboardRoot && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              {/* Terminal-style header */}
              <div className="border border-[#1f521f] mb-6">
                <div className="border-b border-[#1f521f] p-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 sm:w-2.5 h-2.5 bg-[#ff3333] rounded-full"></span>
                    <span className="w-2 h-2 sm:w-2.5 h-2.5 bg-[#ffb000] rounded-full"></span>
                    <span className="w-2 h-2 sm:w-2.5 h-2.5 bg-[#33ff00] rounded-full"></span>
                  </div>
                  <span className="text-[#33ff00] font-mono text-xs ml-2">dashboard.sh</span>
                </div>
                <div className="p-4 sm:p-6 text-center">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-mono text-[#33ff00] mb-2" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
                    <span className="text-[#ffb000]">$</span> WELCOME_ADMIN
                  </h2>
                  <p className="font-mono text-xs text-[#666666]">
                    Manage your portfolio's projects, skills, experiences, and more.
                  </p>
                </div>
              </div>

              {/* Menu Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {menuItems.map((item, idx) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="border border-[#1f521f] p-3 sm:p-4 text-center hover:bg-[#1f521f]/30 hover:border-[#33ff00] transition-all group"
                  >
                    <span className="text-xl sm:text-2xl text-[#33ff00] group-hover:text-[#ffb000]">{item.icon}</span>
                    <span className="block font-mono text-xs text-[#666666] mt-2 group-hover:text-[#33ff00]">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-4 sm:mt-6 border border-[#1f521f]">
                <div className="border-b border-[#1f521f] p-2">
                  <span className="font-mono text-xs text-[#33ff00]">$ system_status</span>
                </div>
                <div className="p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-center">
                  <div>
                    <span className="block font-mono text-sm sm:text-base md:text-lg text-[#ffb000]">OK</span>
                    <span className="font-mono text-xs text-[#666666]">Database</span>
                  </div>
                  <div>
                    <span className="block font-mono text-sm sm:text-base md:text-lg text-[#33ff00]">RUNNING</span>
                    <span className="font-mono text-xs text-[#666666]">Server</span>
                  </div>
                  <div>
                    <span className="block font-mono text-sm sm:text-base md:text-lg text-[#33ff00]">ACTIVE</span>
                    <span className="font-mono text-xs text-[#666666]">Session</span>
                  </div>
                  <div>
                    <span className="block font-mono text-sm sm:text-base md:text-lg text-[#33ff00]">v1.0.0</span>
                    <span className="font-mono text-xs text-[#666666]">Version</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}
