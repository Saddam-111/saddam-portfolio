import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

const NavLinkItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `relative px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
        isActive
          ? "text-text-primary bg-white/6"
          : "text-text-secondary hover:text-text-primary hover:bg-white/4"
      }`
    }
  >
    {({ isActive }) => (
      <>
        {children}
        {isActive && (
          <motion.span
            layoutId="nav-pill"
            className="absolute inset-x-2 -bottom-[1px] h-px bg-gradient-to-r from-transparent via-accent to-transparent"
          />
        )}
      </>
    )}
  </NavLink>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 pt-3">
      <div className="max-w-7xl mx-auto glass rounded-2xl border border-border shadow-[0_20px_60px_-35px_rgba(0,0,0,0.8)]">
        <div className="flex items-center justify-between px-4 sm:px-5 h-16">
          <Link to="/" className="font-display font-bold text-xl sm:text-2xl text-text-primary tracking-tight">
            <span className="gradient-text">SADDAM  </span>
            <span className="text-text-secondary/70">ANSARI</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLinkItem key={link.name} to={link.path}>
                {link.name}
              </NavLinkItem>
            ))}
            <a
              href="/admin"
              className="ml-2 px-3.5 py-2 text-xs font-mono uppercase tracking-[0.18em] text-text-secondary hover:text-text-primary border border-border hover:border-primary/35 rounded-xl bg-white/[0.02] hover:bg-primary/10 transition-all"
            >
              Admin
            </a>
          </div>

          <button
            type="button"
            className="md:hidden w-10 h-10 inline-flex items-center justify-center rounded-xl border border-border bg-white/[0.02] text-text-secondary hover:text-text-primary hover:border-primary/30 transition-all"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <div className="p-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLinkItem key={link.name} to={link.path} onClick={() => setOpen(false)}>
                    {link.name}
                  </NavLinkItem>
                ))}
                <a
                  href="/admin"
                  className="mt-1 px-3.5 py-2.5 text-xs font-mono uppercase tracking-[0.18em] text-text-secondary hover:text-text-primary border border-border rounded-xl"
                >
                  Admin
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;