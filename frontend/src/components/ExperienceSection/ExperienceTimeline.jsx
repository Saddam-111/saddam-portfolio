import React, { useState, useEffect } from "react";
import AnimatedSection from "../Common/AnimatedSection";
import { motion } from "framer-motion";
import axios from "axios";

const ExperienceTimeline = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/experience`);
        setExperiences(res.data.experiences);
      } catch (err) {
        setError("Failed to load experiences. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchExperiences();
  }, []);

  return (
    <AnimatedSection>
      <section className="py-20 max-w-5xl mx-auto px-4 relative">
        {/* Background gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-200/10 to-blue-200/10 dark:from-pink-500/10 dark:to-blue-500/10 blur-3xl rounded-full"></div>

        <h2 className="text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white relative z-10">
          Experience Timeline
        </h2>

        {loading ? (
          <p className="text-center text-gray-600 dark:text-gray-300">Loading experiences...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : experiences.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">No experiences found.</p>
        ) : (
          <div className="relative border-l-2 border-pink-500/70 dark:border-pink-400/60 ml-6 z-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp._id || idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="mb-12 ml-6 group relative"
              >
                {/* Timeline dot with glow */}
                <span className="absolute -left-12 w-5 h-5 bg-pink-600 dark:bg-pink-500 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.6)]"></span>

                {/* Experience Card */}
                <div className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-md border border-pink-500/20 rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-400/20">
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {exp.role} <span className="text-pink-600">@ {exp.company.toUpperCase()}</span>
                    </p>
                    {exp.duration && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">{exp.duration}</p>
                    )}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>

                  {exp.thumbnail?.url && (
                    <motion.img
                      src={exp.thumbnail.url}
                      alt={exp.company}
                      className="w-28 h-28 mt-4 rounded-xl object-cover shadow-md border border-pink-400/30"
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </AnimatedSection>
  );
};

export default ExperienceTimeline;
