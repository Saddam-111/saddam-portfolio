import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../Common/AnimatedSection";
import { TypeAnimation } from "react-type-animation";

const AboutSection = () => {
  return (
    <AnimatedSection>
      <section className="py-20 text-center bg-white dark:bg-gray-950">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          About Me
        </h2>

        <div className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto px-4 text-lg leading-relaxed">
          <TypeAnimation
            sequence={[
              "I'm a dedicated full-stack developer who loves turning complex problems into beautiful, functional applications. With expertise in React, Node, MongoDB and modern UI design, I focus on performance, scalability and user experience.",
              2000, // pause before loop
            ]}
            wrapper="p"
            speed={40}
            cursor={true}
            repeat={Infinity}
          />
        </div>

        <Link
          to="/about"
          className="inline-block mt-8 text-pink-600 dark:text-pink-400 hover:underline text-lg"
        >
          Know More →
        </Link>
      </section>
    </AnimatedSection>
  );
};

export default AboutSection;
