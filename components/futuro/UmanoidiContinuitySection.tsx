import Link from "next/link";
import styles from "./futuro.module.css";

export function UmanoidiContinuitySection() {
  return (
    <section className={`${styles.why} ${styles.whySpaced}`} aria-labelledby="continuita-title">
      <div className={styles.whyCard}>
        <div>
          <p className={`${styles.kicker} ${styles.whyKicker}`}>Il collegamento</p>
          <h2 id="continuita-title" className={styles.whyTitle}>
            Una continuità naturale con HAPO e HyperShell
          </h2>
        </div>
        <div>
          <p className={styles.whyText}>
            Se gli esoscheletri Meccanio assistono il movimento del corpo, una
            piattaforma umanoide rappresenta un passo ulteriore nella stessa
            direzione: tecnologia che affianca la persona invece di
            sostituirla, applicata questa volta non a un dispositivo
            indossabile, ma a un sistema autonomo capace di svolgere compiti
            specifici.
          </p>
          <Link href="/futuro" className={styles.whyLink}>
            Torna alla visione Meccanio →
          </Link>
        </div>
      </div>
    </section>
  );
}
