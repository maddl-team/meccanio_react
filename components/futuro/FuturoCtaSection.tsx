import { contactHref } from "@/data/contatti";
import { Button } from "@/components/ui/Button";
import styles from "./futuro.module.css";

export function FuturoCtaSection() {
  return (
    <section id="contatti" className={styles.cta} aria-labelledby="contatti-futuro-title">
      <div className={styles.ctaCard}>
        <div>
          <h2 id="contatti-futuro-title" className={styles.ctaTitle}>
            Costruiamo insieme il prossimo passo
          </h2>
          <p className={styles.ctaText}>
            Se la tua azienda ha un&apos;esigenza legata a sicurezza,
            automazione o assistenza che va oltre gli esoscheletri, parliamone.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <Button href={contactHref} variant="ctaWhite">
            Contattaci
          </Button>
          <Button href="/" variant="ctaGhostBlue">
            Torna alla Home
          </Button>
        </div>
      </div>
    </section>
  );
}
