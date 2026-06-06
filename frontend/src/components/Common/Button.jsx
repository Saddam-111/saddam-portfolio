import { motion } from "framer-motion";

const buttonVariants = {
  primary: "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25 hover:shadow-primary/40",
  secondary: "bg-secondary text-white hover:bg-secondary-light shadow-lg shadow-secondary/25 hover:shadow-secondary/40",
  outline: "border-2 border-primary text-primary hover:bg-primary/5",
  ghost: "text-text-secondary hover:text-primary hover:bg-primary/5",
  gradient: "bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl hover:shadow-primary/30",
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
