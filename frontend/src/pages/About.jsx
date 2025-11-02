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
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Navbar */}
      <Navbar />

      {/* All Sections */}
      <main className="pt-15 overflow-hidden">
        <AboutHero />
        <PersonalIntro />
        <TimeLine />
        <Achievement />
        <SkillsDetailed />
        <FunFacts />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default About