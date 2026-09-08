import { motionEngineSteps } from "@/data/tecnologia";
import styles from "./tecnologia.module.css";

export function EngineStepsSection() {
  return (
    <section
      id="funzionamento"
      className={styles.matList}
      aria-labelledby="funzionamento-title"
    >
      <div className={styles.matStripe} aria-hidden="true" />
      <div className={styles.matInner}>
        <div className={styles.matHead}>
          <p className={`${styles.kicker} ${styles.matKicker}`}>Il ciclo</p>
          <h2 id="funzionamento-title" className={styles.matTitle}>
            Come funziona, in tre passaggi
          </h2>
        </div>
        <div className={styles.matGrid}>
          {motionEngineSteps.map((item) => (
            <article key={item.no} className={styles.matCard}>
              <p className={styles.matNo}>{item.no}</p>
              <h3 className={styles.matName}>{item.title}</h3>
              <p className={styles.matDesc}>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
