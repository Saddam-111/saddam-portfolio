import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TerminalCard from "../Common/TerminalCard";

const skills = [
  { name: "React.js", color: "#61dafb" },
  { name: "Node.js", color: "#68a063" },
  { name: "MongoDB", color: "#47a248" },
  { name: "Express", color: "#000000" },
  { name: "Tailwind CSS", color: "#06b6d4" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Python", color: "#3776ab" },
  { name: "C++", color: "#00599c" },
  { name: "MySQL", color: "#4479a1" },
  { name: "Git", color: "#f05032" },
  { name: "Docker", color: "#2496ed" },
];

const SkillsSection = () => {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-mono text-[#33ff00] uppercase tracking-wider" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
            {"//"} SKILLS
          </h2>
          <div className="text-[#1f521f] border-b border-[#1f521f] w-full mt-2"></div>
        </div>

        {/* Infinite scroll container - Terminal style */}
        <div className="relative w-full overflow-hidden py-4">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, textShadow: `0 0 10px ${skill.color}` }}
                className="flex items-center gap-2 font-mono text-lg whitespace-nowrap"
              >
                <span style={{ color: skill.color }}>●</span>
                <span className="text-[#cccccc]">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* View More Link */}
        <div className="mt-8 text-center">
          <Link
            to="/skills"
            className="text-[#33ff00] font-mono text-sm hover:text-[#ffb000] transition-colors"
          >
            [ EXPLORE_MORE_SKILLS ]
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
