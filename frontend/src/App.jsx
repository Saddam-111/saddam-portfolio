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

// Admin
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminProtected from "./pages/AdminProtected"
import ProjectsManager from "./components/Admin/ProjectsManager";
import MessagesManager from "./components/Admin/MessagesManager";
import SkillsManager from "./components/Admin/SkillsManager";
import ExperienceManager from "./components/Admin/ExperienceManager";
import CertificatesManager from "./components/Admin/CertificatesManager";

// Page transition wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
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
          </Route>

          {/* Catch all / 404 */}
          <Route
            path="*"
            element={
              <PageWrapper>
                <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
                  404 | Page Not Found
                </div>
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
