import type {
  EvolutionStep,
  FooterColumn,
  FooterLink,
  FutureFamily,
  MethodStep,
  NavItem,
  PartnerValue,
  Sector,
  Service,
  SolutionFamily,
  TrustBadge,
  TrustStat,
} from "@/types/content";

export const site = {
  name: "Meccanio",
  legalName: "Meccanio Srl",
  url: "https://www.meccanio.it",
  email: "staff@meccanio.it",
  phone: "06 91 25 06 64",
  phoneHref: "tel:0691250664",
  address: {
    street: "via della Solfarata, 130",
    city: "00071 Pomezia (RM)",
  },
  title: "Meccanio — Dalla meccanica alla robotica per la persona",
  description:
    "Oltre 25 anni di progettazione meccanica, macchine e automazione industriale. Oggi selezioniamo, integriamo e supportiamo tecnologie robotiche applicate al lavoro e alle capacità umane.",
  heroVideo: "/videos/hero.mp4",
} as const;

export const announcement = {
  text: "Società di ingegneria · Robotica applicata alla persona e al lavoro · Roma e Centro Italia",
  cta: "Parla con noi ›",
  href: "/contatti",
} as const;

export const navItems: NavItem[] = [
  {
    href: "/azienda",
    label: "Azienda",
    children: [
      { href: "/azienda", label: "Chi siamo" },
      { href: "/brevetti", label: "Brevetti" },
    ],
  },
  { href: "/hapo", label: "HAPO" },
  {
    href: "/hypershell",
    label: "HyperShell",
    children: [
      { href: "/hypershell", label: "La linea" },
      { href: "/hypershell/x-ultra", label: "X Ultra" },
    ],
  },
  {
    href: "/tecnologia",
    label: "Tecnologia",
    children: [
      { href: "/tecnologia", label: "La tecnologia" },
      { href: "/tecnologia/ai-motionengine", label: "AI MotionEngine" },
      {
        href: "/tecnologia/materiali-e-ingegneria",
        label: "Materiali e ingegneria",
      },
    ],
  },
  {
    href: "/futuro",
    label: "Visione",
    children: [
      { href: "/futuro", label: "Il futuro" },
      { href: "/futuro/robot-quadrupedi", label: "Robot quadrupedi" },
      { href: "/futuro/umanoidi", label: "Umanoidi" },
      {
        href: "/futuro/sistemi-di-assistenza-e-sicurezza",
        label: "Assistenza e sicurezza",
      },
    ],
  },
  { href: "/contatti", label: "Contatti" },
];

export const tickerItems = [
  "Progettazione meccanica",
  "Macchine speciali",
  "Automazione industriale",
  "Ricerca applicata",
  "Robotica collaborativa",
  "Robotica indossabile",
  "Aumento delle capacità umane",
] as const;

export const evolution: EvolutionStep[] = [
  {
    step: "01",
    title: "Meccanica",
    desc: "Progettazione, macchine, attrezzature speciali su commessa.",
    variant: "light",
  },
  {
    step: "02",
    title: "Automazione",
    desc: "Impianti automatici, linee, integrazione di controllo e movimento.",
    variant: "light",
  },
  {
    step: "03",
    title: "Robotica",
    desc: "Celle robotizzate e sistemi collaborativi in ambiente produttivo.",
    variant: "light",
  },
  {
    step: "04",
    title: "Robotica indossabile",
    desc: "Esoscheletri e wearable robotics applicati al corpo di chi lavora.",
    variant: "dark",
  },
  {
    step: "05",
    title: "Capacità umane",
    desc: "Tecnologie per l’aumento delle capacità fisiche e la sicurezza.",
    variant: "dark",
  },
];

export const trustStats: TrustStat[] = [
  { value: "25+", label: "anni di progettazione meccanica e automazione" },
  { value: "Brevetti", label: "nazionali registrati e supporto alla brevettazione" },
  { value: "R&D", label: "collaborazioni con università ed enti di ricerca" },
  { value: "Roma", label: "presidio diretto su Roma e Centro Italia" },
];

