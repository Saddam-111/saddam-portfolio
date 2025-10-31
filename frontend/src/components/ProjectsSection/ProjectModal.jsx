import { motion } from "framer-motion";

const ProjectModal =({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 mx-2">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-900 rounded-xl max-w-3xl w-full p-8 relative shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-900 dark:text-white text-2xl font-bold"
        >
          ×
        </button>
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-3 mb-4">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-900 dark:text-gray-200 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
            >
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}


export default ProjectModal