import React from "react";
import { motion } from "framer-motion";
import TerminalText from "../Common/TerminalText";

const stats = [
  { label: "10+ Awards", value: "10" },
  { label: "50+ Happy Clients", value: "50" },
  { label: "100+ Reviews", value: "100" },
];

const TestimonialsHero = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden bg-[#0a0a0a] px-6">
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(transparent_50%,rgba(51,255,0,0.1)_50%)] bg-[length:100%_4px]"></div>
      </div>

      {/* Floating Labels - Terminal style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: [20, -20, 20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut",
            }}
            className="absolute font-mono text-xs text-[#1f521f]"
            style={{
              top: `${20 + index * 25}%`,
              left: `${10 + index * 25}%`,
            }}
          >
            [{item.label}]
          </motion.div>
        ))}
      </div>

      {/* Terminal Frame */}
      <div className="border border-[#1f521f] max-w-4xl w-full">
        <div className="border-b border-[#1f521f] p-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 bg-[#ff3333] rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-[#ffb000] rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-[#33ff00] rounded-full"></span>
          </div>
          <span className="text-[#33ff00] font-mono text-xs ml-2">testimonials.sh</span>
        </div>

        <div className="p-8">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Quote Icon - Terminal style */}
            <div className="text-5xl text-[#1f521f] mb-4 font-mono">
              ""
            </div>

            {/* Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono text-[#33ff00] uppercase tracking-wider" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
              <TerminalText text="> TESTIMONIALS_&_ACHIEVEMENTS" speed={40} />
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-xs sm:text-sm md:text-base text-[#999999] mt-4 max-w-lg sm:max-w-2xl mx-auto leading-relaxed px-4"
            >
              Words of appreciation and recognition from my clients and colleagues, reflecting the dedication, quality and innovation I bring to every project.
            </motion.p>

            {/* ASCII Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mx-auto mt-6 text-[#1f521f] font-mono text-xs"
            >
              {"═══════════════════════════════════"}
            </motion.div>

            {/* Stats - Terminal style grid */}
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-4">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.2 }}
                  className="border border-[#1f521f] p-2 sm:p-4"
                >
                  <span className="block text-xl sm:text-2xl font-mono text-[#ffb000]">{item.value}+</span>
                  <span className="font-mono text-xs text-[#666666]">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#1f521f] p-2 text-right">
          <span className="font-mono text-xs text-[#33ff00]">user@testimonials:~$ _</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHero;
