import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
// import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Experience />
      {/* <Features /> */}
      <Footer />
    </div>
  );
}
