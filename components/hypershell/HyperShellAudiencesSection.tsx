import Image from "next/image";
import { hyperAudiences } from "@/data/hypershell";
import { Button } from "@/components/ui/Button";
import styles from "./hypershell.module.css";

export function HyperShellAudiencesSection() {
  return (
    <section className={styles.sectors} aria-labelledby="hypershell-audiences-title">
      <div className={styles.sectorsGrid}>
        <div>
          <p className={styles.kicker}>Usi reali</p>
          <h2 id="hypershell-audiences-title" className={styles.sectorsTitle}>
            Per chi è pensato HyperShell.
          </h2>
          <p className={styles.sectorsText}>
            Escursionisti e appassionati di trekking, sportivi, ciclisti e
            sciatori, persone attive che vogliono estendere la propria
            autonomia di movimento, e senior che desiderano continuare a
            camminare a lungo senza rinunciare all&apos;indipendenza. In tutti
            questi casi, HyperShell aggiunge margine: più distanza, meno
            fatica, stessa libertà.
          </p>
          <Button href="/#settori" variant="dark">
            Scopri active aging e mobilità assistita
          </Button>
        </div>
        <div className={styles.tileGrid}>
          {hyperAudiences.map((item) => (
            <figure key={item.name} className={styles.tile}>
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 900px) 25vw, 50vw"
                className={styles.tileImg}
              />
              <figcaption className={styles.tileLabel}>{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
