import type { DesignArea, FaqItem, TechPrinciple } from "@/types/content";

export const tecnologia = {
  title: "Tecnologia Esoscheletri: Materiali e AI | Meccanio",
  description:
    "Come funzionano gli esoscheletri Meccanio: dispositivi passivi HAPO, assistenza motorizzata HyperShell con AI MotionEngine, materiali e ingegneria.",
  heroImage: "/images/hypershell/tech.jpg",
  announcement: "Società di ingegneria · HAPO passivo · HyperShell AI MotionEngine",
} as const;

export const techPrinciples: TechPrinciple[] = [
  {
    id: "hapo",
    kicker: "Esoscheletri passivi",
    title: "HAPO",
    desc: "Nessun motore, nessuna batteria: molle, leve e strutture rigide assorbono e redistribuiscono meccanicamente il carico durante il movimento. Il vantaggio è la possibilità di un uso continuativo per l’intero turno di lavoro, senza vincoli di autonomia energetica.",
    href: "/hapo",
    cta: "Vedi la linea HAPO →",
    image: "/images/hapo/passive.webp",
    imageAlt: "Meccanismo passivo HAPO: molle e leve senza motori",
  },
  {
    id: "hypershell",
    kicker: "Esoscheletri motorizzati",
    title: "HyperShell",
    desc: "Motori elettrici aggiungono una spinta attiva al movimento, regolata in tempo reale dall’AI MotionEngine in base a passo, pendenza e terreno. Il vantaggio è un supporto dinamico, capace di adattarsi a condizioni che cambiano continuamente, come in un’escursione.",
    href: "/hypershell",
    cta: "Vedi la serie X →",
    image: "/images/hypershell/hero.jpg",
    imageAlt: "Esoscheletro motorizzato HyperShell in uso su terreno irregolare",
  },
];

export const tecnologiaFaqs: FaqItem[] = [
  {
    q: "Esoscheletro passivo o motorizzato: quali differenze?",
    a: "I modelli passivi (HAPO) redistribuiscono il carico in modo meccanico, senza batteria: ideali per gesti ripetitivi sul lavoro. I modelli motorizzati (HyperShell) aggiungono una spinta attiva tramite motori e intelligenza adattiva, pensata per camminata, trekking e sport.",
  },
  {
    q: "Come funziona l’assistenza intelligente AI di HyperShell?",
    a: "Sensori inerziali rilevano passo e terreno in tempo reale, e un algoritmo regola automaticamente la spinta dei motori per adattarsi alle condizioni, mantenendo il movimento naturale.",
  },
  {
    q: "I materiali usati sono adatti anche a un uso prolungato ogni giorno?",
    a: "Sì, la combinazione di leghe leggere, fibra di carbonio o titanio e imbottiture ergonomiche è pensata proprio per ridurre l’affaticamento anche con un utilizzo quotidiano prolungato.",
  },
];

export const materiali = {
  title: "Materiali e Ingegneria degli Esoscheletri | Meccanio",
  description:
    "Titanio, fibra di carbonio e leghe leggere: i materiali che rendono gli esoscheletri Meccanio leggeri, resistenti e adatti a un uso prolungato.",
  heroImage: "/images/hypershell/ultra/worn.jpg",
} as const;

export const materialTypes: DesignArea[] = [
  {
    no: "01",
    title: "Titanio",
    desc: "Utilizzato nei componenti strutturali sottoposti a maggiore sollecitazione meccanica, dove serve resistenza senza aggiungere peso rilevante al dispositivo.",
  },
  {
    no: "02",
    title: "Fibra di carbonio",
    desc: "Impiegata nelle parti dove il rapporto tra leggerezza e rigidità è più critico, in particolare nei modelli HyperShell pensati per un uso prolungato in mobilità, come X Carbon.",
  },
  {
    no: "03",
    title: "Leghe leggere e materiali compositi",
    desc: "Utilizzate nella struttura portante di HAPO e HyperShell, bilanciano solidità e peso complessivo del dispositivo, per un uso continuativo senza affaticamento aggiuntivo.",
  },
];

export const materialiFaqs: FaqItem[] = [
  {
    q: "Il titanio è presente in tutti i modelli HAPO e HyperShell?",
    a: "È utilizzato nei componenti strutturali sottoposti a maggiore sollecitazione; la presenza e la quantità variano da modello a modello in base al design specifico.",
  },
  {
    q: "I materiali leggeri compromettono la resistenza del dispositivo nel tempo?",
    a: "No, la selezione dei materiali segue un criterio di equilibrio tra leggerezza e resistenza meccanica, pensato per un utilizzo prolungato e continuativo.",
  },
  {
    q: "L’imbottitura è lavabile o sostituibile?",
    a: "Le indicazioni specifiche di manutenzione variano da modello a modello: fai riferimento alla scheda tecnica del prodotto o contatta l’assistenza tecnica.",
  },
];
