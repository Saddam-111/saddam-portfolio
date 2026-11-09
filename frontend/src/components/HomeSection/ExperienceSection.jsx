import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge, Button } from "../Common";

const experiences = [
  {
    title: "Full Stack Intern",
    company: "VEDSEEM INFOTECH PVT. LTD.",
    period: "Jul 2025 – Oct 2025",
    description: "Built scalable MERN applications, implemented responsive UI components and REST APIs, and improved data flow and product quality across features.",
  },
];

const ExperienceSection = () => (
  <section className="py-20 sm:py-24 relative">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-secondary mb-2">Career</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary tracking-tight">Experience snapshot</h2>
      </div>
      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <motion.article key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-3xl p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div>
                <h3 className="font-display font-semibold text-xl text-text-primary">{exp.title}</h3>
                <p className="mt-1 text-sm text-accent font-mono">@ {exp.company}</p>
              </div>
              <Badge variant="primary" size="sm" className="w-fit shrink-0">{exp.period}</Badge>
            </div>
            <p className="mt-4 text-text-secondary text-sm leading-relaxed">{exp.description}</p>
          </motion.article>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/experience"><Button variant="outline">View full experience</Button></Link>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
