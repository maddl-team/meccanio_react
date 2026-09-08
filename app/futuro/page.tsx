import type { Metadata } from "next";
import { DirectionsSection } from "@/components/futuro/DirectionsSection";
import { FuturoCtaSection } from "@/components/futuro/FuturoCtaSection";
import { FuturoFaqSection } from "@/components/futuro/FuturoFaqSection";
import { FuturoHero } from "@/components/futuro/FuturoHero";
import { WhyDirectionSection } from "@/components/futuro/WhyDirectionSection";
import { futuro } from "@/data/futuro";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: futuro.title,
  },
  description: futuro.description,
  alternates: {
    canonical: "/futuro",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/futuro",
    siteName: site.name,
    title: futuro.title,
    description: futuro.description,
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: futuro.title,
  description: futuro.description,
  url: `${site.url}/futuro`,
  isPartOf: {
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  },
};

export default function FuturoPage() {
  return (
    <main id="contenuto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <FuturoHero />
      <DirectionsSection />
      <WhyDirectionSection />
      <FuturoFaqSection />
      <FuturoCtaSection />
    </main>
  );
}
