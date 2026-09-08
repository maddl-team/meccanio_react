import type {
  FaqItem,
  ProductBadge,
  ProductBoxItem,
  ProductFeature,
  ProductGalleryShot,
  ProductKeySpec,
  ProductReassure,
  ProductReview,
  SpecTableRow,
} from "@/types/content";
import { hyperConsultHref } from "@/data/hypershell";

export const hyperXUltra = {
  slug: "x-ultra",
  href: "/hypershell/x-ultra",
  title: "HyperShell X Ultra | Meccanio",
  description:
    "HyperShell X Ultra: 1000 W, 30 km di autonomia, 1,8 kg e 12 modalità. Esoscheletro motorizzato con AI MotionEngine per le avventure più estreme.",
  kicker: "Serie HyperShell X",
  name: "HyperShell",
  model: "X Ultra",
  tagline: "Prestazioni eccellenti per le avventure più estreme.",
  lead: "Esoscheletro motorizzato con AI MotionEngine: assistenza adattiva a ogni passo, struttura pieghevole in fibra di carbonio e titanio.",
  rating: "4,8",
  reviewsCount: 326,
  availableLabel: "Disponibile",
  badge: "Novità",
  price: "€1.799",
  oldPrice: "€1.999",
  save: "−10%",
  priceAmount: 1799,
  currency: "EUR",
  power: "1000",
  range: "30",
  weight: "1,8",
  modes: "12",
  buyHref: hyperConsultHref,
  ctaLabel: "Richiedi informazioni",
  demoHref: hyperConsultHref,
} as const;

export const ultraGallery: ProductGalleryShot[] = [
  {
    src: "/images/hypershell/ultra/01.png",
    alt: "HyperShell X Ultra, vista tre quarti",
    short: "3/4",
    label: "Vista 3/4",
    fit: "contain",
  },
  {
    src: "/images/hypershell/ultra/02.png",
    alt: "HyperShell X Ultra, profilo laterale",
    short: "Profilo",
    label: "Profilo",
    fit: "contain",
  },
  {
    src: "/images/hypershell/ultra/03.png",
    alt: "Dettaglio dell'attuatore HyperShell X Ultra",
    short: "Motore",
    label: "Dettaglio attuatore",
    fit: "contain",
  },
  {
    src: "/images/hypershell/ultra/worn.jpg",
    alt: "HyperShell X Ultra indossato in escursione",
    short: "Indossato",
    label: "Indossato",
    fit: "cover",
  },
  {
    src: "/images/hypershell/ultra/04.png",
    alt: "HyperShell X Ultra, vista frontale pieghevole",
    short: "Frontale",
    label: "Pieghevole",
    fit: "contain",
  },
];

export const ultraGalleryBadges: ProductBadge[] = [
  { title: "2 anni", sub: "di garanzia inclusa" },
  { title: "14 giorni", sub: "reso gratuito" },
  { title: "Italia", sub: "assistenza locale" },
];

export const ultraKeySpecs: ProductKeySpec[] = [
  {
    label: "Potenza di picco",
    value: "1000 W",
    note: "motori brushless gemelli",
  },
  {
    label: "Autonomia",
    value: "30",
    note: "km con assistenza · batteria sostituibile",
  },
  {
    label: "Peso",
    value: "1,8",
    note: "kg · fibra di carbonio + titanio",
  },
  {
    label: "Modalità",
    value: "12",
    note: "profili di assistenza adattivi",
  },
];

export const ultraFeatures: ProductFeature[] = [
  {
    kicker: "AI MotionEngine",
    title: "Legge il tuo passo. Spinge al momento giusto.",
    body: "Una rete di sensori monitora andatura, pendenza e cadenza centinaia di volte al secondo. L'algoritmo calibra la spinta dei motori in tempo reale: in salita aumenta, in piano si alleggerisce. Il movimento resta naturale, la fatica diminuisce.",
    image: "/images/hypershell/ultra/engine.jpg",
    imageAlt: "Dettaglio dei motori HyperShell X Ultra",
    metrics: [
      { v: "−20%", l: "sforzo in escursione" },
      { v: "−39%", l: "sforzo in bici" },
    ],
  },
  {
    kicker: "Materiali",
    title: "Resistente dove conta, leggero da indossare.",
    body: "Telaio in fibra di carbonio e lega di titanio aerospaziale: rigidità strutturale dove serve, peso minimo dove tocca il corpo. Si ripiega in pochi secondi e sta nello zaino.",
    image: "/images/hypershell/ultra/03.png",
    imageAlt: "Telaio in carbonio e titanio dell'HyperShell X Ultra",
    reverse: true,
    metrics: [
      { v: "1,8 kg", l: "peso totale" },
      { v: "< 5 s", l: "per ripiegarlo" },
    ],
  },
  {
    kicker: "Energia",
    title: "Batteria a sgancio rapido. Mai a piedi.",
    body: "Sostituisci la batteria in pochi secondi e raddoppia l'autonomia in viaggio. Ricarica completa rapida e indicatore di carica integrato per pianificare ogni uscita.",
    image: "/images/hypershell/ultra/trail.jpg",
    imageAlt: "Escursionista con HyperShell su un sentiero",
    metrics: [
      { v: "30 km", l: "per carica" },
      { v: "USB-C", l: "ricarica rapida" },
    ],
  },
];

