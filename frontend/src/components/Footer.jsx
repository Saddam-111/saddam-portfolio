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
    <footer className=" text-white relative overflow-hidden bg-gray-600 dark:bg-gray-900 py-6 mt-20 border-t border-gray-200 dark:border-gray-700">
      {/* Decorative shapes */}
      <span className="absolute w-72 h-72 bg-white/10 rounded-full top-[-80px] left-[-80px] animate-spin-slow"></span>
      <span className="absolute w-96 h-96 bg-white/5 rounded-full bottom-[-120px] right-[-100px] animate-pulse-slow"></span>

      <div className="container mx-auto py-10 px-6 grid md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Me</h3>
          <p className="text-gray-200">
            I am Saddam Ansari, a MERN Stack developer. I build responsive,
            modern and high-performance web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-pink-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-pink-300 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-pink-300 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-pink-300 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-gray-200">Email: saddam6389046@gmail.com</p>
          <p className="text-gray-200">Phone: +91 6389046018</p>
          <p className="text-gray-200">Location: Jhansi, India</p>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
          <div className="flex gap-5 text-2xl mb-6 justify-center">
            <a
              href="https://github.com/Saddam-111"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-all hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/saddam11"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-all hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:saddam6389046@gmail.com"
              className="hover:text-yellow-400 transition-all hover:scale-110"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-all hover:scale-110"
            >
              <FaTwitter />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-all hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>

          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Subscribe for updates"
              className="p-3 rounded-lg text-gray-200 ring-1 ring-purple-950 focus:ring-2 focus:ring-pink-400 transition-all"
            />
            <button className="bg-pink-600 hover:bg-pink-700 py-3 rounded-lg font-semibold transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 pt-4 text-center text-gray-200">
        © {new Date().getFullYear()} Saddam Ansari. All rights reserved.
      </div>

      {/* Tailwind Animations */}
      <style>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 6s ease-in-out infinite;
        }
        @keyframes spin {
          0%, 100% { transform: scale(2.5); opacity: 0.2; }
          50% { transform: scale(1.3); opacity: 0.4; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.3); opacity: 0.4; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
