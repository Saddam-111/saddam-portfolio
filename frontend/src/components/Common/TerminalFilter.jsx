import { motion } from "framer-motion";

const TerminalFilter = ({ 
  categories, 
  onFilter, 
  activeFilter = "All" 
}) => {
  return (
    <div className="flex flex-wrap gap-2 mt-6 mb-6">
      <span className="text-[#33ff00] font-mono text-sm mr-2">
        user@portfolio:~/projects$ filter --category=
      </span>
      {categories.map((cat, idx) => (
        <motion.button
          key={idx}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilter(cat)}
          className={`
            font-mono text-sm px-3 py-1 rounded-none border transition-all duration-200
            ${activeFilter === cat
              ? "bg-[#33ff00] text-[#0a0a0a] border-[#33ff00]"
              : "bg-transparent text-[#33ff00] border-[#1f521f] hover:border-[#33ff00] hover:bg-[#1f521f]/30"
            }
          `}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
};

export default TerminalFilter;
