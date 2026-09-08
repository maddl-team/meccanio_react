import Image from "next/image";
import { contatti } from "@/data/contatti";
import styles from "./contatti.module.css";

export function ContattiHero() {
  return (
    <section className={styles.hero} aria-labelledby="contatti-hero-title">
      <div className={styles.heroStripe} aria-hidden="true" />
      <Image
        src={contatti.heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.heroImg}
        aria-hidden="true"
      />
      <div className={styles.heroOverlay} aria-hidden="true" />
      <div className={styles.heroInner}>
        <p className={styles.crumb}>Contatti</p>
        <h1 id="contatti-hero-title" className={styles.heroTitle}>
          Parliamone. Che sia un problema di lavoro o una scelta per la tua
          prossima uscita.
        </h1>
        <p className={styles.heroLead}>
          Che tu debba risolvere un&apos;esigenza di ergonomia in azienda o
          scegliere il modello HyperShell più adatto a te, scrivici: un tecnico
          Meccanio ti risponde entro 24-48 ore lavorative per indirizzarti verso
          la soluzione giusta.
        </p>
      </div>
    </section>
  );
}
