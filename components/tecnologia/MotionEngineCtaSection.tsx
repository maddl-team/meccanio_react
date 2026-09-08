import { hyperConsultHref } from "@/data/hypershell";
import { Button } from "@/components/ui/Button";
import styles from "./tecnologia.module.css";

export function MotionEngineCtaSection() {
  return (
    <section
      id="prova"
      className={styles.cta}
      aria-labelledby="cta-motionengine-title"
    >
      <div className={styles.ctaCard}>
        <div>
          <h2 id="cta-motionengine-title" className={styles.ctaTitle}>
            Provalo prima di scegliere il modello
          </h2>
          <p className={styles.ctaText}>
            Il modo migliore per capire come funziona l&apos;AI MotionEngine è
            provarlo direttamente, sul tuo terreno abituale.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <Button href="/hypershell" variant="ctaWhite">
            Confronta i modelli HyperShell
          </Button>
          <Button href={hyperConsultHref} variant="ctaGhostBlue">
            Contattaci per una prova
          </Button>
        </div>
      </div>
    </section>
  );
}
