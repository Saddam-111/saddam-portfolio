import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HomeSection/HeroSection";
import AboutSection from "../components/HomeSection/AboutSection";
import SkillsSection from "../components/HomeSection/SkillsSection";
import ProjectsSection from "../components/HomeSection/ProjectsSection";
import ExperienceSection from "../components/HomeSection/ExperienceSection";
import ContactSection from "../components/HomeSection/ContactSection";

const Home = () => (
  <div className="min-h-screen text-text-primary">
    <Navbar />
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Home;
