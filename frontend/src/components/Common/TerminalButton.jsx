import { motion } from "framer-motion";

const TerminalButton = ({ 
  children, 
  onClick, 
  variant = "primary", 
  className = "",
  disabled = false 
}) => {
  const baseStyles = `
    font-mono text-sm px-4 py-2 rounded-none 
    border border-[#1f521f] transition-all duration-200
    uppercase tracking-wider
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-transparent text-[#33ff00] hover:bg-[#33ff00] hover:text-[#0a0a0a]
    `,
    secondary: `
      bg-transparent text-[#ffb000] hover:bg-[#ffb000] hover:text-[#0a0a0a]
    `,
    danger: `
      bg-transparent text-[#ff3333] hover:bg-[#ff3333] hover:text-[#0a0a0a]
    `,
    ghost: `
      bg-transparent text-[#33ff00] border-none hover:bg-[#1f521f]
    `
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      [ {children} ]
    </motion.button>
  );
};

export default TerminalButton;
