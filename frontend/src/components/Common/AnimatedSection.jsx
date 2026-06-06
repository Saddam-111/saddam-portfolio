import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const AnimatedSection = ({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
}) => {
  const variants = {
    "fade-up": {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: "easeOut" },
      },
    },
    "fade-in": {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.6, delay, ease: "easeOut" },
      },
    },
    "scale-in": {
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay, ease: "easeOut" },
      },
    },
  };

  return (
    <motion.section
      variants={variants[variant] || variants["fade-up"]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const StaggerContainer = ({ children, className = "", delay = 0 }) => (
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    className={className}
  >
    {children}
  </motion.div>
);

const StaggerItem = ({ children, className = "" }) => (
  <motion.div variants={item} className={className}>
    {children}
  </motion.div>
);

export { AnimatedSection, StaggerContainer, StaggerItem };
export default AnimatedSection;
