import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TerminalText from "../Common/TerminalText";
import TerminalButton from "../Common/TerminalButton";

const ProjectsHero = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowCursor((v) => !v);
    }, 530);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center items-center text-center bg-[#0a0a0a] overflow-hidden">
      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full bg-[linear-gradient(transparent_50%,rgba(51,255,0,0.1)_50%)] bg-[length:100%_4px]"></div>
      </div>

      {/* Terminal Frame */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Terminal Header */}
        <div className="border border-[#1f521f] mb-6">
          <div className="border-b border-[#1f521f] p-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#ff3333] rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-[#ffb000] rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-[#33ff00] rounded-full"></span>
            </div>
            <span className="text-[#33ff00] font-mono text-xs ml-2">
              projects.sh
            </span>
          </div>
          
          {/* Content */}
          <div className="p-8">
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-mono text-[#33ff00] uppercase tracking-wider mb-4" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
              <TerminalText text="> MY_PROJECTS" speed={60} />
            </h1>

            {/* Subtitle - Terminal Command Style */}
            <div className="mb-8">
              <span className="text-[#ffb000] font-mono text-xs sm:text-sm">$ cat description.txt</span>
              <p className="text-gray-400 font-mono mt-3 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg sm:max-w-2xl mx-auto leading-relaxed px-4">
                A showcase of MERN stack applications, interactive web solutions, and freelance projects with modern UI/UX.
              </p>
            </div>

            {/* Project Stats */}
            <div className="flex justify-center gap-4 sm:gap-8 mb-8 sm:mb-10">
              <div className="text-center">
                <span className="block text-[#33ff00] font-mono text-2xl sm:text-3xl font-bold">20+</span>
                <span className="text-gray-500 font-mono text-xs sm:text-sm">Projects</span>
              </div>
              <div className="text-center">
                <span className="block text-[#ffb000] font-mono text-2xl sm:text-3xl font-bold">5+</span>
                <span className="text-gray-500 font-mono text-xs sm:text-sm">Years Exp</span>
              </div>
              <div className="text-center">
                <span className="block text-[#33ff00] font-mono text-2xl sm:text-3xl font-bold">50+</span>
                <span className="text-gray-500 font-mono text-xs sm:text-sm">Clients</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
              <Link to="/projects">
                <TerminalButton variant="primary">
                  EXPLORE_PROJECTS
                </TerminalButton>
              </Link>
              <Link to="/contact">
                <TerminalButton variant="secondary">
                  HIRE_ME
                </TerminalButton>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-[#1f521f] p-2 text-right">
            <span className="text-[#33ff00] font-mono text-xs">
              user@portfolio:~$ <span className={showCursor ? "opacity-100" : "opacity-0"}>█</span>
            </span>
          </div>
        </div>
      </div>

      {/* ASCII Art Decoration */}
      <div className="absolute bottom-4 left-4 text-[#1f521f] font-mono text-xs hidden md:block opacity-50">
        <pre>{`
  _________
 |  _____  |
 | |     | |
 | |_____| |
 |_________|
        `}</pre>
      </div>
    </section>
  );
};

export default ProjectsHero;
