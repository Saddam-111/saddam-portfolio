import React, { useRef, useLayoutEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { images } from "../../assets/asset";
import { Link } from "react-router-dom";

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

  // measure container and compute center & radius
  useLayoutEffect(() => {
    const measure = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // center relative to container's top-left
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      // choose radius as a fraction of the smallest dimension
      const r = Math.max(80, Math.min(rect.width, rect.height) / 2 - 60);
      setCenter({ x: cx, y: cy });
      setRadius(r);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Animate orbit rotation manually using trigonometry
  // t is in milliseconds
  useAnimationFrame((t) => {
    // speed in radians per millisecond
    const speed = 0.0006; // tweak this for faster/slower rotation
    orbitRefs.current.forEach((el, i) => {
      if (!el || !containerRef.current) return;
      // base angle for this item
      const base = (i * (2 * Math.PI)) / textOrbit.length;
      const angle = speed * t + base;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      // place element at center + offset. Use translate(x,y) then translate(-50%,-50%)
      // and set left/top to center coordinates (px)
      el.style.left = `${center.x}px`;
      el.style.top = `${center.y}px`;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    });
  });

  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-black text-center px-6">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4, scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-pink-500 blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg"
      >
        About <span className="text-pink-600">Me</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl"
      >
        I’m a creative <span className="text-blue-600 font-semibold">Full Stack Developer</span> passionate about
        crafting immersive web experiences and building scalable digital products.
      </motion.p>

      {/* Profile + Orbiting Text */}
      <div className="relative mt-16 flex items-center justify-center">
        {/* Orbit container - we measure this to compute center */}
        <div
          ref={containerRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px]"
          style={{ pointerEvents: "none" }}
        >
          {textOrbit.map((text, i) => (
            <div
              key={i}
              ref={(el) => (orbitRefs.current[i] = el)}
              className="absolute text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 select-none"
              // initial placement; will be overridden by animation frame
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                whiteSpace: "nowrap",
                pointerEvents: "none",
              }}
              aria-hidden
            >
              {text}
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
          className="w-40 h-40 rounded-full border-4 border-pink-500 shadow-xl object-cover z-10"
        />
      </div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <Link
          href="/projects"
          className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 transition"
        >
          View My Projects
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white font-semibold transition"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutHero;
