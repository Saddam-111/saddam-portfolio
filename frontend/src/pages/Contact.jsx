import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactHero from '../components/ContactSection/ContactHero'
import ContactForm from '../components/ContactSection/ContactForm'
import ContactMap from '../components/ContactSection/ContactMap'
import ContactCTA from '../components/ContactSection/ContactCTA'


const Contact = () => {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Navbar />
      <main className="pt-20 overflow-hidden">
        <ContactHero />
        <ContactForm />
        <ContactMap />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

export default Contact