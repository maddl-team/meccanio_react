import type { Metadata } from "next";
import { HyperShellAudiencesSection } from "@/components/hypershell/HyperShellAudiencesSection";
import { HyperShellCtaSection } from "@/components/hypershell/HyperShellCtaSection";
import { HyperShellEngineSection } from "@/components/hypershell/HyperShellEngineSection";
import { HyperShellFaqSection } from "@/components/hypershell/HyperShellFaqSection";
import { HyperShellHero } from "@/components/hypershell/HyperShellHero";
import { HyperShellIntroSection } from "@/components/hypershell/HyperShellIntroSection";
import { HyperShellModelsSection } from "@/components/hypershell/HyperShellModelsSection";
import { HyperShellTechSection } from "@/components/hypershell/HyperShellTechSection";
import { hyperFaqs, hyperModels, hypershell } from "@/data/hypershell";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: hypershell.title,
  },
  description: hypershell.description,
  alternates: {
    canonical: "/hypershell",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/hypershell",
    siteName: site.name,
    title: hypershell.title,
    description: hypershell.description,
    images: [
      {
        url: hypershell.heroImage,
        alt: hypershell.heroImageAlt,
      },
    ],
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: hypershell.title,
  description: hypershell.description,
  url: `${site.url}/hypershell`,
  isPartOf: {
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  },
  about: hyperModels.map((model) => ({
    "@type": "Product",
    name: `${model.name} ${model.accent}`,
    description: model.desc,
    brand: {
      "@type": "Brand",
      name: "HyperShell",
    },
    image: `${site.url}${model.image}`,
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: hyperFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function HyperShellPage() {
  return (
    <main id="contenuto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HyperShellHero />
      <HyperShellIntroSection />
      <HyperShellModelsSection />
      <HyperShellTechSection />
      <HyperShellEngineSection />
      <HyperShellAudiencesSection />
      <HyperShellFaqSection />
      <HyperShellCtaSection />
    </main>
  );
}
