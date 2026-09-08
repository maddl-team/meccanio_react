import type {
  ApproachChip,
  Domain,
  FaqItem,
  FooterLink,
  Pillar,
  ResourceCard,
} from "@/types/content";

export const azienda = {
  title: "Azienda",
  description:
    "Meccanio nasce dalla progettazione meccanica, dall’automazione industriale e dalla ricerca applicata. 25 anni di ingegneria italiana al servizio del corpo umano.",
  heroImage: "/images/azienda/hero.jpg",
  heroImageAlt: "Ufficio tecnico e officina Meccanio",
} as const;

export const approachChips: ApproachChip[] = [
  { label: "Analisi dell’esigenza" },
  { label: "Scelta del modello" },
  { label: "Prova sul campo" },
  { label: "Formazione" },
  { label: "Assistenza in Italia" },
];

export const pillars: Pillar[] = [
  {
    step: "01",
    title: "Esperienza ingegneristica",
    desc: "25+ anni in progettazione meccanica, automazione industriale, prototipazione e sviluppo di soluzioni tecniche avanzate, con brevetti nazionali depositati in questi ambiti.",
    variant: "light",
  },
  {
    step: "02",
    title: "Selezione qualificata",
    desc: "Non produciamo esoscheletri proprietari: li selezioniamo, valutandoli con competenza tecnica reale, non solo commerciale, tra le soluzioni disponibili sul mercato.",
    variant: "dark",
  },
  {
    step: "03",
    title: "Supporto locale",
    desc: "Dimostrazioni sul campo, formazione e assistenza post-vendita direttamente in Italia, prima e dopo l’acquisto — per aziende e per privati.",
    variant: "light",
  },
];

export const domains: Domain[] = [
  { no: "01", name: "Automazione" },
  { no: "02", name: "Macchine speciali" },
  { no: "03", name: "Energia" },
  { no: "04", name: "Healthcare" },
  { no: "05", name: "Sistemi industriali" },
  { no: "06", name: "Sicurezza sul lavoro" },
];

export const resources: ResourceCard[] = [
  {
    href: "/brevetti",
    kicker: "Collaborazioni",
    title: "Referenze",
    desc: "Enti di ricerca, università e aziende industriali con cui abbiamo lavorato.",
    cta: "Vai a Brevetti e progettazione →",
    image: "/images/azienda/referenze.jpg",
    imageAlt: "Collaborazione tecnica in ambiente industriale",
  },
  {
    href: "/brevetti",
    kicker: "Ricerca applicata",
    title: "Studi tecnici",
    desc: "Studi e approfondimenti sviluppati negli anni dal nostro ufficio tecnico.",
    cta: "Vai a Brevetti e progettazione →",
    image: "/images/azienda/studi.jpg",
    imageAlt: "Documentazione tecnica e progettazione meccanica",
  },
];

export const faqs: FaqItem[] = [
  {
    q: "Meccanio produce gli esoscheletri o li seleziona?",
    a: "Meccanio non produce esoscheletri propri: li seleziona, li integra nei diversi contesti d’uso e garantisce dimostrazione, formazione e assistenza post-vendita, forte di un background ingegneristico maturato in 25 anni di attività.",
  },
  {
    q: "Che esperienza ha Meccanio prima di entrare nel mercato degli esoscheletri?",
    a: "Oltre 25 anni in progettazione meccanica, automazione industriale, prototipazione, con brevetti nazionali e collaborazioni con enti di ricerca, università e aziende industriali.",
  },
  {
    q: "Perché scegliere Meccanio invece di acquistare direttamente dal produttore?",
    a: "Perché offriamo un percorso completo — analisi dell’esigenza, scelta del modello corretto, demo sul campo, formazione e assistenza sul territorio italiano — che un acquisto diretto dal produttore non sempre garantisce.",
  },
];

export const footerAzienda: FooterLink[] = [
  { href: "/azienda", label: "Chi siamo" },
  { href: "/brevetti", label: "Brevetti e progettazione" },
  { href: "/futuro", label: "Visione" },
];

export const footerAziendaSoluzioni: FooterLink[] = [
  { href: "/hapo", label: "HAPO · esoscheletri passivi" },
  { href: "/hypershell", label: "HyperShell · serie X" },
  { href: "/#settori", label: "Settori di applicazione" },
  { href: "/#metodo", label: "Come lavoriamo" },
];
