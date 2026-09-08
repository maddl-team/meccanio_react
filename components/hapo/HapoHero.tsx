import Image from "next/image";
import Link from "next/link";
import { hapo, hapoConsultHref } from "@/data/hapo";
import { Button } from "@/components/ui/Button";
import styles from "./hapo.module.css";

export function HapoHero() {
  return (
    <>
      <nav className={styles.crumb} aria-label="Percorso">
        <Link href="/" className={styles.crumbLink}>
          Home
        </Link>
        &nbsp;/&nbsp;
        <span className={styles.crumbCurrent}>HAPO</span>
      </nav>
      <section className={styles.hero} aria-labelledby="hapo-hero-title">
        <div className={styles.heroCard}>
          <Image
            src={hapo.heroImage}
            alt={hapo.heroImageAlt}
            fill
            priority
            sizes="(min-width: 1560px) 1504px, 100vw"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} aria-hidden="true" />
          <div className={styles.heroInner}>
            <p className={styles.heroBadge}>B2B · Lavoro</p>
            <h1 id="hapo-hero-title" className={styles.heroTitle}>
              HAPO. L&apos;esoscheletro giusto per ogni compito.
            </h1>
            <p className={styles.heroLead}>
              Non uno standard per tutti: analizziamo il compito reale e
              proponiamo il dispositivo corretto, con demo sul campo.
            </p>
            <div className={styles.heroCtas}>
              <Button
                href={hapoConsultHref}
                variant="hero"
                className={styles.heroBtn}
              >
                Richiedi consulenza
              </Button>
              <Button
                href={hapoConsultHref}
                variant="heroGhost"
                className={`${styles.heroBtn} ${styles.heroBtnGhost}`}
              >
                Prenota demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
