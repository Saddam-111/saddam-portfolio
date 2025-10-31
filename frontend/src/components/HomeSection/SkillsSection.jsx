import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaJsSquare,
  FaFileExcel,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiCplusplus,
  SiNumpy,
  SiPandas,
  SiMysql,
} from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const skills = [
  { icon: <FaReact />, color: "text-blue-500", title: "React.js" },
  { icon: <FaNodeJs />, color: "text-green-500", title: "Node.js" },
  { icon: <SiMongodb />, color: "text-green-600", title: "MongoDB" },
  { icon: <SiTailwindcss />, color: "text-sky-500", title: "Tailwind CSS" },
  { icon: <FaDatabase />, color: "text-yellow-500", title: "SQL" },
  { icon: <SiCplusplus />, color: "text-blue-600", title: "C++" },
  { icon: <FaPython />, color: "text-blue-400", title: "Python" },
  { icon: <SiNumpy />, color: "text-indigo-500", title: "NumPy" },
  { icon: <SiPandas />, color: "text-indigo-700", title: "Pandas" },
  { icon: <FaJsSquare />, color: "text-yellow-400", title: "JavaScript" },
  { icon: <SiMysql />, color: "text-blue-800", title: "MySQL" },
  { icon: <FaFileExcel />, color: "text-green-700", title: "Excel" },
];

const SkillsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-black text-center overflow-hidden">
      <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
        Skills
      </h2>

      {/* Infinite scroll container */}
      <div className="relative w-full overflow-hidden">
        {/* Inner container - doubled for seamless infinite loop */}
        <motion.div
          className="flex gap-12 text-6xl text-gray-700 dark:text-gray-300 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {/* Repeated twice for continuous scroll */}
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className={`hover:scale-110 transition-transform duration-300 ${skill.color}`}
              title={skill.title}
            >
              {skill.icon}
            </div>
          ))}
        </motion.div>
      </div>

      <Link
        to="/skills"
        className="block mt-10 text-blue-600 dark:text-blue-400 hover:underline text-lg"
      >
        Explore More →
      </Link>
    </section>
  );
};

export default SkillsSection;
