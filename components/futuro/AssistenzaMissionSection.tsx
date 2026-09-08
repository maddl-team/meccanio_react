import Link from "next/link";
import styles from "./futuro.module.css";

export function AssistenzaMissionSection() {
  return (
    <section className={`${styles.why} ${styles.whySpaced}`} aria-labelledby="missione-title">
      <div className={styles.whyCard}>
        <div>
          <p className={`${styles.kicker} ${styles.whyKicker}`}>Il collegamento</p>
          <h2 id="missione-title" className={styles.whyTitle}>
            Un&apos;estensione naturale della missione Meccanio
          </h2>
        </div>
        <div>
          <p className={styles.whyText}>
            Ridurre la fatica, aumentare l&apos;autonomia, rendere la tecnologia
            realmente utile nella vita delle persone: è la missione che oggi
            guida HAPO e HyperShell, e che in futuro guiderà anche i sistemi di
            assistenza e sicurezza pensati per chi ha esigenze più specifiche
            di supporto.
          </p>
          <Link href="/futuro" className={styles.whyLink}>
            Torna alla visione Meccanio →
          </Link>
        </div>
      </div>
    </section>
  );
}
