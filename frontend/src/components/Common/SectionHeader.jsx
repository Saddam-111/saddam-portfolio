import { motion } from "framer-motion";

const SectionHeader = ({
  title,
  subtitle,
  label,
  align = "left",
  className = "",
}) => {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`mb-12 ${alignment[align]} ${className}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-secondary mb-3 px-3 py-1 rounded-full border border-primary/20 bg-primary/10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.3 }}
        className={`mt-6 h-px bg-gradient-to-r from-primary via-accent to-transparent rounded-full ${align === "center" ? "mx-auto max-w-xs" : align === "right" ? "ml-auto max-w-xs" : "max-w-xs"}`}
      />
    </div>
  );
};

export default SectionHeader;
