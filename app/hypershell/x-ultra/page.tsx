import type { Metadata } from "next";
import { ProductInbox } from "@/components/hypershell/product/ProductInbox";
import { ProductBreadcrumb } from "@/components/hypershell/product/ProductBreadcrumb";
import { ProductBuySection } from "@/components/hypershell/product/ProductBuySection";
import { ProductFaq } from "@/components/hypershell/product/ProductFaq";
import { ProductFeatures } from "@/components/hypershell/product/ProductFeatures";
import { ProductKeySpecs } from "@/components/hypershell/product/ProductKeySpecs";
import { ProductReviews } from "@/components/hypershell/product/ProductReviews";
import { ProductSpecTable } from "@/components/hypershell/product/ProductSpecTable";
import { hyperXUltra, ultraFaqs, ultraGallery } from "@/data/hypershell-x-ultra";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: hyperXUltra.title,
  },
  description: hyperXUltra.description,
  alternates: {
    canonical: hyperXUltra.href,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: hyperXUltra.href,
    siteName: site.name,
    title: hyperXUltra.title,
    description: hyperXUltra.description,
    images: [
      {
        url: ultraGallery[0].src,
        alt: ultraGallery[0].alt,
      },
    ],
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${hyperXUltra.name} ${hyperXUltra.model}`,
  description: hyperXUltra.description,
  image: `${site.url}${ultraGallery[0].src}`,
  brand: {
    "@type": "Brand",
    name: "HyperShell",
  },
  sku: "hypershell-x-ultra",
  offers: {
    "@type": "Offer",
    url: `${site.url}${hyperXUltra.href}`,
    priceCurrency: hyperXUltra.currency,
    price: hyperXUltra.priceAmount,
    availability: "https://schema.org/InStock",
    priceValidUntil: "2026-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: hyperXUltra.reviewsCount,
    bestRating: "5",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ultraFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function HyperShellXUltraPage() {
  return (
    <main id="contenuto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ProductBreadcrumb />
      <ProductBuySection />
      <ProductKeySpecs />
      <ProductFeatures />
      <ProductSpecTable />
      <ProductInbox />
      <ProductReviews />
      <ProductFaq />
    </main>
  );
}
