import Image from "next/image";
import Link from "next/link";
import { futureFamilies } from "@/data/site";
import styles from "./home.module.css";

export function VisionSection() {
  return (
    <section id="visione" className={styles.vision} aria-labelledby="visione-title">
      <Image
        src="/images/vision/robots.jpg"
        alt=""
        fill
        sizes="100vw"
        className={styles.visionImg}
        aria-hidden="true"
      />
      <div className={styles.visionOverlay} aria-hidden="true" />
      <div className={styles.visionInner}>
        <div className={styles.visionIntro}>
          <p className={`${styles.kicker} ${styles.visionKicker}`}>La direzione</p>
          <h2 id="visione-title" className={styles.visionTitle}>
            Oltre l&apos;esoscheletro.
          </h2>
          <p className={styles.visionLead}>
            Vogliamo diventare il riferimento tecnico italiano per le tecnologie
            robotiche applicate alla persona, al lavoro e alla sicurezza. Le
            famiglie su cui stiamo costruendo competenza sono già definite.
          </p>
        </div>
        <div className={styles.futureGrid}>
          {futureFamilies.map((item) => {
            const inner = (
              <>
                <div className={styles.futureTop}>
                  <span className={styles.futureNo}>{item.no}</span>
                  <span className={styles.futureStatus}>{item.status}</span>
                </div>
                <h3 className={styles.futureTitle}>{item.title}</h3>
                <p className={styles.futureDesc}>{item.desc}</p>
              </>
            );

            if (item.href) {
              return (
                <Link
                  key={item.no}
                  href={item.href}
                  className={`${styles.futureCard} ${styles.futureCardLink}`}
                >
                  {inner}
                </Link>
              );
            }

            return (
              <article key={item.no} className={styles.futureCard}>
                {inner}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
