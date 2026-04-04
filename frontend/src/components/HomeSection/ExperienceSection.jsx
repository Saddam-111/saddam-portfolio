import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TerminalCard from "../Common/TerminalCard";
import TerminalBadge from "../Common/TerminalBadge";

const experiences = [
  {
    title: "Full Stack Intern",
    company: "VEDSEEM INFOTECH PVT. LTD.",
    period: "Jul 2025 – Oct 2025",
    description: "Worked on scalable web applications using React, Node.js and MongoDB. Implemented responsive UI components, REST APIs and optimized data flow.",
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-mono text-[#33ff00] uppercase tracking-wider" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
            {"//"} EXPERIENCE
          </h2>
          <div className="text-[#1f521f] border-b border-[#1f521f] w-full mt-2"></div>
        </div>

        {/* Experience List */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <TerminalCard title={`experience_${index + 1}.sh`} glowOnHover>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <h3 className="text-lg font-mono text-[#33ff00]">
                    {exp.title}
                  </h3>
                  <TerminalBadge variant="secondary">
                    {exp.period}
                  </TerminalBadge>
                </div>
                
                <p className="font-mono text-sm text-[#ffb000] mb-2">
                  @ {exp.company}
                </p>
                
                <p className="font-mono text-sm text-[#999999] leading-relaxed">
                  {exp.description}
                </p>
              </TerminalCard>
            </motion.div>
          ))}
        </div>

        {/* View More Link */}
        <div className="mt-6 text-center">
          <Link
            to="/experience"
            className="text-[#33ff00] font-mono text-sm hover:text-[#ffb000] transition-colors"
          >
            [ VIEW_FULL_EXPERIENCE ]
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
