import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectsHero from '../components/ProjectsSection/ProjectsHero'
import FeaturedProjects from '../components/ProjectsSection/FeaturedProjects'
import ProjectsCTA from '../components/ProjectsSection/ProjectsCTA'

const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <main className="pt-[130px] space-y-20">
        <ProjectsHero />
        <FeaturedProjects />
        <ProjectsCTA />
      </main>
      <Footer />
    </div>
  )
}

export default Projects
