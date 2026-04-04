import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../Common/AnimatedSection";
import TerminalText from "../Common/TerminalText";
import TerminalButton from "../Common/TerminalButton";

const ProjectsCTA = () => {
  return (
    <AnimatedSection>
      <section className="py-20 text-center bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto px-4">
          {/* Terminal Frame */}
          <div className="border border-[#1f521f]">
            {/* Terminal Header */}
            <div className="border-b border-[#1f521f] p-3 flex justify-between items-center">
              <div className="flex gap-2">
                <span className="w-2.5 h-2.5 bg-[#ff3333] rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-[#ffb000] rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-[#33ff00] rounded-full"></span>
              </div>
              <span className="text-[#33ff00] font-mono text-xs">collab.sh</span>
              <div className="w-10"></div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-mono text-[#33ff00] uppercase tracking-wider mb-4" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
                <TerminalText text="> GOT_AN_IDEA?" speed={50} />
              </h2>
              
              <p className="text-gray-400 font-mono mb-8 max-w-md mx-auto leading-relaxed">
                If you like my work and want to build something together, reach out and let's make it happen!
              </p>

              <Link to="/contact">
                <TerminalButton variant="primary">
                  CONTACT_ME
                </TerminalButton>
              </Link>
            </div>

            {/* Footer */}
            <div className="border-t border-[#1f521f] p-3">
              <span className="text-[#33ff00] font-mono text-xs">
                user@portfolio:~$ _
              </span>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ProjectsCTA;
