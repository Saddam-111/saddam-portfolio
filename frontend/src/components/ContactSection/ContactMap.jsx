import React from "react";
import AnimatedSection from "../Common/AnimatedSection";
import TerminalCard from "../Common/TerminalCard";

const ContactMap = () => {
  return (
    <AnimatedSection>
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-mono text-[#33ff00] uppercase tracking-wider" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
              {"//"} LOCATION
            </h2>
            <div className="text-[#1f521f] border-b border-[#1f521f] w-full mt-2"></div>
          </div>

          <TerminalCard title="map.sh">
            <div className="flex justify-center">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.530101514953!2d78.6041874!3d25.4537971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39777700213d0a51%3A0x23fd61b57aaadf0a!2sBundelkhand%20University!5e0!3m2!1sen!2sin!4v1697728800000!5m2!1sen!2sin"
                width="100%"
                height="400"
                className="border border-[#1f521f] w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="mt-4 font-mono text-xs text-[#666666] text-center">
              <span className="text-[#ffb000]">$</span> location: Jhansi, India
            </div>
          </TerminalCard>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ContactMap;
