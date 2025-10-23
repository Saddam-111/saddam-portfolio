import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { images } from "../../assets/asset";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center text-center md:text-left gap-10 px-6 md:px-20 py-10 bg-gradient-to-br from-pink-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-black overflow-hidden">
      {/* === Left Text Section === */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">
            Saddam Ansari
          </span>
        </h1>

        <p className="text-lg md:text-2xl mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          A passionate{" "}
          <span className="text-blue-600 font-semibold">
            MERN Stack Developer
          </span>{" "}
          crafting interactive, dynamic and seamless web experiences that bring
          ideas to life.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <Link
            to="/projects"
            className="px-6 py-3 bg-pink-600 text-white font-medium rounded-full hover:scale-105 hover:shadow-[0_0_20px_#ec4899] transition-all duration-300"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>

      {/* === Right Image Section === */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative flex justify-center items-center"
      >
        {/* Glow circle behind image */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
          className="absolute w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur-3xl opacity-30"
        ></motion.div>

        {/* Profile image */}
        <motion.img
          src={images.profile_img}
          alt="Saddam Ansari"
          className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-white dark:border-gray-700 shadow-[0_0_25px_rgba(236,72,153,0.5)] object-cover relative z-10 hover:scale-105 transition-transform duration-300"
          whileHover={{ rotate: 3, scale: 1.05 }}
        />

        {/* Floating Tag */}
      </motion.div>
    </section>
  );
};

export default HeroSection;
