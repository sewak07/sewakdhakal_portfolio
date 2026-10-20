import Hero from "../sections/Hero.jsx";
import FeaturedProjects from "../sections/FeaturedProjects.jsx";
import Experties from "../sections/Experties.jsx";
import ContactSection from "../sections/ContactSection.jsx";

export default function Home() {
  return (
    <div>
      <section>
        <Hero />
      </section>

      <section>
        <FeaturedProjects />
      </section>

      <section>
        <Experties />
      </section>

      <section>
        <ContactSection />
      </section>
    </div>
  );
}
