import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AboutHero from '../components/AboutSection/AboutHero'
import PersonalIntro from '../components/AboutSection/PersonalIntro'
import TimeLine from '../components/AboutSection/TimeLine'
import Achievement from '../components/AboutSection/Achievement'
import SkillsDetailed from '../components/AboutSection/SkillsDetailed'
import FunFacts from '../components/AboutSection/FunFacts'
import ContactSection from '../components/HomeSection/ContactSection'

const About = () => {
  return (
    <div className="bg-[#0a0a0a] text-[#cccccc] min-h-screen">
      <Navbar />
      <main className="pt-15 overflow-hidden">
        <AboutHero />
        <PersonalIntro />
        <TimeLine />
        <Achievement />
        <SkillsDetailed />
        <FunFacts />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default About
