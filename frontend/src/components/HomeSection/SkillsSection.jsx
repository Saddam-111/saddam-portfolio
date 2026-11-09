import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionHeader, Button } from "../Common";

const skills = ["React", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS", "Framer Motion", "REST APIs", "Git", "System Design"];

const SkillsSection = () => (
  <section className="py-20 sm:py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.08),transparent_40%)]" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader label="Capabilities" title="A modern stack for scalable delivery" subtitle="Core technologies I use to design, build, and ship robust full-stack experiences." align="center" />
      <div className="glass-card rounded-3xl p-5 sm:p-8">
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <motion.span key={skill} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} whileHover={{ y: -2, scale: 1.02 }} className="px-4 py-2.5 rounded-2xl border border-border bg-background/40 text-sm text-text-secondary hover:text-text-primary hover:border-primary/35 hover:bg-primary/10 transition-all">
              {skill}
            </motion.span>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link to="/skills"><Button variant="secondary">Explore skill details</Button></Link>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
