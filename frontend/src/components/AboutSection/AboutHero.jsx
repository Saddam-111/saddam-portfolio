import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import { images } from "../../assets/asset";

const textOrbit = [
  "MERN Stack",
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Tailwind CSS",
  "JavaScript",
];

const AboutHero = () => {
  const orbitRefs = useRef([]);
  
  // Animate orbit rotation manually using trigonometry
  useAnimationFrame((t) => {
    const radius = 140; // orbit radius
    const speed = 0.0005; // rotation speed
    orbitRefs.current.forEach((el, i) => {
      if (!el) return;
      const angle = speed * t + (i * (2 * Math.PI)) / textOrbit.length;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-black text-center px-6">
      
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4, scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-pink-500 blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"
      ></motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg"
      >
        About <span className="text-pink-600">Me</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl"
      >
        I’m a creative <span className="text-blue-600 font-semibold">Full Stack Developer</span> passionate about 
        crafting immersive web experiences and building scalable digital products.
      </motion.p>

      {/* Profile + Orbiting Text */}
      <div className="relative mt-16 flex items-center justify-center">
        {/* Orbiting Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px]">
          {textOrbit.map((text, i) => (
            <div
              key={i}
              ref={(el) => (orbitRefs.current[i] = el)}
              className="absolute left-1/2 top-1/2 text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 select-none"
              style={{
                transform: "translate(-50%, -50%)",
              }}
            >
              {text}
            </div>
          ))}
        </div>

        {/* Floating Profile Image */}
        <motion.img
          src={images.profile_img}
          alt="Profile"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
          transition={{
            duration: 1,
            delay: 0.5,
            y: {
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            },
          }}
          className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-pink-500 shadow-xl object-cover z-10"
        />
      </div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <a
          href="/projects"
          className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 transition"
        >
          View My Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white font-semibold transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default AboutHero;
