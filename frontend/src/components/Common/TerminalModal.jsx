import { motion } from "framer-motion";
import TerminalButton from "./TerminalButton";
import TerminalBadge from "./TerminalBadge";

const TerminalModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-[#0a0a0a] border border-[#1f521f] rounded-none max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Terminal Header */}
        <div className="border-b border-[#1f521f] p-4 flex justify-between items-center">
          <div className="flex gap-2">
            <span className="w-3 h-3 bg-[#ff3333] rounded-full"></span>
            <span className="w-3 h-3 bg-[#ffb000] rounded-full"></span>
            <span className="w-3 h-3 bg-[#33ff00] rounded-full"></span>
          </div>
          <span className="text-[#33ff00] font-mono text-sm">
            project_details.sh
          </span>
          <button
            onClick={onClose}
            className="text-[#33ff00] hover:text-[#ffb000] font-mono text-xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl font-mono text-[#33ff00] mb-4 uppercase tracking-wider">
            {">"} {project.title}
          </h2>

          {/* Description */}
          <div className="mb-6">
            <span className="text-[#ffb000] font-mono text-sm">$ cat description.txt</span>
            <p className="text-gray-300 font-mono mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <span className="text-[#ffb000] font-mono text-sm">$ ls tech-stack/</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techStack?.map((tech, idx) => (
                <TerminalBadge key={idx} variant="default">
                  {tech}
                </TerminalBadge>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mb-4">
            <span className="text-[#ffb000] font-mono text-sm">$ cat links.txt</span>
            <div className="flex gap-4 mt-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#33ff00] hover:text-[#ffb000] font-mono text-sm underline"
                >
                  [ GitHub Repository ]
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#33ff00] hover:text-[#ffb000] font-mono text-sm underline"
                >
                  [ Live Demo ]
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#1f521f] p-4">
          <span className="text-[#33ff00] font-mono text-sm">
            user@portfolio:~/projects$ _
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TerminalModal;
