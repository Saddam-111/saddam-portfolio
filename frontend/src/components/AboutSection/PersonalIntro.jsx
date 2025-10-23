import { Link } from "react-router-dom";
import AnimatedSection from "../Common/AnimatedSection";


const PersonalIntro =() =>{
  return (
    <AnimatedSection>
      <section className="py-20 text-center bg-white dark:bg-gray-950">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Hello, I'm Saddam Ansari</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-4">
          I am a passionate full-stack developer specializing in MERN stack. I love turning complex problems into interactive, beautiful and user-friendly applications. With hands-on experience in React, Node.js, MongoDB and modern UI/UX design, I aim to deliver high-quality digital solutions.
        </p>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          When I'm not coding, I enjoy exploring new technologies, contributing to open-source and refining my problem-solving skills.
        </p>
        <Link to="/contact" className="inline-block mt-6 px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-all">
          Hire Me
        </Link>
      </section>
    </AnimatedSection>
  );
}


export default PersonalIntro