import { motion } from "framer-motion";
import { Card, Badge } from "../Common";

const achievements = [
  { title: "Projects Completed", value: "5+" },
  { title: "Companies Worked", value: "1" },
  { title: "Lines of Code", value: "10k+" },
  { title: "AI Projects", value: "1" },
  { title: "Full Stack", value: "✓" },
];

const AchievementsGrid = () => {
  return (
    <section className="py-20 sm:py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">Stats</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
            Key Achievements
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Card hoverable gradient className="rounded-xl text-center py-6">
                <span className="block font-display font-bold text-2xl sm:text-3xl text-accent mb-1">
                  {ach.value}
                </span>
                <span className="text-xs sm:text-sm text-text-secondary font-mono uppercase tracking-wider">
                  {ach.title}
                </span>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsGrid;
