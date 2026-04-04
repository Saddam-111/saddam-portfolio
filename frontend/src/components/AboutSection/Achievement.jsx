import { motion } from "framer-motion";
import { FaAward, FaProjectDiagram, FaGithub } from "react-icons/fa";
import AnimatedSection from "../Common/AnimatedSection";
import TerminalCard from "../Common/TerminalCard";

const Achievement = () => {
  const achievements = [
    { icon: <FaAward />, title: "Certified MERN Developer", color: "#ffb000" },
    { icon: <FaProjectDiagram />, title: "5+ Completed Projects", color: "#33ff00" },
    { icon: <FaGithub />, title: "500+ GitHub Commits", color: "#ff3333" }
  ];

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

          <div className="flex flex-wrap justify-center gap-4">
            {achievements.map((a, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
              >
                <TerminalCard title="achievement.sh" glowOnHover className="w-64">
                  <div className="text-4xl mb-3" style={{ color: a.color }}>
                    {a.icon}
                  </div>
                  <h3 className="font-mono text-[#cccccc] text-sm">{a.title}</h3>
                </TerminalCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Achievement;
