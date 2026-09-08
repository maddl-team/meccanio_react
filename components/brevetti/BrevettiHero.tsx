import Image from "next/image";
import Link from "next/link";
import { brevetti } from "@/data/brevetti";
import { Button } from "@/components/ui/Button";
import styles from "./brevetti.module.css";

export function BrevettiHero() {
  return (
    <section className={styles.hero} aria-labelledby="brevetti-hero-title">
      <div className={styles.heroStripe} aria-hidden="true" />
      <Image
        src={brevetti.heroImage}
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
          Brevetti e Progettazione Meccanica
        </p>
        <h1 id="brevetti-hero-title" className={styles.heroTitle}>
          L&apos;innovazione, prima ancora di venderla, l&apos;abbiamo progettata.
        </h1>
        <p className={styles.heroLead}>
          Prima di selezionare esoscheletri, Meccanio ha passato 25 anni a
          progettare i problemi meccanici alla radice: analisi tecnica,
          prototipazione, automazione industriale. Questa pagina raccoglie i
          brevetti nazionali e gli ambiti di progettazione meccanica che
          rappresentano il fondamento tecnico dell&apos;azienda —
          indipendentemente dal prodotto che oggi portiamo sul mercato.
        </p>
        <div className={styles.heroCtas}>
          <Button href="#brevetti" variant="hero">
            Vai ai brevetti
          </Button>
          <Button href="#ambiti" variant="heroGhost">
            Ambiti di progettazione →
          </Button>
        </div>
      </div>
    </section>
  );
}
