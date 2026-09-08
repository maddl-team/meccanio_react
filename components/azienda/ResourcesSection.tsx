import Image from "next/image";
import Link from "next/link";
import { resources } from "@/data/azienda";
import styles from "./azienda.module.css";

export function ResourcesSection() {
  return (
    <section className={styles.resources} aria-labelledby="referenze-title">
      <div className={styles.resourcesHead}>
        <h2 id="referenze-title" className={styles.resourcesTitle}>
          Referenze e studi tecnici
        </h2>
        <p className={styles.resourcesLead}>
          Le nostre collaborazioni con enti e aziende autorevoli, insieme agli
          studi tecnici sviluppati in questi anni, sono raccolti in due sezioni
          dedicate — utili per chi vuole valutare la nostra competenza
          ingegneristica prima di affidarci una fornitura.
        </p>
      </div>
      <div className={styles.resourceGrid}>
        {resources.map((item) => (
          <Link key={item.title} href={item.href} className={styles.resourceCard}>
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              className={styles.resourceImg}
            />
            <span className={styles.resourceGrad} aria-hidden="true" />
            <div className={styles.resourceBody}>
              <p className={`${styles.kicker} ${styles.resourceKicker}`}>
                {item.kicker}
              </p>
              <h3 className={styles.resourceName}>{item.title}</h3>
              <p className={styles.resourceDesc}>{item.desc}</p>
              <span className={styles.resourceCta}>{item.cta}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
