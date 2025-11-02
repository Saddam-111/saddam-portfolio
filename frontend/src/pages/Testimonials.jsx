import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TestimonialsHero from '../components/TestimonialsSection/TestimonialsHero'
import TestimonialsSlider from '../components/TestimonialsSection/TestimonialsSlider'
import AchievementsGrid from '../components/TestimonialsSection/AchievementsGrid'

const Testimonials = () => {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Navbar />
      <main className="pt-14 overflow-hidden">
        <TestimonialsHero />
        <TestimonialsSlider />
        <AchievementsGrid />
      </main>
      <Footer />
    </div>
  )
}

export default Testimonials