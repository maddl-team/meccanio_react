import { AboutSection } from "@/components/home/AboutSection";
import { ContactCtaSection } from "@/components/home/ContactCtaSection";
import { EvolutionSection } from "@/components/home/EvolutionSection";
import { HeroSection } from "@/components/home/HeroSection";
import { MethodSection } from "@/components/home/MethodSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { SectorsSection } from "@/components/home/SectorsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { TrustBadgesSection } from "@/components/home/TrustBadgesSection";
import { VisionSection } from "@/components/home/VisionSection";

export default function Home() {
  return (
    <main id="contenuto">
      <HeroSection />
      <EvolutionSection />
      <AboutSection />
      <ServicesSection />
      <SectorsSection />
      <MethodSection />
      <SolutionsSection />
      <VisionSection />
      <PartnersSection />
      <ContactCtaSection />
      <TrustBadgesSection />
    </main>
  );
}
