import Hero from "../components/Hero.jsx";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Gallery />
      <Footer />
    </div>
  );
}
