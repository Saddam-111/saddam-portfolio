import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "../components/ContactSection/ContactHero";
import ContactForm from "../components/ContactSection/ContactForm";
import ContactMap from "../components/ContactSection/ContactMap";
import ContactCTA from "../components/ContactSection/ContactCTA";

const Contact = () => (
  <div className="min-h-screen text-text-primary">
    <Navbar />
    <main className="pt-24 sm:pt-28">
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <ContactCTA />
    </main>
    <Footer />
  </div>
);

export default Contact;
