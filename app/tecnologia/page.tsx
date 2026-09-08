import type { Metadata } from "next";
import { MaterialsSection } from "@/components/tecnologia/MaterialsSection";
import { MotionEngineSection } from "@/components/tecnologia/MotionEngineSection";
import { PrinciplesSection } from "@/components/tecnologia/PrinciplesSection";
import { SelectionSection } from "@/components/tecnologia/SelectionSection";
import { TecnologiaCtaSection } from "@/components/tecnologia/TecnologiaCtaSection";
import { TecnologiaFaqSection } from "@/components/tecnologia/TecnologiaFaqSection";
import { TecnologiaHero } from "@/components/tecnologia/TecnologiaHero";
import { tecnologia } from "@/data/tecnologia";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: tecnologia.title,
  },
  description: tecnologia.description,
  alternates: {
    canonical: "/tecnologia",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/tecnologia",
    siteName: site.name,
    title: tecnologia.title,
    description: tecnologia.description,
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: tecnologia.title,
  description: tecnologia.description,
  url: `${site.url}/tecnologia`,
  isPartOf: {
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  },
};

export default function TecnologiaPage() {
  return (
    <main id="contenuto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <TecnologiaHero />
      <PrinciplesSection />
      <MotionEngineSection />
      <MaterialsSection />
      <SelectionSection />
      <TecnologiaFaqSection />
      <TecnologiaCtaSection />
    </main>
  );
}
