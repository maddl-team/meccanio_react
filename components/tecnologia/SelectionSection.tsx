import Link from "next/link";
import styles from "./tecnologia.module.css";

export function SelectionSection() {
  return (
    <section className={styles.why} aria-labelledby="selezione-title">
      <div className={styles.whyCard}>
        <div>
          <p className={`${styles.kicker} ${styles.whyKicker}`}>Il metodo</p>
          <h2 id="selezione-title" className={styles.whyTitle}>
            Una selezione tecnica, non solo commerciale
          </h2>
        </div>
        <div>
          <p className={styles.whyText}>
            Meccanio non produce questi dispositivi: li seleziona, li integra e
            li supporta con un background di 25 anni in progettazione meccanica,
            automazione industriale e ricerca applicata. Questo significa poter
            valutare un esoscheletro non solo dalla scheda tecnica del produttore,
            ma con la competenza di chi la meccanica la progetta da anni.
          </p>
          <Link href="/azienda" className={styles.whyLink}>
            Scopri chi è Meccanio →
          </Link>
        </div>
      </div>
    </section>
  );
}
