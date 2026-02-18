import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Research from "../components/Research";
import Awards from "../components/Awards";
import GlobalEngagement from "../components/gallery/GlobalEngagement";
import MapSection from "../components/MapSection";
import Experience from "../components/Experience";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Research />
      <Awards />
      <GlobalEngagement />
      <MapSection />
      <Experience />
      <Gallery />
      <Footer />
    </div>
  );
}
