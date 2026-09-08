import Link from "next/link";
import styles from "./tecnologia.module.css";

export function AppliedEngineeringSection() {
  return (
    <section className={`${styles.why} ${styles.whyFollow}`} aria-labelledby="ingegneria-title">
      <div className={styles.whyCard}>
        <div>
          <p className={`${styles.kicker} ${styles.whyKicker}`}>Il metodo</p>
          <h2 id="ingegneria-title" className={styles.whyTitle}>
            Un&apos;ingegneria applicata, non solo dichiarata
          </h2>
        </div>
        <div>
          <p className={styles.whyText}>
            Meccanio non si limita a riportare le specifiche fornite dai
            produttori: valuta i materiali e le soluzioni costruttive con la
            competenza tecnica maturata in oltre 25 anni di progettazione
            meccanica, automazione industriale e prototipazione — la stessa che
            è alla base dei brevetti nazionali di cui l&apos;azienda è titolare.
          </p>
          <Link href="/brevetti" className={styles.whyLink}>
            Scopri i brevetti e la storia di Meccanio →
          </Link>
        </div>
      </div>
    </section>
  );
}
