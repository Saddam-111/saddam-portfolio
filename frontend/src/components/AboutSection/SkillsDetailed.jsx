import { Card, Badge } from "../Common";

const skillCategories = [
  { name: "Frontend", items: ["React", "React Router", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "TypeScript"] },
  { name: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Socket.io"] },
  { name: "Database", items: ["MongoDB", "PostgreSQL", "Mongoose"] },
  { name: "Tools & Practices", items: ["Git", "Docker", "VS Code", "Postman", "Figma", "CI/CD"] },
];

const SkillsDetailed = () => {
  return (
    <section className="py-20 sm:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">
            Technical
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {skillCategories.map((cat, idx) => (
            <Card
              key={idx}
              hoverable
              gradient
              className="rounded-xl"
            >
              <h3 className="font-display font-semibold text-base sm:text-lg text-text-primary mb-4">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <Badge key={item} variant="default" size="sm">{item}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsDetailed;
