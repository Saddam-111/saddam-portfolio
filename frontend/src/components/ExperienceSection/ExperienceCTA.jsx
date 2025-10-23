import React from "react";
import AnimatedSection from "../Common/AnimatedSection";
import { Link } from "react-router-dom";

const ExperienceCTA =() => {
  return (
    <AnimatedSection>
      <section className="py-20 text-center bg-gradient-to-br from-blue-600 to-pink-600 text-white">
        <h2 className="text-4xl font-bold mb-6">💡 Inspired by My Journey?</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Let's build something together! Check out my projects or reach out directly.
        </p>
        <Link
          to="/projects"
          className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-200 transition-all"
        >
          See Projects
        </Link>
      </section>
    </AnimatedSection>
  );
}


export default ExperienceCTA