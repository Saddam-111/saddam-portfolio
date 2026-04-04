import React, { useContext, useEffect, useState } from "react";
import AnimatedSection from "../Common/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { AdminContext } from "../../context/AdminContext";
import TerminalCard from "../Common/TerminalCard";
import TerminalBadge from "../Common/TerminalBadge";

const ExperienceTimeline = () => {
  const { experiences, fetchExperience, loading } = useContext(AdminContext);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!experiences || experiences.length === 0) {
      fetchExperience();
    }
  }, [experiences, fetchExperience]);

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setSelectedImage(null);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <AnimatedSection>
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-mono text-[#33ff00] uppercase tracking-wider" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
              {"//"} EXPERIENCE_TIMELINE
            </h2>
            <div className="text-[#1f521f] border-b border-[#1f521f] w-full mt-2"></div>
          </div>

          {loading ? (
            <TerminalCard title="loading.sh">
              <span className="font-mono text-sm text-[#ffb000]">$ fetching experiences...</span>
            </TerminalCard>
          ) : experiences.length === 0 ? (
            <TerminalCard title="error.sh">
              <span className="font-mono text-sm text-[#ff3333]">error: no experiences found</span>
            </TerminalCard>
          ) : (
            <div className="relative border-l border-[#1f521f] ml-4">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp._id || idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="mb-8 ml-6"
                >
                  <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-[#33ff00]"></span>
                  
                  <TerminalCard title={`experience_${idx + 1}.sh`} glowOnHover>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                      <h3 className="font-mono text-[#33ff00]">
                        {exp.role}
                      </h3>
                      {exp.duration && (
                        <TerminalBadge variant="secondary">{exp.duration}</TerminalBadge>
                      )}
                    </div>

                    <p className="font-mono text-sm text-[#ffb000] mb-2">
                      @ {exp.company.toUpperCase()}
                    </p>
                    
                    <p className="font-mono text-sm text-[#999999] leading-relaxed">
                      {exp.description}
                    </p>

                    {exp.thumbnail?.url && (
                      <motion.img
                        src={exp.thumbnail.url}
                        alt={exp.company}
                        className="w-24 h-24 mt-4 object-cover border border-[#1f521f] cursor-pointer grayscale hover:grayscale-0 transition-all"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        onClick={() => setSelectedImage(exp.thumbnail.url)}
                      />
                    )}
                  </TerminalCard>
                </motion.div>
              ))}
            </div>
          )}

          {/* Fullscreen Image Modal - Terminal style */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  className="border border-[#1f521f] bg-[#0a0a0a] p-2 max-w-3xl w-full"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="border-b border-[#1f521f] pb-2 mb-2 flex justify-between items-center">
                    <span className="font-mono text-xs text-[#33ff00]">preview.png</span>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="text-[#ff3333] font-mono text-lg hover:text-[#ffb000]"
                    >
                      ×
                    </button>
                  </div>
                  <img
                    src={selectedImage}
                    alt="Experience Preview"
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ExperienceTimeline;
