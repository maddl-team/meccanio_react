import Link from "next/link";
import { contactReasons } from "@/data/contatti";
import styles from "./contatti.module.css";

export function ContactReasonsSection() {
  return (
    <section className={styles.reasons} aria-labelledby="motivi-title">
      <div className={styles.reasonsStripe} aria-hidden="true" />
      <div className={styles.reasonsInner}>
        <div className={styles.reasonsHead}>
          <div>
            <p className={`${styles.kicker} ${styles.reasonsKicker}`}>
              Come possiamo aiutarti
            </p>
            <h2 id="motivi-title" className={styles.reasonsTitle}>
              Scegli il motivo del contatto
            </h2>
          </div>
          <span className={styles.reasonsRange}>01 — 03</span>
        </div>
        <div className={styles.reasonGrid}>
          {contactReasons.map((item) => (
            <Link key={item.no} href={item.href} className={styles.reasonCard}>
              <p className={styles.reasonNo}>{item.no}</p>
              <h3 className={styles.reasonName}>{item.title}</h3>
              <p className={styles.reasonDesc}>{item.desc}</p>
              <span className={styles.reasonCta}>Scrivici →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
