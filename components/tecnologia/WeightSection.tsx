import Image from "next/image";
import { Button } from "@/components/ui/Button";
import styles from "./tecnologia.module.css";

export function WeightSection() {
  return (
    <section id="peso" className={styles.feature} aria-labelledby="peso-title">
      <div className={styles.featureGrid}>
        <div>
          <p className={`${styles.kicker} ${styles.featureKicker}`}>
            Prestazioni
          </p>
          <h2 id="peso-title" className={styles.featureTitle}>
            Perché il peso del dispositivo è un parametro tecnico, non estetico
          </h2>
          <p className={styles.featureText}>
            Nella scheda tecnica di ogni HAPO e HyperShell il peso è uno dei
            dati più rilevanti, non un dettaglio secondario: un dispositivo troppo
            pesante annulla parte del beneficio che dovrebbe offrire, aggiungendo
            affaticamento invece di ridurlo. Per questo motivo la gamma
            selezionata da Meccanio mantiene il peso in un intervallo ridotto —
            da 1,8 a 2 kg per i modelli HyperShell — a parità di prestazioni
            richieste.
          </p>
          <Button href="/hypershell" variant="underline">
            Confronta peso e prestazioni dei modelli →
          </Button>
        </div>
        <div className={styles.featurePhoto}>
          <Image
            src="/images/hypershell/hero.jpg"
            alt="Esoscheletro HyperShell in uso: struttura leggera su terreno irregolare"
            fill
            sizes="(min-width: 900px) 50vw, 100vw"
            className={styles.featureImg}
          />
        </div>
      </div>
    </section>
  );
}
