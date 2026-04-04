import React from "react";
import AnimatedSection from "../Common/AnimatedSection";
import { motion } from "framer-motion";
import TerminalCard from "../Common/TerminalCard";

const achievements = [
  { title: "5+ Projects Completed", value: "5" },
  { title: "1 Company Worked", value: "1" },
  { title: "10k+ Lines of Code", value: "10k" },
  { title: "1 AI Project", value: "1" },
  { title: "Full MERN Stack", value: "✓" },
];

const AchievementsGrid = () => {
  return (
    <AnimatedSection>
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-mono text-[#33ff00] uppercase tracking-wider" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
              {"//"} ACHIEVEMENTS
            </h2>
            <div className="text-[#1f521f] border-b border-[#1f521f] w-full mt-2"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {achievements.map((ach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <TerminalCard title={`achievement_${idx + 1}.sh`} glowOnHover className="text-center">
                  <span className="block text-2xl font-mono text-[#ffb000] mb-1">{ach.value}</span>
                  <span className="font-mono text-xs text-[#666666]">{ach.title}</span>
                </TerminalCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default AchievementsGrid;
