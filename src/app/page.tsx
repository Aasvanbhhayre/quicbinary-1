import Hero from "../components/home/Hero";
import AboutUs from "../components/home/AboutUs";
import Services from "../components/home/Services";
import OurWork from "../components/home/OurWork";
import Process from "../components/home/Process";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import Contact from "../components/home/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <OurWork />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
