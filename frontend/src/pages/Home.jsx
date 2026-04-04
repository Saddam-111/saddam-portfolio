import React from 'react'
import HeroSection from '../components/HomeSection/HeroSection'
import AboutSection from '../components/HomeSection/AboutSection'
import SkillsSection from '../components/HomeSection/SkillsSection'
import ExperienceSection from '../components/HomeSection/ExperienceSection'
import ProjectsSection from '../components/HomeSection/ProjectsSection'
import ContactSection from '../components/HomeSection/ContactSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="bg-[#0a0a0a] text-[#cccccc] min-h-screen">
      <Navbar />
      <main className="pt-15">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default Home
