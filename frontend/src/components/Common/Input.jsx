import { forwardRef } from "react";
import { motion } from "framer-motion";

const Input = forwardRef(
  ({ label, error, className = "", icon, rightElement, ...props }, ref) => {
    return (
      <div className={`w-full ${className}`}>
        {label && (
          <label className="block font-mono text-xs uppercase tracking-wider text-text-secondary mb-1.5">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">
              {icon}
            </span>
          )}
           <input
             ref={ref}
             className={`
               w-full px-4 py-3 rounded-xl
               bg-background/60 border border-border
               text-text-primary placeholder:text-text-secondary/45
               font-sans text-sm
               transition-all duration-200
               hover:border-text-secondary/30
               focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 focus:bg-surface/70
               ${icon ? "pl-10" : ""}
               ${rightElement ? "pr-10" : ""}
               ${error ? "border-error/70 focus:border-error focus:ring-error/15" : ""}
             `}
             {...props}
           />
          {rightElement && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2">
              {rightElement}
            </span>
          )}
        </div>
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

Input.displayName = "Input";

export { Input };
export default Input;
