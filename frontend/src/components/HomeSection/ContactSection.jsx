import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TerminalCard from "../Common/TerminalCard";
import TerminalButton from "../Common/TerminalButton";

const ContactSection = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setShowCursor(v => !v), 530);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4">
        <TerminalCard title="contact.sh">
          <div className="text-center">
            <motion.h2
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-mono text-[#33ff00] uppercase tracking-wider mb-4"
              style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}
            >
              <span className="text-[#ffb000]">$</span> LET'S_BUILD_SOMETHING_GREAT
            </motion.h2>

            <p className="font-mono text-[#999999] mb-8 max-w-xl mx-auto leading-relaxed">
              Have an idea or project in mind? Let's collaborate and make it happen. 
              Your vision, my expertise—let's create magic.
            </p>

            <Link to="/contact">
              <TerminalButton variant="primary">
                CONTACT_ME
              </TerminalButton>
            </Link>

            <div className="mt-6 font-mono text-xs text-[#666666]">
              user@portfolio:~$ <span className={showCursor ? "text-[#33ff00]" : "opacity-0"}>█</span>
            </div>
          </div>
        </TerminalCard>
      </div>
    </section>
  );
};

export default ContactSection;
