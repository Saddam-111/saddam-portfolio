import React, { useEffect, useState } from "react";
import AnimatedSection from "../Common/AnimatedSection";
import { motion, useAnimation } from "framer-motion";
import axios from "axios";

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
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSkills = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/skills`);
      if (data.success) {
        const processedSkills = data.skills.map((skill) => ({
          ...skill,
          levelPercent: levelToPercentage(skill.level || "")
        }));
        setSkills(processedSkills);
      }
    } catch (error) {
      console.error("Error fetching skills:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <AnimatedSection>
      <section className="py-20 max-w-5xl mx-auto px-4 relative overflow-hidden">
        {/* Background soft gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/10 via-blue-100/10 to-purple-100/10 dark:from-pink-500/10 dark:via-blue-500/10 dark:to-purple-500/10 blur-3xl"></div>

        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white relative z-10">
          My Skillset
        </h2>

        {loading ? (
          <p className="text-center text-gray-600 dark:text-gray-400">Loading skills...</p>
        ) : skills.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">No skills found.</p>
        ) : (
          <div className="flex flex-col gap-6 relative z-10">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill._id || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="bg-white/60 dark:bg-gray-900/50 backdrop-blur-md border border-pink-500/10 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
              >
                {/* Skill header */}
                <div className="flex items-center gap-3 mb-3">
                  {skill.icon?.url && (
                    <img
                      src={skill.icon.url}
                      alt={skill.name}
                      className="w-10 h-10 rounded-full object-contain bg-white/30 dark:bg-gray-800/30 p-1 border border-pink-500/20"
                    />
                  )}
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{skill.level}</p>
                  </div>
                  <motion.span
                    className="text-sm font-semibold text-pink-600 dark:text-pink-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                  >
                    {skill.levelPercent}%
                  </motion.span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-4 overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.levelPercent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: idx * 0.15 }}
                    className="absolute top-0 left-0 h-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-[0_0_15px_rgba(236,72,153,0.6)]"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </AnimatedSection>
  );
};

export default SkillsBars;
