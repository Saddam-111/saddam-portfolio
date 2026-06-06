import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavLinkComponent = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block w-full px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
          isActive
            ? "text-primary bg-primary/8"
            : "text-text-secondary hover:text-text-primary hover:bg-surface-muted"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

const MobileMenu = ({ links }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="md:hidden"
    >
      <details className="relative">
        <summary className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-muted cursor-pointer list-none text-text-secondary marker:hidden">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M3 5h14M3 10h14M3 15h14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </summary>

        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full right-0 mt-2 w-56 bg-surface border border-border rounded-xl shadow-xl p-2 z-50 flex flex-col gap-1"
        >
          {links.map((link) => (
            <NavLinkComponent key={link.name} to={link.path}>
              {link.name}
            </NavLinkComponent>
          ))}

          <div className="h-px bg-border my-1" />

          <a
            href="/admin"
            className="block w-full px-3.5 py-2 text-sm font-mono uppercase tracking-widest text-text-secondary hover:text-primary hover:bg-surface-muted rounded-lg transition-all duration-200"
          >
            Admin
          </a>
        </motion.div>
      </details>
    </motion.div>
  );
};

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <Link
          to="/"
          className="font-display font-bold text-2xl text-text-primary hover:text-primary transition-colors"
        >
          SADDAM ANSARI<span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLinkComponent key={link.name} to={link.path}>
              {link.name}
            </NavLinkComponent>
          ))}

          <a
            href="/admin"
            className="ml-3 px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-text-secondary hover:text-primary border border-border hover:border-primary/30 rounded-lg transition-colors"
          >
            Admin
          </a>
        </div>

        {/* Mobile Navigation */}
        <MobileMenu links={navLinks} />
      </div>
    </nav>
  );
};

export default Navbar;