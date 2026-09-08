"use client";

import { useActionState, useEffect } from "react";
import { submitContact, type ContactState } from "@/app/contatti/actions";
import {
  contactAudiences,
  contactMotivi,
  motivoQueryMap,
} from "@/data/contatti";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import styles from "./contatti.module.css";

const initialState: ContactState = {
  ok: false,
  message: "",
};

type ContactFormSectionProps = {
  defaultMotivo?: string;
};

export function ContactFormSection({ defaultMotivo }: ContactFormSectionProps) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const selectedMotivo =
    (defaultMotivo && motivoQueryMap[defaultMotivo]) || contactMotivi[0];

  useEffect(() => {
    if (state.ok && state.mailto) {
      window.location.href = state.mailto;
    }
  }, [state]);

  return (
    <section className={styles.formSection} aria-labelledby="form-title">
      <div className={styles.formInner}>
        <div id="form" className={styles.formCard}>
          <p className={`${styles.kicker} ${styles.formKicker}`}>Form di contatto</p>
          <h2 id="form-title" className={styles.formTitle}>
            Form di contatto generale
          </h2>
          {state.ok ? (
            <div className={`${styles.status} ${styles.statusOk}`} role="status">
              <p>{state.message}</p>
              <p>
                Se il programma di posta non si è aperto, scrivi a{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </div>
          ) : (
            <form action={formAction}>
              <div className={styles.formGrid}>
                {state.message ? (
                  <p className={`${styles.status} ${styles.statusError}`} role="alert">
                    {state.message}
                  </p>
                ) : null}
                <label className={styles.field}>
                  <span className={styles.label}>
                    Nome e cognome <span className={styles.hint}>(obbligatorio)</span>
                  </span>
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    minLength={2}
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>
                    Email <span className={styles.hint}>(obbligatorio)</span>
                  </span>
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>
                    Telefono <span className={styles.hint}>(opzionale)</span>
                  </span>
                  <input
                    className={styles.input}
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                  />
                </label>
                <fieldset className={styles.field}>
                  <legend className={styles.label}>
                    Sei un&apos;azienda o un privato?{" "}
                    <span className={styles.hint}>(obbligatorio)</span>
                  </legend>
                  <div className={styles.radios}>
                    {contactAudiences.map((item) => (
                      <label key={item} className={styles.radio}>
                        <input
                          type="radio"
                          name="audience"
                          value={item}
                          required
                          defaultChecked={item === "Azienda"}
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <label className={`${styles.field} ${styles.fieldWide}`}>
                  <span className={styles.label}>Motivo del contatto</span>
                  <select
                    className={styles.select}
                    name="motivo"
                    defaultValue={selectedMotivo}
                    required
                  >
                    {contactMotivi.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
                <label className={`${styles.field} ${styles.fieldWide}`}>
                  <span className={styles.label}>
                    Messaggio <span className={styles.hint}>(obbligatorio)</span>
                  </span>
                  <textarea
                    className={styles.textarea}
                    name="message"
                    required
                    minLength={10}
                    rows={6}
                  />
                </label>
                <input
                  className={styles.honeypot}
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
              </div>
              <div className={styles.formFooter}>
                <p className={styles.privacy}>
                  Inviando il form acconsenti al trattamento dei dati per
                  rispondere alla tua richiesta. Per qualsiasi informazione
                  puoi anche scrivere a{" "}
                  <a href={`mailto:${site.email}`}>{site.email}</a> o visitare
                  la pagina{" "}
                  <Link href="/azienda">Azienda</Link>.
                </p>
                <Button type="submit" variant="dark" disabled={pending}>
                  {pending ? "Invio in corso…" : "Invia messaggio"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
