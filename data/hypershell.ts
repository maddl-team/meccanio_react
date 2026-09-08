import type {
  FaqItem,
  HapoSectorTile,
  HyperShellModel,
  MethodStep,
} from "@/types/content";

export const hyperConsultHref = "/contatti?motivo=hypershell#form";

export const hypershell = {
  title: "HyperShell — Esoscheletri Motorizzati Outdoor | Meccanio",
  description:
    "Scopri la serie HyperShell: esoscheletri motorizzati con AI MotionEngine per camminare più a lungo, con meno fatica. Trekking, sport, active aging.",
  announcement:
    "HyperShell · Esoscheletri motorizzati · Outdoor, sport e active aging",
  productAnnouncement:
    "Spedizione assicurata in tutta Italia · Demo su appuntamento · Supporto tecnico Meccanio",
  heroImage: "/images/hypershell/hero.jpg",
  heroImageAlt: "Escursionista con esoscheletro HyperShell su terreno roccioso",
  techImage: "/images/hypershell/tech.jpg",
  techImageAlt: "Dettaglio dei motori e della struttura HyperShell",
} as const;

export const hyperModels: HyperShellModel[] = [
  {
    name: "HyperShell",
    accent: "X Ultra",
    desc: "1000 W di potenza, 30 km di autonomia, 12 modalità. Prestazioni al vertice della gamma per le uscite più impegnative.",
    image: "/images/hypershell/ultra.png",
    imageAlt: "HyperShell X Ultra",
    href: "/hypershell/x-ultra",
    specs: [
      { label: "Potenza", value: "1000 W" },
      { label: "Autonomia", value: "30 km" },
      { label: "Modalità", value: "12" },
    ],
  },
  {
    name: "HyperShell",
    accent: "X Carbon",
    desc: "800 W, 17,5 km di autonomia, 10 modalità, 1,8 kg. La versione più leggera, pensata per chi cerca il minimo ingombro.",
    image: "/images/hypershell/carbon.png",
    imageAlt: "HyperShell X Carbon",
    href: hyperConsultHref,
    specs: [
      { label: "Potenza", value: "800 W" },
      { label: "Autonomia", value: "17,5 km" },
      { label: "Peso", value: "1,8 kg" },
    ],
  },
  {
    name: "HyperShell",
    accent: "X Pro",
    desc: "800 W, 17,5 km di autonomia, 10 modalità. Il più scelto: potenza bilanciata per ogni tipo di superficie.",
    image: "/images/hypershell/pro.png",
    imageAlt: "HyperShell X Pro",
    href: hyperConsultHref,
    specs: [
      { label: "Potenza", value: "800 W" },
      { label: "Autonomia", value: "17,5 km" },
      { label: "Modalità", value: "10" },
    ],
  },
  {
    name: "HyperShell",
    accent: "X Go",
    desc: "400 W, 15 km di autonomia, 6 modalità. Il supporto essenziale per il movimento quotidiano.",
    image: "/images/hypershell/go.png",
    imageAlt: "HyperShell X Go",
    href: hyperConsultHref,
    specs: [
      { label: "Potenza", value: "400 W" },
      { label: "Autonomia", value: "15 km" },
      { label: "Modalità", value: "6" },
    ],
  },
];

export const hyperEngineSteps: MethodStep[] = [
  {
    no: "01",
    title: "Spinta attiva",
    desc: "I motori elettrici aggiungono potenza a ogni passo, invece di limitarsi a redistribuire il carico.",
  },
  {
    no: "02",
    title: "AI MotionEngine",
    desc: "Il sistema riconosce il tuo passo, la pendenza e il terreno in tempo reale.",
  },
  {
    no: "03",
    title: "Regolazione continua",
    desc: "L'assistenza si adatta alla salita, al sentiero irregolare e alla camminata lunga.",
  },
  {
    no: "04",
    title: "Andatura naturale",
    desc: "Il risultato è una camminata che resta tua: meno sforzo, senza un'andatura spinta.",
  },
];

export const hyperAudiences: HapoSectorTile[] = [
  {
    name: "Trekking",
    image: "/images/hypershell/usi/trekking.jpg",
    imageAlt: "Escursionista con HyperShell su un sentiero in salita",
  },
  {
    name: "Sport",
    image: "/images/hypershell/usi/sport.jpg",
    imageAlt: "Atleta in movimento con esoscheletro HyperShell",
  },
  {
    name: "Alpinismo",
    image: "/images/hypershell/usi/alpinismo.jpg",
    imageAlt: "Alpinisti con HyperShell su una cresta innevata",
  },
  {
    name: "Mobilità",
    image: "/images/hypershell/usi/mobilita.jpg",
    imageAlt: "Due persone in cammino con HyperShell su un percorso pianeggiante",
  },
];

export const hyperFaqs: FaqItem[] = [
  {
    q: "Camminare con un esoscheletro è naturale?",
    a: "Sì: HyperShell assiste il movimento naturale della camminata, non lo sostituisce. Il sistema si adatta al tuo passo, non il contrario.",
  },
  {
    q: "HyperShell riduce davvero la fatica durante trekking e lunghe camminate?",
    a: "Sì, l'assistenza motorizzata riduce lo sforzo percepito nei tratti in salita e su terreni impegnativi, permettendo di percorrere distanze maggiori con meno affaticamento.",
  },
  {
    q: "Usare un esoscheletro indebolisce i muscoli?",
    a: "HyperShell è pensato come supporto al movimento, non come sostituto: assiste lo sforzo senza eliminarlo, mantenendo l'utente attivo durante l'attività.",
  },
  {
    q: "HyperShell è adatto anche a senior e utenti non tecnici?",
    a: "Sì, i comandi e le modalità sono pensati per essere intuitivi anche per chi non ha familiarità con dispositivi tecnologici complessi.",
  },
];
