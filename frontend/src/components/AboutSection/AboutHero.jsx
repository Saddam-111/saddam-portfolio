import React, { useRef, useLayoutEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { images } from "../../assets/asset";
import { Link } from "react-router-dom";
import TerminalButton from "../Common/TerminalButton";

const textOrbit = [
  "MERN Stack",
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Tailwind CSS",
  "JavaScript",
];

const AboutHero = () => {
  const orbitRefs = useRef([]);
  const containerRef = useRef(null);
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [radius, setRadius] = useState(140);

  useLayoutEffect(() => {
    const measure = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const r = Math.max(80, Math.min(rect.width, rect.height) / 2 - 60);
      setCenter({ x: cx, y: cy });
      setRadius(r);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useAnimationFrame((t) => {
    const speed = 0.0006;
    orbitRefs.current.forEach((el, i) => {
      if (!el || !containerRef.current) return;
      const base = (i * (2 * Math.PI)) / textOrbit.length;
      const angle = speed * t + base;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      el.style.left = `${center.x}px`;
      el.style.top = `${center.y}px`;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    });
  });

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] px-6 overflow-hidden">
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(transparent_50%,rgba(51,255,0,0.1)_50%)] bg-[length:100%_4px]"></div>
      </div>

      {/* Terminal Frame */}
      <div className="border border-[#1f521f] max-w-4xl w-full">
        <div className="border-b border-[#1f521f] p-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 bg-[#ff3333] rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-[#ffb000] rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-[#33ff00] rounded-full"></span>
          </div>
          <span className="text-[#33ff00] font-mono text-xs ml-2">about.sh</span>
        </div>

        <div className="p-8">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-mono text-[#33ff00] uppercase tracking-wider text-center"
            style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}
          >
            <span className="text-[#ffb000]">$</span> whoami
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-mono text-[#999999] mt-4 text-center max-w-2xl"
          >
            I'm a creative <span className="text-[#ffb000]">Full Stack Developer</span> passionate about crafting immersive web experiences.
          </motion.p>

          {/* Profile + Orbiting Text */}
          <div className="relative mt-16 flex items-center justify-center">
            <div
              ref={containerRef}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px]"
              style={{ pointerEvents: "none" }}
            >
              {textOrbit.map((text, i) => (
                <div
                  key={i}
                  ref={(el) => (orbitRefs.current[i] = el)}
                  className="absolute font-mono text-xs text-[#666666]"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                  }}
                  aria-hidden
                >
                  [{text}]
                </div>
              ))}
            </div>

            {/* Floating Profile Image */}
            <motion.img
              src={images.profile_img}
              alt="Profile"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
              transition={{
                duration: 1,
                delay: 0.5,
                y: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                },
              }}
              className="w-36 h-36 border-2 border-[#1f521f] object-cover z-10 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link to="/projects">
              <TerminalButton variant="primary">
                VIEW_PROJECTS
              </TerminalButton>
            </Link>
            <Link to="/contact">
              <TerminalButton variant="secondary">
                CONTACT_ME
              </TerminalButton>
            </Link>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#1f521f] p-2 text-right">
          <span className="font-mono text-xs text-[#33ff00]">user@about:~$ _</span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
