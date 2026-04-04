import { motion } from "framer-motion";

const TerminalInput = ({ 
  type = "text",
  placeholder,
  value,
  onChange,
  label,
  required = false,
  rows = 4,
  className = ""
}) => {
  const isTextarea = type === "textarea";

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block font-mono text-sm text-[#ffb000] mb-2">
          <span className="text-[#33ff00]">$</span> {label}{required && <span className="text-[#ff3333]">*</span>}
        </label>
      )}
      <div className="relative">
        <span className="absolute left-3 top-3 font-mono text-[#33ff00] text-sm">
          {">"}
        </span>
        {isTextarea ? (
          <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            className="w-full bg-[#0a0a0a] border border-[#1f521f] px-4 py-2 pl-8 font-mono text-sm text-[#cccccc] placeholder-[#666666] focus:outline-none focus:border-[#33ff00] focus:shadow-[0_0_10px_rgba(51,255,0,0.3)] resize-none"
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full bg-[#0a0a0a] border border-[#1f521f] px-4 py-2 pl-8 font-mono text-sm text-[#cccccc] placeholder-[#666666] focus:outline-none focus:border-[#33ff00] focus:shadow-[0_0_10px_rgba(51,255,0,0.3)]"
          />
        )}
      </div>
    </div>
  );
};

export default TerminalInput;
