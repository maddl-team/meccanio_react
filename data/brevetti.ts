import type { DesignArea, FaqItem, PatentSlot, ResourceCard } from "@/types/content";

export const brevetti = {
  title: "Brevetti e progettazione",
  description:
    "Brevetti nazionali e ambiti di progettazione meccanica di Meccanio: il fondamento tecnico dell’azienda, indipendentemente dal prodotto che oggi portiamo sul mercato.",
  heroImage: "/images/brevetti/hero.jpg",
  announcement: "Società di ingegneria · Brevetti nazionali · Ricerca applicata",
} as const;

export const patentSlots: PatentSlot[] = [
  { no: "01", label: "Brevetto — da inserire" },
  { no: "02", label: "Brevetto — da inserire" },
  { no: "03", label: "Brevetto — da inserire" },
  { no: "04", label: "Brevetto — da inserire" },
];

export const designAreas: DesignArea[] = [
  {
    no: "01",
    title: "Progettazione meccanica avanzata",
    desc: "Studi tecnici, modellazione 3D e prototipazione per soluzioni meccaniche complesse, sviluppate su misura per esigenze industriali specifiche.",
  },
  {
    no: "02",
    title: "Automazione industriale",
    desc: "Progettazione di macchine speciali e sistemi automatizzati per processi produttivi in diversi settori industriali.",
  },
  {
    no: "03",
    title: "Energia e healthcare",
    desc: "Esperienze applicate in ambito energetico e sanitario, con soluzioni meccaniche pensate per contesti tecnici specialistici.",
  },
  {
    no: "04",
    title: "Sistemi industriali complessi",
    desc: "Integrazione di componenti meccanici ed elettronici in sistemi industriali su scala produttiva.",
  },
];

export const brevettiResources: ResourceCard[] = [
  {
    href: "/azienda",
    kicker: "Collaborazioni",
    title: "Referenze",
    desc: "Enti di ricerca, università, aziende industriali e organismi per la sicurezza sul lavoro.",
    cta: "Vai a Chi siamo →",
    image: "/images/azienda/referenze.jpg",
    imageAlt: "Collaborazione tecnica in ambiente industriale",
  },
  {
    href: "/azienda",
    kicker: "Ricerca applicata",
    title: "Studi tecnici",
    desc: "Gli studi prodotti nel corso della nostra attività di progettazione.",
    cta: "Vai a Chi siamo →",
    image: "/images/azienda/studi.jpg",
    imageAlt: "Documentazione tecnica e progettazione meccanica",
  },
];

export const brevettiFaqs: FaqItem[] = [
  {
    q: "I brevetti di Meccanio riguardano anche gli esoscheletri?",
    a: "I brevetti nazionali di Meccanio riguardano l’attività storica di progettazione meccanica e innovazione tecnologica dell’azienda; gli esoscheletri HAPO e HyperShell sono dispositivi selezionati, non prodotti proprietari coperti da questi brevetti.",
  },
  {
    q: "Meccanio sviluppa anche prodotti su commissione per altre aziende?",
    a: "Le collaborazioni storiche di Meccanio in ambito di progettazione meccanica e prototipazione fanno parte del percorso aziendale: per richieste specifiche è possibile contattarci dalla pagina Contatti.",
  },
];
