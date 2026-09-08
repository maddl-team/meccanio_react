import type { Metadata } from "next";
import { AssistanceModesSection } from "@/components/tecnologia/AssistanceModesSection";
import { EngineStepsSection } from "@/components/tecnologia/EngineStepsSection";
import { InvisibleIntelligenceSection } from "@/components/tecnologia/InvisibleIntelligenceSection";
import { MotionEngineCtaSection } from "@/components/tecnologia/MotionEngineCtaSection";
import { MotionEngineFaqSection } from "@/components/tecnologia/MotionEngineFaqSection";
import { MotionEngineHero } from "@/components/tecnologia/MotionEngineHero";
import { WhyFixedSection } from "@/components/tecnologia/WhyFixedSection";
import { motionEngine } from "@/data/tecnologia";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: motionEngine.title,
  },
  description: motionEngine.description,
  alternates: {
    canonical: "/tecnologia/ai-motionengine",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/tecnologia/ai-motionengine",
    siteName: site.name,
    title: motionEngine.title,
    description: motionEngine.description,
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: motionEngine.title,
  description: motionEngine.description,
  url: `${site.url}/tecnologia/ai-motionengine`,
  isPartOf: {
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  },
};

export default function MotionEnginePage() {
  return (
    <main id="contenuto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <MotionEngineHero />
      <EngineStepsSection />
      <WhyFixedSection />
      <AssistanceModesSection />
      <InvisibleIntelligenceSection />
      <MotionEngineFaqSection />
      <MotionEngineCtaSection />
    </main>
  );
}
