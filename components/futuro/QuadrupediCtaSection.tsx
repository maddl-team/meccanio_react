import { contactHref } from "@/data/contatti";
import { Button } from "@/components/ui/Button";
import styles from "./futuro.module.css";

export function QuadrupediCtaSection() {
  return (
    <section id="contatti" className={styles.cta} aria-labelledby="contatti-quadrupedi-title">
      <div className={styles.ctaCard}>
        <div>
          <h2 id="contatti-quadrupedi-title" className={styles.ctaTitle}>
            Interessato a questa direzione tecnologica?
          </h2>
          <p className={styles.ctaText}>
            Se la tua azienda ha un&apos;esigenza in questo ambito, contattaci:
            costruiamo insieme le prossime soluzioni Meccanio.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <Button href={contactHref} variant="ctaWhite">
            Contattaci
          </Button>
          <Button href="/futuro" variant="ctaGhostBlue">
            Torna alla visione Meccanio
          </Button>
        </div>
      </div>
    </section>
  );
}
