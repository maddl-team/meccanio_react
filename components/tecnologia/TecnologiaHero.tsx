import Image from "next/image";
import Link from "next/link";
import { tecnologia } from "@/data/tecnologia";
import { Button } from "@/components/ui/Button";
import styles from "./tecnologia.module.css";

export function TecnologiaHero() {
  return (
    <section className={styles.hero} aria-labelledby="tecnologia-hero-title">
      <div className={styles.heroStripe} aria-hidden="true" />
      <Image
        src={tecnologia.heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.heroImg}
        aria-hidden="true"
      />
      <div className={styles.heroOverlay} aria-hidden="true" />
      <div className={styles.heroInner}>
        <p className={styles.crumb}>
          <Link href="/" className={styles.crumbLink}>
            Meccanio
          </Link>
          {"  /  "}
          Tecnologia
        </p>
        <h1 id="tecnologia-hero-title" className={styles.heroTitle}>
          Tecnologia che si adatta a te, non il contrario.
        </h1>
        <p className={styles.heroLead}>
          Dietro ogni esoscheletro selezionato da Meccanio c&apos;è un
          principio ingegneristico diverso, scelto in base a chi lo indosserà
          e a cosa dovrà fare. HAPO redistribuisce meccanicamente il carico, senza
          motori. HyperShell aggiunge una spinta attiva, regolata in tempo
          reale da un&apos;intelligenza adattiva. Qui spieghiamo come
          funzionano davvero, con lo stesso approccio tecnico con cui li
          selezioniamo.
        </p>
        <div className={styles.heroCtas}>
          <Button href="#principi" variant="hero">
            Confronta i principi
          </Button>
          <Button href="#motionengine" variant="heroGhost">
            AI MotionEngine →
          </Button>
        </div>
      </div>
    </section>
  );
}
