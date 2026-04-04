import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TerminalCard from "../Common/TerminalCard";
import TerminalText from "../Common/TerminalText";

const AboutSection = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setShowCursor(v => !v), 530);
    return () => clearInterval(timer);
  }, []);

  const typingText = "I'm a dedicated full-stack developer who loves turning complex problems into beautiful, functional applications. With expertise in React, Node, MongoDB and modern UI design, I focus on performance, scalability and user experience.";

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4">
        <TerminalCard title="about.sh" className="min-h-[200px]">
          <div className="mb-4">
            <h2 className="text-2xl font-mono text-[#33ff00] uppercase tracking-wider" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
              <TerminalText text="> ABOUT_ME" speed={40} />
            </h2>
            <div className="text-[#1f521f] border-b border-[#1f521f] w-full mt-2"></div>
          </div>

          <div className="font-mono text-sm">
            <span className="text-[#ffb000]">$ cat about.txt</span>
            <p className="text-[#cccccc] mt-3 leading-relaxed">
              <TerminalText text={typingText} speed={20} />
            </p>
          </div>

          <div className="mt-6">
            <Link
              to="/about"
              className="text-[#33ff00] font-mono text-sm hover:text-[#ffb000] transition-colors"
            >
              [ KNOW_MORE ]
              <span className="ml-2">{showCursor ? "█" : " "}</span>
            </Link>
          </div>
        </TerminalCard>
      </div>
    </section>
  );
};

export default AboutSection;
