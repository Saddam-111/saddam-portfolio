import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../Common/AnimatedSection";
import { motion } from "framer-motion";

const ContactSection =() => {
  return (
    <AnimatedSection>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-pink-600 to-blue-600 text-white">
        {/* Floating circles for background animation */}
        <span className="absolute w-72 h-72 bg-pink-400 opacity-30 rounded-full top-[-100px] left-[-100px] animate-spin-slow"></span>
        <span className="absolute w-96 h-96 bg-blue-400 opacity-20 rounded-full bottom-[-150px] right-[-120px] animate-pulse-slow"></span>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto relative z-10"
        >
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 120 }}
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            🚀 Let’s Build Something Great Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg md:text-xl mb-12 text-gray-100"
          >
            Have an idea or project in mind? Let's collaborate and make it happen. 
            Your vision, my expertise—let's create magic.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to="/contact"
              className="px-10 py-4 bg-white text-pink-600 font-semibold rounded-full shadow-2xl hover:shadow-pink-500 transition-all text-lg"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Tailwind animations for circles */}
      <style>{`
        .animate-spin-slow {
          animation: spin 5s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 5s ease-in-out infinite;
        }
        @keyframes spin {
          0%, 100% { transform: scale(2); opacity: 0.2; }
          50% { transform: scale(1.3); opacity: 0.4; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(2); opacity: 0.2; }
          50% { transform: scale(1.3); opacity: 0.4; }
        }
      `}</style>
    </AnimatedSection>
  );
}


export default ContactSection