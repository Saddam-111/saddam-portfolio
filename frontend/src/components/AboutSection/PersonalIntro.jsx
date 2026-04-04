import { Link } from "react-router-dom";
import AnimatedSection from "../Common/AnimatedSection";
import TerminalCard from "../Common/TerminalCard";
import TerminalButton from "../Common/TerminalButton";

const PersonalIntro = () => {
  return (
    <AnimatedSection>
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4">
          <TerminalCard title="intro.sh">
            <h2 className="text-2xl font-mono text-[#33ff00] uppercase tracking-wider mb-4" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
              {"//"} HELLO, I'M SADDAM ANSARI
            </h2>
            
            <div className="font-mono text-sm text-[#cccccc] leading-relaxed space-y-4">
              <p>
                <span className="text-[#ffb000]">$</span> I am a passionate full-stack developer specializing in MERN stack. 
                I love turning complex problems into interactive, beautiful and user-friendly applications.
              </p>
              <p>
                With hands-on experience in React, Node.js, MongoDB and modern UI/UX design, 
                I aim to deliver high-quality digital solutions.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
                and refining my problem-solving skills.
              </p>
            </div>

            <div className="mt-6">
              <Link to="/contact">
                <TerminalButton variant="primary">
                  HIRE_ME
                </TerminalButton>
              </Link>
            </div>
          </TerminalCard>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default PersonalIntro;
