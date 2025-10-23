import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../Common/AnimatedSection";

const ProjectsCTA =() => {
  return (
    <AnimatedSection>
      <section className="py-20 text-center bg-gradient-to-br from-pink-600 to-blue-600 text-white">
        <h2 className="text-4xl font-bold mb-6">🚀 Got an Idea? Let's Collaborate</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          If you like my work and want to build something together, reach out and let's make it happen!
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


export default ProjectsCTA