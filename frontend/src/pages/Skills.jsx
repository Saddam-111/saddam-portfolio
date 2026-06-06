import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SkillsHero from '../components/SkillSection/SkillsHero'
import SkillsBars from '../components/SkillSection/SkillsBars'
import SkillsCTA from '../components/SkillSection/SkillsCTA'

const Skills = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <main>
        <SkillsHero />
        <SkillsBars />
        <SkillsCTA />
      </main>
      <Footer />
    </div>
  )
}

export default Skills
