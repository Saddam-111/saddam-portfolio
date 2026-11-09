import { motion } from "framer-motion";

const buttonVariants = {
  primary:
    "bg-gradient-to-r from-primary to-accent text-white shadow-[0_10px_30px_-12px_rgba(139,92,246,0.55)] hover:shadow-[0_18px_40px_-14px_rgba(34,211,238,0.45)] hover:brightness-110",
  secondary:
    "bg-card text-text-primary border border-border hover:border-primary/35 hover:bg-surface shadow-[0_10px_30px_-18px_rgba(0,0,0,0.6)]",
  outline:
    "border border-border bg-surface/30 text-text-primary hover:border-primary/40 hover:bg-primary/10 hover:text-white",
  ghost: "text-text-secondary hover:text-text-primary hover:bg-white/5",
  gradient:
    "bg-gradient-to-r from-primary via-[#7C6CF6] to-accent text-white hover:shadow-[0_18px_40px_-14px_rgba(139,92,246,0.5)] hover:brightness-110",
};

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
  type = "button",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -1 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled || isLoading}
      type={type}
      className={`
        inline-flex items-center justify-center gap-2 font-medium
        rounded-lg transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
        ${buttonVariants[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </>
      )}
    </motion.button>
  );
};

export default Button;
