import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import AnimatedSection from "../Common/AnimatedSection";
import { TerminalCard, TerminalFilter, TerminalModal, TerminalText } from "../Common/TerminalComponents";
import { motion } from "framer-motion";

const FeaturedProjects = () => {
  const { projects, fetchProjects, loading } = useContext(AdminContext);
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!projects || projects.length === 0) {
      fetchProjects();
    }
  }, [projects, fetchProjects]);

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  if (loading) {
    return (
      <section className="py-20 bg-[#0a0a0a] text-center">
        <div className="max-w-6xl mx-auto px-4">
          <TerminalCard title="loading_projects.sh">
            <TerminalText text="Fetching repository data..." />
          </TerminalCard>
        </div>
      </section>
    );
  }

  return (
    <AnimatedSection>
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono text-[#33ff00] uppercase tracking-wider mb-2">
              <TerminalText text="> FEATURED_PROJECTS" speed={40} />
            </h2>
            <div className="text-[#1f521f] border-b border-[#1f521f] w-full"></div>
          </div>

          {/* Filters */}
          <TerminalFilter 
            categories={categories} 
            onFilter={setFilter} 
            activeFilter={filter}
          />

          {/* Desktop Grid - shows on lg and above */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-3 sm:gap-4">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <TerminalCard
                  title={project.category || "PROJECT"}
                  glowOnHover
                  onClick={() => setSelectedProject(project)}
                >
                  {project.image && (
                    <div className="mb-2 sm:mb-3 border border-[#1f521f] p-1">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-32 sm:h-40 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  )}
                  <h3 className="text-sm sm:text-lg font-mono text-[#33ff00] mb-1 sm:mb-2 uppercase">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 font-mono text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
                    {project.description
                      ? project.description.split(" ").slice(0, 20).join(" ") +
                        (project.description.split(" ").length > 20 ? "..." : "")
                      : ""}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
                    {project.techStack?.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="font-mono text-xs text-[#ffb000] border border-[#ffb000] px-1.5 sm:px-2 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack?.length > 3 && (
                      <span className="font-mono text-xs text-gray-500">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </TerminalCard>
              </motion.div>
            ))}
          </div>

          {/* Tablet & Mobile Carousel - Terminal Style */}
          <div className="lg:hidden mt-6 sm:mt-8">
            <div className="text-[#33ff00] font-mono text-xs sm:text-sm mb-3 sm:mb-4">
              user@portfolio:~/projects$ ls -la
            </div>
            <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-3 sm:pb-4 scrollbar-hide px-1">
              {filteredProjects.map((project, idx) => (
                <div key={idx} className="min-w-[200px] sm:min-w-[240px] md:min-w-[280px] flex-shrink-0">
                  <TerminalCard
                    title={project.category || "PROJECT"}
                    glowOnHover
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.image && (
                      <div className="mb-2 sm:mb-3 border border-[#1f521f] p-1">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-28 sm:h-32 md:h-40 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    )}
                    <h3 className="text-sm sm:text-lg font-mono text-[#33ff00] mb-1 sm:mb-2 uppercase">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 font-mono text-xs sm:text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </TerminalCard>
                </div>
              ))}
            </div>
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <span className="text-[#ff3333] font-mono text-lg">
                error: no projects found in this category
              </span>
            </div>
          )}

          {selectedProject && (
            <TerminalModal
              project={selectedProject}
              isOpen={!!selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default FeaturedProjects;
