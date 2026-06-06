import React from "react";
import { motion } from "framer-motion";
import { SectionHeader, Card, Badge, Button } from "../Common";

const stats = [
  { label: "Awards", value: "10+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Reviews", value: "100+" },
];

const TestimonialsHero = () => {
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
          Testimonials
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight"
        >
          What Clients Say<span className="text-primary">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Words of appreciation and recognition from clients and colleagues,
          reflecting the dedication and quality I bring to every project.
        </motion.p>

        <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="text-center"
            >
              <span className="block font-display font-bold text-xl sm:text-2xl text-primary">{stat.value}</span>
              <span className="text-xs sm:text-sm text-text-secondary font-mono uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHero;
