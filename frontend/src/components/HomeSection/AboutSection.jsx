import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SectionHeader, Button, Badge, Card } from "../Common";

const AboutSection = () => {
  const highlights = [
    { label: "Full Stack", value: "MERN" },
    { label: "Focus", value: "Performance & UX" },
    { label: "Approach", value: "Clean Architecture" },
  ];

  return (
    <section className="py-20 sm:py-24 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 noise-bg" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="About"
          title="Full-stack developer passionate about building elegant solutions"
          subtitle="Turning complex problems into simple, beautiful, and intuitive applications."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            I'm a dedicated full-stack developer specializing in the MERN stack.
            With expertise in React, Node.js, MongoDB, and modern UI frameworks,
            I build applications that are performant, scalable, and delightful to use.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {highlights.map((item, i) => (
            <Badge key={i} variant="default" size="lg" className="px-4 py-2">
              {item.label}: <span className="text-primary font-medium">{item.value}</span>
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Frontend",
              desc: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Redux",
              icon: "⚛️",
            },
            {
              title: "Backend",
              desc: "Node.js, Express.js, REST APIs, JWT Auth, Socket.io",
              icon: "🔧",
            },
            {
              title: "Database & DevOps",
              desc: "MongoDB, PostgreSQL, Docker, Git, AWS basics",
              icon: "🗄️",
            },
          ].map((item, i) => (
            <Card
              key={i}
              title={item.title}
              subtitle={item.icon}
              hoverable
              gradient
            >
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/about">
            <Button variant="outline">More about me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
