import type { FaqItem, HapoModel, HapoSectorTile, MethodStep } from "@/types/content";

export const hapoConsultHref = "/contatti?motivo=hapo#form";

export const hapo = {
  title: "HAPO — Esoscheletri Professionali per il Lavoro | Meccanio",
  description:
    "Esoscheletri passivi HAPO per ridurre fatica e infortuni sul lavoro: schiena, spalle, collo. Analisi, demo e formazione con i tecnici Meccanio.",
  announcement:
    "HAPO · Esoscheletri professionali · Consulenza e demo gratuita per aziende",
  heroImage: "/images/hapo/hero.webp",
  heroImageAlt: "Operatore con esoscheletro HAPO",
  passiveImage: "/images/hapo/passive.webp",
  passiveImageAlt: "Meccanismo passivo HAPO",
} as const;

export const hapoModels: HapoModel[] = [
  {
    name: "HAPO",
    accent: "Back",
    desc: "Riduce il carico su schiena e zona lombare durante sollevamento e movimentazione manuale dei carichi. Indicato per logistica, magazzini, cantieri e movimentazione merci.",
    image: "/images/hapo/back.png",
    imageAlt: "HAPO Back",
    href: hapoConsultHref,
  },
  {
    name: "HAPO",
    accent: "Up",
    desc: "Supporta spalle e braccia nei lavori prolungati sopra la testa o a braccia tese. Indicato per manutenzione, impiantistica, montaggio e linee di produzione.",
    image: "/images/hapo/up.png",
    imageAlt: "HAPO Up",
    href: hapoConsultHref,
  },
  {
    name: "HAPO",
    accent: "Neck",
    desc: "Riduce la tensione cervicale in postazioni con inclinazione prolungata del capo. Indicato per attività di precisione, ispezione, sanità e assistenza.",
    image: "/images/hapo/neck.png",
    imageAlt: "HAPO Neck",
    href: hapoConsultHref,
  },
];

export const hapoMethodSteps: MethodStep[] = [
  {
    no: "01",
    title: "Analisi dell'esigenza",
    desc: "Studiamo i compiti svolti, le zone del corpo sotto sforzo e l'ambiente di lavoro.",
  },
  {
    no: "02",
    title: "Scelta del modello",
    desc: "Indichiamo il dispositivo HAPO più adatto, non il più costoso.",
  },
  {
    no: "03",
    title: "Dimostrazione sul campo",
    desc: "Il modello viene provato direttamente dagli operatori, nel contesto reale.",
  },
  {
    no: "04",
    title: "Formazione",
    desc: "Gli operatori imparano a indossare e regolare correttamente il dispositivo.",
  },
  {
    no: "05",
    title: "Assistenza post-vendita",
    desc: "Supporto tecnico e manutenzione sul territorio italiano.",
  },
];

export const hapoSectors: HapoSectorTile[] = [
  {
    name: "Industria",
    image: "/images/hapo/settori/industria.png",
    imageAlt: "Operatore in industria con esoscheletro HAPO",
  },
  {
    name: "Logistica",
    image: "/images/hapo/settori/logistica.webp",
    imageAlt: "Operatore di magazzino con esoscheletro HAPO",
  },
  {
    name: "Cantieri",
    image: "/images/hapo/settori/cantieri.webp",
    imageAlt: "Muratore in cantiere con esoscheletro HAPO",
  },
  {
    name: "Manutenzione",
    image: "/images/hapo/settori/manutenzione.png",
    imageAlt: "Meccanico in manutenzione con esoscheletro HAPO",
  },
  {
    name: "Agricoltura",
    image: "/images/hapo/settori/agricoltura.webp",
    imageAlt: "Operatore agricolo con esoscheletro HAPO",
  },
  {
    name: "Sanità",
    image: "/images/hapo/settori/sanita.webp",
    imageAlt: "Operatore sanitario con esoscheletro HAPO",
  },
];

export const hapoFaqs: FaqItem[] = [
  {
    q: "Come scelgo l'esoscheletro giusto per la mia azienda?",
    a: "I nostri tecnici analizzano i compiti svolti, le zone del corpo sotto sforzo e l'ambiente di lavoro, poi propongono il modello HAPO più adatto con una dimostrazione sul campo e formazione per gli operatori.",
  },
  {
    q: "Gli esoscheletri HAPO si possono indossare tutto il giorno?",
    a: "Sì: essendo dispositivi passivi, senza batteria, sono progettati per l'uso prolungato durante l'intero turno di lavoro.",
  },
  {
    q: "Serve formazione per usare un esoscheletro professionale?",
    a: "Sì. Ogni fornitura HAPO include una sessione di formazione per gli operatori su indossabilità, regolazione e utilizzo corretto del dispositivo.",
  },
  {
    q: "Posso acquistare una singola unità HAPO senza passare da un preventivo aziendale?",
    a: "Sì: per una singola unità o per una fornitura aziendale, contattaci. I tecnici Meccanio ti indicano il modello corretto e la modalità di fornitura più adatta.",
  },
];
