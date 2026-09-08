import Image from "next/image";
import { hapoSectors } from "@/data/hapo";
import { Button } from "@/components/ui/Button";
import styles from "./hapo.module.css";

export function HapoSectorsSection() {
  return (
    <section className={styles.sectors} aria-labelledby="hapo-sectors-title">
      <div className={styles.sectorsGrid}>
        <div>
          <p className={styles.kicker}>Applicazioni reali</p>
          <h2 id="hapo-sectors-title" className={styles.sectorsTitle}>
            Settori in cui HAPO fa la differenza.
          </h2>
          <p className={styles.sectorsText}>
            Industria manifatturiera, logistica e magazzini, edilizia e
            cantieri, manutenzione e impiantistica, agricoltura, sanità e centri
            di riabilitazione: ovunque un compito ripetitivo mette sotto sforzo
            il corpo, un dispositivo HAPO può ridurre fatica e rischio di
            infortunio.
          </p>
          <Button href="/#settori" variant="dark">
            Scopri le soluzioni per il tuo settore
          </Button>
        </div>
        <div className={styles.tileGrid}>
          {hapoSectors.map((sector) => (
            <figure key={sector.name} className={styles.tile}>
              <Image
                src={sector.image}
                alt={sector.imageAlt}
                fill
                sizes="(min-width: 900px) 16vw, 50vw"
                className={styles.tileImg}
              />
              <figcaption className={styles.tileLabel}>{sector.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
