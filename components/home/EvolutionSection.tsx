import { evolution } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./home.module.css";

export function EvolutionSection() {
  return (
    <section className={styles.evolution}>
      <SectionHeading
        className={styles.headingMb}
        kicker="Il nostro percorso"
        title={
          <>
            Una competenza che evolve,
            <br />
            non un catalogo che cambia.
          </>
        }
        description="Ogni passaggio si appoggia su quello precedente: la stessa cultura tecnica che progetta una macchina è quella che valuta un dispositivo indossabile."
        titleSize="lg"
        titleMaxWidth={660}
        descriptionMaxWidth={420}
        descriptionSize={17}
      />
      <div className={styles.evoGrid}>
        {evolution.map((item) => (
          <article
            key={item.step}
            className={`${styles.evoCard} ${item.variant === "dark" ? styles.evoDark : styles.evoLight}`}
          >
            <p className={styles.evoNo}>{item.step}</p>
            <div>
              <h3 className={styles.evoTitle}>{item.title}</h3>
              <p className={styles.evoDesc}>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
