import Link from "next/link";
import styles from "./futuro.module.css";

export function WhyDirectionSection() {
  return (
    <section className={styles.why} aria-labelledby="perche-direzione-title">
      <div className={styles.whyCard}>
        <div>
          <p className={`${styles.kicker} ${styles.whyKicker}`}>Il collegamento</p>
          <h2 id="perche-direzione-title" className={styles.whyTitle}>
            Perché questa direzione, e non un&apos;altra
          </h2>
        </div>
        <div>
          <p className={styles.whyText}>
            Non è un&apos;estensione di catalogo, ma la naturale continuazione di
            25 anni di progettazione meccanica, automazione industriale e
            ricerca applicata. Gli esoscheletri ci hanno permesso di applicare
            questo background al supporto diretto del movimento umano; le
            tecnologie robotiche e cibernetiche sono il passo successivo dello
            stesso percorso, verso l&apos;assistenza alla persona, alla
            sicurezza sul lavoro e alla mobilità aumentata.
          </p>
          <Link href="/azienda" className={styles.whyLink}>
            Scopri chi è Meccanio →
          </Link>
        </div>
      </div>
    </section>
  );
}
