import { contactHref, contactFormHref } from "@/data/contatti";
import { Button } from "@/components/ui/Button";
import styles from "./azienda.module.css";

export function AziendaCtaSection() {
  return (
    <section id="contatti" className={styles.cta} aria-labelledby="contatti-azienda-title">
      <div className={styles.ctaCard}>
        <div>
          <h2 id="contatti-azienda-title" className={styles.ctaTitle}>
            Parla con chi progetta la meccanica da 25 anni
          </h2>
          <p className={styles.ctaText}>
            Che tu debba risolvere un problema di ergonomia sul lavoro o
            scegliere il tuo prossimo esoscheletro, partiamo sempre
            dall&apos;esigenza reale.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <Button href={contactHref} variant="ctaWhite">
            Prenota una dimostrazione
          </Button>
          <Button href={contactFormHref} variant="ctaGhostBlue">
            Contattaci
          </Button>
        </div>
      </div>
    </section>
  );
}
