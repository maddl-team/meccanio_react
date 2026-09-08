import Image from "next/image";
import Link from "next/link";
import { materiali } from "@/data/tecnologia";
import { Button } from "@/components/ui/Button";
import styles from "./tecnologia.module.css";

export function MaterialiHero() {
  return (
    <section className={styles.hero} aria-labelledby="materiali-hero-title">
      <div className={styles.heroStripe} aria-hidden="true" />
      <Image
        src={materiali.heroImage}
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
          Materiali e ingegneria
        </p>
        <h1 id="materiali-hero-title" className={styles.heroTitle}>
          Ogni grammo in più è fatica in più. Per questo la scelta dei materiali
          non è un dettaglio.
        </h1>
        <p className={styles.heroLead}>
          Un esoscheletro dovrebbe ridurre lo sforzo, non aggiungerne. Per
          questo la selezione dei materiali segue un criterio preciso: massima
          resistenza nei punti sotto sollecitazione, minimo peso ovunque sia
          possibile. La stessa attenzione che Meccanio applica da 25 anni
          alla progettazione meccanica industriale guida oggi la valutazione
          dei dispositivi che selezioniamo per il lavoro e per la vita
          quotidiana.
        </p>
        <div className={styles.heroCtas}>
          <Button href="#materiali" variant="hero">
            I materiali principali
          </Button>
          <Button href="#peso" variant="heroGhost">
            Perché conta il peso →
          </Button>
        </div>
      </div>
    </section>
  );
}
