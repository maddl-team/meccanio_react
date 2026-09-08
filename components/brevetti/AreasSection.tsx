import { designAreas } from "@/data/brevetti";
import styles from "./brevetti.module.css";

export function AreasSection() {
  return (
    <section id="ambiti" className={styles.areas} aria-labelledby="ambiti-title">
      <div className={styles.areasStripe} aria-hidden="true" />
      <div className={styles.areasInner}>
        <div className={styles.areasHead}>
          <div className={styles.areasIntro}>
            <p className={`${styles.kicker} ${styles.areasKicker}`}>
              Competenze storiche
            </p>
            <h2 id="ambiti-title" className={styles.areasTitle}>
              Ambiti di progettazione e ricerca applicata
            </h2>
          </div>
          <span className={styles.areasRange}>01 — 04</span>
        </div>
        <div className={styles.areaGrid}>
          {designAreas.map((area) => (
            <article key={area.no} className={styles.areaCard}>
              <p className={styles.areaNo}>{area.no}</p>
              <h3 className={styles.areaName}>{area.title}</h3>
              <p className={styles.areaDesc}>{area.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
