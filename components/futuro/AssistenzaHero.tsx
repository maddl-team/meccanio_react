import Image from "next/image";
import Link from "next/link";
import { assistenza } from "@/data/futuro";
import styles from "./futuro.module.css";

export function AssistenzaHero() {
  return (
    <section className={styles.hero} aria-labelledby="assistenza-hero-title">
      <div className={styles.heroStripe} aria-hidden="true" />
      <Image
        src={assistenza.heroImage}
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
          Sistemi di Assistenza e Sicurezza
        </p>
        <h1 id="assistenza-hero-title" className={styles.heroTitle}>
          La tecnologia più utile è quella che nessuno nota, finché non serve
          davvero.
        </h1>
        <p className={styles.heroLead}>
          Persone fragili, con disabilità, o semplicemente più esposte al
          rischio in determinati contesti operativi: la direzione futura di
          Meccanio guarda a sistemi di assistenza e sicurezza pensati per
          intervenire proprio quando serve, con la stessa attenzione alla
          persona che guida oggi la selezione dei nostri esoscheletri.
        </p>
        <p className={styles.heroNote}>
          Questa pagina descrive una direzione tecnologica verso cui guarda
          Meccanio: non è ancora un prodotto disponibile in catalogo.
        </p>
      </div>
    </section>
  );
}
