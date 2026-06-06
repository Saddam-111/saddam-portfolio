import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, Badge, Button } from "../Common";

const experiences = [
  {
    title: "Full Stack Intern",
    company: "VEDSEEM INFOTECH PVT. LTD.",
    period: "Jul 2025 – Oct 2025",
    description: "Built scalable web applications using React, Node.js and MongoDB. Implemented responsive UI components, REST APIs and optimized data flow.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">Career</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary tracking-tight">
            Experience
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card hoverable gradient className="rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <h3 className="font-display font-semibold text-lg text-text-primary">
                    {exp.title}
                  </h3>
                  <Badge variant="primary" size="sm" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>

                <p className="text-sm text-primary font-mono mb-3">
                  @ {exp.company}
                </p>

                <p className="text-text-secondary text-sm leading-relaxed">
                  {exp.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/experience">
            <Button variant="outline" size="sm">
              View full experience
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