export const services: Service[] = [
  {
    no: "01",
    title: "Analisi e consulenza",
    desc: "Studiamo compiti, posture, carichi e ambiente per capire dove la tecnologia genera un beneficio misurabile.",
  },
  {
    no: "02",
    title: "Selezione tecnologica",
    desc: "Valutiamo e testiamo dispositivi di produttori italiani e internazionali, scegliendo quelli adatti al caso reale.",
  },
  {
    no: "03",
    title: "Integrazione e pilot",
    desc: "Demo, test sul campo e progetti pilota per verificare risultati e accettazione prima della fornitura.",
  },
  {
    no: "04",
    title: "Formazione e assistenza",
    desc: "Addestramento agli operatori, manutenzione e supporto tecnico continuativo sul territorio.",
  },
];

export const sectors: Sector[] = [
  {
    no: "01",
    name: "Industria",
    desc: "Linee di produzione, assemblaggio, lavorazioni ripetitive.",
    image: "/images/settori/industria.jpg",
    imageAlt: "Operatore in officina con esoscheletro passivo durante l’assemblaggio",
  },
  {
    no: "02",
    name: "Logistica",
    desc: "Movimentazione, picking, carico e scarico merci.",
    image: "/images/settori/logistica.jpg",
    imageAlt: "Operatore di magazzino con supporto cervicale HAPO",
  },
  {
    no: "03",
    name: "Edilizia",
    desc: "Cantieri, lavori sopra testa, utilizzo di attrezzature pesanti.",
    image: "/images/settori/edilizia.jpg",
    imageAlt: "Operaio edile con esoscheletro HAPO durante un lavoro in piegamento",
  },
  {
    no: "04",
    name: "Manutenzione",
    desc: "Interventi in postura scomoda e spazi ristretti.",
    image: "/images/settori/manutenzione.jpg",
    imageAlt: "Meccanico con esoscheletro HAPO in fossa di manutenzione",
  },
  {
    no: "05",
    name: "Sanità",
    desc: "Assistenza al paziente, movimentazione, riabilitazione.",
    image: "/images/settori/sanita.jpg",
    imageAlt: "Operatrice sanitaria con esoscheletro HAPO durante l’assistenza a un paziente",
  },
  {
    no: "06",
    name: "Mobilità",
    desc: "Spostamenti quotidiani e supporto alla camminata.",
    image: "/images/settori/mobilita.jpg",
    imageAlt: "Escursionista con esoscheletro motorizzato HyperShell su un sentiero roccioso",
  },
  {
    no: "07",
    name: "Active aging",
    desc: "Autonomia e attività fisica prolungata nel tempo.",
    image: "/images/settori/active-aging.jpg",
    imageAlt: "Persona matura in cammino con esoscheletro motorizzato per la deambulazione",
  },
  {
    no: "08",
    name: "Sicurezza",
    desc: "Operatori in ambienti difficili e interventi prolungati.",
    image: "/images/settori/sicurezza.jpg",
    imageAlt: "Operatore in DPI con esoscheletro durante un’ispezione in ambiente industriale",
  },
];

export const methodSteps: MethodStep[] = [
  { no: "01", title: "Analisi dell’esigenza", desc: "Sopralluogo e studio dei compiti reali." },
  { no: "02", title: "Individuazione tecnologia", desc: "Scelta della famiglia e del dispositivo adatto." },
  { no: "03", title: "Demo e test", desc: "Prova diretta con gli operatori coinvolti." },
  { no: "04", title: "Pilot", desc: "Periodo di utilizzo con misurazione dei risultati." },
  { no: "05", title: "Formazione", desc: "Addestramento all’uso corretto e sicuro." },
  { no: "06", title: "Fornitura", desc: "Deployment e configurazione sul campo." },
  { no: "07", title: "Assistenza", desc: "Manutenzione e supporto tecnico continuativo." },
];

