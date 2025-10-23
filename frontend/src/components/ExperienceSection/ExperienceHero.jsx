import React from "react";
import { motion } from "framer-motion";

const ExperienceHero =() => {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-100 via-white to-pink-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white"
      >
        My Experience
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-2xl"
      >
        A timeline of my professional journey, projects, and achievements.
      </motion.p>
    </section>
  );
}


export default ExperienceHero