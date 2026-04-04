import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import ResumeView from "./pages/ResumeView";
// Admin
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminProtected from "./pages/AdminProtected"
import ProjectsManager from "./components/Admin/ProjectsManager";
import MessagesManager from "./components/Admin/MessagesManager";
import SkillsManager from "./components/Admin/SkillsManager";
import ExperienceManager from "./components/Admin/ExperienceManager";
import CertificatesManager from "./components/Admin/CertificatesManager";
import ResumeManager from "./components/Admin/ResumeManager";


// Page transition wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6 }}
    className="bg-[#0a0a0a]"
  >
    {children}
  </motion.div>
);

const NotFound = () => (
  <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
    <div className="border border-[#1f521f] max-w-lg w-full">
      <div className="border-b border-[#1f521f] p-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 bg-[#ff3333] rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-[#ffb000] rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-[#33ff00] rounded-full"></span>
        </div>
        <span className="text-[#33ff00] font-mono text-xs ml-2">error.sh</span>
      </div>
      <div className="p-8 text-center">
        <h1 className="text-4xl font-mono text-[#ff3333] mb-4">404</h1>
        <p className="font-mono text-[#999999] mb-4">error: page not found</p>
        <p className="font-mono text-sm text-[#666666]">The requested resource could not be located.</p>
        <a href="/" className="inline-block mt-6 font-mono text-sm text-[#33ff00] hover:text-[#ffb000]">
          [ RETURN_HOME ]
        </a>
      </div>
      <div className="border-t border-[#1f521f] p-2 text-right">
        <span className="font-mono text-xs text-[#33ff00]">user@portfolio:~$ _</span>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <Routes>
          {/* Frontend Pages */}
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/projects"
            element={
              <PageWrapper>
                <Projects />
              </PageWrapper>
            }
          />
          <Route
            path="/skills"
            element={
              <PageWrapper>
                <Skills />
              </PageWrapper>
            }
          />
          <Route
            path="/experience"
            element={
              <PageWrapper>
                <Experience />
              </PageWrapper>
            }
          />
          <Route
            path="/testimonials"
            element={
              <PageWrapper>
                <Testimonials />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          <Route
            path="/resume-view"
            element={
              <PageWrapper>
                <ResumeView />
              </PageWrapper>
            }
          />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />

          <Route
            path="/admin/dashboard"
            element={
              <AdminProtected>
                <AdminDashboard />
              </AdminProtected>
            }
          >
            {/* Nested Admin Routes */}
            <Route path="projects" element={<ProjectsManager />} />
            <Route path="messages" element={<MessagesManager />} />
            <Route path="skills" element={<SkillsManager />} />
            <Route path="experience" element={<ExperienceManager />} />
            <Route path="certificates" element={<CertificatesManager />} />
            <Route path="resume" element={<ResumeManager />} />
          </Route>

          {/* Catch all / 404 */}
          <Route
            path="*"
            element={
              <PageWrapper>
                <NotFound />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
