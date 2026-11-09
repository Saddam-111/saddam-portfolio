import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import ResumeView from "./pages/ResumeView";

import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminProtected from "./pages/AdminProtected";
import ProjectsManager from "./components/Admin/ProjectsManager";
import MessagesManager from "./components/Admin/MessagesManager";
import SkillsManager from "./components/Admin/SkillsManager";
import ExperienceManager from "./components/Admin/ExperienceManager";
import CertificatesManager from "./components/Admin/CertificatesManager";
import ResumeManager from "./components/Admin/ResumeManager";

const Page = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.22, ease: "easeOut" }}
    className="min-h-screen"
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><Home /></Page>} />
        <Route path="/about" element={<Page><About /></Page>} />
        <Route path="/projects" element={<Page><Projects /></Page>} />
        <Route path="/skills" element={<Page><Skills /></Page>} />
        <Route path="/experience" element={<Page><Experience /></Page>} />
        <Route path="/testimonials" element={<Page><Testimonials /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />
        <Route path="/resume-view" element={<Page><ResumeView /></Page>} />

        <Route path="/admin" element={<Page><AdminLogin /></Page>} />

        <Route
          path="/admin/dashboard"
          element={
            <AdminProtected>
              <AdminDashboard />
            </AdminProtected>
          }
        >
          <Route path="projects" element={<ProjectsManager />} />
          <Route path="messages" element={<MessagesManager />} />
          <Route path="skills" element={<SkillsManager />} />
          <Route path="experience" element={<ExperienceManager />} />
          <Route path="certificates" element={<CertificatesManager />} />
          <Route path="resume" element={<ResumeManager />} />
        </Route>

        <Route path="*" element={<Page><NotFound /></Page>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <Router>
    <AnimatedRoutes />
  </Router>
);

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.16),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_40%)]" />
    <div className="glass-card rounded-3xl max-w-lg w-full p-8 sm:p-10 text-center relative">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-secondary mb-3">Navigation Error</p>
      <h1 className="font-display font-bold text-6xl sm:text-7xl gradient-text mb-4">404</h1>
      <p className="text-text-secondary mb-8">The page you requested doesn&apos;t exist or has been moved.</p>
      <a href="/" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium hover:brightness-110 transition-all">
        Return Home
      </a>
    </div>
  </div>
);

export default App;
