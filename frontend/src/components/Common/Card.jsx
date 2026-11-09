import { motion } from "framer-motion";

const Card = ({
  children,
  title,
  subtitle,
  className = "",
  onClick,
  hoverable = false,
  bordered = true,
  padding = "md",
  gradient = false,
  icon,
  footer,
}) => {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={hoverable ? { y: -4, transition: { duration: 0.2 } } : {}}
      onClick={onClick}
      className={`
        relative rounded-2xl overflow-hidden
        ${bordered ? "border border-border" : ""}
        ${gradient ? "bg-gradient-to-br from-primary/12 via-card to-accent/10" : "glass-card"}
        ${hoverable ? "cursor-pointer shadow-[0_20px_50px_-28px_rgba(0,0,0,0.7)] hover:shadow-[0_28px_60px_-24px_rgba(139,92,246,0.22)] hover:border-primary/25 transition-all duration-300" : "shadow-[0_18px_45px_-30px_rgba(0,0,0,0.65)]"}
        ${className}
      `}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
      )}

      <div className={`relative ${paddingClasses[padding]}`}>
        {(title || icon) && (
          <div className="flex items-start gap-3 mb-3">
            {icon && (
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/15 border border-border flex items-center justify-center text-primary">
                {icon}
              </div>
            )}
            {title && (
              <div>
                <h3 className="font-display font-semibold text-lg text-text-primary">
                  {title}
                </h3>
                {subtitle && (
                  <p className="text-sm text-text-secondary mt-0.5">{subtitle}</p>
                )}
              </div>
            )}
          </div>
        )}
        {children}
      </div>

      {footer && (
        <div className={`relative border-t border-border ${paddingClasses.sm}`}>
          {footer}
        </div>
      )}
    </motion.div>
  );
};

export default Card;
