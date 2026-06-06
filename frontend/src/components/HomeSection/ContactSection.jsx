import React from "react";
import { motion } from "framer-motion";
import { Card, Button } from "../Common";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block font-mono text-xs uppercase tracking-widest text-primary mb-4"
        >
          Get in Touch
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight mb-6"
        >
          Let's build something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            great
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Have a project in mind or just want to connect? I'm always open to discussing new opportunities and ideas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link to="/contact">
            <Button variant="primary" size="lg">Get in Touch</Button>
          </Link>
          <Link to="/projects">
            <Button variant="outline" size="lg">View Projects</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
