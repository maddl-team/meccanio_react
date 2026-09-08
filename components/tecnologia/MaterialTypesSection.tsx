import { materialTypes } from "@/data/tecnologia";
import styles from "./tecnologia.module.css";

export function MaterialTypesSection() {
  return (
    <section
      id="materiali"
      className={styles.matList}
      aria-labelledby="materiali-list-title"
    >
      <div className={styles.matStripe} aria-hidden="true" />
      <div className={styles.matInner}>
        <div className={styles.matHead}>
          <p className={`${styles.kicker} ${styles.matKicker}`}>Selezione</p>
          <h2 id="materiali-list-title" className={styles.matTitle}>
            I materiali principali
          </h2>
        </div>
        <div className={styles.matGrid}>
          {materialTypes.map((item) => (
            <article key={item.title} className={styles.matCard}>
              <h3 className={styles.matName}>{item.title}</h3>
              <p className={styles.matDesc}>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
