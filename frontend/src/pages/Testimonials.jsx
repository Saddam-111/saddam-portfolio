import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TestimonialsHero from '../components/TestimonialsSection/TestimonialsHero'
import TestimonialsSlider from '../components/TestimonialsSection/TestimonialsSlider'
import AchievementsGrid from '../components/TestimonialsSection/AchievementsGrid'

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <main>
        <TestimonialsHero />
        <TestimonialsSlider />
        <AchievementsGrid />
      </main>
      <Footer />
    </div>
  )
}

export default Testimonials
