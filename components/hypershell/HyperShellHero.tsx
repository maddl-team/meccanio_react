import Image from "next/image";
import Link from "next/link";
import { hypershell } from "@/data/hypershell";
import { Button } from "@/components/ui/Button";
import styles from "./hypershell.module.css";

export function HyperShellHero() {
  return (
    <>
      <nav className={styles.crumb} aria-label="Percorso">
        <Link href="/" className={styles.crumbLink}>
          Home
        </Link>
        &nbsp;/&nbsp;
        <span className={styles.crumbCurrent}>HyperShell</span>
      </nav>
      <section className={styles.hero} aria-labelledby="hypershell-hero-title">
        <div className={styles.heroCard}>
          <Image
            src={hypershell.heroImage}
            alt={hypershell.heroImageAlt}
            fill
            priority
            sizes="(min-width: 1560px) 1504px, 100vw"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} aria-hidden="true" />
          <div className={styles.heroInner}>
            <p className={styles.heroBadge}>Outdoor · Mobilità</p>
            <h1 id="hypershell-hero-title" className={styles.heroTitle}>
              Più potenza a ogni passo.
            </h1>
            <p className={styles.heroLead}>
              Un&apos;intelligenza adattiva — AI MotionEngine — riconosce il
              tuo passo e assiste il movimento in tempo reale: in salita, su
              terreno irregolare, durante una camminata lunga o un&apos;uscita
              in bici.
            </p>
            <div className={styles.heroCtas}>
              <Button href="#modelli" variant="hero" className={styles.heroBtn}>
                Scopri i 4 modelli
              </Button>
              <Button
                href="#modelli"
                variant="heroGhost"
                className={`${styles.heroBtn} ${styles.heroBtnGhost}`}
              >
                Confronta le versioni
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
