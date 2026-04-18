import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-[#cccccc] border-t border-[#1f521f] py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Terminal-style header */}
        <div className="border border-[#1f521f] mb-8">
          <div className="border-b border-[#1f521f] p-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#ff3333] rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-[#ffb000] rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-[#33ff00] rounded-full"></span>
            </div>
            <span className="text-[#33ff00] font-mono text-xs ml-2">footer.sh</span>
          </div>
          
          <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* About Section */}
            <div>
              <h3 className="text-[#33ff00] font-mono text-sm uppercase mb-3">
                {"//"} ABOUT
              </h3>
              <p className="font-mono text-sm text-[#999999] leading-relaxed">
                I am Saddam Ansari, a MERN Stack developer. I build responsive, modern and high-performance web applications.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[#33ff00] font-mono text-sm uppercase mb-3">
                {"//"} QUICK_LINKS
              </h3>
              <ul className="font-mono text-sm space-y-2">
                <li>
                  <Link to="/" className="text-[#ffb000] hover:text-[#33ff00] transition-colors">
                    → Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-[#ffb000] hover:text-[#33ff00] transition-colors">
                    → About
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-[#ffb000] hover:text-[#33ff00] transition-colors">
                    → Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[#ffb000] hover:text-[#33ff00] transition-colors">
                    → Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-[#33ff00] font-mono text-sm uppercase mb-3">
                {"//"} CONTACT_INFO
              </h3>
              <ul className="font-mono text-sm text-[#999999] space-y-2">
                <li>
                  <span className="text-[#ffb000]">email:</span> saddam6389046@gmail.com
                </li>
                <li>
                  <span className="text-[#ffb000]">phone:</span> +91 6389046018
                </li>
                <li>
                  <span className="text-[#ffb000]">location:</span> Jhansi, India
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-[#33ff00] font-mono text-sm uppercase mb-3">
                {"//"} CONNECT
              </h3>
              <div className="flex gap-4 mb-4">
                <a
                  href="https://github.com/Saddam-111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#33ff00] hover:text-[#ffb000] transition-colors font-mono"
                >
                  [GH]
                </a>
                <a
                  href="https://www.linkedin.com/in/saddam11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#33ff00] hover:text-[#ffb000] transition-colors font-mono"
                >
                  [LI]
                </a>
                <a
                  href="mailto:saddam6389046@gmail.com"
                  className="text-[#33ff00] hover:text-[#ffb000] transition-colors font-mono"
                >
                  [Mail]
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#33ff00] hover:text-[#ffb000] transition-colors font-mono"
                >
                  [TW]
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#33ff00] hover:text-[#ffb000] transition-colors font-mono"
                >
                  [IG]
                </a>
              </div>

              {/* Newsletter - Terminal style */}
              <div className="mt-2">
                <span className="text-[#ffb000] font-mono text-xs">$ newsletter --subscribe</span>
                <form className="flex mt-2">
                  <input
                    type="email"
                    placeholder="email@domain.com"
                    className="flex-1 bg-[#0a0a0a] border border-[#1f521f] px-3 py-1.5 font-mono text-sm text-[#33ff00] placeholder-[#666666] focus:outline-none focus:border-[#33ff00]"
                  />
                  <button className="bg-[#1f521f] text-[#33ff00] px-3 py-1.5 font-mono text-sm border border-[#1f521f] hover:bg-[#33ff00] hover:text-[#0a0a0a] transition-colors">
                    →
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-[#1f521f] p-3 flex flex-col sm:flex-row justify-between items-center gap-2">
            <span className="font-mono text-xs text-[#666666]">
              © {new Date().getFullYear()} Saddam Ansari. All rights reserved.
            </span>
            <span className="font-mono text-xs text-[#33ff00]">
              user@portfolio:~$ _
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
