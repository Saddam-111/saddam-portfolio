import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button, Badge } from "../Common";

const PersonalIntro = () => {
  return (
    <section className="py-20 sm:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-3 block">Introduction</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
            Hello, I'm Saddam Ansari
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-4"
          >
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              I'm a passionate full-stack developer specializing in the MERN stack.
              I love turning complex problems into interactive, beautiful, and user-friendly applications.
            </p>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              With hands-on experience in React, Node.js, MongoDB, and modern UI/UX design,
              I aim to deliver high-quality digital solutions that make a real impact.
            </p>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source,
              and refining my problem-solving skills.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {["React", "Node.js", "MongoDB", "TypeScript", "Tailwind"].map(tech => (
                <Badge key={tech} variant="primary" size="sm">{tech}</Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-card border border-border p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-error" />
                  <span className="w-3 h-3 rounded-full bg-warning" />
                  <span className="w-3 h-3 rounded-full bg-success" />
                </div>
                <span className="font-mono text-xs text-text-secondary ml-2">about.saddam</span>
              </div>
              <pre className="font-mono text-xs sm:text-sm text-text-secondary leading-relaxed">
{`> whoami --reveal
const saddam = {
  role: "Full Stack Developer",
  stack: ["React", "Node", "MongoDB"],
  passion: "Building things",
  motto: "Clean code. Fast apps."
};`}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalIntro;
