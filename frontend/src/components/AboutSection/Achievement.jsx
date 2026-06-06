import { motion } from "framer-motion";
import { Card, Badge } from "../Common";

const Achievement = () => {
  const achievements = [
    { title: "Certified MERN Developer", description: "Completed full-stack development certification with distinction.", metric: "MERN" },
    { title: "5+ Completed Projects", description: "Successfully delivered and deployed multiple production-ready applications.", metric: "5+" },
    { title: "500+ GitHub Commits", description: "Active open-source contributor with consistent development activity.", metric: "500+" },
  ];

  return (
    <section className="py-20 sm:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">
            Milestones
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
            Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {achievements.map((a, idx) => (
            <Card
              key={idx}
              hoverable
              gradient
              className="rounded-xl text-center py-6 sm:py-8"
            >
              <div className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
                {a.metric}
              </div>
              <h3 className="font-display font-semibold text-sm sm:text-base text-text-primary mb-2">
                {a.title}
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                {a.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
