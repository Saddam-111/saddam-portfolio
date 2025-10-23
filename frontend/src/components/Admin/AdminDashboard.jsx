import React, { useState } from "react";
import {
  Link,
  useNavigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import {
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaProjectDiagram,
  FaEnvelope,
  FaCogs,
  FaCertificate,
  FaBriefcase,
  FaUserShield,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin");
  };

  const menuItems = [
    { name: "Projects", icon: <FaProjectDiagram />, path: "projects" },
    { name: "Messages", icon: <FaEnvelope />, path: "messages" },
    { name: "Skills", icon: <FaCogs />, path: "skills" },
    { name: "Experience", icon: <FaBriefcase />, path: "experience" },
    { name: "Certificates", icon: <FaCertificate />, path: "certificates" },
  ];

  const isDashboardRoot =
    location.pathname === "/admin/dashboard" || location.pathname === "/admin/dashboard/";

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white flex">
      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 h-screen ${
          sidebarExpanded ? "w-64" : "w-20"
        } bg-gray-800 dark:bg-gray-900 text-white flex flex-col transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } transition-all duration-300 ease-in-out z-50`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {sidebarExpanded && <h2 className="text-xl font-bold">Admin Panel</h2>}

          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes size={20} />
          </button>

          <button
            className="hidden md:block text-gray-400 hover:text-white ml-auto"
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
          >
            {sidebarExpanded ? <FaTimes size={18} /> : <FaBars size={18} />}
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
                className={`flex items-center gap-3 p-3 rounded-md transition-all ${
                  isActive
                    ? "bg-pink-600 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {sidebarExpanded && (
                  <span className="whitespace-nowrap">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarExpanded ? "md:ml-2" : "md:ml-2"
        }`}
      >
        {/* Top Navbar */}
        <header
          className={`fixed top-0 left-0 right-0 md:left-auto z-40 bg-pink-600 text-white shadow-md transition-all duration-300 flex justify-between items-center p-4 ${
            sidebarExpanded
              ? "md:w-[calc(100%-16rem)] md:ml-64"
              : "md:w-[calc(100%-5rem)] md:ml-20"
          }`}
        >
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-white"
              onClick={() => setSidebarOpen(true)}
            >
              <FaBars size={22} />
            </button>
            <h1 className="text-xl font-bold hover:cursor-pointer" onClick={() => navigate('/admin/dashboard')}>Admin</h1>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </header>

        {/* Scrollable Page Content */}
        <main className="mt-[72px] p-6 overflow-y-auto h-[calc(100vh-72px)]">
          <Outlet />

          {/* Default Dashboard Overview */}
          {isDashboardRoot && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mt-10"
            >
              <h2 className="text-4xl font-bold mb-4 text-pink-600">
                Welcome Back, Admin 👋
              </h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10">
                Manage your portfolio’s projects, skills, experiences, and more — all in one place.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:scale-105 transition-transform duration-300 flex flex-col items-center"
                  >
                    <span className="text-4xl mb-2 text-pink-600">{item.icon}</span>
                    <span className="text-lg font-semibold">{item.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}
