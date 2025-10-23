import React from "react";
import AnimatedSection from "../Common/AnimatedSection";

const ContactMap = () => {
  return (
    <AnimatedSection>
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Find Me Here
        </h2>
        <div className="flex justify-center">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.530101514953!2d78.6041874!3d25.4537971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39777700213d0a51%3A0x23fd61b57aaadf0a!2sBundelkhand%20University!5e0!3m2!1sen!2sin!4v1697728800000!5m2!1sen!2sin"
            width="600"
            height="450"
            className="rounded-xl border-0 shadow-lg w-full max-w-4xl"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ContactMap;
