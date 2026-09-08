import Image from "next/image";
import Link from "next/link";
import { umanoidi } from "@/data/futuro";
import styles from "./futuro.module.css";

export function UmanoidiHero() {
  return (
    <section className={styles.hero} aria-labelledby="umanoidi-hero-title">
      <div className={styles.heroStripe} aria-hidden="true" />
      <Image
        src={umanoidi.heroImage}
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
          <Link href="/azienda" className={styles.crumbLink}>
            Azienda
          </Link>
          {"  /  "}
          <Link href="/futuro" className={styles.crumbLink}>
            La Visione
          </Link>
          {"  /  "}
          Umanoidi
        </p>
        <h1 id="umanoidi-hero-title" className={styles.heroTitle}>
          Un supporto robotico pensato per affiancare, non per sostituire.
        </h1>
        <p className={styles.heroLead}>
          Attività ripetitive, compiti di sorveglianza, assistenza in contesti
          professionali e domestici: sono ambiti in cui una piattaforma
          robotica umanoide può affiancare il lavoro delle persone, liberando
          tempo ed energie per attività che richiedono giudizio e relazione
          umana.
        </p>
        <p className={styles.heroNote}>
          Questa pagina descrive una direzione tecnologica verso cui guarda
          Meccanio: non è ancora un prodotto disponibile in catalogo.
        </p>
      </div>
    </section>
  );
}
