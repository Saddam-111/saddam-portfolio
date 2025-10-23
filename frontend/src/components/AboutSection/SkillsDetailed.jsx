import AnimatedSection from "../Common/AnimatedSection";


const SkillsDetailed =() => {
  const skills = [
    { category: "Frontend", items: ["React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"] },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
    { category: "Database", items: ["MongoDB", "SQL"] },
    { category: "Tools", items: ["Git", "VS Code", "Postman"] }
  ];

  return (
    <AnimatedSection>
      <section className="py-20 bg-gradient-to-r from-pink-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-black">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">Skills</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {skills.map((s, idx) => (
            <div key={idx} className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{s.category}</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {s.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}


export default SkillsDetailed