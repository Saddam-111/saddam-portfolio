import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaJsSquare, FaFileExcel } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiCplusplus, SiNumpy, SiPandas, SiMysql } from "react-icons/si";
import { Link } from "react-router-dom";

const SkillsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-black text-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">Skills</h2>
      
      <div className="flex flex-wrap justify-center gap-10 text-6xl text-gray-700 dark:text-gray-300">
        <FaReact className="hover:text-blue-500 transition-all" title="React.js"/>
        <FaNodeJs className="hover:text-green-500 transition-all" title="Node.js"/>
        <SiMongodb className="hover:text-green-600 transition-all" title="MongoDB"/>
        <SiTailwindcss className="hover:text-sky-500 transition-all" title="Tailwind CSS"/>
        <FaDatabase className="hover:text-yellow-500 transition-all" title="SQL"/>
        <SiCplusplus className="hover:text-blue-600 transition-all" title="C++"/>
        <FaPython className="hover:text-blue-400 transition-all" title="Python"/>
        <SiNumpy className="hover:text-indigo-500 transition-all" title="NumPy"/>
        <SiPandas className="hover:text-indigo-700 transition-all" title="Pandas"/>
        <FaJsSquare className="hover:text-yellow-400 transition-all" title="JavaScript"/>
        <SiMysql className="hover:text-blue-800 transition-all" title="MySQL"/>
        <FaFileExcel className="hover:text-green-700 transition-all" title="Excel"/>
      </div>
      
      <Link to="/skills" className="block mt-8 text-blue-600 hover:underline">
        Explore More →
      </Link>
    </section>
  );
};

export default SkillsSection;
