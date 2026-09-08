import type { DesignArea, FaqItem, FutureDirection } from "@/types/content";

export const futuro = {
  title: "Il Futuro di Meccanio: Robotica e Cibernetica",
  description:
    "Oltre l'esoscheletro: la visione Meccanio per le tecnologie robotiche e cibernetiche applicate alla persona, al lavoro e alla sicurezza.",
  heroImage: "/images/vision/robots.jpg",
  announcement: "Società di ingegneria · Robotica e cibernetica · Direzione futura",
} as const;

export const futureDirections: FutureDirection[] = [
  {
    no: "01",
    title: "Robot quadrupedi",
    desc: "Sistemi robotici per ambienti difficili, pericolosi o inaccessibili, dove serve un supporto operativo che riduca l’esposizione al rischio per le persone.",
    href: "/futuro/robot-quadrupedi",
    cta: "Approfondisci →",
    image: "/images/futuro/quadrupede.jpg",
    imageAlt: "Robot quadrupede in un ambiente industriale",
  },
  {
    no: "02",
    title: "Umanoidi",
    desc: "Piattaforme robotiche pensate per attività ripetitive, di sorveglianza o di assistenza in contesti professionali e domestici.",
    href: "/futuro/umanoidi",
    cta: "Approfondisci →",
    image: "/images/futuro/umanoide.jpg",
    imageAlt: "Robot umanoide in un contesto professionale",
  },
  {
    no: "03",
    title: "Sistemi di assistenza e sicurezza",
    desc: "Tecnologie di supporto per persone fragili, con disabilità o in contesti che richiedono maggiore sicurezza operativa.",
    href: "/futuro/sistemi-di-assistenza-e-sicurezza",
    cta: "Approfondisci →",
    image: "/images/futuro/assistenza.jpg",
    imageAlt: "Supporto alla mobilità e all’autonomia della persona",
  },
];

export const futuroFaqs: FaqItem[] = [
  {
    q: "Meccanio vende già robot quadrupedi o umanoidi?",
    a: "Non ancora: al momento la gamma commerciale di Meccanio è concentrata sugli esoscheletri HAPO e HyperShell. Le tecnologie robotiche descritte in questa sezione rappresentano la direzione futura dell’azienda, non un catalogo già disponibile.",
  },
  {
    q: "Quando saranno disponibili queste tecnologie?",
    a: "Non è ancora definita una tempistica commerciale; questa sezione verrà aggiornata non appena le nuove categorie di prodotto saranno effettivamente in catalogo.",
  },
  {
    q: "Posso essere avvisato quando queste tecnologie saranno disponibili?",
    a: "Contattaci per essere aggiornato quando la gamma si amplierà verso queste nuove categorie.",
  },
];

export const quadrupedi = {
  title: "Robot Quadrupedi: la Visione Futura di Meccanio",
  description:
    "Robot quadrupedi per ambienti difficili e pericolosi: la direzione futura di Meccanio nella robotica applicata alla sicurezza sul lavoro.",
  heroImage: "/images/futuro/quadrupede.jpg",
} as const;

export const quadrupediApps: DesignArea[] = [
  {
    no: "01",
    title: "Ispezione di siti industriali",
    desc: "Monitoraggio di impianti, linee produttive o infrastrutture estese, anche in condizioni non sempre agevoli per un operatore umano.",
  },
  {
    no: "02",
    title: "Ambienti pericolosi o inaccessibili",
    desc: "Accesso a spazi con rischi specifici — chimici, strutturali, ambientali — dove un sistema robotico riduce l’esposizione diretta delle persone.",
  },
  {
    no: "03",
    title: "Sorveglianza di aree estese",
    desc: "Pattugliamento e monitoraggio di siti industriali o infrastrutturali su superfici ampie.",
  },
  {
    no: "04",
    title: "Supporto ad attività ripetitive",
    desc: "Compiti di controllo e monitoraggio ripetuti nel tempo, dove un sistema automatizzato può integrare il lavoro umano.",
  },
];

