import { hyperConsultHref } from "@/data/hypershell";
import { Button } from "@/components/ui/Button";
import styles from "./hypershell.module.css";

export function HyperShellCtaSection() {
  return (
    <section
      id="contatti"
      className={styles.cta}
      aria-labelledby="hypershell-cta-title"
    >
      <div className={styles.ctaCard}>
        <h2 id="hypershell-cta-title" className={styles.ctaTitle}>
          Vai più lontano, con meno sforzo.
        </h2>
        <p className={styles.ctaText}>
          Scopri la serie HyperShell e trova il modello giusto per il tuo modo
          di muoverti.
        </p>
        <div className={styles.ctaActions}>
          <Button
            href="#modelli"
            variant="ctaWhite"
            className={styles.ctaBtn}
          >
            Esplora tutti i modelli
          </Button>
          <Button
            href={hyperConsultHref}
            variant="ctaGhostBlue"
            className={styles.ctaBtn}
          >
            Chiedi un consiglio
          </Button>
        </div>
      </div>
    </section>
  );
}
