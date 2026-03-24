import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { StatsSection } from "../components/StatsSection";
import { CertificationsSection } from "../components/CertificationsSection";
import { ServicesSection } from "../components/ServicesSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ParticleNetwork } from "../components/ParticleNetwork";
import { SectionDivider } from "../components/SectionDivider";

export default function Home() {
  return (
    <main className="noise-bg relative">
      <ParticleNetwork />
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <StatsSection />
      <SectionDivider />
      <CertificationsSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </main>
  );
}
