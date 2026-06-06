import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AdminContext } from "../../context/AdminContext";
import { SectionHeader, Badge, Button } from "../Common";
import ProjectModal from "./ProjectModal";

const FeaturedProjects = () => {
  const { projects, fetchProjects, loading } = useContext(AdminContext);
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!projects || projects.length === 0) fetchProjects();
  }, [projects, fetchProjects]);

  const categories = ["All", ...new Set(projects.map((p) => p.category).filter(Boolean))];
  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  if (loading) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Projects" subtitle="Loading..." align="center" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse bg-card rounded-2xl h-80 border border-border" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Projects"
          title="All Projects"
          subtitle="A selection of my recent work and experiments."
          align="left"
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-card border border-border text-text-secondary hover:text-text-primary hover:border-text-secondary/40"
              }`}
              aria-pressed={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <p className="text-text-secondary text-center py-12">No projects in this category yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project._id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  className="bg-card border border-border rounded-2xl overflow-hidden cursor-pointer group hover:shadow-xl hover:shadow-primary/5 transition-all h-full flex flex-col"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedProject(project)}
                >
                  {project.thumbnail?.url ? (
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={project.thumbnail.url}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                    </div>
                  ) : (
                    <div className="h-44 bg-card flex items-center justify-center">
                      <span className="font-mono text-sm text-text-secondary">[ No Preview ]</span>
                    </div>
                  )}

                  <div className="p-5 flex-1 flex flex-col">
                    {project.category && (
                      <Badge variant="default" size="sm" className="self-start mb-3">
                        {project.category}
                      </Badge>
                    )}
                    <h3 className="font-display font-semibold text-lg text-text-primary mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                      {project.description || "A modern web application built with the MERN stack."}
                    </p>
                    {project.techStack && project.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="font-mono text-[11px] text-text-secondary bg-card/80 border border-border px-2 py-0.5 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="font-mono text-[11px] text-text-secondary">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {selectedProject && (
          <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;