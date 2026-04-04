import AnimatedSection from "../Common/AnimatedSection";
import TerminalCard from "../Common/TerminalCard";

const FunFacts = () => {
  const facts = [
    { label: "coffee_lover", icon: "☕" },
    { label: "music_enthusiast", icon: "🎵" },
    { label: "gamer", icon: "🎮" },
    { label: "open_source", icon: "💻" }
  ];

  return (
    <AnimatedSection>
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-mono text-[#33ff00] uppercase tracking-wider" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
              {"//"} FUN_FACTS
            </h2>
            <div className="text-[#1f521f] border-b border-[#1f521f] w-full mt-2"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {facts.map((f, idx) => (
              <TerminalCard key={idx} title="fun_fact.sh" glowOnHover className="w-40">
                <div className="text-center">
                  <div className="text-3xl mb-2">{f.icon}</div>
                  <div className="font-mono text-xs text-[#666666]">$ {f.label}</div>
                </div>
              </TerminalCard>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default FunFacts;
