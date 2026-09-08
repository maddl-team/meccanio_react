import Image from "next/image";
import Link from "next/link";
import { solutionFamilies } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./home.module.css";

export function SolutionsSection() {
  return (
    <section id="soluzioni" className={styles.solutions}>
      <SectionHeading
        className={styles.headingMb42}
        kicker="Le soluzioni disponibili oggi"
        title={
          <>
            La prima famiglia:
            <br />
            robotica indossabile.
          </>
        }
        description="Gli esoscheletri sono le prime tecnologie che abbiamo selezionato, testato e portato sul mercato italiano. Sono un punto di partenza, non il perimetro dell'azienda."
        titleSize="lg"
        titleMaxWidth={660}
        descriptionMaxWidth={420}
        descriptionSize={17}
      />
      <div className={styles.solutionGrid}>
        {solutionFamilies.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`${styles.solutionCard} ${styles[item.variant]}`}
          >
            <div
              className={item.variant === "hapo" ? styles.solStripeDark : styles.solStripeLight}
              aria-hidden="true"
            />
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              className={styles.solImg}
            />
            <div
              className={item.variant === "hapo" ? styles.solGradDark : styles.solGradLight}
              aria-hidden="true"
            />
            <div className={styles.solBody}>
              <span
                className={`${styles.solBadge} ${item.variant === "hapo" ? styles.badgeLight : styles.badgeAccent}`}
              >
                {item.badge}
              </span>
              <h3 className={styles.solTitle}>{item.name}</h3>
              <p className={styles.solDesc}>{item.desc}</p>
              <span className={styles.solCta}>{item.cta}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.solNote}>
        <p>
          Accanto a queste due famiglie stiamo valutando dispositivi di altri
          produttori italiani e internazionali: la selezione resta aperta e
          guidata dai risultati dei test, non da un accordo commerciale.
        </p>
        <Button href="/futuro" variant="outline">
          La direzione futura →
        </Button>
      </div>
    </section>
  );
}
