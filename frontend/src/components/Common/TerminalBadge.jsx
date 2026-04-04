const TerminalBadge = ({ children, variant = "default" }) => {
  const variants = {
    default: "text-[#33ff00] border-[#1f521f]",
    secondary: "text-[#ffb000] border-[#ffb000]",
    muted: "text-gray-400 border-gray-700",
  };

  return (
    <span
      className={`
        font-mono text-xs px-2 py-1 
        border rounded-none
        ${variants[variant]}
      `}
    >
      {children}
    </span>
  );
};

export default TerminalBadge;
