import type { Metadata } from "next";
import { HapoCtaSection } from "@/components/hapo/HapoCtaSection";
import { HapoFaqSection } from "@/components/hapo/HapoFaqSection";
import { HapoHero } from "@/components/hapo/HapoHero";
import { HapoIntroSection } from "@/components/hapo/HapoIntroSection";
import { HapoMethodSection } from "@/components/hapo/HapoMethodSection";
import { HapoModelsSection } from "@/components/hapo/HapoModelsSection";
import { HapoSectorsSection } from "@/components/hapo/HapoSectorsSection";
import { HapoTechSection } from "@/components/hapo/HapoTechSection";
import { hapo, hapoFaqs, hapoModels } from "@/data/hapo";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: hapo.title,
  },
  description: hapo.description,
  alternates: {
    canonical: "/hapo",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/hapo",
    siteName: site.name,
    title: hapo.title,
    description: hapo.description,
    images: [
      {
        url: hapo.heroImage,
        alt: hapo.heroImageAlt,
      },
    ],
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: hapo.title,
  description: hapo.description,
  url: `${site.url}/hapo`,
  isPartOf: {
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  },
  about: hapoModels.map((model) => ({
    "@type": "Product",
    name: `${model.name} ${model.accent}`,
    description: model.desc,
    brand: {
      "@type": "Brand",
      name: "HAPO",
    },
    image: `${site.url}${model.image}`,
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: hapoFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function HapoPage() {
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
      <HapoHero />
      <HapoIntroSection />
      <HapoTechSection />
      <HapoModelsSection />
      <HapoMethodSection />
      <HapoSectorsSection />
      <HapoFaqSection />
      <HapoCtaSection />
    </main>
  );
}
