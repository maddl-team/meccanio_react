import Image from "next/image";
import Link from "next/link";
import { hapoConsultHref, hapoModels } from "@/data/hapo";
import styles from "./hapo.module.css";

export function HapoModelsSection() {
  return (
    <section
      id="modelli"
      className={styles.models}
      aria-labelledby="hapo-models-title"
    >
      <div className={styles.modelsHead}>
        <p className={styles.kicker}>La gamma HAPO</p>
        <h2 id="hapo-models-title" className={styles.modelsTitle}>
          Tre modelli, tre zone del corpo.
        </h2>
      </div>
      <div className={styles.modelGrid}>
        {hapoModels.map((model) => {
          const inner = (
            <>
              <div className={styles.modelPhoto}>
                <Image
                  src={model.image}
                  alt={model.imageAlt}
                  fill
                  sizes="(min-width: 900px) 33vw, 100vw"
                  className={styles.modelImg}
                />
              </div>
              <div className={styles.modelBody}>
                <h3 className={styles.modelTitle}>
                  {model.name}{" "}
                  <span className={styles.modelAccent}>{model.accent}</span>
                </h3>
                <p className={styles.modelDesc}>{model.desc}</p>
              </div>
            </>
          );

          if (model.href) {
            return (
              <Link
                key={model.accent}
                href={model.href}
                className={`${styles.modelCard} ${styles.modelCardLink}`}
              >
                {inner}
              </Link>
            );
          }

          return (
            <article key={model.accent} className={styles.modelCard}>
              {inner}
            </article>
          );
        })}
      </div>
      <div className={styles.modelsCta}>
        <Link href={hapoConsultHref} className={styles.compareLink}>
          Quale modello per il tuo compito? →
        </Link>
      </div>
    </section>
  );
}
