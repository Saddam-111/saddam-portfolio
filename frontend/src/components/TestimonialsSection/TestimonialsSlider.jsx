import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "../Common";

const testimonials = [
  {
    name: "Akash Tripathi",
    role: "CEO, Vedseem Info Tech",
    message: "Saddam built our e-commerce site flawlessly! Exceptional attention to detail and performance.",
  },
  {
    name: "Dipendra Soni",
    role: "CMO, Vedseem Info Tech",
    message: "Outstanding MERN stack development skills. Delivered the project ahead of schedule with excellent quality.",
  },
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
    <section className="py-20 sm:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">Testimonials</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
            What Clients Say
          </h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="text-4xl sm:text-5xl text-primary/20 mb-4 font-display">"</div>
              <p className="text-text-primary text-base sm:text-lg leading-relaxed mb-6">
                {testimonials[current].message}
              </p>
              <div>
                <p className="font-display font-semibold text-text-primary">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-text-secondary">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                current === idx ? "bg-primary w-8" : "bg-border hover:bg-text-secondary/30"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;