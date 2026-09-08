import Image from "next/image";
import Link from "next/link";
import { futureDirections } from "@/data/futuro";
import styles from "./futuro.module.css";

export function DirectionsSection() {
  return (
    <section id="direzioni" className={styles.directions} aria-labelledby="direzioni-title">
      <div className={styles.directionsHead}>
        <div>
          <p className={`${styles.kicker} ${styles.directionsKicker}`}>
            La direzione
          </p>
          <h2 id="direzioni-title" className={styles.directionsTitle}>
            Tre direzioni verso cui guardiamo
          </h2>
        </div>
        <span className={styles.directionsRange}>01 — 03</span>
      </div>
      <div className={styles.directionGrid}>
        {futureDirections.map((item) => (
          <Link key={item.no} href={item.href} className={styles.directionCard}>
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(min-width: 1025px) 33vw, 100vw"
              className={styles.directionImg}
            />
            <span className={styles.directionGrad} aria-hidden="true" />
            <div className={styles.directionBody}>
              <p className={styles.directionNo}>{item.no}</p>
              <h3 className={styles.directionName}>{item.title}</h3>
              <p className={styles.directionDesc}>{item.desc}</p>
              <span className={styles.directionCta}>{item.cta}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
