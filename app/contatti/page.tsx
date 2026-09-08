import type { Metadata } from "next";
import { ContactDetailsSection } from "@/components/contatti/ContactDetailsSection";
import { ContactFaqSection } from "@/components/contatti/ContactFaqSection";
import { ContactFormSection } from "@/components/contatti/ContactFormSection";
import { ContactReasonsSection } from "@/components/contatti/ContactReasonsSection";
import { ContattiHero } from "@/components/contatti/ContattiHero";
import { contatti } from "@/data/contatti";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: contatti.title,
  },
  description: contatti.description,
  alternates: {
    canonical: "/contatti",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/contatti",
    siteName: site.name,
    title: contatti.title,
    description: contatti.description,
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: contatti.title,
  description: contatti.description,
  url: `${site.url}/contatti`,
  isPartOf: {
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  },
  mainEntity: {
    "@type": "Organization",
    name: site.legalName,
    email: site.email,
    telephone: "+39-06-9125-0664",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: "Pomezia",
      postalCode: "00071",
      addressRegion: "RM",
      addressCountry: "IT",
    },
  },
};

export default async function ContattiPage({
  searchParams,
}: PageProps<"/contatti">) {
  const params = await searchParams;
  const motivo = typeof params.motivo === "string" ? params.motivo : undefined;

  return (
    <main id="contenuto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <ContattiHero />
      <ContactReasonsSection />
      <ContactFormSection key={motivo ?? "default"} defaultMotivo={motivo} />
      <ContactDetailsSection />
      <ContactFaqSection />
    </main>
  );
}
