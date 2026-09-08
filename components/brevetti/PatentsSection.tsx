import { patentSlots } from "@/data/brevetti";
import { Button } from "@/components/ui/Button";
import styles from "./brevetti.module.css";

export function PatentsSection() {
  return (
    <section id="brevetti" className={styles.patents} aria-labelledby="brevetti-title">
      <div className={styles.patentsGrid}>
        <div>
          <p className={`${styles.kicker} ${styles.patentsKicker}`}>
            Proprietà intellettuale
          </p>
          <h2 id="brevetti-title" className={styles.patentsTitle}>
            Brevetti nazionali
          </h2>
          <p className={styles.patentsText}>
            Meccanio è titolare di diversi brevetti nazionali legati alla
            progettazione meccanica e all&apos;innovazione tecnologica. Questo
            rappresenta un elemento distintivo importante: dimostra una capacità
            interna non solo commerciale, ma progettuale, tecnica e di ricerca,
            sviluppata in autonomia nel corso degli anni.
          </p>
          <Button href="/contatti" variant="dark">
            Richiedi informazioni tecniche →
          </Button>
        </div>
        <div className={styles.slots}>
          <div className={styles.slotsHead}>
            <span className={styles.slotsDot} aria-hidden="true" />
            <span className={styles.slotsLabel}>Sezione in aggiornamento</span>
          </div>
          <p className={styles.slotsNote}>
            [Sezione da completare con l&apos;elenco specifico dei brevetti
            depositati, numeri di deposito e ambiti tecnici coperti, non appena
            disponibili dal cliente.]
          </p>
          <div className={styles.slotGrid}>
            {patentSlots.map((slot) => (
              <div key={slot.no} className={styles.slot}>
                <span className={styles.slotNo}>{slot.no}</span>
                <span className={styles.slotName}>{slot.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
