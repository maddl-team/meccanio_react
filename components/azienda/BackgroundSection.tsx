import { domains } from "@/data/azienda";
import { Button } from "@/components/ui/Button";
import styles from "./azienda.module.css";

export function BackgroundSection() {
  return (
    <section id="brevetti" className={styles.background} aria-labelledby="brevetti-title">
      <div className={styles.backgroundStripe} aria-hidden="true" />
      <div className={styles.backgroundInner}>
        <div className={styles.backgroundGrid}>
          <div>
            <p className={`${styles.kicker} ${styles.backgroundKicker}`}>
              Background tecnico
            </p>
            <h2 id="brevetti-title" className={styles.backgroundTitle}>
              Un background tecnico che va oltre gli esoscheletri
            </h2>
            <p className={styles.backgroundText}>
              Meccanio è titolare di diversi brevetti nazionali legati alla
              progettazione meccanica e all&apos;innovazione tecnologica. Negli
              anni, l&apos;azienda ha collaborato con enti di ricerca, università,
              aziende industriali e organismi legati alla sicurezza sul lavoro,
              in ambiti che comprendono automazione, macchine speciali, energia,
              healthcare e sistemi industriali.
            </p>
            <p className={styles.backgroundText}>
              Non ci presentiamo come produttori certificati di esoscheletri
              proprietari, ma come partner tecnico specializzato nella
              selezione, integrazione, dimostrazione e supporto di queste
              tecnologie — con un background ingegneristico che precede di molti
              anni il nostro ingresso in questo mercato.
            </p>
            <div className={styles.backgroundCta}>
              <Button href="/brevetti" variant="accentOnDark">
                Scopri brevetti e progettazione meccanica →
              </Button>
            </div>
          </div>
          <div className={styles.domainGrid}>
            {domains.map((domain) => (
              <article key={domain.no} className={styles.domainCard}>
                <p className={styles.domainNo}>{domain.no}</p>
                <h3 className={styles.domainName}>{domain.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
