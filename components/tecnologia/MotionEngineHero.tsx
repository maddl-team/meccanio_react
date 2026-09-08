import Image from "next/image";
import Link from "next/link";
import { motionEngine } from "@/data/tecnologia";
import { Button } from "@/components/ui/Button";
import styles from "./tecnologia.module.css";

export function MotionEngineHero() {
  return (
    <section className={styles.hero} aria-labelledby="motionengine-hero-title">
      <div className={styles.heroStripe} aria-hidden="true" />
      <Image
        src={motionEngine.heroImage}
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
          <Link href="/tecnologia" className={styles.crumbLink}>
            Tecnologia
          </Link>
          {"  /  "}
          AI MotionEngine
        </p>
        <h1 id="motionengine-hero-title" className={styles.heroTitle}>
          Un&apos;intelligenza che impara a leggere il tuo passo, non il
          contrario.
        </h1>
        <p className={styles.heroLead}>
          AI MotionEngine è il sistema di intelligenza adattiva che equipaggia
          tutta la gamma HyperShell. Non si limita a fornire una spinta
          costante: osserva come ti muovi, in che condizioni lo fai, e regola
          l&apos;assistenza motorizzata di conseguenza — istante per istante,
          passo dopo passo.
        </p>
        <div className={styles.heroCtas}>
          <Button href="#funzionamento" variant="hero">
            Come funziona
          </Button>
          <Button href="#modalita" variant="heroGhost">
            Le modalità di assistenza →
          </Button>
        </div>
      </div>
    </section>
  );
}
