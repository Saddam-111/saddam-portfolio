import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SkillsHero from '../components/SkillSection/SkillsHero'
import SkillsBars from '../components/SkillSection/SkillsBars'
import SkillsCTA from '../components/SkillSection/SkillsCTA'

const Skills = () => {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Navbar />
      <main className="pt-15 overflow-hidden">
        <SkillsHero />
        <SkillsBars />
        <SkillsCTA />
      </main>
      <Footer />
    </div>
  )
}

export default Skills