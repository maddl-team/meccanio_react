import Image from "next/image";
import styles from "./tecnologia.module.css";

export function InvisibleIntelligenceSection() {
  return (
    <section
      id="invisibile"
      className={styles.feature}
      aria-labelledby="invisibile-title"
    >
      <div className={`${styles.featureGrid} ${styles.featureReverse}`}>
        <div>
          <h2 id="invisibile-title" className={styles.featureTitle}>
            Un&apos;intelligenza pensata per essere invisibile
          </h2>
          <p className={`${styles.featureText} ${styles.textEnd}`}>
            Il criterio con cui è stato progettato l&apos;AI MotionEngine non
            è aggiungere potenza percepibile, ma restituire una camminata che
            sembra più leggera, non diversa. Non è pensato per
            &quot;spingere&quot; in modo evidente, ma per rimuovere la parte di
            fatica che normalmente accumuli senza accorgertene, lasciando il
            movimento naturale come punto di riferimento.
          </p>
        </div>
        <div className={styles.featurePhoto}>
          <Image
            src="/images/hypershell/hero.jpg"
            alt="Camminata con HyperShell: assistenza che resta coerente con il passo"
            fill
            sizes="(min-width: 900px) 50vw, 100vw"
            className={styles.featureImg}
          />
        </div>
      </div>
    </section>
  );
}
