import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume-view" element={<ResumeView />} />

        <Route path="/admin" element={<AdminLogin />} />

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

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

const NotFound = () => (
  <div className="min-h-screen bg-background flex items-center justify-center p-4">
    <div className="bg-surface border border-border rounded-2xl max-w-lg w-full p-8 text-center shadow-sm">
      <h1 className="font-display font-bold text-6xl text-primary mb-4">404</h1>
      <p className="text-text-secondary text-lg mb-2">Page not found</p>
      <p className="text-text-secondary/70 text-sm mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
        ← Return Home
      </a>
    </div>
  </div>
);

export default App;
