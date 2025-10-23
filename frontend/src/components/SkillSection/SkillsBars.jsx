import React, { useEffect, useState } from "react";
import AnimatedSection from "../Common/AnimatedSection";
import { motion } from "framer-motion";
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
      return 0; // fallback if level is unknown
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
      <section className="py-20 max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills
        </h2>

        {loading ? (
          <p className="text-center text-gray-600 dark:text-gray-400">Loading skills...</p>
        ) : skills.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">No skills found.</p>
        ) : (
          <div className="flex flex-col gap-2">
            {skills.map((skill, idx) => (
              <div key={skill._id || idx}>
                <div className="flex items-center gap-3 mb-2">
                  {skill.icon?.url && (
                    <img
                      src={skill.icon.url}
                      alt={skill.name}
                      className="w-8 h-8 rounded-full object-contain"
                    />
                  )}
                  <p className="text-gray-900 dark:text-white font-semibold">{skill.name}</p>
                  <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                    {skill.level}
                  </span>
                </div>

                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.levelPercent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 + idx * 0.2 }}
                    className="h-4 bg-pink-600 dark:bg-pink-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </AnimatedSection>
  );
};

export default SkillsBars;
