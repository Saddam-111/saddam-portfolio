import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaLayerGroup } from "react-icons/fa";
import { SectionHeader, Button, Card } from "../Common";

const items = [
  { title: "Frontend Systems", desc: "React, TypeScript, Tailwind, Framer Motion, accessible UI architecture, and polished interaction design.", icon: <FaCode /> },
  { title: "Backend Engineering", desc: "Node.js, Express, REST APIs, authentication flows, validation, and maintainable service patterns.", icon: <FaServer /> },
  { title: "Product Delivery", desc: "MongoDB modeling, performance-minded implementation, deployment readiness, and end-to-end ownership.", icon: <FaLayerGroup /> },
];

const AboutSection = () => (
  <section className="py-20 sm:py-24 relative">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="Profile"
        title="Engineering elegant products across the full stack"
        subtitle="I combine clean architecture with premium interface design to build web experiences that feel fast, intentional, and reliable."
        align="center"
      />

      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 lg:gap-8 items-stretch">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="glass-card rounded-3xl p-6 sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-secondary mb-3">About Saddam</p>
          <p className="text-text-secondary leading-relaxed">
            As a MERN stack developer, I focus on transforming ideas into scalable applications with strong UX fundamentals. My workflow balances performance, maintainability, and visual clarity so every product feels production-ready.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Clean Architecture", "Performance", "Responsive UI", "API Design"].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full border border-border bg-white/[0.02] text-xs text-text-secondary">{t}</span>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/about"><Button variant="outline">More about me</Button></Link>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className={i === 2 ? "sm:col-span-2" : ""}>
              <Card hoverable className="h-full" icon={item.icon} title={item.title}>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
