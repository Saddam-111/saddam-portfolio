import { motion } from "framer-motion";
import AnimatedSection from "../Common/AnimatedSection";
import TerminalCard from "../Common/TerminalCard";
import TerminalBadge from "../Common/TerminalBadge";

const TimeLine = () => {
  const events = [
    {
      title: "Full Stack Intern — VEDSEEM INFOTECH",
      date: "Jul 2025 – Oct 2025",
      description: "Worked on MERN stack web applications, implementing responsive UI and backend APIs."
    },
    {
      title: "Freelance Developer",
      date: "2024 – 2025",
      description: "Developed multiple web applications, learning full stack project lifecycle and client management."
    }
  ];

  return (
    <AnimatedSection>
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-mono text-[#33ff00] uppercase tracking-wider" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
              {"//"} CAREER_TIMELINE
            </h2>
            <div className="text-[#1f521f] border-b border-[#1f521f] w-full mt-2"></div>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-[#1f521f] ml-4">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="mb-8 ml-6"
              >
                <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-[#33ff00]"></span>
                <TerminalCard title={`career_${idx + 1}.sh`} glowOnHover>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                    <h3 className="font-mono text-[#33ff00]">{event.title}</h3>
                    <TerminalBadge variant="secondary">{event.date}</TerminalBadge>
                  </div>
                  <p className="font-mono text-sm text-[#999999]">{event.description}</p>
                </TerminalCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default TimeLine;
