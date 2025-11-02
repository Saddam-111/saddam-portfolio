import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ExperienceHero from '../components/ExperienceSection/ExperienceHero'
import ExperienceTimeline from '../components/ExperienceSection/ExperienceTimeline'
import ExperienceCTA from '../components/ExperienceSection/ExperienceCTA'

const Experience = () => {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Navbar />
      <main className="pt-15 overflow-hidden">
        <ExperienceHero />
        <ExperienceTimeline />
        <ExperienceCTA />
      </main>
      <Footer />
    </div>
  )
}

export default Experience