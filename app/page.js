import Contact from "/components/Contact";
import Footer from "/components/Footer";
import Hero from "/components/Hero";
import Benefits from "/components/Benefits";
import Services from "/components/Services";
import Faq from "/components/Faq";
import PortfolioSection from "/components/PortfolioSection";
import Header from "/components/Header";
import Share from "../components/Share";

export default function App() {
  return (
    <div className="flex flex-col gap-20 transition-all duration-500">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <Share />
      <PortfolioSection />
      <Faq />
      <hr />
      <Contact />
      <Footer />
    </div>
  );
}
