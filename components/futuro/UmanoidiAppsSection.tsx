import { umanoidiApps } from "@/data/futuro";
import styles from "./futuro.module.css";

export function UmanoidiAppsSection() {
  return (
    <section id="ambiti" className={styles.apps} aria-labelledby="ambiti-umanoidi-title">
      <div className={styles.appsStripe} aria-hidden="true" />
      <div className={styles.appsInner}>
        <div className={styles.appsHead}>
          <div className={styles.appsIntro}>
            <p className={`${styles.kicker} ${styles.appsKicker}`}>
              Direzione futura
            </p>
            <h2 id="ambiti-umanoidi-title" className={styles.appsTitle}>
              Ambiti applicativi verso cui guardiamo
            </h2>
          </div>
          <span className={styles.appsRange}>01 — 04</span>
        </div>
        <div className={styles.appGrid}>
          {umanoidiApps.map((item) => (
            <article key={item.no} className={styles.appCard}>
              <p className={styles.appNo}>{item.no}</p>
              <h3 className={styles.appName}>{item.title}</h3>
              <p className={styles.appDesc}>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
