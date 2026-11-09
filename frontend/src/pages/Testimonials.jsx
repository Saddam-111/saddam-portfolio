import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonialsHero from "../components/TestimonialsSection/TestimonialsHero";
import TestimonialsSlider from "../components/TestimonialsSection/TestimonialsSlider";
import AchievementsGrid from "../components/TestimonialsSection/AchievementsGrid";

const Testimonials = () => (
  <div className="min-h-screen text-text-primary">
    <Navbar />
    <main className="pt-24 sm:pt-28">
      <TestimonialsHero />
      <TestimonialsSlider />
      <AchievementsGrid />
    </main>
    <Footer />
  </div>
);

export default Testimonials;
