import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectsHero from "../components/ProjectsSection/ProjectsHero";
import FeaturedProjects from "../components/ProjectsSection/FeaturedProjects";
import ProjectsCTA from "../components/ProjectsSection/ProjectsCTA";

const Projects = () => (
  <div className="min-h-screen text-text-primary">
    <Navbar />
    <main className="pt-24 sm:pt-28">
      <ProjectsHero />
      <FeaturedProjects />
      <ProjectsCTA />
    </main>
    <Footer />
  </div>
);

export default Projects;
