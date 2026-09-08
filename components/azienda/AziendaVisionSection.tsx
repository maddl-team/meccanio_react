import Link from "next/link";
import styles from "./azienda.module.css";

export function AziendaVisionSection() {
  return (
    <section id="visione" className={styles.vision} aria-labelledby="visione-azienda-title">
      <div className={styles.visionCard}>
        <div>
          <p className={`${styles.kicker} ${styles.visionKicker}`}>La visione</p>
          <h2 id="visione-azienda-title" className={styles.visionTitle}>
            Non solo esoscheletri: la visione Meccanio
          </h2>
        </div>
        <div>
          <p className={styles.visionText}>
            Gli esoscheletri sono il punto di partenza, non il punto di arrivo.
            La nostra direzione è diventare un riferimento italiano per le
            tecnologie robotiche, cibernetiche e di assistenza applicate alla
            persona, al lavoro e alla sicurezza.
          </p>
          <Link href="/futuro" className={styles.visionLink}>
            Scopri la nostra visione →
          </Link>
        </div>
      </div>
    </section>
  );
}
