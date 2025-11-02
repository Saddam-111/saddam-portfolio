import { motion } from "framer-motion";
import AnimatedSection from "../Common/AnimatedSection";


const TimeLine =()  =>{
  const events = [
    {
      title: "Full Stack Intern — VEDSEEM INFOTECH",
      date: "Jul 2025 – Oct 2025",
      description: "Worked on MERN stack web applications, implementing responsive UI and backend APIs."
    },
    {
      title: "Freelance Developer",
      date: "2024 – 2025",
      description: "Developed multiple web applications, learning full stack project lifecycle and client management."
    }
  ];

  return (
    <AnimatedSection>
      <section className="py-20 bg-linear-to-r from-blue-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-black">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Career Timeline</h2>
        <div className="max-w-4xl mx-4 relative border-l-2 border-pink-600">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-4 top-1 w-6 h-6 bg-pink-600 rounded-full border-4 border-white dark:border-gray-950"></span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{event.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{event.date}</p>
              <p className="text-gray-700 dark:text-gray-300">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}


export default TimeLine