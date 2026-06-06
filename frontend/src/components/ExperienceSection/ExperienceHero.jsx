import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, Badge, Button } from "../Common";
import { AdminContext } from "../../context/AdminContext";

const ExperienceHero = () => {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex flex-col justify-center items-center text-center overflow-hidden bg-background px-4 sm:px-6">
      <div className="absolute inset-0 noise-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block font-mono text-xs uppercase tracking-widest text-primary mb-4"
        >
          Experience
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight"
        >
          My Experience<span className="text-primary">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          A journey through my professional milestones, learning experiences,
          and impactful projects.
        </motion.p>
      </div>
    </section>
  );
};

const ExperienceTimeline = () => {
  const { experiences, fetchExperience, loading } = React.useContext(AdminContext);
  const [selectedImage, setSelectedImage] = React.useState(null);

  React.useEffect(() => {
    if (!experiences || experiences.length === 0) {
      fetchExperience();
    }
  }, [experiences, fetchExperience]);

  React.useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setSelectedImage(null);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="py-20 sm:py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">Career Path</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
            Professional Timeline
          </h2>
        </div>

        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse bg-card rounded-xl p-6 h-32 border border-border" />
            ))}
          </div>
        ) : experiences.length === 0 ? (
          <p className="text-text-secondary text-center py-12">
            No experience entries yet.
          </p>
        ) : (
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent/40 to-transparent" />

            <div className="space-y-10">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp._id || idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-primary rounded-full border-4 border-background shadow-lg z-10 mt-8" />

                  <div className={`pl-14 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <Card hoverable gradient className="rounded-xl">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <h3 className="font-display font-semibold text-lg text-text-primary">
                          {exp.role}
                        </h3>
                        {exp.duration && (
                          <Badge variant="primary" size="sm" className="w-fit">
                            {exp.duration}
                          </Badge>
                        )}
                      </div>

                      <p className="text-sm text-primary font-mono mb-3">
                        @ {exp.company}
                      </p>

                      <p className="text-text-secondary text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      {exp.thumbnail?.url && (
                        <motion.img
                          src={exp.thumbnail.url}
                          alt={exp.company}
                          className="w-24 h-24 mt-4 object-cover rounded-lg border border-border cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          onClick={() => setSelectedImage(exp.thumbnail.url)}
                        />
                      )}
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative bg-surface border border-border rounded-2xl overflow-hidden max-w-3xl w-full"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full max-h-[80vh] object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 w-8 h-8 bg-card/80 backdrop-blur rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Close preview"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const ExperienceCTA = () => {
  return (
    <section className="py-20 sm:py-24 bg-background text-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight mb-4">
          Inspired by my Journey?
        </h2>
        <p className="text-text-secondary text-base sm:text-lg mb-8">
          Let's build something great together. Check out my projects or reach out directly.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/projects">
            <Button variant="primary">View Projects</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline">Contact Me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { ExperienceHero, ExperienceTimeline, ExperienceCTA };