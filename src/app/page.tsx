import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Results from "@/components/Results";
import Services from "@/components/Services";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <div className="site-gradient">
      <Header />
      <main>
        <Hero />
        <Vision />
        <Services />
        <Results />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
