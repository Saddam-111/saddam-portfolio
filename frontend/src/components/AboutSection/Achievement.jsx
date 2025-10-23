import { motion } from "framer-motion";
import { FaAward, FaProjectDiagram, FaGithub } from "react-icons/fa";
import AnimatedSection from "../Common/AnimatedSection";


const Achievement =() => {
  const achievements = [
    { icon: <FaAward />, title: "Certified MERN Developer" },
    { icon: <FaProjectDiagram />, title: "5+ Completed Projects" },
    { icon: <FaGithub />, title: "500+ GitHub Commits" }
  ];

  return (
    <AnimatedSection>
      <section className="py-20 text-center bg-white dark:bg-gray-950">
        <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">Achievements</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {achievements.map((a, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl shadow-lg w-64"
            >
              <div className="text-5xl text-pink-600 mb-4">{a.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{a.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}


export default Achievement