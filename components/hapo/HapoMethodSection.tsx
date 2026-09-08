import { hapoMethodSteps } from "@/data/hapo";
import styles from "./hapo.module.css";

export function HapoMethodSection() {
  return (
    <section className={styles.method} aria-labelledby="hapo-method-title">
      <div className={styles.methodInner}>
        <div className={styles.methodHead}>
          <p className={styles.kicker}>Il metodo Meccanio</p>
          <h2 id="hapo-method-title" className={styles.methodTitle}>
            Non un rivenditore. Un percorso tecnico completo.
          </h2>
          <p className={styles.methodLead}>
            Ogni fornitura HAPO segue lo stesso metodo, indipendentemente dalle
            dimensioni dell&apos;azienda:
          </p>
        </div>
        <div className={styles.stepGrid}>
          {hapoMethodSteps.map((step) => (
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
