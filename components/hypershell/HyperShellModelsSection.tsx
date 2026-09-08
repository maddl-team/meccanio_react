import Image from "next/image";
import Link from "next/link";
import { hyperConsultHref, hyperModels } from "@/data/hypershell";
import styles from "./hypershell.module.css";

export function HyperShellModelsSection() {
  return (
    <section
      id="modelli"
      className={styles.models}
      aria-labelledby="hypershell-models-title"
    >
      <div className={styles.modelsHead}>
        <p className={styles.kicker}>La serie X</p>
        <h2 id="hypershell-models-title" className={styles.modelsTitle}>
          Quattro modelli. Un solo obiettivo: muoverti meglio.
        </h2>
      </div>
      <div className={styles.modelGrid}>
        {hyperModels.map((model) => {
          const inner = (
            <>
              <div className={styles.modelPhoto}>
                <Image
                  src={model.image}
                  alt={model.imageAlt}
                  fill
                  sizes="(min-width: 1100px) 25vw, (min-width: 720px) 50vw, 100vw"
                  className={styles.modelImg}
                />
              </div>
              <div className={styles.modelBody}>
                <h3 className={styles.modelTitle}>
                  {model.name}{" "}
                  <span className={styles.modelAccent}>{model.accent}</span>
                </h3>
                <div className={styles.modelSpecs}>
                  {model.specs.map((spec) => (
                    <span key={spec.label} className={styles.modelSpec}>
                      {spec.label} <strong>{spec.value}</strong>
                    </span>
                  ))}
                </div>
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
        <Link href={hyperConsultHref} className={styles.compareLink}>
          Quale modello fa per te? →
        </Link>
      </div>
    </section>
  );
}
