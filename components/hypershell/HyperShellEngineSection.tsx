import { hyperEngineSteps } from "@/data/hypershell";
import styles from "./hypershell.module.css";

export function HyperShellEngineSection() {
  return (
    <section className={styles.method} aria-labelledby="hypershell-engine-title">
      <div className={styles.methodInner}>
        <div className={styles.methodHead}>
          <p className={styles.kicker}>Il sistema</p>
          <h2 id="hypershell-engine-title" className={styles.methodTitle}>
            Non un supporto passivo. Una spinta che si adatta a te.
          </h2>
          <p className={styles.methodLead}>
            L&apos;AI MotionEngine è la stessa su tutti i modelli: cambia
            quanta potenza e autonomia hai a disposizione, non la qualità
            dell&apos;assistenza.
          </p>
        </div>
        <div className={styles.stepGrid}>
          {hyperEngineSteps.map((step) => (
            <article key={step.no} className={styles.stepCard}>
              <p className={styles.stepNo}>{step.no}</p>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
