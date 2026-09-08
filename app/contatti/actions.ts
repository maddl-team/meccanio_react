"use server";

import { contactAudiences, contactMotivi } from "@/data/contatti";
import { site } from "@/data/site";

export type ContactState = {
  ok: boolean;
  message: string;
  mailto?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  if (readString(formData, "website")) {
    return { ok: true, message: "Messaggio inviato." };
  }

  const name = readString(formData, "name");
  const email = readString(formData, "email");
  const phone = readString(formData, "phone");
  const audience = readString(formData, "audience");
  const motivo = readString(formData, "motivo");
  const message = readString(formData, "message");

  if (name.length < 2) {
    return { ok: false, message: "Inserisci nome e cognome." };
  }

  if (!emailPattern.test(email)) {
    return { ok: false, message: "Inserisci un indirizzo email valido." };
  }

  if (!contactAudiences.includes(audience as (typeof contactAudiences)[number])) {
    return { ok: false, message: "Seleziona se sei un'azienda o un privato." };
  }

  if (!contactMotivi.includes(motivo as (typeof contactMotivi)[number])) {
    return { ok: false, message: "Seleziona il motivo del contatto." };
  }

  if (message.length < 10) {
    return { ok: false, message: "Scrivi un messaggio di almeno 10 caratteri." };
  }

  const body = [
    `Nome: ${name}`,
    `Email: ${email}`,
    `Telefono: ${phone || "non indicato"}`,
    `Tipo: ${audience}`,
    `Motivo: ${motivo}`,
    "",
    "Messaggio:",
    message,
  ].join("\n");

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`Contatto Meccanio — ${motivo}`)}&body=${encodeURIComponent(body)}`;

  return {
    ok: true,
    message:
      "Grazie. Completa l'invio dal tuo programma di posta: un tecnico ti risponde entro 24-48 ore lavorative.",
    mailto,
  };
}
