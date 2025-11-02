import React from 'react'
import Navbar from '../components/Navbar'
import ProjectsHero from '../components/ProjectsSection/ProjectsHero'
import FeaturedProjects from '../components/ProjectsSection/FeaturedProjects'
import Footer from '../components/Footer'
import ProjectsCTA from '../components/ProjectsSection/ProjectsCTA'

const Projects = () => {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Navbar />
      <main className="pt-15 overflow-hidden">
        <ProjectsHero />
        <FeaturedProjects />
        <ProjectsCTA />
      </main>
      <Footer />
    </div>
  )
}

export default Projects