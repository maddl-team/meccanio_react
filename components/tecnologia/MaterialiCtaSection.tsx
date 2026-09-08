import { contactHref } from "@/data/contatti";
import { Button } from "@/components/ui/Button";
import styles from "./tecnologia.module.css";

export function MaterialiCtaSection() {
  return (
    <section id="contatti" className={styles.cta} aria-labelledby="cta-materiali-title">
      <div className={styles.ctaCard}>
        <div>
          <h2 id="cta-materiali-title" className={styles.ctaTitle}>
            Vuoi valutare un dispositivo con occhio tecnico?
          </h2>
          <p className={styles.ctaText}>
            Parla con i nostri ingegneri: analizziamo materiali, peso e
            prestazioni in base al tuo utilizzo reale.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <Button href={contactHref} variant="ctaWhite">
            Parla con i nostri ingegneri
          </Button>
          <Button href="/tecnologia" variant="ctaGhostBlue">
            Torna all&apos;hub Tecnologia
          </Button>
        </div>
      </div>
    </section>
  );
}
