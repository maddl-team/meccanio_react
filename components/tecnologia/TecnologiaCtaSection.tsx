import { Button } from "@/components/ui/Button";
import styles from "./tecnologia.module.css";

export function TecnologiaCtaSection() {
  return (
    <section id="scegli" className={styles.cta} aria-labelledby="cta-tecnologia-title">
      <div className={styles.ctaCard}>
        <div>
          <h2 id="cta-tecnologia-title" className={styles.ctaTitle}>
            Vuoi capire quale tecnologia è adatta a te?
          </h2>
          <p className={styles.ctaText}>
            Che tu debba proteggere un gesto di lavoro o estendere la tua
            autonomia di movimento, partiamo sempre dall&apos;esigenza reale.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <Button href="/hapo" variant="ctaWhite">
            Scopri HAPO per il lavoro
          </Button>
          <Button href="/hypershell" variant="ctaGhostBlue">
            Scopri HyperShell per la vita
          </Button>
        </div>
      </div>
    </section>
  );
}
