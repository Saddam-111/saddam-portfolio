import React from 'react';
import HeroSection from '../components/HomeSection/HeroSection';
import AboutSection from '../components/HomeSection/AboutSection';
import SkillsSection from '../components/HomeSection/SkillsSection';
import ProjectsSection from '../components/HomeSection/ProjectsSection';
import ExperienceSection from '../components/HomeSection/ExperienceSection';
import ContactSection from '../components/HomeSection/ContactSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <main>
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
};

export default Home;
