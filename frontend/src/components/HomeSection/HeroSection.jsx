import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";
import { images } from "../../assets/asset";
import { Button, Badge } from "../Common";

const HeroSection = () => {
  const navigate = useNavigate();
  const { resumes, fetchResumes } = useContext(AdminContext);

  useEffect(() => {
    if (!resumes.length) fetchResumes();
  }, []);

  const handleViewResume = () => {
    if (resumes[0]?.resumeFile?.url) {
      navigate("/resume-view", {
        state: { resumeUrl: resumes[0].resumeFile.url },
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge variant="primary" dot size="sm" className="mb-4 sm:mb-6">
              Available for work
            </Badge>

            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.1]">
              Saddam Ansari<span className="text-primary">.</span>
            </h1>

            <h2 className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl text-text-secondary font-medium">
              MERN Stack Developer
            </h2>

            <p className="mt-4 sm:mt-6 text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
              Building scalable full-stack web applications with modern technologies.
              Focused on clean architecture, performance, and exceptional user experiences.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link to="/projects">
                <Button variant="primary">View Projects</Button>
              </Link>
              <Link to="/experience">
                <Button variant="outline">Experience</Button>
              </Link>
              <Button variant="ghost" onClick={handleViewResume}>
                Resume
              </Button>
            </div>

            <div className="mt-8 sm:mt-10 flex items-center gap-4 sm:gap-6">
              <StatItem value="20+" label="Projects" />
              <div className="w-px h-6 sm:h-8 bg-border" />
              <StatItem value="5+" label="Years Exp" />
              <div className="w-px h-6 sm:h-8 bg-border" />
              <StatItem value="50+" label="Clients" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex items-center justify-center mt-8 lg:mt-0"
          >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse-glow" />
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-card shadow-2xl">
              <img
                src={images.profile_img}
                alt="Saddam Ansari"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-5 py-3 shadow-lg"
            >
              <span className="font-mono text-sm">
                <span className="text-accent">{">"} </span>
                <span className="text-text-primary">Let's build</span>
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatItem = ({ value, label }) => (
  <div>
    <span className="block font-display font-bold text-2xl text-text-primary">{value}</span>
    <span className="text-xs text-text-secondary font-mono uppercase tracking-wider">{label}</span>
  </div>
);

export default HeroSection;
