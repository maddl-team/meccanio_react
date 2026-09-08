import Image from "next/image";
import { azienda } from "@/data/azienda";
import { Button } from "@/components/ui/Button";
import styles from "./azienda.module.css";

export function AziendaHero() {
  return (
    <section className={styles.hero} aria-labelledby="azienda-hero-title">
      <div className={styles.heroStripe} aria-hidden="true" />
      <Image
        src={azienda.heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.heroImg}
        aria-hidden="true"
      />
      <div className={styles.heroOverlay} aria-hidden="true" />
      <div className={styles.heroInner}>
        <p className={`${styles.kicker} ${styles.heroKicker}`}>Chi Siamo</p>
        <h1 id="azienda-hero-title" className={styles.heroTitle}>
          25 anni di ingegneria meccanica, al servizio del corpo umano.
        </h1>
        <p className={styles.heroLead}>
          Meccanio nasce dalla progettazione meccanica, dall&apos;automazione
          industriale e dalla ricerca applicata. Non siamo un rivenditore che
          aggiunge un catalogo di prodotti: siamo un&apos;azienda di ingegneria
          italiana che porta nel mercato degli esoscheletri un background
          tecnico reale, fatto di brevetti, studi, prototipazione e
          collaborazioni con realtà industriali e scientifiche.
        </p>
        <div className={styles.heroCtas}>
          <Button href="/contatti" variant="hero">
            Prenota una dimostrazione
          </Button>
          <Button href="/brevetti" variant="heroGhost">
            Scopri i nostri brevetti →
          </Button>
        </div>
      </div>
    </section>
  );
}
