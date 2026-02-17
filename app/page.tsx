import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import GlobalEngagement from "../components/gallery/GlobalEngagement";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <GlobalEngagement />
      <Experience />
      <Gallery />
      <Footer />
    </div>
  );
}
