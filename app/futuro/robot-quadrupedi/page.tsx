import type { Metadata } from "next";
import { QuadrupediAppsSection } from "@/components/futuro/QuadrupediAppsSection";
import { QuadrupediCompetenceSection } from "@/components/futuro/QuadrupediCompetenceSection";
import { QuadrupediCtaSection } from "@/components/futuro/QuadrupediCtaSection";
import { QuadrupediFaqSection } from "@/components/futuro/QuadrupediFaqSection";
import { QuadrupediHero } from "@/components/futuro/QuadrupediHero";
import { quadrupedi } from "@/data/futuro";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: quadrupedi.title,
  },
  description: quadrupedi.description,
  alternates: {
    canonical: "/futuro/robot-quadrupedi",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/futuro/robot-quadrupedi",
    siteName: site.name,
    title: quadrupedi.title,
    description: quadrupedi.description,
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: quadrupedi.title,
  description: quadrupedi.description,
  url: `${site.url}/futuro/robot-quadrupedi`,
  isPartOf: {
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  },
};

export default function RobotQuadrupediPage() {
  return (
    <main id="contenuto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <QuadrupediHero />
      <QuadrupediAppsSection />
      <QuadrupediCompetenceSection />
      <QuadrupediFaqSection />
      <QuadrupediCtaSection />
    </main>
  );
}
