import React, { useLayoutEffect, useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { Link } from "react-router-dom";
import { images } from "../../assets/asset";
import { SectionHeader, Button } from "../Common";

const skills = [
  "MERN Stack",
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
];

const ExpertiseSection = () => {
  const textRefs = useRef([]);
  const containerRef = useRef(null);
  const [center, setCenter] = React.useState({ x: 0, y: 0 });
  const [radius, setRadius] = React.useState(140);

  useLayoutEffect(() => {
    const measure = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setCenter({ x: rect.width / 2, y: rect.height / 2 });
      setRadius(Math.max(60, Math.min(rect.width, rect.height) / 2 - 40));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useAnimationFrame((t) => {
    const speed = 0.0006;
    textRefs.current.forEach((el, i) => {
      if (!el || !containerRef.current) return;
      const base = (i * (2 * Math.PI)) / skills.length;
      const angle = speed * t + base;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      el.style.left = `${center.x}px`;
      el.style.top = `${center.y}px`;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    });
  });

  return (
    <section className="py-20 sm:py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Expertise"
          title="Skills & technologies"
          subtitle="A glimpse into my technical toolkit and areas of specialization."
          align="center"
        />

        <div className="relative flex items-center justify-center min-h-[360px] sm:min-h-[400px]">
          <div
            ref={containerRef}
            className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px]"
            style={{ pointerEvents: "none" }}
          >
            {skills.map((text, i) => (
              <span
                key={i}
                ref={(el) => (textRefs.current[i] = el)}
                className="absolute font-mono text-xs sm:text-sm text-text-secondary whitespace-nowrap"
                style={{ left: "50%", top: "50%" }}
              >
                [{text}]
              </span>
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src={images.profile_img}
                alt="Saddam Ansari"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-display font-semibold text-lg text-text-primary">
              Saddam Ansari
            </span>
            <span className="font-mono text-xs text-text-secondary">Full Stack Developer</span>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/skills">
            <Button variant="primary">View All Skills</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