export const quadrupediFaqs: FaqItem[] = [
  {
    q: "Meccanio distribuisce già robot quadrupedi?",
    a: "No, questa pagina descrive una direzione tecnologica futura di Meccanio, non un prodotto attualmente disponibile.",
  },
  {
    q: "A chi si rivolgerà questa tecnologia, quando disponibile?",
    a: "Principalmente ad aziende industriali, gestori di infrastrutture e organizzazioni che operano in ambienti con esigenze di ispezione, sorveglianza o sicurezza in contesti difficili.",
  },
];

export const assistenza = {
  title: "Sistemi di Assistenza e Sicurezza: Visione Meccanio",
  description:
    "Tecnologie di assistenza per persone fragili e sistemi di sicurezza operativa: la direzione futura di Meccanio verso la robotica applicata alla persona.",
  heroImage: "/images/futuro/assistenza.jpg",
} as const;

export const assistenzaApps: DesignArea[] = [
  {
    no: "01",
    title: "Supporto a persone fragili o con disabilità",
    desc: "Tecnologie pensate per aumentare l'autonomia e la sicurezza quotidiana di chi ha esigenze specifiche di mobilità o assistenza.",
  },
  {
    no: "02",
    title: "Sicurezza in ambienti di lavoro complessi",
    desc: "Sistemi di monitoraggio e prevenzione del rischio in contesti industriali con esigenze di sicurezza elevate.",
  },
  {
    no: "03",
    title: "Mobilità aumentata",
    desc: "Soluzioni che estendono l'autonomia di movimento oltre quanto già offerto dagli esoscheletri, per esigenze più specifiche o complesse.",
  },
  {
    no: "04",
    title: "Ambienti pericolosi o sensibili",
    desc: "Tecnologie di assistenza per contesti dove la sicurezza della persona richiede un supporto tecnologico dedicato.",
  },
];

export const assistenzaFaqs: FaqItem[] = [
  {
    q: "Meccanio offre già sistemi di assistenza per persone con disabilità?",
    a: "No, questa pagina descrive una direzione tecnologica futura di Meccanio, non un prodotto attualmente disponibile.",
  },
  {
    q: "Questi sistemi saranno pensati per un pubblico privato o istituzionale?",
    a: "La visione include entrambi gli ambiti: supporto a persone e famiglie, e soluzioni per organizzazioni e strutture con esigenze di sicurezza o assistenza specifiche.",
  },
];

export const umanoidi = {
  title: "Umanoidi: la Visione Futura di Meccanio",
  description:
    "Piattaforme robotiche umanoidi per attività ripetitive, sorveglianza e assistenza: la direzione futura di Meccanio nella robotica applicata.",
  heroImage: "/images/futuro/umanoide.jpg",
} as const;

export const umanoidiApps: DesignArea[] = [
  {
    no: "01",
    title: "Attività ripetitive in ambito industriale",
    desc: "Compiti standardizzati e ripetuti nel tempo, dove un sistema umanoide può integrare il lavoro degli operatori.",
  },
  {
    no: "02",
    title: "Sorveglianza e monitoraggio",
    desc: "Presidio di spazi industriali o commerciali, in affiancamento ai sistemi di sicurezza già presenti.",
  },
  {
    no: "03",
    title: "Assistenza in contesti professionali",
    desc: "Supporto operativo in ambienti di lavoro strutturati, dove servono task ripetibili con costanza.",
  },
  {
    no: "04",
    title: "Assistenza domestica",
    desc: "Supporto nella vita quotidiana, in continuità con la missione Meccanio di ridurre la fatica e aumentare l'autonomia delle persone.",
  },
];

export const umanoidiFaqs: FaqItem[] = [
  {
    q: "Meccanio distribuisce già robot umanoidi?",
    a: "No, questa pagina descrive una direzione tecnologica futura di Meccanio, non un prodotto attualmente disponibile.",
  },
  {
    q: "Gli umanoidi Meccanio saranno pensati per uso domestico o professionale?",
    a: "La visione include entrambi gli ambiti: assistenza in contesti professionali e supporto nella vita quotidiana domestica.",
  },
];
