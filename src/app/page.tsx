import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { StatsSection } from "../components/StatsSection";
import { CertificationsSection } from "../components/CertificationsSection";
import { ServicesSection } from "../components/ServicesSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <CertificationsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
