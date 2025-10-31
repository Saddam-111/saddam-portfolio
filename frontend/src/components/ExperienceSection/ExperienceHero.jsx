import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const ExperienceHero = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-pink-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">

      {/* Animated Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-pink-400 via-blue-500 to-purple-500 blur-3xl opacity-20 -z-10"
      ></motion.div>

      {/* Floating Icon */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [1, 1.2, 1], opacity: 1, y: [0, -15, 0] }}
        transition={{
          duration: 3,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mb-6"
      >
        <FaBriefcase className="text-6xl text-pink-600 dark:text-blue-400 drop-shadow-xl" />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg"
      >
        My <span className="text-pink-600">Experience</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-5 text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-2xl px-4"
      >
        A journey through my professional milestones, learning experiences and impactful projects.
      </motion.p>

      {/* Decorative glowing ring behind text */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] border-4 border-pink-500/30 rounded-full blur-xl"
      ></motion.div>

      {/* Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[80px]"
        >
          <path
            d="M321.39,56.44C208.28,81.75,94.93,95.3,0,95.3V0H1200V95.3c-104.44-1.56-209.81-15.88-321.39-38.86C743.21,26.37,509.74,12.59,321.39,56.44Z"
            className="fill-pink-100 dark:fill-gray-950"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ExperienceHero;
