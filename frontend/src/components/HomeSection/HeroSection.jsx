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
  }, [fetchResumes, resumes.length]);

  const handleViewResume = () => {
    if (resumes[0]?.resumeFile?.url) {
      navigate("/resume-view", { state: { resumeUrl: resumes[0].resumeFile.url } });
    }
  };

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-14 sm:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,0.18),transparent_35%),radial-gradient(circle_at_85%_25%,rgba(34,211,238,0.14),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(139,92,246,0.08),transparent_45%)]" />
      <div className="absolute inset-0 noise-bg pointer-events-none" />
      <div className="absolute -top-24 right-[-10%] w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-[-8rem] left-[-8%] w-[24rem] h-[24rem] bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.8s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <Badge variant="primary" dot size="sm">Available for opportunities</Badge>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-secondary/80">Gorakhpur, India</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.02] text-text-primary">
            Building <span className="gradient-text">futuristic</span> web products with MERN precision.
          </h1>

          <p className="mt-5 sm:mt-6 text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl">
            I&apos;m <span className="text-text-primary font-medium">Saddam Ansari</span>, a full-stack developer focused on scalable architecture, refined interfaces, and performant user experiences across web platforms.
          </p>

          <div className="mt-7 sm:mt-8 flex flex-wrap gap-3">
            <Link to="/projects"><Button variant="gradient" size="lg">Explore Projects</Button></Link>
            <Link to="/contact"><Button variant="outline" size="lg">Let&apos;s Collaborate</Button></Link>
            <Button variant="ghost" size="lg" onClick={handleViewResume}>View Resume</Button>
          </div>

          <div className="mt-9 grid grid-cols-3 gap-3 max-w-xl">
            {[{ v: "20+", l: "Projects" }, { v: "5+", l: "Years" }, { v: "50+", l: "Clients" }].map((s) => (
              <div key={s.l} className="glass-card rounded-2xl px-4 py-4 text-center">
                <div className="font-display font-bold text-xl sm:text-2xl text-text-primary">{s.v}</div>
                <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-text-secondary mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }} className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[420px]">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/25 via-transparent to-accent/20 blur-2xl" />
            <div className="relative glass-card rounded-[2rem] p-3 sm:p-4">
              <div className="relative aspect-[4/5] rounded-[1.4rem] overflow-hidden border border-border">
                <img src={images.profile_img} alt="Saddam Ansari" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/65 via-transparent to-transparent" />
              </div>
              <div className="mt-3 flex items-center justify-between gap-3 px-1">
                <div>
                  <p className="font-display font-semibold text-text-primary">Saddam Ansari</p>
                  <p className="text-xs text-text-secondary">MERN Stack Developer</p>
                </div>
                <div className="px-3 py-2 rounded-xl border border-border bg-background/40 font-mono text-xs text-secondary">
                  <span className="text-accent">&gt;</span> ship quality
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
