import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../Common";

const stats = [
  { value: "20+", label: "Projects" },
  { value: "5+", label: "Years Exp" },
  { value: "50+", label: "Clients" },
];

const ProjectsHero = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden bg-background px-4 sm:px-6">
      <div className="absolute inset-0 noise-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block font-mono text-xs uppercase tracking-widest text-primary mb-4"
        >
          Portfolio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight"
        >
          Featured Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          A collection of MERN stack applications, interactive web solutions, and freelance projects built with modern UI/UX.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-8"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <span className="block font-display font-bold text-2xl sm:text-3xl text-primary">{stat.value}</span>
              <span className="text-xs sm:text-sm text-text-secondary font-mono">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <Link to="/projects">
            <Button variant="primary" size="lg">Explore Projects</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">Get in Touch</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHero;