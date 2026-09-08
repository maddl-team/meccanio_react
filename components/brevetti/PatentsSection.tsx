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
            Meccanio è titolare di numerosi brevetti nazionali per innovazioni
            tecnologiche, nati per migliorare processi produttivi. I brevetti
            testimoniano la passione per la progettazione e il costante impegno
            nella ricerca che da sempre contraddistingue lo staff.
          </p>
          <p className={styles.patentsText}>
            Mettiamo a disposizione la stessa esperienza per consulenze di
            fattibilità, verifica dei requisiti di brevettabilità, redazione
            della documentazione tecnica e disegni meccanici per prototipi.
          </p>
          <Button href="/contatti" variant="dark">
            Richiedi informazioni tecniche →
          </Button>
        </div>
        <div className={styles.slots}>
          <div className={styles.slotsHead}>
            <span className={styles.slotsDot} aria-hidden="true" />
            <span className={styles.slotsLabel}>
              {patentSlots.length} brevetti nazionali
            </span>
          </div>
          <p className={styles.slotsNote}>
            Alcuni dei brevetti ottenuti nel corso della nostra attività di
            progettazione meccanica.
          </p>
          <div className={styles.slotGrid}>
            {patentSlots.map((slot) => (
              <article key={slot.no} className={styles.slot}>
                <span className={styles.slotNo}>{slot.no}</span>
                <h3 className={styles.slotName}>{slot.label}</h3>
                {slot.area ? (
                  <p className={styles.slotArea}>{slot.area}</p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
