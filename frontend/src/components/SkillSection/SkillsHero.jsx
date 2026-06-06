import React from "react";
import { motion } from "framer-motion";

const SkillsHero = () => {
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
          Skills
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight"
        >
          Technical Skills<span className="text-primary">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          A comprehensive overview of my technical stack and the technologies I use to build modern applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-16 h-px bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-8"
        />
      </div>
    </section>
  );
};

export default SkillsHero;