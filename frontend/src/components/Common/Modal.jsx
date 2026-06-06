import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  size = "md",
  children,
  footer,
  closeOnOverlay = true,
}) => {
  const sizes = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeOnOverlay ? onClose : undefined}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`
              relative z-10 w-full ${sizes[size]}
              bg-surface border border-border rounded-2xl shadow-2xl
              max-h-[90vh] flex flex-col overflow-hidden
            `}
          >
            <div className="flex items-start justify-between p-5 border-b border-border">
              <div>
                <h3 className="font-display font-semibold text-lg text-text-primary">
                  {title}
                </h3>
                {subtitle && (
                  <p className="text-sm text-text-secondary mt-0.5">{subtitle}</p>
                )}
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface-muted transition-colors"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">{children}</div>

            {footer && (
              <div className="p-5 border-t border-border bg-surface-muted/50">
                {footer}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
