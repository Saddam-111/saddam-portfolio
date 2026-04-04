import React from "react";
import { motion } from "framer-motion";
import TerminalText from "../Common/TerminalText";

const ExperienceHero = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden bg-[#0a0a0a] px-6">
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(transparent_50%,rgba(51,255,0,0.1)_50%)] bg-[length:100%_4px]"></div>
      </div>

      {/* Floating Icon - Terminal style */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [1, 1.1, 1], opacity: 1, y: [0, -10, 0] }}
        transition={{
          duration: 3,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mb-6 font-mono text-5xl md:text-6xl text-[#1f521f]"
      >
        [EXP]
      </motion.div>

      {/* Terminal Frame */}
      <div className="border border-[#1f521f] max-w-3xl w-full">
        <div className="border-b border-[#1f521f] p-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 bg-[#ff3333] rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-[#ffb000] rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-[#33ff00] rounded-full"></span>
          </div>
          <span className="text-[#33ff00] font-mono text-xs ml-2">experience.sh</span>
        </div>

        <div className="p-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-mono text-[#33ff00] uppercase tracking-wider"
            style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}
          >
            <TerminalText text="> MY_EXPERIENCE" speed={60} />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-mono text-[#999999] mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            A journey through my professional milestones, learning experiences and impactful projects.
          </motion.p>

          {/* ASCII Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mx-auto mt-6 text-[#1f521f] font-mono text-xs"
          >
            {"══════════════════════════════════"}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#1f521f] p-2 text-right">
          <span className="font-mono text-xs text-[#33ff00]">user@experience:~$ _</span>
        </div>
      </div>
    </section>
  );
};

export default ExperienceHero;
