import Image from "next/image";
import Link from "next/link";
import { futuro } from "@/data/futuro";
import { Button } from "@/components/ui/Button";
import styles from "./futuro.module.css";

export function FuturoHero() {
  return (
    <section className={styles.hero} aria-labelledby="futuro-hero-title">
      <div className={styles.heroStripe} aria-hidden="true" />
      <Image
        src={futuro.heroImage}
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
          La Visione Meccanio
        </p>
        <h1 id="futuro-hero-title" className={styles.heroTitle}>
          Oltre l&apos;esoscheletro.
        </h1>
        <p className={styles.heroLead}>
          Gli esoscheletri HAPO e HyperShell sono il punto di partenza, non il
          punto di arrivo. La stessa competenza ingegneristica che ci ha
          portato a selezionare queste tecnologie ci guida oggi verso un
          orizzonte più ampio: diventare il riferimento italiano per le
          tecnologie robotiche, cibernetiche e di assistenza applicate alla
          persona, al lavoro e alla sicurezza.
        </p>
        <div className={styles.heroCtas}>
          <Button href="/contatti" variant="hero">
            Parla con i nostri ingegneri
          </Button>
        </div>
      </div>
    </section>
  );
}
