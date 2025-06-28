import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import OfferStack from "../components/OfferStack";
import VisualMockup from "../components/VisualMockup";
import Results from "../components/Results";
import CTA from "../components/cta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <OfferStack />
      <VisualMockup />
      <Results />
      <CTA />
      <Footer/>
    </>
  );
}