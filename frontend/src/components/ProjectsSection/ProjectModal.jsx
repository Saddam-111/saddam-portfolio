import { motion } from "framer-motion";
import { Badge, Button } from "../Common";

const ProjectModal = ({ project, isOpen, onClose }) => {
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
      className="fixed inset-0 bg-background/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      role="dialog"
      aria-labelledby="project-title"
      aria-modal="true"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-surface border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {project.thumbnail?.url && (
          <div className="relative h-56 overflow-hidden rounded-t-2xl">
            <img src={project.thumbnail.url} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        )}

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              {project.category && (
                <Badge variant="primary" size="sm" className="mb-2">
                  {project.category}
                </Badge>
              )}
              <h2 id="project-title" className="font-display font-bold text-2xl text-text-primary">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-text-secondary hover:text-text-primary text-xl leading-none p-1"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          <p className="text-text-secondary leading-relaxed mb-6">
            {project.description || "No description available."}
          </p>

          {project.techStack && project.techStack.length > 0 && (
            <div className="mb-6">
              <h3 className="font-display font-medium text-text-primary mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <Badge key={i} variant="default" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Button variant="outline" size="sm">
                  GitHub
                </Button>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo`}
              >
                <Button variant="primary" size="sm">
                  Live Demo
                </Button>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;