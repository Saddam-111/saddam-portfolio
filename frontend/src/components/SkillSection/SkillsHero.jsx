import React from "react";
import { motion } from "framer-motion";
import { images } from "../../assets/asset";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";

const floatingIcons = [
  { icon: <FaReact className="text-sky-400" />, delay: 0 },
  { icon: <FaNodeJs className="text-green-500" />, delay: 0.2 },
  { icon: <FaHtml5 className="text-orange-500" />, delay: 0.4 },
  { icon: <FaCss3Alt className="text-blue-500" />, delay: 0.6 },
  { icon: <FaJsSquare className="text-yellow-400" />, delay: 0.8 },
  { icon: <FaDatabase className="text-indigo-400" />, delay: 1.0 },
  { icon: <FaGithub className="text-gray-400" />, delay: 1.2 },
];

const SkillsHero = () => {
  return (
    <section
      className="relative min-h-[60vh] flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={images.skill_bg}
          alt="skills background"
          className="w-full h-full object-cover opacity-70 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200/50 via-white/40 to-blue-200/50 dark:from-gray-900/80 dark:via-gray-950/80 dark:to-black/90"></div>
      </div>

      {/* Floating Skill Icons Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            animate={{
              y: [30, -30, 30],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
            className="absolute text-5xl md:text-6xl"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-4"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg">
          My Skills
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          A showcase of my technical stack, tools, and technologies I use to craft 
          performant, scalable, and modern web applications.
        </motion.p>

        {/* Glowing Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mx-auto mt-6 w-32 h-[3px] bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 rounded-full"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsHero;
