import React from "react";
import AnimatedSection from "../Common/AnimatedSection";
import { Link } from "react-router-dom";
import TerminalCard from "../Common/TerminalCard";
import TerminalButton from "../Common/TerminalButton";
import TerminalText from "../Common/TerminalText";

const ExperienceCTA = () => {
  return (
    <AnimatedSection>
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto px-4">
          <TerminalCard title="projects.sh">
            <div className="text-center">
              <h2 className="text-2xl font-mono text-[#33ff00] uppercase tracking-wider mb-4" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
                <TerminalText text="> INSPIRED?" speed={50} />
              </h2>
              
              <p className="font-mono text-[#999999] mb-6 max-w-md mx-auto leading-relaxed">
                Let's build something together! Check out my projects or reach out directly.
              </p>

              <Link to="/projects">
                <TerminalButton variant="primary">
                  SEE_PROJECTS
                </TerminalButton>
              </Link>
            </div>
          </TerminalCard>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ExperienceCTA;
