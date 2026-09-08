import Image from "next/image";
import { Button } from "@/components/ui/Button";
import styles from "./tecnologia.module.css";

export function AssistanceModesSection() {
  return (
    <section
      id="modalita"
      className={styles.feature}
      aria-labelledby="modalita-title"
    >
      <div className={styles.featureGrid}>
        <div>
          <p className={`${styles.kicker} ${styles.featureKicker}`}>
            HyperShell
          </p>
          <h2 id="modalita-title" className={styles.featureTitle}>
            Le modalità di assistenza
          </h2>
          <p className={styles.featureText}>
            Ogni modello HyperShell offre un numero diverso di modalità, da un
            minimo di 6 (X Go) a un massimo di 12 (X Ultra): configurazioni
            predefinite pensate per contesti diversi, dalla camminata quotidiana
            a un&apos;escursione impegnativa. Il sistema seleziona e regola
            automaticamente il livello di assistenza più adatto all&apos;interno
            della modalità scelta.
          </p>
          <Button href="/hypershell" variant="underline">
            Confronta le modalità dei modelli →
          </Button>
        </div>
        <div className={styles.featurePhoto}>
          <Image
            src="/images/hypershell/ultra/trail.jpg"
            alt="Escursione con HyperShell: assistenza che si adatta al terreno"
            fill
            sizes="(min-width: 900px) 50vw, 100vw"
            className={styles.featureImg}
          />
        </div>
      </div>
    </section>
  );
}
