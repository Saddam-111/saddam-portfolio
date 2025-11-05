import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";
import ProjectModal from "../ProjectsSection/ProjectModal";

const ProjectsSection = () => {
  const { projects, fetchProjects, loading } = useContext(AdminContext);
  const [selectedProject, setSelectedProject] = useState(null);

  // ✅ Fetch projects only once
  useEffect(() => {
    if (!projects.length) fetchProjects();
  }, []);

  // ✅ Filter only top 3 featured projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-20 text-center bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Soft glowing gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-pink-200/10 via-transparent to-blue-200/10 dark:from-pink-500/10 dark:to-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white relative z-10">
        Featured Projects
      </h2>

      {loading ? (
        <p className="text-gray-600 dark:text-gray-400">Loading projects...</p>
      ) : featuredProjects.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No projects found.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 px-6 relative z-10">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project._id || index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-100 dark:bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col justify-between cursor-pointer hover:shadow-pink-500/20 hover:shadow-lg"
              onClick={() => setSelectedProject(project)}
            >
              {/* Thumbnail */}
              {project.thumbnail?.url ? (
                <motion.img
                  src={project.thumbnail.url}
                  alt={project.title}
                  className="h-44 w-full object-cover rounded-xl mb-4"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              ) : (
                <div className="h-44 bg-gradient-to-br from-pink-400 to-blue-400 rounded-xl mb-4"></div>
              )}

              {/* Info */}
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 line-clamp-3">
                  {project.description ||
                    "A modern web app built with the MERN stack."}
                </p>
              </div>

              {/* Tags */}
              {project.techStack && (
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-xs text-gray-900 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* View All Link */}
      <Link
        to="/projects"
        className="block mt-10 text-pink-600 hover:underline font-medium relative z-10"
      >
        View All Projects →
      </Link>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
