import Image from "next/image";
import { hypershell } from "@/data/hypershell";
import { Button } from "@/components/ui/Button";
import styles from "./hypershell.module.css";

export function HyperShellTechSection() {
  return (
    <section
      id="tecnologia"
      className={styles.tech}
      aria-labelledby="hypershell-tech-title"
    >
      <div className={styles.techGrid}>
        <div>
          <p className={styles.kicker}>AI MotionEngine</p>
          <h2 id="hypershell-tech-title" className={styles.techTitle}>
            Come funziona l&apos;assistenza intelligente.
          </h2>
          <p className={styles.techText}>
            A differenza di un dispositivo passivo, HyperShell non si limita a
            redistribuire il carico: aggiunge una spinta attiva tramite motori
            elettrici, regolata in tempo reale dall&apos;AI MotionEngine in
            base al tuo movimento, alla pendenza e al terreno. Il risultato è
            una camminata che resta naturale, ma richiede meno sforzo — non
            un&apos;andatura &quot;spinta&quot; artificialmente.
          </p>
          <Button href="/hypershell/x-ultra" variant="underline">
            Approfondisci la tecnologia →
          </Button>
        </div>
        <div className={styles.techPhoto}>
          <Image
            src={hypershell.techImage}
            alt={hypershell.techImageAlt}
            fill
            sizes="(min-width: 900px) 50vw, 100vw"
            className={styles.techImg}
          />
        </div>
      </div>
    </section>
  );
}
