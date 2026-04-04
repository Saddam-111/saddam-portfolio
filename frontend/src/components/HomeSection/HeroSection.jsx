import React, { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";
import { images } from "../../assets/asset";
import TerminalButton from "../Common/TerminalButton";
import TerminalText from "../Common/TerminalText";

const HeroSection = () => {
  const navigate = useNavigate();
  const { resumes, fetchResumes } = useContext(AdminContext);
  const controls = useAnimation();

  useEffect(() => {
    if (!resumes.length) fetchResumes();
  }, []);

  const handleViewResume = () => {
    if (resumes[0]?.resumeFile?.url) {
      navigate("/resume-view", {
        state: { resumeUrl: resumes[0].resumeFile.url },
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-10 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden relative">
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(transparent_50%,rgba(51,255,0,0.1)_50%)] bg-[length:100%_4px]"></div>
      </div>

      {/* Left Text Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl"
      >
        {/* Terminal-style header */}
        <div className="border border-[#1f521f] mb-6">
          <div className="border-b border-[#1f521f] p-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#ff3333] rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-[#ffb000] rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-[#33ff00] rounded-full"></span>
            </div>
            <span className="text-[#33ff00] font-mono text-xs ml-2">whoami.sh</span>
          </div>
          <div className="p-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono text-[#33ff00] leading-tight" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
              <span className="text-[#ffb000]">root@</span>
              <span className="text-[#33ff00]">portfolio</span>
              <span className="text-[#666666]">:~$</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-mono text-[#cccccc] mt-2">
              HI, I'M <span className="text-[#ffb000]">SADDAM ANSARI</span>
            </h2>

            <p className="font-mono text-[#999999] mt-4 text-lg leading-relaxed">
              <span className="text-[#33ff00]">const</span> role = <span className="text-[#ffb000]">"MERN Stack Developer"</span>;
              <br />
              <span className="text-[#33ff00]">const</span> passion = <span className="text-[#ffb000]">"Building amazing web experiences"</span>;
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/projects">
                <TerminalButton variant="primary">
                  VIEW_PROJECTS
                </TerminalButton>
              </Link>
              <Link to="/contact">
                <TerminalButton variant="secondary">
                  CONTACT_ME
                </TerminalButton>
              </Link>
              <TerminalButton 
                variant="ghost" 
                onClick={handleViewResume}
              >
                VIEW_RESUME
              </TerminalButton>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Image Section - Terminal Frame */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="relative"
      >
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          className="border-2 border-[#1f521f] p-1"
        >
          {/* Terminal Header */}
          <div className="border-b border-[#1f521f] p-2 flex items-center gap-2 bg-[#1f521f]/20">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#ff3333] rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-[#ffb000] rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-[#33ff00] rounded-full"></span>
            </div>
            <span className="text-[#33ff00] font-mono text-xs ml-2">profile.png</span>
          </div>
          
          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={images.profile_img}
              alt="Saddam Ansari"
              className="w-56 h-56 md:w-72 md:h-72 object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </motion.div>

        {/* ASCII decoration */}
        <div className="absolute -bottom-8 -left-4 text-[#1f521f] font-mono text-xs hidden lg:block">
          <pre>{`
   .____.
   |    |
   |____|
          `}</pre>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
