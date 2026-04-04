import { motion } from "framer-motion";

const TerminalCard = ({ 
  children, 
  title, 
  className = "", 
  onClick,
  glowOnHover = false 
}) => {
  return (
    <motion.div
      whileHover={glowOnHover ? { scale: 1.02 } : {}}
      onClick={onClick}
      className={`
        bg-[#0a0a0a] 
        border border-[#1f521f] 
        rounded-none 
        p-4 
        cursor-pointer
        transition-all
        duration-200
        ${glowOnHover ? 'hover:shadow-[0_0_15px_rgba(51,255,0,0.3)]' : ''}
        ${className}
      `}
    >
      {title && (
        <div className="border-b border-[#1f521f] pb-2 mb-3">
          <span className="text-[#33ff00] font-mono text-xs uppercase tracking-wider">
            {">"} {title}
          </span>
        </div>
      )}
      {children}
    </motion.div>
  );
};

export default TerminalCard;
