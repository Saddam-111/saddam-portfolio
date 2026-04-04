import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TerminalCard from "../Common/TerminalCard";

const testimonials = [
  { name: "Akash Tripathi", role: "CEO, Vedseem Info Tech", message: "Saddam built our e-commerce site flawlessly!" },
  { name: "Dipendra Soni", role: "CMO, Vedseem Info Tech", message: "Exceptional MERN stack development skills!" },
];

const TestimonialsSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-mono text-[#33ff00] uppercase tracking-wider" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
            {"//"} WHAT_CLIENTS_SAY
          </h2>
          <div className="text-[#1f521f] border-b border-[#1f521f] w-full mt-2"></div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <TerminalCard title="testimonial.sh" className="text-center">
              <div className="font-mono text-lg text-[#cccccc] italic mb-4">
                "{testimonials[current].message}"
              </div>
              <div className="text-[#33ff00] font-mono">
                {testimonials[current].name}
              </div>
              <div className="font-mono text-xs text-[#666666]">
                @ {testimonials[current].role}
              </div>
            </TerminalCard>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots - Terminal style */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`font-mono text-xs transition-colors ${
                current === idx ? "text-[#33ff00]" : "text-[#1f521f]"
              }`}
            >
              [{idx + 1}]
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
