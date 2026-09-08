import Link from "next/link";
import styles from "./futuro.module.css";

export function QuadrupediCompetenceSection() {
  return (
    <section className={`${styles.why} ${styles.whySpaced}`} aria-labelledby="competenza-title">
      <div className={styles.whyCard}>
        <div>
          <p className={`${styles.kicker} ${styles.whyKicker}`}>Il collegamento</p>
          <h2 id="competenza-title" className={styles.whyTitle}>
            La stessa competenza, applicata a una nuova scala
          </h2>
        </div>
        <div>
          <p className={styles.whyText}>
            La progettazione meccanica, l&apos;automazione industriale e la
            ricerca applicata che guidano oggi la selezione degli esoscheletri
            Meccanio sono le stesse competenze che ci porteranno, in futuro, a
            valutare e proporre sistemi robotici quadrupedi — con lo stesso
            approccio: analisi dell&apos;esigenza reale, non vendita di un
            prodotto standard.
          </p>
          <Link href="/futuro" className={styles.whyLink}>
            Torna alla visione Meccanio →
          </Link>
        </div>
      </div>
    </section>
  );
}
