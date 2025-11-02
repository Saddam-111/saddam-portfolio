import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
    { name: "Admin", path: "/admin" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-8xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-pink-600 dark:text-pink-400"
        >
          Saddam<span className="text-blue-600"> Ansari</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isAdmin = link.name === "Admin";
            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-2 py-1 rounded-md transition-all duration-200 ${
                    isAdmin
                      ? isActive
                        ? "bg-yellow-500 text-white font-semibold"
                        : "bg-yellow-300 text-gray-900 hover:bg-yellow-400"
                      : isActive
                      ? "font-semibold text-pink-600"
                      : "text-gray-800 dark:text-gray-200 hover:text-pink-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}

          {/* Theme toggle */}
          {/* <button
            onClick={toggleTheme}
            className="text-xl text-gray-800 dark:text-gray-200 hover:scale-110 transition-transform duration-300"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200 text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 ${
          menuOpen
            ? "max-h-screen opacity-100 py-4"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => {
            const isAdmin = link.name === "Admin";
            return (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md w-[90%] text-center transition-all duration-200 ${
                    isAdmin
                      ? isActive
                        ? "bg-yellow-500 text-white font-semibold"
                        : "bg-yellow-300 text-gray-900 font-medium hover:bg-yellow-400"
                      : isActive
                      ? "font-semibold text-pink-600"
                      : "text-gray-800 dark:text-gray-200 hover:text-pink-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}

          {/* Theme toggle for mobile
          <button
            onClick={toggleTheme}
            className="text-xl text-gray-800 dark:text-gray-200 hover:scale-110 transition-transform duration-300"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
