import React from "react";
import AnimatedSection from "../Common/AnimatedSection";
import { Link } from "react-router-dom";
import TerminalCard from "../Common/TerminalCard";
import TerminalButton from "../Common/TerminalButton";
import TerminalText from "../Common/TerminalText";

const SkillsCTA = () => {
  return (
    <AnimatedSection>
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto px-4">
          <TerminalCard title="contact.sh">
            <div className="text-center">
              <h2 className="text-2xl font-mono text-[#33ff00] uppercase tracking-wider mb-4" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
                <TerminalText text="> READY_TO_BUILD?" speed={50} />
              </h2>
              
              <p className="font-mono text-[#999999] mb-6 max-w-md mx-auto leading-relaxed">
                I have the skills and experience to bring your ideas to life. Let's collaborate!
              </p>

              <Link to="/contact">
                <TerminalButton variant="primary">
                  CONTACT_ME
                </TerminalButton>
              </Link>
            </div>
          </TerminalCard>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default SkillsCTA;
