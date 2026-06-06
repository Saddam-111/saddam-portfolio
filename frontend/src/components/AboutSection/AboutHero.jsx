import React, { useRef, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Badge } from "../Common";
import { images } from "../../assets/asset";
import { motion, useAnimationFrame } from "framer-motion";

const orbitItems = [
  "MERN Stack",
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Tailwind CSS",
  "JavaScript",
];

const AboutHero = () => {
  const textRefs = useRef([]);
  const containerRef = useRef(null);
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [radius, setRadius] = useState(140);

  useLayoutEffect(() => {
    const measure = () => {
      const el = containerRef.current;
      if (!el) return;
      setCenter({ x: el.offsetWidth / 2, y: el.offsetHeight / 2 });
      setRadius(Math.max(60, Math.min(el.offsetWidth, el.offsetHeight) / 2 - 40));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useAnimationFrame((t) => {
    const speed = 0.0006;
    textRefs.current.forEach((el, i) => {
      if (!el || !containerRef.current) return;
      const base = (i * (2 * Math.PI)) / orbitItems.length;
      const angle = speed * t + base;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    });
  });

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[70vh] bg-background overflow-hidden">
      <div className="absolute inset-0 noise-bg" />
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block font-mono text-xs uppercase tracking-widest text-primary mb-4"
        >
          About me
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight"
        >
          Saddam Ansari
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-text-secondary text-base sm:text-lg max-w-xl mx-auto"
        >
          Full Stack Developer passionate about crafting immersive, scalable, and user-centric web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px]">
            <div
              ref={containerRef}
              className="absolute inset-0"
              style={{ pointerEvents: "none" }}
            >
              {orbitItems.map((text, i) => (
                <span
                  key={i}
                  ref={(el) => (textRefs.current[i] = el)}
                  className="absolute font-mono text-[10px] sm:text-xs text-text-secondary whitespace-nowrap"
                  style={{ left: "50%", top: "50%" }}
                >
                  [{text}]
                </span>
              ))}
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl z-10">
              <img
                src={images.profile_img}
                alt="Saddam Ansari"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <Badge variant="primary">MERN Stack</Badge>
          <Badge variant="secondary">Full Stack</Badge>
          <Badge variant="default">Open Source</Badge>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
