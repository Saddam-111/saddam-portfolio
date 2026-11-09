import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkillsHero from "../components/SkillSection/SkillsHero";
import SkillsBars from "../components/SkillSection/SkillsBars";
import SkillsCTA from "../components/SkillSection/SkillsCTA";

const Skills = () => (
  <div className="min-h-screen text-text-primary">
    <Navbar />
    <main className="pt-24 sm:pt-28">
      <SkillsHero />
      <SkillsBars />
      <SkillsCTA />
    </main>
    <Footer />
  </div>
);

export default Skills;
