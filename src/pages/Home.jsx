// src/pages/Home.jsx
import Hero from "../components/Hero";
import StatsCounter from "../components/StatsCounter";
import ServicesHighlights from "../components/ServicesHighlights";
import ClientSlider from "../components/ClientSlider";
import Industry from "../components/Industry";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <section className="pt-32 md:pt-36" />
      <Hero />
      <ClientSlider />
      <Industry />
      <StatsCounter />
      <ServicesHighlights />
      <section className="pt-24 text-center bg-gray-50 min-h-screen">
        
      </section>
      <Footer />
    </div>
  );
};

export default Home;
