import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../Common";

const SkillsCTA = () => {
  return (
    <section className="py-20 sm:py-24 bg-surface text-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block font-mono text-xs uppercase tracking-widest text-accent mb-4"
        >
          Let's Collaborate
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight mb-4"
        >
          Ready to Build Together?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-base sm:text-lg mb-8 leading-relaxed"
        >
          I have the skills and experience to bring your ideas to life. Let's discuss your next project.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/contact">
            <Button variant="primary" size="lg">Let's Build Together</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsCTA;