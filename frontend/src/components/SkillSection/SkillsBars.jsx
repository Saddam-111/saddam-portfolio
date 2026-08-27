import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { SectionHeader, Badge, Card } from "../Common";

const categoryIcons = {
  Frontend: "⚛️",
  Backend: "🔧",
  Database: "🗄️",
  DevOps: "🚀",
  Tools: "🛠️",
  default: "💻",
};

const SkillCard = ({ skill, index }) => {
  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "bg-accent/20 text-accent";
      case "intermediate":
        return "bg-primary/20 text-primary";
      case "advanced":
      case "advance":
        return "bg-success/20 text-success";
      default:
        return "bg-border/20 text-text-secondary";
    }
  };

  return (
    <div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Card hoverable className="h-full">
        <div className="flex items-center gap-3 mb-3">
          {skill.icon?.url && (
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center p-2">
              <img src={skill.icon.url} alt={skill.name} className="w-full h-full object-contain" />
            </div>
          )}
          <div className="flex-1">
            <h3 className="font-display font-semibold text-text-primary group-hover:text-primary transition-colors">
              {skill.name}
            </h3>
          </div>
          <Badge variant="default" size="sm" className={getLevelColor(skill.level)}>
            {skill.level}
          </Badge>
        </div>
      </Card>
    </div>
  );
};

const SkillsBars = () => {
  const { skills, fetchSkills, loading } = useContext(AdminContext);

  useEffect(() => {
    if (!skills || skills.length === 0) {
      fetchSkills();
    }
  }, [skills, fetchSkills]);

  const categories = [...new Set(skills.map((s) => s.category || "General"))];

  const skillsByCategory = categories.reduce((acc, cat) => {
    acc[cat] = skills.filter((s) => (s.category || "General") === cat);
    return acc;
  }, {});

  if (loading) {
    return (
      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Skills" subtitle="Loading skills..." align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse bg-card rounded-xl h-32 border border-border" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Skills"
          title="Technical Expertise"
          subtitle="Technologies I specialize in to build exceptional digital experiences."
          align="center"
        />

        {skills.length === 0 ? (
          <p className="text-text-secondary text-center py-12">No skills data available yet.</p>
        ) : (
          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{categoryIcons[category] || categoryIcons.default}</span>
                  <h3 className="font-display font-semibold text-xl text-text-primary">{category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skillsByCategory[category].map((skill, idx) => (
                    <SkillCard key={skill._id || idx} skill={skill} index={idx} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <h3 className="font-display font-semibold text-2xl text-text-primary mb-4">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["MERN Stack", "TypeScript", "Performance", "Clean Code", "UX Design"].map((item) => (
              <Badge key={item} variant="primary" size="lg">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsBars;