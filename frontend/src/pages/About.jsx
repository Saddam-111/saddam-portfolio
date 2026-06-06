import React from 'react';
import AboutHero from '../components/AboutSection/AboutHero';
import PersonalIntro from '../components/AboutSection/PersonalIntro';
import TimeLine from '../components/AboutSection/TimeLine';
import Achievement from '../components/AboutSection/Achievement';
import SkillsDetailed from '../components/AboutSection/SkillsDetailed';
import FunFacts from '../components/AboutSection/FunFacts';
import ContactSection from '../components/HomeSection/ContactSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <main className="pt-[130px] space-y-20">
        <AboutHero />
        <PersonalIntro />
        <TimeLine />
        <Achievement />
        <SkillsDetailed />
        <FunFacts />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
