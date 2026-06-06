import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface text-text-primary border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="inline-block font-display font-bold text-2xl text-text-primary mb-4"
            >
              SADDAM ANSARI<span className="text-primary">.</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed">
              MERN Stack Developer passionate about building modern, performant,
              and user-friendly web applications.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-text-primary mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Projects", path: "/projects" },
                { label: "Skills", path: "/skills" },
                { label: "Experience", path: "/experience" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-sm text-text-secondary hover:text-primary transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-text-primary mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <SocialLink href="https://github.com/Saddam-111" icon={<FaGithub />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/saddam11" icon={<FaLinkedin />} label="LinkedIn" />
              <SocialLink href="mailto:saddam6389046@gmail.com" icon={<FaEnvelope />} label="Email" />
              <SocialLink href="https://twitter.com/" icon={<FaTwitter />} label="Twitter" />
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-text-primary mb-4">
              Get in Touch
            </h4>
            <div className="space-y-2 text-sm text-text-secondary">
              <p>saddam6389046@gmail.com</p>
              <p>+91 6389046018</p>
              <p>Jhansi, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-4 flex items-center justify-center">
          <p className="text-xs text-text-secondary">
            &copy; {currentYear} Saddam Ansari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors w-fit"
    aria-label={label}
  >
    <span className="text-base">{icon}</span>
    {label}
  </a>
);

export default Footer;
