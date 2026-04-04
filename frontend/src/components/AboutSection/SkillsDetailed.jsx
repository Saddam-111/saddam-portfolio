import AnimatedSection from "../Common/AnimatedSection";
import TerminalCard from "../Common/TerminalCard";

const SkillsDetailed = () => {
  const skills = [
    { category: "Frontend", items: ["React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"] },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
    { category: "Database", items: ["MongoDB", "SQL"] },
    { category: "Tools", items: ["Git", "VS Code", "Postman"] }
  ];

  return (
    <AnimatedSection>
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-mono text-[#33ff00] uppercase tracking-wider" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
              {"//"} SKILLS
            </h2>
            <div className="text-[#1f521f] border-b border-[#1f521f] w-full mt-2"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((s, idx) => (
              <TerminalCard key={idx} title={`${s.category.toLowerCase()}.sh`} glowOnHover>
                <h3 className="font-mono text-[#ffb000] text-sm uppercase mb-3">{"//"} {s.category}</h3>
                <ul className="font-mono text-sm text-[#999999] space-y-1">
                  {s.items.map((item, i) => (
                    <li key={i}>
                      <span className="text-[#33ff00]">→</span> {item}
                    </li>
                  ))}
                </ul>
              </TerminalCard>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default SkillsDetailed;
