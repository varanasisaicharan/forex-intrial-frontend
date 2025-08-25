import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import CardOptionsSection from "../components/CardOptionsSection";
import ProcessSection from "../components/ProcessSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation removed from here */}
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CardOptionsSection />
      <ProcessSection />
      <FAQSection />
      <Footer />
    </div>
  );
}