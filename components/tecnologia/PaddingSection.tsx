import Image from "next/image";
import styles from "./tecnologia.module.css";

export function PaddingSection() {
  return (
    <section
      id="imbottitura"
      className={styles.feature}
      aria-labelledby="imbottitura-title"
    >
      <div className={`${styles.featureGrid} ${styles.featureReverse}`}>
        <div>
          <h2 id="imbottitura-title" className={styles.featureTitle}>
            Imbottitura ergonomica: dove il dispositivo incontra il corpo
          </h2>
          <p className={styles.featureText}>
            La resistenza strutturale conta poco se il punto di contatto con
            il corpo non è progettato altrettanto bene. Le imbottiture
            ergonomiche distribuiscono la pressione sui punti di appoggio —
            spalle, schiena, bacino a seconda del modello — evitando
            sfregamenti e punti di pressione localizzati durante un uso
            prolungato, sia in fabbrica sia in un&apos;escursione di più ore.
          </p>
        </div>
        <div className={styles.featurePhoto}>
          <Image
            src="/images/hapo/passive.webp"
            alt="Struttura e punti di contatto di un esoscheletro passivo"
            fill
            sizes="(min-width: 900px) 50vw, 100vw"
            className={styles.featureImg}
          />
        </div>
      </div>
    </section>
  );
}