export const futureFamilies: FutureFamily[] = [
  {
    no: "01",
    status: "Disponibile",
    title: "Wearable robotics",
    desc: "Esoscheletri passivi e attivi di più produttori, selezionati per compito.",
    href: "/hapo",
  },
  {
    no: "02",
    status: "In valutazione",
    title: "Robot collaborativi",
    desc: "Cobot per postazioni di lavoro assistite e manipolazione condivisa.",
    href: "/futuro",
  },
  {
    no: "03",
    status: "In valutazione",
    title: "Sistemi mobili",
    desc: "Piattaforme mobili per trasporto e ispezione in ambienti produttivi.",
    href: "/futuro",
  },
  {
    no: "04",
    status: "In valutazione",
    title: "Quadrupedi",
    desc: "Robot a quattro zampe per ispezione, sicurezza e ambienti difficili.",
    href: "/futuro/robot-quadrupedi",
  },
  {
    no: "05",
    status: "Prospettiva",
    title: "Umanoidi",
    desc: "Robotica antropomorfa per attività di servizio e supporto operativo.",
    href: "/futuro/umanoidi",
  },
  {
    no: "06",
    status: "Prospettiva",
    title: "Assistenza alla persona",
    desc: "Sistemi robotici di supporto per autonomia, cura e riabilitazione.",
    href: "/futuro/sistemi-di-assistenza-e-sicurezza",
  },
];

export const partnerValues: PartnerValue[] = [
  {
    no: "01",
    title: "Competenza tecnica",
    desc: "Ingegneri e progettisti in grado di valutare e spiegare la tecnologia.",
  },
  {
    no: "02",
    title: "Demo e pilot",
    desc: "Capacità di far provare il prodotto in contesto reale al cliente finale.",
  },
  {
    no: "03",
    title: "Presidio territoriale",
    desc: "Roma e Centro Italia in diretta, sviluppo su scala nazionale.",
  },
  {
    no: "04",
    title: "Post-vendita",
    desc: "Formazione, manutenzione e assistenza gestite internamente.",
  },
];

export const solutionFamilies: SolutionFamily[] = [
  {
    href: "/hapo",
    name: "HAPO",
    badge: "Esoscheletri passivi · Lavoro",
    desc: "Riduzione di fatica e sovraccarichi su schiena, spalle, braccia e collo. Selezionati per compito e zona del corpo, con demo in azienda e formazione agli operatori.",
    cta: "Vedi la linea HAPO →",
    image: "/images/solutions/hapo.webp",
    imageAlt: "Operatore in fabbrica con esoscheletro HAPO",
    variant: "hapo",
  },
  {
    href: "/hypershell",
    name: "HyperShell",
    badge: "Esoscheletri motorizzati · Mobilità",
    desc: "Assistenza attiva al passo per camminare più a lungo con meno fatica. Per mobilità quotidiana, outdoor, sport e active aging.",
    cta: "Vedi la serie X →",
    image: "/images/solutions/hypershell.jpg",
    imageAlt: "Escursionista con esoscheletro HyperShell",
    variant: "hyper",
  },
];

export const trustBadges: TrustBadge[] = [
  { title: "Analisi prima del prodotto", sub: "Nessuna fornitura senza valutazione dell’esigenza" },
  { title: "Demo e test sul campo", sub: "Si prova prima di decidere" },
  { title: "Assistenza in Italia", sub: "Supporto tecnico e formazione dirette" },
  { title: "Selezione indipendente", sub: "Tecnologie scelte in base ai risultati" },
];

export const footerColumns: FooterColumn[] = [
  {
    label: "Azienda",
    links: [
      { href: "/azienda", label: "Chi siamo" },
      { href: "/brevetti", label: "Brevetti" },
    ],
  },
  {
    label: "Soluzioni",
    links: [
      { href: "/hapo", label: "HAPO · esoscheletri passivi" },
      { href: "/hypershell", label: "HyperShell · serie X" },
      { href: "/hypershell/x-ultra", label: "HyperShell X Ultra" },
      { href: "/tecnologia", label: "Tecnologia" },
      { href: "/tecnologia/ai-motionengine", label: "AI MotionEngine" },
      { href: "/tecnologia/materiali-e-ingegneria", label: "Materiali e ingegneria" },
    ],
  },
  {
    label: "Visione",
    links: [
      { href: "/futuro", label: "Il futuro" },
      { href: "/futuro/robot-quadrupedi", label: "Robot quadrupedi" },
      { href: "/futuro/umanoidi", label: "Umanoidi" },
      {
        href: "/futuro/sistemi-di-assistenza-e-sicurezza",
        label: "Assistenza e sicurezza",
      },
    ],
  },
];

export const footerLegal: FooterLink[] = [
  { href: "/contatti", label: "Privacy" },
  { href: "/contatti", label: "Cookie" },
  { href: "/contatti", label: "Termini" },
];
