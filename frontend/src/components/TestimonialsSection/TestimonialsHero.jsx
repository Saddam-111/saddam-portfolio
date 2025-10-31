import React from "react";
import { motion } from "framer-motion";
import { images } from "../../assets/asset";
import { FaTrophy, FaUsers, FaStar, FaQuoteLeft, FaMedal } from "react-icons/fa";

const floatVariants = {
  float: (delay) => ({
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    },
  }),
};

const TestimonialsHero = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={images.testimonial_bg}
          alt="testimonials background"
          className="w-full h-full object-cover opacity-70 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200/60 via-white/50 to-pink-200/60 dark:from-gray-900/80 dark:via-gray-950/90 dark:to-black/90"></div>
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={floatVariants}
          animate="float"
          custom={0}
          className="absolute top-[20%] left-[15%] text-yellow-400 text-5xl opacity-70"
        >
          <FaTrophy />
        </motion.div>
        <motion.div
          variants={floatVariants}
          animate="float"
          custom={0.5}
          className="absolute top-[30%] right-[15%] text-pink-400 text-5xl opacity-70"
        >
          <FaStar />
        </motion.div>
        <motion.div
          variants={floatVariants}
          animate="float"
          custom={1}
          className="absolute bottom-[25%] left-[25%] text-blue-400 text-5xl opacity-70"
        >
          <FaUsers />
        </motion.div>
        <motion.div
          variants={floatVariants}
          animate="float"
          custom={1.5}
          className="absolute bottom-[20%] right-[20%] text-purple-400 text-5xl opacity-70"
        >
          <FaMedal />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-6 flex flex-col items-center">
        {/* Icon Accent */}
        <motion.div
          initial={{ rotate: -15, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl text-pink-500 mb-4"
        >
          <FaQuoteLeft />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg"
        >
          Testimonials & Achievements
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Words of appreciation and recognition from my clients and colleagues,
          reflecting the dedication, quality and innovation I bring to every
          project.
        </motion.p>

        {/* Gradient Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mx-auto mt-6 w-40 h-[3px] bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 rounded-full shadow-md shadow-pink-300/40"
        ></motion.div>

        {/* Achievement Highlights */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-center">
          {[
            { icon: <FaTrophy />, title: "10+ Awards", color: "text-yellow-400" },
            { icon: <FaUsers />, title: "50+ Happy Clients", color: "text-blue-400" },
            { icon: <FaStar />, title: "100+ Positive Reviews", color: "text-pink-400" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.2 }}
              className="flex flex-col items-center gap-2"
            >
              <div
                className={`text-5xl ${item.color} drop-shadow-md transition-transform hover:scale-110`}
              >
                {item.icon}
              </div>
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHero;
