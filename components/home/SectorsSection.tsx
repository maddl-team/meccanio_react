import Image from "next/image";
import { sectors } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./home.module.css";

export function SectorsSection() {
  return (
    <section id="settori" className={styles.sectors}>
      <SectionHeading
        className={styles.headingMb}
        kicker="Dove si applicano"
        title={
          <>
            Otto contesti, un principio:
            <br />
            ridurre il carico sulla persona.
          </>
        }
        description="Valutiamo il compito, non il settore in astratto. La stessa tecnologia cambia valore a seconda del gesto, della frequenza e dell'ambiente."
        titleMaxWidth={640}
        descriptionMaxWidth={400}
      />
      <div className={styles.sectorGrid}>
        {sectors.map((sector) => (
          <article key={sector.no} className={styles.sectorCard}>
            <div className={styles.sectorMedia}>
              <Image
                src={sector.image}
                alt={sector.imageAlt}
                fill
                sizes="(min-width: 1025px) 25vw, (min-width: 521px) 50vw, 100vw"
                className={styles.sectorImg}
              />
              <span className={styles.sectorScrim} aria-hidden="true" />
              <span className={styles.sectorNo}>{sector.no}</span>
            </div>
            <div className={styles.sectorBody}>
              <h3 className={styles.sectorName}>{sector.name}</h3>
              <p className={styles.sectorDesc}>{sector.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
