import React from "react";
import AnimatedSection from "../Common/AnimatedSection";
import { Link } from "react-router-dom";

const SkillsCTA =() => {
  return (
    <AnimatedSection>
      <section className="py-20 text-center bg-gradient-to-br from-pink-600 to-blue-600 text-white">
        <h2 className="text-4xl font-bold mb-6">🚀 Ready to Build Together?</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          I have the skills and experience to bring your ideas to life. Let's collaborate!
        </p>
        <Link
          to="/contact"
          className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-200 transition-all"
        >
          Contact Me
        </Link>
      </section>
    </AnimatedSection>
  );
}


export default SkillsCTA