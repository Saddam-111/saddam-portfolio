import { SectionHeader, Button } from "../Common";
import { Link } from "react-router-dom";

const ProjectsCTA = () => {
  return (
    <section className="py-20 sm:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-primary mb-4 block">Work Together</span>
        <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight mb-4">
          Have a project in mind?
        </h2>
        <p className="text-text-secondary text-sm sm:text-base mb-8 max-w-xl mx-auto">
          I'm always open to discussing new opportunities and exciting projects.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/contact">
            <Button variant="primary" size="lg">Start a Project</Button>
          </Link>
          <Link to="/">
            <Button variant="outline" size="lg">Back to Home</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCTA;
