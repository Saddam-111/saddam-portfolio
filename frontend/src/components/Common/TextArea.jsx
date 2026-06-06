import { forwardRef } from "react";
import { motion } from "framer-motion";

const TextArea = forwardRef(
  ({ label, error, className = "", rows = 4, ...props }, ref) => {
    return (
      <div className={`w-full ${className}`}>
        {label && (
          <label className="block font-mono text-xs uppercase tracking-wider text-text-secondary mb-1.5">
            {label}
          </label>
        )}
<textarea
           ref={ref}
           rows={rows}
           className={`
             w-full px-4 py-3 rounded-lg
             bg-card border border-border
             text-text-primary placeholder:text-text-secondary/50
             font-sans text-sm resize-y
             transition-all duration-200
             hover:border-text-secondary/40
             focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
             ${error ? "border-error focus:border-error focus:ring-error/20" : ""}
           `}
           {...props}
         />
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1.5 text-xs text-error font-mono"
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export { TextArea };
export default TextArea;
