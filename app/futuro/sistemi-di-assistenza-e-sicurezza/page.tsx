import type { Metadata } from "next";
import { AssistenzaAppsSection } from "@/components/futuro/AssistenzaAppsSection";
import { AssistenzaCtaSection } from "@/components/futuro/AssistenzaCtaSection";
import { AssistenzaFaqSection } from "@/components/futuro/AssistenzaFaqSection";
import { AssistenzaHero } from "@/components/futuro/AssistenzaHero";
import { AssistenzaMissionSection } from "@/components/futuro/AssistenzaMissionSection";
import { assistenza } from "@/data/futuro";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: assistenza.title,
  },
  description: assistenza.description,
  alternates: {
    canonical: "/futuro/sistemi-di-assistenza-e-sicurezza",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/futuro/sistemi-di-assistenza-e-sicurezza",
    siteName: site.name,
    title: assistenza.title,
    description: assistenza.description,
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: assistenza.title,
  description: assistenza.description,
  url: `${site.url}/futuro/sistemi-di-assistenza-e-sicurezza`,
  isPartOf: {
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  },
};

export default function SistemiAssistenzaSicurezzaPage() {
  return (
    <main id="contenuto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <AssistenzaHero />
      <AssistenzaAppsSection />
      <AssistenzaMissionSection />
      <AssistenzaFaqSection />
      <AssistenzaCtaSection />
    </main>
  );
}
