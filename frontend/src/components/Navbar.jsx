import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  // Load theme from localStorage, default = light
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply theme whenever it changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme manually
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

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
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-md transition-colors">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <Link
          to="/"
          className="text-2xl font-bold text-pink-600 dark:text-pink-400"
        >
          Saddam<span className="text-blue-600"> Ansari</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
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
        </div>

        {/* Theme Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* <button
            onClick={toggleTheme}
            className="text-gray-800 dark:text-gray-200 text-xl hover:scale-110 transition-transform duration-300"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button> */}

          <button
            className="md:hidden text-gray-800 dark:text-gray-200 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex flex-col p-4 space-y-3 z-50 shadow-lg">
          {navLinks.map((link) => {
            const isAdmin = link.name === "Admin";
            return (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-1 rounded-md transition-all duration-200 ${
                    isAdmin
                      ? isActive
                        ? "bg-yellow-500 text-white font-bold"
                        : "bg-yellow-300 text-gray-900 font-bold hover:bg-yellow-400"
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
