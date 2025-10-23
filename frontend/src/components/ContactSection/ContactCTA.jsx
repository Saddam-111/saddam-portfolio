import React from "react";
import AnimatedSection from "../Common/AnimatedSection";
import { Link } from "react-router-dom";

const ContactCTA =() => {
  return (
    <AnimatedSection>
      <section className="py-20 text-center bg-gradient-to-br from-pink-600 to-blue-600 text-white">
        <h2 className="text-4xl font-bold mb-6">📩 Let’s Build Something Amazing</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Ready to collaborate or have a question? Reach out and I’ll get back to you ASAP!
        </p>
        <Link
          to="/"
          className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-200 transition-all"
        >
          Back to Home
        </Link>
      </section>
    </AnimatedSection>
  );
}


export default ContactCTA