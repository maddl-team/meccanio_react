import { hapoConsultHref } from "@/data/hapo";
import { Button } from "@/components/ui/Button";
import styles from "./hapo.module.css";

export function HapoCtaSection() {
  return (
    <section
      id="contatti"
      className={styles.cta}
      aria-labelledby="hapo-cta-title"
    >
      <div className={styles.ctaCard}>
        <h2 id="hapo-cta-title" className={styles.ctaTitle}>
          Riduci la fatica dei tuoi operatori.
        </h2>
        <p className={styles.ctaText}>
          Analisi dell&apos;esigenza, scelta del modello HAPO, demo sul campo e
          supporto continuo. Su misura per la tua realtà.
        </p>
        <div className={styles.ctaActions}>
          <Button
            href={hapoConsultHref}
            variant="ctaWhite"
            className={styles.ctaBtn}
          >
            Richiedi una consulenza gratuita
          </Button>
          <Button
            href={hapoConsultHref}
            variant="ctaGhostBlue"
            className={styles.ctaBtn}
          >
            Prenota una demo
          </Button>
        </div>
      </div>
    </section>
  );
}