export const ultraSpecColumns = ["X Ultra", "X Carbon", "X Pro", "X Go"] as const;

export const ultraSpecRows: SpecTableRow[] = [
  { label: "Potenza di picco", values: ["1000 W", "800 W", "800 W", "400 W"] },
  {
    label: "Autonomia assistita",
    values: ["30 km", "17,5 km", "17,5 km", "15 km"],
  },
  { label: "Peso", values: ["1,8 kg", "1,8 kg", "2 kg", "2 kg"] },
  { label: "Modalità di assistenza", values: ["12", "10", "10", "6"] },
  {
    label: "Materiale telaio",
    values: ["Carbonio + titanio", "Fibra di carbonio", "Lega + nylon", "Lega + nylon"],
  },
  {
    label: "Batteria",
    values: ["Sostituibile", "Sostituibile", "Integrata", "Integrata"],
  },
  { label: "Impermeabilità", values: ["IPX4", "IPX4", "IPX4", "IPX4"] },
  { label: "Pieghevole", values: ["Sì · < 5 s", "Sì · < 5 s", "Sì", "Sì"] },
];

export const ultraBoxItems: ProductBoxItem[] = [
  {
    name: "Esoscheletro X",
    sub: "Unità principale pieghevole",
    image: "/images/hypershell/ultra/01.png",
    imageAlt: "Unità principale HyperShell X Ultra",
  },
  {
    name: "Batteria",
    sub: "A sgancio rapido + caricatore",
    image: "/images/hypershell/ultra/05.png",
    imageAlt: "HyperShell X Ultra, vista posteriore con batteria",
  },
  {
    name: "Kit cinghie",
    sub: "Imbragatura regolabile",
    image: "/images/hypershell/ultra/02.png",
    imageAlt: "Profilo con cinghie e imbragatura HyperShell",
  },
  {
    name: "Custodia da viaggio",
    sub: "Trasporto e protezione",
    image: "/images/hypershell/ultra/04.png",
    imageAlt: "HyperShell X Ultra pronto per il trasporto",
  },
];

export const ultraReviews: ProductReview[] = [
  {
    text: "In salita sembra di avere una marcia in più. Dopo 18 km di sentiero le gambe erano ancora fresche.",
    name: "Luca M.",
    role: "Escursionista · Dolomiti",
    initials: "LM",
  },
  {
    text: "Lo uso per il pendolarismo in bici. La differenza sulle salite cittadine è enorme e si ripiega nello zaino.",
    name: "Sara D.",
    role: "Bike commuter · Milano",
    initials: "SD",
  },
  {
    text: "Acquistato per mio padre, 72 anni. Ha ripreso a camminare a lungo senza affaticarsi. Demo decisiva.",
    name: "Giorgio P.",
    role: "Cliente privato · Roma",
    initials: "GP",
  },
  {
    text: "Montaggio immediato, assistenza Meccanio impeccabile. Si sente che dietro c'è ingegneria vera.",
    name: "Elena R.",
    role: "Trail runner · Torino",
    initials: "ER",
  },
];

export const ultraFaqs: FaqItem[] = [
  {
    q: "Quanto tempo serve per abituarsi?",
    a: "Pochi minuti. L'assistenza segue il tuo movimento naturale invece di imporlo: la maggior parte delle persone cammina in modo fluido dopo la prima uscita.",
  },
  {
    q: "Posso usarlo sotto la pioggia?",
    a: "Sì, tutti i modelli hanno protezione IPX4 contro schizzi e pioggia leggera. Evita l'immersione completa e i getti diretti ad alta pressione.",
  },
  {
    q: "Quanto dura la batteria e posso sostituirla?",
    a: "L'autonomia va da 15 a 30 km a seconda del modello e della modalità. Su X Ultra e X Carbon la batteria è a sgancio rapido: ne porti una di scorta e raddoppi l'autonomia.",
  },
  {
    q: "È adatto ad un uso professionale?",
    a: "Per l'ambito lavorativo consigliamo anche la linea HAPO di esoscheletri passivi. I nostri tecnici valutano l'uso e propongono la soluzione corretta, con demo sul campo.",
  },
  {
    q: "Come funzionano spedizione e reso?",
    a: "Spedizione assicurata e tracciata in tutta Italia. Hai 14 giorni per il reso gratuito e 2 anni di garanzia. L'assistenza tecnica è gestita direttamente da Meccanio sul territorio.",
  },
];

export const ultraReassure: ProductReassure[] = [
  {
    title: "Spedizione assicurata",
    sub: "consegna tracciata in tutta Italia",
  },
  {
    title: "Reso gratuito 14 giorni",
    sub: "cambi idea? lo rimandi indietro",
  },
  {
    title: "Garanzia 2 anni",
    sub: "su tutta la gamma HyperShell",
  },
  {
    title: "Assistenza italiana",
    sub: "supporto tecnico e formazione Meccanio",
  },
];
