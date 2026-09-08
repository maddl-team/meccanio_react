import { contactHref } from "@/data/contatti";
import { Button } from "@/components/ui/Button";
import styles from "./brevetti.module.css";

export function BrevettiCtaSection() {
  return (
    <section id="contatti" className={styles.cta} aria-labelledby="contatti-brevetti-title">
      <div className={styles.ctaCard}>
        <div>
          <h2 id="contatti-brevetti-title" className={styles.ctaTitle}>
            Vuoi conoscere meglio il nostro background tecnico?
          </h2>
          <p className={styles.ctaText}>
            Parla con i nostri ingegneri per approfondire progetti, brevetti e
            ambiti di ricerca applicata.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <Button href={contactHref} variant="ctaWhite">
            Contattaci
          </Button>
          <Button href="/azienda" variant="ctaGhostBlue">
            Torna a Chi Siamo
          </Button>
        </div>
      </div>
    </section>
  );
}
