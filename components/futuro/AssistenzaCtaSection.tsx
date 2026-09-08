import { contactHref } from "@/data/contatti";
import { Button } from "@/components/ui/Button";
import styles from "./futuro.module.css";

export function AssistenzaCtaSection() {
  return (
    <section id="contatti" className={styles.cta} aria-labelledby="contatti-assistenza-title">
      <div className={styles.ctaCard}>
        <div>
          <h2 id="contatti-assistenza-title" className={styles.ctaTitle}>
            Interessato a questa direzione tecnologica?
          </h2>
          <p className={styles.ctaText}>
            Se hai un&apos;esigenza legata ad assistenza o sicurezza che va
            oltre gli esoscheletri, contattaci: costruiamo insieme le prossime
            soluzioni Meccanio.
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
