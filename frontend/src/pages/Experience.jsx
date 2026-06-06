import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ExperienceHero, ExperienceTimeline, ExperienceCTA } from '../components/ExperienceSection/ExperienceHero'

const Experience = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <main>
        <ExperienceHero />
        <ExperienceTimeline />
        <ExperienceCTA />
      </main>
      <Footer />
    </div>
  )
}

export default Experience
