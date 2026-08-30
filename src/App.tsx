import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import HowWeWork from "./components/HowWeWork";
import Pricing from "./components/Pricing";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import WhatsappButton from "./components/WhatsappButton";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <HowWeWork />
      <Pricing />
      <WhyUs />
      <Contact />
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;
