import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";
import ProjectModal from "../ProjectsSection/ProjectModal";
import TerminalCard from "../Common/TerminalCard";

const ProjectsSection = () => {
  const { projects, fetchProjects, loading } = useContext(AdminContext);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!projects.length) fetchProjects();
  }, []);

  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <h2 className="text-3xl font-mono text-[#33ff00] uppercase tracking-wider mb-2" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
          {"//"} FEATURED_PROJECTS
        </h2>
        <div className="text-[#1f521f] border-b border-[#1f521f] w-full"></div>
      </div>

      {loading ? (
        <div className="max-w-6xl mx-auto px-4">
          <TerminalCard title="loading.sh">
            <span className="text-[#ffb000] font-mono">$ fetching projects...</span>
          </TerminalCard>
        </div>
      ) : featuredProjects.length === 0 ? (
        <div className="max-w-6xl mx-auto px-4">
          <span className="text-[#ff3333] font-mono">error: no projects found</span>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project._id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TerminalCard
                  title={project.category || "PROJECT"}
                  glowOnHover
                  onClick={() => setSelectedProject(project)}
                >
                  {project.thumbnail?.url ? (
                    <div className="mb-3 border border-[#1f521f] p-1">
                      <img
                        src={project.thumbnail.url}
                        alt={project.title}
                        className="w-full h-40 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ) : (
                    <div className="mb-3 border border-[#1f521f] p-1 h-40 bg-[#1f521f]/30 flex items-center justify-center">
                      <span className="text-[#33ff00] font-mono text-sm">[ NO_PREVIEW ]</span>
                    </div>
                  )}

                  <h3 className="text-lg font-mono text-[#33ff00] mb-2 uppercase">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 font-mono text-sm line-clamp-3">
                    {project.description || "A modern web app built with the MERN stack."}
                  </p>

                  {project.techStack && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="font-mono text-xs text-[#ffb000] border border-[#ffb000] px-2 py-0.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </TerminalCard>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* View All Link */}
      <div className="max-w-6xl mx-auto px-4 mt-10">
        <Link
          to="/projects"
          className="text-[#33ff00] font-mono hover:text-[#ffb000] transition-colors"
        >
          [ VIEW_ALL_PROJECTS ]
        </Link>
      </div>

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
