import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
    { name: "EXPERIENCE", path: "/experience" },
    { name: "SKILLS", path: "/skills" },
    { name: "TESTIMONIALS", path: "/testimonials" },
    { name: "CONTACT", path: "/contact" },
    { name: "ADMIN", path: "/admin" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a] border-b border-[#1f521f]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
        {/* Logo - Terminal Style */}
        <Link to="/" className="text-xl font-mono">
          <span className="text-[#33ff00]">saddam@dev</span>
          <span className="text-[#ffb000]">:~$</span>
          <span className="text-[#1f521f] ml-1">/home</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-1.5 font-mono text-sm transition-all duration-200 border border-transparent ${
                  isActive
                    ? "bg-[#33ff00] text-[#0a0a0a] border-[#33ff00]"
                    : "text-[#33ff00] hover:bg-[#1f521f]/50 hover:border-[#1f521f]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#33ff00] font-mono text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "[X]" : "[=]"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 w-full bg-[#0a0a0a] border-b border-[#1f521f] transition-all duration-300 ${
          menuOpen
            ? "max-h-screen opacity-100 py-4"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 font-mono text-sm w-[90%] text-center transition-all duration-200 border ${
                  isActive
                    ? "bg-[#33ff00] text-[#0a0a0a] border-[#33ff00]"
                    : "text-[#33ff00] border-[#1f521f] hover:bg-[#1f521f]/50"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
