import Image from "next/image";
import { Button } from "@/components/ui/Button";
import styles from "./tecnologia.module.css";

export function MotionEngineSection() {
  return (
    <section
      id="motionengine"
      className={styles.feature}
      aria-labelledby="motionengine-title"
    >
      <div className={styles.featureGrid}>
        <div>
          <p className={`${styles.kicker} ${styles.featureKicker}`}>
            HyperShell
          </p>
          <h2 id="motionengine-title" className={styles.featureTitle}>
            AI MotionEngine: l&apos;intelligenza adattiva di HyperShell
          </h2>
          <p className={styles.featureText}>
            Un sistema di sensori inerziali rileva in tempo reale il tuo
            movimento — passo, inclinazione, cambi di ritmo — e un algoritmo
            predittivo regola di conseguenza la spinta dei motori. Il risultato
            non è un&apos;assistenza fissa, uguale in ogni condizione, ma un
            supporto che si modula automaticamente tra pianura, salita e terreno
            irregolare, restando sempre coerente con il tuo movimento naturale.
          </p>
          <Button href="/hypershell" variant="underline">
            Approfondisci l&apos;AI MotionEngine →
          </Button>
        </div>
        <div className={styles.featurePhoto}>
          <Image
            src="/images/hypershell/ultra/engine.jpg"
            alt="Dettaglio dei motori e del sistema di assistenza HyperShell"
            fill
            sizes="(min-width: 900px) 50vw, 100vw"
            className={styles.featureImg}
          />
        </div>
      </div>
    </section>
  );
}
