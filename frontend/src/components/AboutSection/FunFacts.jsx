import AnimatedSection from "../Common/AnimatedSection";


const FunFacts =() => {
  const facts = [
    "Coffee Lover ☕",
    "Music Enthusiast 🎵",
    "Gamer 🎮",
    "Open Source Contributor 💻"
  ];

  return (
    <AnimatedSection>
      <section className="py-20 text-center bg-white dark:bg-gray-950">
        <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">Fun Facts</h2>
        <div className="flex flex-wrap justify-center gap-6 text-gray-700 dark:text-gray-300 text-lg md:text-xl">
          {facts.map((f, idx) => (
            <div key={idx} className="bg-gray-100 dark:bg-gray-900 p-6 rounded-2xl shadow-lg w-48">
              {f}
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}


export default FunFacts