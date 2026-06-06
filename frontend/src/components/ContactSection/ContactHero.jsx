import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactHero = () => {
  const contactLinks = [
    { icon: <FaEnvelope />, label: "Email", href: "mailto:saddam6389046@gmail.com" },
    { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/saddam11" },
    { icon: <FaGithub />, label: "GitHub", href: "https://github.com/Saddam-111" },
    { icon: <FaPhoneAlt />, label: "Phone", href: "tel:+916389046018" },
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 noise-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block font-mono text-xs uppercase tracking-widest text-primary mb-4"
        >
          Get in Touch
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-6"
        >
          Let's work together<span className="text-primary">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Have a project in mind or want to discuss opportunities?
          I'd love to hear from you.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3">
          {contactLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-xl text-sm text-text-secondary hover:text-primary hover:border-primary/30 hover:shadow-sm transition-all"
            >
              <span className="text-primary">{link.icon}</span>
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
