import type { Metadata } from "next";
import { UmanoidiAppsSection } from "@/components/futuro/UmanoidiAppsSection";
import { UmanoidiContinuitySection } from "@/components/futuro/UmanoidiContinuitySection";
import { UmanoidiCtaSection } from "@/components/futuro/UmanoidiCtaSection";
import { UmanoidiFaqSection } from "@/components/futuro/UmanoidiFaqSection";
import { UmanoidiHero } from "@/components/futuro/UmanoidiHero";
import { umanoidi } from "@/data/futuro";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: umanoidi.title,
  },
  description: umanoidi.description,
  alternates: {
    canonical: "/futuro/umanoidi",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/futuro/umanoidi",
    siteName: site.name,
    title: umanoidi.title,
    description: umanoidi.description,
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: umanoidi.title,
  description: umanoidi.description,
  url: `${site.url}/futuro/umanoidi`,
  isPartOf: {
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  },
};

export default function UmanoidiPage() {
  return (
    <main id="contenuto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <UmanoidiHero />
      <UmanoidiAppsSection />
      <UmanoidiContinuitySection />
      <UmanoidiFaqSection />
      <UmanoidiCtaSection />
    </main>
  );
}
