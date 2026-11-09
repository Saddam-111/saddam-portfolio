import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ExperienceHero, ExperienceTimeline, ExperienceCTA } from "../components/ExperienceSection/ExperienceHero";

const Experience = () => (
  <div className="min-h-screen text-text-primary">
    <Navbar />
    <main className="pt-24 sm:pt-28">
      <ExperienceHero />
      <ExperienceTimeline />
      <ExperienceCTA />
    </main>
    <Footer />
  </div>
);

export default Experience;
