import { motion } from "framer-motion";
import { Card, Badge, Button } from "../Common";

const TimeLine = () => {
  const events = [
    {
      title: "Full Stack Intern — VEDSEEM INFOTECH",
      date: "Jul 2025 – Oct 2025",
      description:
        "Built scalable MERN stack web applications. Implemented responsive UIs using React, backend REST APIs with Express, and optimized data flow with MongoDB.",
    },
    {
      title: "Freelance Developer",
      date: "2024 – 2025",
      description:
        "Delivered multiple client web applications across the full project lifecycle. Focused on clean code, modern UI, and responsive design.",
    },
  ];

return (
    <section className="py-20 sm:py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">
            Career
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
            Career Timeline
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent/40 to-transparent" />

          <div className="space-y-10">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative flex ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-primary rounded-full border-4 border-background shadow-lg z-10 mt-8" />

                <div className={`pl-14 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card hoverable gradient className="rounded-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h3 className="font-display font-semibold text-base sm:text-lg text-text-primary">
                        {event.title}
                      </h3>
                      <Badge variant="primary" size="sm" className="w-fit">
                        {event.date}
                      </Badge>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
