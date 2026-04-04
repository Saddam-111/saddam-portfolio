import React from "react";
import AnimatedSection from "../Common/AnimatedSection";
import { Link } from "react-router-dom";
import TerminalCard from "../Common/TerminalCard";
import TerminalButton from "../Common/TerminalButton";
import TerminalText from "../Common/TerminalText";

const ContactCTA = () => {
  return (
    <AnimatedSection>
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto px-4">
          <TerminalCard title="home.sh">
            <div className="text-center">
              <h2 className="text-xl font-mono text-[#33ff00] uppercase tracking-wider mb-4" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
                <TerminalText text="> LETS_BUILD_AMAZING" speed={50} />
              </h2>
              
              <p className="font-mono text-[#999999] mb-6 max-w-md mx-auto leading-relaxed">
                Ready to collaborate or have a question? Reach out and I'll get back to you ASAP!
              </p>

              <Link to="/">
                <TerminalButton variant="primary">
                  BACK_TO_HOME
                </TerminalButton>
              </Link>
            </div>
          </TerminalCard>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ContactCTA;
