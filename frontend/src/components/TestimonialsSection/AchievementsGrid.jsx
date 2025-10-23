import React from "react";
import AnimatedSection from "../Common/AnimatedSection";
import { motion } from "framer-motion";

const AchievementsGrid =() => {
  const achievements = [
    { title: "5+ Projects Completed", icon: "🚀" },
    { title: "1 Companies Worked", icon: "🏢" },
    { title: "10k+ Lines of Code", icon: "💻" },
    //{ title: "2 Hackathons Won", icon: "🏆" },
    { title: "1 AI Project", icon: "🤖" },
    { title: "Full MERN Stack", icon: "🛠️" },
  ];

  return (
    <AnimatedSection>
      <section className="py-20 max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-gray-100 dark:bg-gray-900 p-8 rounded-xl shadow-lg flex flex-col items-center justify-center"
            >
              <span className="text-4xl mb-4">{ach.icon}</span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">{ach.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}


export default AchievementsGrid