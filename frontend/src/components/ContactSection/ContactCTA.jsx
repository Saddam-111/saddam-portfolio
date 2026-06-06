import { SectionHeader, Button } from "../Common";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          label="Let's Collaborate"
          title="Ready to build something amazing?"
          subtitle="Whether you have a project in mind, a question, or just want to connect — my inbox is always open."
          align="center"
        />

        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/">
            <Button variant="primary" size="lg">Back to Home</Button>
          </Link>
          <Link to="/projects">
            <Button variant="outline" size="lg">View Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
