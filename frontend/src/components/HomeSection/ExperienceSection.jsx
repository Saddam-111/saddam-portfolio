import React from 'react'

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-black text-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">Experience</h2>
      <div className="max-w-3xl mx-auto space-y-6 text-left">
        <div className="border-l-4 border-pink-600 pl-4">
          <h3 className="text-xl font-semibold">Full Stack Intern — VEDSEEM INFOTECH PVT. LTD.</h3>
          <p className="text-gray-600 dark:text-gray-400">Jul 2025 – Oct 2025</p>
          <p className="text-gray-700 dark:text-gray-300">
            Worked on scalable web applications using React, Node.js and MongoDB.
            Implemented responsive UI components, REST APIs and optimized data flow.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection