import Image from "next/image";
import Link from "next/link";
import { quadrupedi } from "@/data/futuro";
import styles from "./futuro.module.css";

export function QuadrupediHero() {
  return (
    <section className={styles.hero} aria-labelledby="quadrupedi-hero-title">
      <div className={styles.heroStripe} aria-hidden="true" />
      <Image
        src={quadrupedi.heroImage}
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
          Robot Quadrupedi
        </p>
        <h1 id="quadrupedi-hero-title" className={styles.heroTitle}>
          Dove l&apos;uomo non dovrebbe rischiare, può muoversi un quadrupede.
        </h1>
        <p className={styles.heroLead}>
          Ispezioni in ambienti pericolosi, sorveglianza di siti industriali
          estesi, accesso a spazi difficilmente raggiungibili in sicurezza: sono
          contesti in cui un sistema robotico quadrupede può ridurre
          l&apos;esposizione al rischio delle persone, senza sostituirle nel
          giudizio e nella decisione.
        </p>
        <p className={styles.heroNote}>
          Questa pagina descrive una direzione tecnologica verso cui guarda
          Meccanio: non è ancora un prodotto disponibile in catalogo.
        </p>
      </div>
    </section>
  );
}
