import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../Common/AnimatedSection'


const AboutSection = () => {
  return (
    <AnimatedSection>
      <section className="py-20 text-center bg-white dark:bg-gray-950">
      <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        I'm a dedicated full-stack developer who loves turning complex problems into beautiful, functional applications.
        With expertise in React, Node, MongoDB and modern UI design. I focus on performance, scalability and user experience.
      </p>
      <Link to="/about" className="inline-block mt-6 text-pink-600 hover:underline">
        Know More →
      </Link>
    </section>
    </AnimatedSection>
  )
}

export default AboutSection