import type { ContactDetail, ContactReason, FaqItem } from "@/types/content";
import { site } from "@/data/site";

export const contactMotivi = [
  "Consulenza HAPO aziendale",
  "Informazioni HyperShell",
  "Assistenza tecnica",
  "Garanzia",
  "Altro",
] as const;

export const contactAudiences = ["Azienda", "Privato"] as const;

export const motivoQueryMap: Record<string, (typeof contactMotivi)[number]> = {
  hapo: "Consulenza HAPO aziendale",
  hypershell: "Informazioni HyperShell",
  assistenza: "Assistenza tecnica",
  garanzia: "Garanzia",
  altro: "Altro",
};

export const contactHref = "/contatti";
export const contactFormHref = "/contatti#form";

export const contatti = {
  title: "Contatti Meccanio | Consulenza e Assistenza",
  description:
    "Contatta Meccanio per una consulenza HAPO, informazioni su HyperShell o assistenza tecnica. Un tecnico ti risponde entro 24-48 ore lavorative.",
  announcement: "Società di ingegneria · Consulenza e assistenza · Risposta in 24-48 ore",
  heroImage: "/images/services/workshop.jpg",
} as const;

export const contactReasons: ContactReason[] = [
  {
    no: "01",
    title: "Consulenza aziendale HAPO",
    desc: "Preventivi, forniture multiple, analisi dell'esigenza ergonomica in azienda.",
    href: "/contatti?motivo=hapo#form",
    motivo: "hapo",
  },
  {
    no: "02",
    title: "Informazioni su HyperShell",
    desc: "Domande sui modelli, aiuto nella scelta, disponibilità per una prova.",
    href: "/contatti?motivo=hypershell#form",
    motivo: "hypershell",
  },
  {
    no: "03",
    title: "Assistenza tecnica",
    desc: "Manutenzione, ricambi, garanzia su un dispositivo già in tuo possesso.",
    href: "/contatti?motivo=assistenza#form",
    motivo: "assistenza",
  },
];

export const contactDetails: ContactDetail[] = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "Telefono",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    label: "Indirizzo / Sede",
    value: `${site.address.street}\n${site.address.city}`,
    href: "https://www.google.com/maps/search/?api=1&query=via+della+Solfarata+130+Pomezia",
  },
  {
    label: "Orari di risposta",
    value: "Lun–Ven, con riscontro entro 24-48 ore lavorative",
  },
];

export const contactFaqs: FaqItem[] = [
  {
    q: "Devo per forza contattarvi per acquistare un HyperShell?",
    a: "Sì: al momento HAPO e HyperShell si richiedono tramite i tecnici Meccanio. Compila il form o scrivici: ti aiutiamo a scegliere il modello e, se serve, organizziamo una prova.",
  },
  {
    q: "Quanto tempo impiegate a rispondere?",
    a: "Un tecnico ti risponde entro 24-48 ore lavorative dall'invio del form o del messaggio.",
  },
  {
    q: "Posso richiedere una demo direttamente da questa pagina?",
    a: "Sì: scegli il motivo del contatto, indica nel messaggio che vuoi una demo e invia il form. Un tecnico ti ricontatta per fissare data e modalità.",
  },
];
