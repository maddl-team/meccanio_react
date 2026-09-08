import { hapoConsultHref } from "@/data/hapo";
import { contactFormHref } from "@/data/contatti";
import { Button } from "@/components/ui/Button";
import styles from "./home.module.css";

export function ContactCtaSection() {
  return (
    <section id="contatti" className={styles.contact} aria-labelledby="contatti-title">
      <h2 id="contatti-title" className="visually-hidden">
        Contatti
      </h2>
      <div className={styles.contactGrid}>
        <article className={`${styles.ctaCard} ${styles.ctaBlue}`}>
          <p className={styles.ctaKicker}>Aziende e organizzazioni</p>
          <h3 className={styles.ctaTitle}>
            Hai un problema di carico, sforzo o ergonomia?
          </h3>
          <p className={styles.ctaText}>
            Partiamo dall&apos;analisi dell&apos;esigenza, non dal prodotto.
            Consulenza iniziale gratuita e demo sul campo.
          </p>
          <Button href={hapoConsultHref} variant="onAccent">
            Richiedi una consulenza
          </Button>
        </article>
        <article className={`${styles.ctaCard} ${styles.ctaDark}`}>
          <p className={styles.ctaKicker}>Produttori e sviluppatori</p>
          <h3 className={styles.ctaTitle}>Vuoi entrare nel mercato italiano?</h3>
          <p className={styles.ctaText}>
            Valutiamo tecnologie robotiche e wearable da distribuire e
            supportare tecnicamente in Italia.
          </p>
          <Button href={contactFormHref} variant="accentOnDark">
            Contatta l&apos;ufficio tecnico
          </Button>
        </article>
      </div>
    </section>
  );
}
