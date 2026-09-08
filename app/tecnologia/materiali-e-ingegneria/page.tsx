import type { Metadata } from "next";
import { AppliedEngineeringSection } from "@/components/tecnologia/AppliedEngineeringSection";
import { MaterialiCtaSection } from "@/components/tecnologia/MaterialiCtaSection";
import { MaterialiFaqSection } from "@/components/tecnologia/MaterialiFaqSection";
import { MaterialiHero } from "@/components/tecnologia/MaterialiHero";
import { MaterialTypesSection } from "@/components/tecnologia/MaterialTypesSection";
import { PaddingSection } from "@/components/tecnologia/PaddingSection";
import { WeightSection } from "@/components/tecnologia/WeightSection";
import { materiali } from "@/data/tecnologia";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: materiali.title,
  },
  description: materiali.description,
  alternates: {
    canonical: "/tecnologia/materiali-e-ingegneria",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/tecnologia/materiali-e-ingegneria",
    siteName: site.name,
    title: materiali.title,
    description: materiali.description,
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: materiali.title,
  description: materiali.description,
  url: `${site.url}/tecnologia/materiali-e-ingegneria`,
  isPartOf: {
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  },
};

export default function MaterialiPage() {
  return (
    <main id="contenuto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <MaterialiHero />
      <MaterialTypesSection />
      <PaddingSection />
      <WeightSection />
      <AppliedEngineeringSection />
      <MaterialiFaqSection />
      <MaterialiCtaSection />
    </main>
  );
}
