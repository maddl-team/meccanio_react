import type { Metadata } from "next";
import { AreasSection } from "@/components/brevetti/AreasSection";
import { BrevettiCtaSection } from "@/components/brevetti/BrevettiCtaSection";
import { BrevettiFaqSection } from "@/components/brevetti/BrevettiFaqSection";
import { BrevettiHero } from "@/components/brevetti/BrevettiHero";
import { CollabsSection } from "@/components/brevetti/CollabsSection";
import { PatentsSection } from "@/components/brevetti/PatentsSection";
import { WhyBackgroundSection } from "@/components/brevetti/WhyBackgroundSection";
import { brevetti } from "@/data/brevetti";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: brevetti.title,
  description: brevetti.description,
  alternates: {
    canonical: "/brevetti",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/brevetti",
    siteName: site.name,
    title: `${brevetti.title} — ${site.name}`,
    description: brevetti.description,
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `${brevetti.title} — ${site.name}`,
  description: brevetti.description,
  url: `${site.url}/brevetti`,
  isPartOf: {
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  },
};

export default function BrevettiPage() {
  return (
    <main id="contenuto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <BrevettiHero />
      <PatentsSection />
      <AreasSection />
      <WhyBackgroundSection />
      <CollabsSection />
      <BrevettiFaqSection />
      <BrevettiCtaSection />
    </main>
  );
}
