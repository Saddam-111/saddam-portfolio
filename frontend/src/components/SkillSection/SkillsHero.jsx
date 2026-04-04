import React from "react";
import { motion } from "framer-motion";
import TerminalText from "../Common/TerminalText";

const floatingIcons = [
  { label: "[React]", delay: 0 },
  { label: "[Node.js]", delay: 0.2 },
  { label: "[MongoDB]", delay: 0.4 },
  { label: "[Express]", delay: 0.6 },
  { label: "[JavaScript]", delay: 0.8 },
  { label: "[TypeScript]", delay: 1.0 },
  { label: "[Git]", delay: 1.2 },
];

const SkillsHero = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center overflow-hidden bg-[#0a0a0a] px-6">
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(transparent_50%,rgba(51,255,0,0.1)_50%)] bg-[length:100%_4px]"></div>
      </div>

      {/* Floating Skill Icons Animation - Terminal style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            animate={{
              y: [30, -30, 30],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
            className="absolute font-mono text-xs md:text-sm text-[#1f521f]"
            style={{
              top: `${Math.random() * 70 + 15}%`,
              left: `${Math.random() * 70 + 15}%`,
            }}
          >
            {item.label}
          </motion.div>
        ))}
      </div>

      {/* Terminal Frame */}
      <div className="border border-[#1f521f] max-w-3xl w-full">
        <div className="border-b border-[#1f521f] p-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 bg-[#ff3333] rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-[#ffb000] rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-[#33ff00] rounded-full"></span>
          </div>
          <span className="text-[#33ff00] font-mono text-xs ml-2">skills.sh</span>
        </div>

        <div className="p-8">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl font-mono text-[#33ff00] uppercase tracking-wider" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
              <TerminalText text="> MY_SKILLS" speed={60} />
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-[#999999] mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            >
              A showcase of my technical stack, tools, and technologies I use to craft performant, scalable, and modern web applications.
            </motion.p>

            {/* ASCII Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mx-auto mt-6 text-[#1f521f] font-mono text-xs"
            >
              {"══════════════════════════════════"}
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#1f521f] p-2 text-right">
          <span className="font-mono text-xs text-[#33ff00]">user@skills:~$ _</span>
        </div>
      </div>
    </section>
  );
};

export default SkillsHero;
