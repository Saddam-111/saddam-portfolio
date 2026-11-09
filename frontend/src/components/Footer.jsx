import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaArrowUpRightFromSquare } from "react-icons/fa6";

const nav = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Experience", path: "/experience" },
  { label: "Contact", path: "/contact" },
];

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-2.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
    aria-label={label}
  >
    <span className="w-9 h-9 rounded-xl border border-border bg-white/[0.02] flex items-center justify-center text-base group-hover:border-primary/35 group-hover:text-accent transition-all">
      {icon}
    </span>
    <span>{label}</span>
  </a>
);

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-auto border-t border-border bg-surface/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8">
          <div className="xl:col-span-5">
            <Link to="/" className="inline-flex items-center font-display font-bold text-2xl text-text-primary">
              <span className="gradient-text">SADDAM ANSARI</span>
              <span className="text-accent">.</span>
            </Link>
            <p className="mt-4 text-text-secondary text-sm leading-relaxed max-w-md">
              MERN stack developer crafting scalable, high-performance web experiences with refined interfaces and robust engineering.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-accent transition-colors"
            >
              Start a conversation <FaArrowUpRightFromSquare className="text-xs" />
            </a>
          </div>

          <div className="xl:col-span-2">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-secondary mb-4">Navigate</h4>
            <nav className="flex flex-col gap-2.5">
              {nav.map((link) => (
                <Link key={link.label} to={link.path} className="text-sm text-text-secondary hover:text-text-primary transition-colors w-fit">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="xl:col-span-3">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-secondary mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <SocialLink href="https://github.com/Saddam-111" icon={<FaGithub />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/saddam11" icon={<FaLinkedin />} label="LinkedIn" />
              <SocialLink href="mailto:saddam6389046@gmail.com" icon={<FaEnvelope />} label="Email" />
              <SocialLink href="https://twitter.com/" icon={<FaTwitter />} label="Twitter" />
            </div>
          </div>

          <div className="xl:col-span-2">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-secondary mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-text-secondary">
              <p className="break-all">saddam6389046@gmail.com</p>
              <p>+91 6389608228</p>
              <p>Gorakhpur, India</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-secondary/80">&copy; {year} Saddam Ansari. All rights reserved.</p>
          <p className="text-xs font-mono text-text-secondary/60">Designed for performance & clarity</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
