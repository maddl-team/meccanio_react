import type { Metadata } from "next";
import { AziendaCtaSection } from "@/components/azienda/AziendaCtaSection";
import { AziendaHero } from "@/components/azienda/AziendaHero";
import { AziendaVisionSection } from "@/components/azienda/AziendaVisionSection";
import { BackgroundSection } from "@/components/azienda/BackgroundSection";
import { FaqSection } from "@/components/azienda/FaqSection";
import { PillarsSection } from "@/components/azienda/PillarsSection";
import { ResourcesSection } from "@/components/azienda/ResourcesSection";
import { WhySection } from "@/components/azienda/WhySection";
import { azienda } from "@/data/azienda";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: azienda.title,
  description: azienda.description,
  alternates: {
    canonical: "/azienda",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/azienda",
    siteName: site.name,
    title: `${azienda.title} — ${site.name}`,
    description: azienda.description,
  },
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `${azienda.title} — ${site.name}`,
  description: azienda.description,
  url: `${site.url}/azienda`,
  isPartOf: {
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  },
};

export default function AziendaPage() {
  return (
    <main id="contenuto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <AziendaHero />
      <WhySection />
      <PillarsSection />
      <BackgroundSection />
      <AziendaVisionSection />
      <ResourcesSection />
      <FaqSection />
      <AziendaCtaSection />
    </main>
  );
}
