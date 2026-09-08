import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date("2026-09-07"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/azienda`,
      lastModified: new Date("2026-09-07"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/contatti`,
      lastModified: new Date("2026-09-07"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/hapo`,
      lastModified: new Date("2026-09-07"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/hypershell`,
      lastModified: new Date("2026-09-07"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/hypershell/x-ultra`,
      lastModified: new Date("2026-09-07"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/brevetti`,
      lastModified: new Date("2026-09-07"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/futuro`,
      lastModified: new Date("2026-09-07"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/futuro/robot-quadrupedi`,
      lastModified: new Date("2026-09-07"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${site.url}/futuro/umanoidi`,
      lastModified: new Date("2026-09-07"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${site.url}/futuro/sistemi-di-assistenza-e-sicurezza`,
      lastModified: new Date("2026-09-07"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
