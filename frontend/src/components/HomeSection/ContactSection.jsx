import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../Common";

const ContactSection = () => (
  <section className="py-20 sm:py-24 relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative glass-card rounded-[2rem] p-8 sm:p-10 lg:p-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_40%)]" />
        <div className="relative">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-secondary mb-3">Collaboration</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary tracking-tight">
            Let&apos;s build something <span className="gradient-text">exceptional</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Open to freelance projects, product collaborations, and full-time opportunities where thoughtful engineering and design matter.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact"><Button variant="gradient" size="lg">Get in Touch</Button></Link>
            <Link to="/projects"><Button variant="outline" size="lg">View Projects</Button></Link>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
