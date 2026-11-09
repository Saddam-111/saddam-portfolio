import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";
import { Badge, Button } from "../Common";

const ProjectsSection = () => {
  const { projects, fetchProjects, loading } = useContext(AdminContext);
  const featured = projects.slice(0, 3);

  useEffect(() => {
    if (!projects.length) fetchProjects();
  }, [fetchProjects, projects.length]);

  return (
    <section className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-secondary mb-2">Selected Work</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary tracking-tight">Featured projects</h2>
          </div>
          <Link to="/projects"><Button variant="ghost">View all projects →</Button></Link>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => <div key={i} className="h-72 rounded-3xl glass-card animate-pulse" />)}
          </div>
        ) : featured.length === 0 ? (
          <div className="glass-card rounded-3xl p-10 text-center text-text-secondary">Projects will appear here once added from the admin panel.</div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {featured.map((project, index) => (
              <motion.article key={project._id || index} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="group glass-card rounded-3xl overflow-hidden hover:border-primary/25 transition-all">
                <div className="relative h-48 overflow-hidden bg-background/50">
                  {project.thumbnail?.url ? (
                    <img src={project.thumbnail.url} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-mono text-xs text-text-secondary/70">[ preview unavailable ]</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/10 to-transparent" />
                  <div className="absolute top-3 left-3"><Badge variant="default" size="sm">{project.category || "Project"}</Badge></div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-text-primary">{project.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-2">{project.description || "A modern web application."}</p>
                  {project.techStack?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech, i) => (
                        <span key={i} className="font-mono text-[10px] uppercase tracking-wider text-text-secondary/90 border border-border bg-white/[0.02] px-2 py-1 rounded-lg">{tech}</span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
