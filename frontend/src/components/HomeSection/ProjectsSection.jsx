import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";
import { Card, Badge, Button } from "../Common";

const ProjectsSection = () => {
  const { projects, fetchProjects, loading } = useContext(AdminContext);
  const featuredProjects = projects.slice(0, 3);

  useEffect(() => {
    if (!projects.length) fetchProjects();
  }, []);

  return (
    <section className="py-20 sm:py-28 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">Work</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary tracking-tight">
              Featured Projects
            </h2>
          </div>
          <Link to="/projects">
            <Button variant="ghost" size="sm">View all →</Button>
          </Link>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse bg-surface-muted rounded-xl p-4 h-72 border border-border" />
            ))}
          </div>
        ) : featuredProjects.length === 0 ? (
          <p className="text-text-secondary text-center py-12">
            No projects yet. Check back soon.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card
                key={project._id || index}
                hoverable
                gradient
                padding="none"
                className="overflow-hidden rounded-xl"
              >
                {project.thumbnail?.url ? (
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={project.thumbnail.url}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                  </div>
                ) : (
                  <div className="h-44 bg-surface-muted flex items-center justify-center">
                    <span className="font-mono text-sm text-text-secondary">
                      [ No Preview ]
                    </span>
                  </div>
                )}

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="default" size="sm">
                      {project.category || "Project"}
                    </Badge>
                  </div>

                  <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-4">
                    {project.description || "A modern web application."}
                  </p>

                  {project.techStack && (
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="font-mono text-[11px] text-text-secondary bg-surface-muted border border-border px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
