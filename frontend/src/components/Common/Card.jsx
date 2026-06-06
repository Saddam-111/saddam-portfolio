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
        relative rounded-xl overflow-hidden
        ${bordered ? "border border-border" : ""}
        ${gradient ? "bg-gradient-to-br from-primary/10 to-accent/10" : "bg-card"}
        ${hoverable ? "cursor-pointer shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-shadow" : "shadow-sm"}
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
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
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
