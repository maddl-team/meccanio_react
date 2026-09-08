import { ultraKeySpecs } from "@/data/hypershell-x-ultra";
import styles from "./product.module.css";

export function ProductKeySpecs() {
  return (
    <section className={styles.specs} aria-label="Specifiche principali">
      <div className={styles.specsInner}>
        <div className={styles.specsGrid}>
          {ultraKeySpecs.map((spec) => (
            <div key={spec.label} className={styles.specCell}>
              <div className={styles.specLabel}>{spec.label}</div>
              <div className={styles.specValue}>{spec.value}</div>
              <div className={styles.specNote}>{spec.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
