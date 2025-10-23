import React, { useState, useEffect } from "react";
import AnimatedSection from "../Common/AnimatedSection";
import { motion } from "framer-motion";
import axios from "axios";

const ExperienceTimeline = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch experiences from backend
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/experience`
        );
        setExperiences(res.data.experiences);
        console.log(res.data.experiences);
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
      <section className="py-20 max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Timeline
        </h2>

        {loading ? (
          <p className="text-center text-gray-600 dark:text-gray-300">
            Loading experiences...
          </p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : experiences.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No experiences found.
          </p>
        ) : (
          <div className="relative border-l-2 border-pink-600 dark:border-pink-500 ml-4">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp._id || idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="mb-10 ml-6"
              >
                <span className="absolute -left-6 bg-pink-600 dark:bg-pink-500 w-4 h-4 rounded-full mt-1"></span>

                <div className="flex flex-col justify-between space-y-2">
                  <p className="text-gray-900 dark:text-white font-semibold">
                    {exp.role} @ {exp.company.toUpperCase()}
                  </p>
                  {exp.duration && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {exp.duration}
                    </p>
                  )}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  {exp.description}
                </p>

                {exp.thumbnail?.url && (
                  <img
                    src={exp.thumbnail.url}
                    alt={exp.company}
                    className="w-24 h-24 mt-3 rounded-lg shadow-md object-cover"
                  />
                )}
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </AnimatedSection>
  );
};

export default ExperienceTimeline;
