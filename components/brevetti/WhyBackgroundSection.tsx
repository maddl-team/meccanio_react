import Link from "next/link";
import styles from "./brevetti.module.css";

export function WhyBackgroundSection() {
  return (
    <section className={styles.why} aria-labelledby="collegamento-title">
      <div className={styles.whyCard}>
        <div>
          <p className={`${styles.kicker} ${styles.whyKicker}`}>Il collegamento</p>
          <h2 id="collegamento-title" className={styles.whyTitle}>
            Perché questo background conta anche per gli esoscheletri
          </h2>
        </div>
        <div>
          <p className={styles.whyText}>
            Valutare un esoscheletro non è solo leggere una scheda tecnica:
            significa saper riconoscere la qualità costruttiva, i limiti reali
            di un materiale, la coerenza tra design e funzione. Questa capacità
            nasce dagli stessi anni di progettazione meccanica raccontati in
            questa pagina, ed è il motivo per cui Meccanio seleziona — invece di
            limitarsi a rivendere — le tecnologie esoscheletriche che propone.
          </p>
          <Link href="/azienda" className={styles.whyLink}>
            Torna a Chi Siamo →
          </Link>
        </div>
      </div>
    </section>
  );
}
