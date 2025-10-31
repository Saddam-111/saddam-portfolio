import React from "react";
import { motion } from "framer-motion";
import { images } from "../../assets/asset";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";

const contactIcons = [
  { icon: <FaEnvelope className="text-red-400" />, delay: 0 },
  { icon: <FaLinkedin className="text-blue-500" />, delay: 0.2 },
  { icon: <FaGithub className="text-gray-300" />, delay: 0.4 },
  { icon: <FaPhoneAlt className="text-green-400" />, delay: 0.6 },
  { icon: <FaPaperPlane className="text-pink-400" />, delay: 0.8 },
];

const ContactHero = () => {
  return (
    <section className="relative min-h-[65vh] flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={images.contact_bg}
          alt="contact background"
          className="w-full h-full object-cover opacity-70 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-200/60 via-white/40 to-blue-200/50 dark:from-gray-900/80 dark:via-gray-950/90 dark:to-black/90"></div>
      </div>

      {/* Floating Animated Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {contactIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 40, opacity: 0 }}
            animate={{
              y: [40, -40, 40],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 6,
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

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Have an idea, a collaboration or a project in mind? Let’s connect and
          turn your vision into a reality. You can reach me through the form
          below or via any of my platforms.
        </motion.p>

        {/* Animated Gradient Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mx-auto mt-6 w-36 h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full shadow-md shadow-pink-300/40"
        ></motion.div>

        {/* Contact Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <motion.a
            href="mailto:saddam6389046@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2.5 rounded-full font-medium shadow-md shadow-pink-400/30 transition-all"
          >
            <FaEnvelope /> Email Me
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/saddam11"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-medium shadow-md shadow-blue-400/30 transition-all"
          >
            <FaLinkedin /> LinkedIn
          </motion.a>

          <motion.a
            href="https://github.com/Saddam-111"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-5 py-2.5 rounded-full font-medium shadow-md shadow-gray-500/30 transition-all"
          >
            <FaGithub /> GitHub
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactHero;
