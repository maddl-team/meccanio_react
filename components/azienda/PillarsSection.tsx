import { pillars } from "@/data/azienda";
import styles from "./azienda.module.css";

export function PillarsSection() {
  return (
    <section className={styles.pillars} aria-labelledby="pilastri-title">
      <div className={styles.pillarsHead}>
        <h2 id="pilastri-title" className={styles.pillarsTitle}>
          I tre pilastri di Meccanio
        </h2>
        <span className={styles.pillarsRange}>01 — 03</span>
      </div>
      <div className={styles.pillarGrid}>
        {pillars.map((pillar) => (
          <article
            key={pillar.step}
            className={`${styles.pillarCard} ${
              pillar.variant === "dark" ? styles.pillarDark : styles.pillarLight
            }`}
          >
            <p className={styles.pillarNo}>{pillar.step}</p>
            <h3 className={styles.pillarName}>{pillar.title}</h3>
            <p className={styles.pillarDesc}>{pillar.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
