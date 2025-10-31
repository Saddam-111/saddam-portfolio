import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { images } from "../../assets/asset"; // optional project images for floating cards
import { Link } from "react-router-dom";

const ProjectsHero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Floating card animation variants
  const floatVariant = {
  float: {
    x: ["0%", "-100%", "0%", "0%", "0%", "100%", "0%", "0%", "0%"],  // horizontal movement
    y: ["0%", "0%", "0%", "100%", "0%", "0%", "0%", "-100%", "0%"],  // vertical movement
    transition: { 
      x: { repeat: Infinity, repeatType: "mirror", duration: 2 },
      y: { repeat: Infinity, repeatType: "mirror", duration: 2 },
    },
  },
};

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-pink-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-black overflow-hidden">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          background: { color: "transparent" },
          particles: {
            number: { value: 60, density: { enable: true, area: 900 } },
            color: { value: ["#ff0080", "#00f0ff", "#ffcd00"] },
            shape: { type: ["circle", "triangle", "star"] },
            opacity: { value: 0.6 },
            size: { value: { min: 2, max: 6 } },
            move: { enable: true, speed: 1.5, direction: "none", outModes: "bounce" },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
          },
          detectRetina: true,
        }}
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-500 to-blue-600 relative z-10"
      >
        My Projects
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-4 text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl relative z-10"
      >
        A showcase of my MERN stack applications, interactive web solutions, and freelance projects with modern UI/UX.
      </motion.p>

      {/* Floating Project Cards */}
      <div className="absolute top-1/2 left-1/2 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 flex justify-center flex-wrap gap-8 z-0">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            variants={floatVariant}
            animate="float"
            className={`w-32 h-32 md:w-44 md:h-44 bg-gradient-to-b from-yellow-300 to bg-white dark:bg-gray-800 rounded-xl shadow-2xl flex items-center justify-center text-xl font-bold text-gray-800 dark:text-white border border-white`}
            style={{
              rotate: `${i * 45}deg`,
              transformOrigin: "50% 50%",
              position: "absolute",
            }}
          >
          </motion.div>
        ))}
      </div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 flex flex-wrap justify-center gap-4 relative z-10"
      >
        <Link
          to="/projects"
          className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300"
        >
          Explore Projects
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white font-semibold transition-all duration-300"
        >
          Hire Me
        </Link>
      </motion.div>
    </section>
  );
};

export default ProjectsHero;
