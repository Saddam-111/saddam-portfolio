import { motion } from "framer-motion";
import { Card, Badge } from "../Common";

const facts = [
  { label: "Coffee Lover", icon: "☕" },
  { label: "Music Enthusiast", icon: "🎵" },
  { label: "Problem Solver", icon: "🧩" },
  { label: "Open Source", icon: "💻" },
];

const FunFacts = () => {
  return (
    <section className="py-20 sm:py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">
            Beyond Code
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
            Fun Facts
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {facts.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card hoverable gradient className="rounded-xl text-center py-6 sm:py-8">
                <span className="text-3xl mb-3 block">{f.icon}</span>
                <Badge variant="default" size="sm">{f.label}</Badge>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
