import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TerminalText = ({ text, className = "", speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <motion.span 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`font-mono ${className}`}
    >
      {displayedText}
      <span className="text-[#33ff00]">{cursorVisible ? "█" : " "}</span>
    </motion.span>
  );
};

export default TerminalText;
