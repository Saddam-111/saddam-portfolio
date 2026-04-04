import React, { useContext, useEffect } from "react";
import AnimatedSection from "../Common/AnimatedSection";
import { motion } from "framer-motion";
import { AdminContext } from "../../context/AdminContext";
import TerminalCard from "../Common/TerminalCard";

const levelToPercentage = (level) => {
  switch (level.toLowerCase()) {
    case "beginner":
      return 33;
    case "intermediate":
      return 66;
    case "advance":
    case "advanced":
      return 100;
    default:
      return 0;
  }
};

const SkillsBars = () => {
  const { skills, fetchSkills, loading } = useContext(AdminContext);

  useEffect(() => {
    if (!skills || skills.length === 0) {
      fetchSkills();
    }
  }, [skills, fetchSkills]);

  const processedSkills = skills.map((skill) => ({
    ...skill,
    levelPercent: levelToPercentage(skill.level || ""),
  }));

  return (
    <AnimatedSection>
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-mono text-[#33ff00] uppercase tracking-wider" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
              {"//"} MY_SKILLSET
            </h2>
            <div className="text-[#1f521f] border-b border-[#1f521f] w-full mt-2"></div>
          </div>

          {loading ? (
            <TerminalCard title="loading.sh">
              <span className="font-mono text-sm text-[#ffb000]">$ fetching skills...</span>
            </TerminalCard>
          ) : processedSkills.length === 0 ? (
            <TerminalCard title="error.sh">
              <span className="font-mono text-sm text-[#ff3333]">error: no skills found</span>
            </TerminalCard>
          ) : (
            <div className="flex flex-col gap-4">
              {processedSkills.map((skill, idx) => (
                <motion.div
                  key={skill._id || idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TerminalCard title={`skill_${idx + 1}.sh`} glowOnHover>
                    {/* Skill Header */}
                    <div className="flex items-center gap-3 mb-3">
                      {skill.icon?.url && (
                        <img
                          src={skill.icon.url}
                          alt={skill.name}
                          className="w-8 h-8 object-contain bg-[#1f521f]/30 p-1"
                        />
                      )}
                      <div className="flex-1">
                        <p className="font-mono text-[#33ff00]">{skill.name}</p>
                        <p className="font-mono text-xs text-[#666666]">{skill.level}</p>
                      </div>
                      <motion.span
                        className="font-mono text-sm text-[#ffb000]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        {skill.levelPercent}%
                      </motion.span>
                    </div>

                    {/* Progress Bar - Terminal style */}
                    <div className="w-full bg-[#0a0a0a] border border-[#1f521f] h-4 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.levelPercent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="h-full bg-[#33ff00]"
                        style={{ boxShadow: "0 0 10px rgba(51,255,0,0.5)" }}
                      ></motion.div>
                    </div>
                  </TerminalCard>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default SkillsBars;
