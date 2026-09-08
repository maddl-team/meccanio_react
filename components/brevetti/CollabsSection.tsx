import Image from "next/image";
import Link from "next/link";
import { brevettiResources } from "@/data/brevetti";
import styles from "./brevetti.module.css";

export function CollabsSection() {
  return (
    <section className={styles.collabs} aria-labelledby="collaborazioni-title">
      <div className={styles.collabsHead}>
        <h2 id="collaborazioni-title" className={styles.collabsTitle}>
          Collaborazioni con enti di ricerca e realtà industriali
        </h2>
        <p className={styles.collabsLead}>
          Negli anni, Meccanio ha collaborato con enti di ricerca, università,
          aziende industriali e organismi legati alla sicurezza sul lavoro.
          Queste collaborazioni sono documentate nella pagina Azienda,
          insieme al percorso di progettazione meccanica.
        </p>
      </div>
      <div className={styles.collabGrid}>
        {brevettiResources.map((item) => (
          <Link key={item.title} href={item.href} className={styles.collabCard}>
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              className={styles.collabImg}
            />
            <span className={styles.collabGrad} aria-hidden="true" />
            <div className={styles.collabBody}>
              <p className={`${styles.kicker} ${styles.collabKicker}`}>
                {item.kicker}
              </p>
              <h3 className={styles.collabName}>{item.title}</h3>
              <p className={styles.collabDesc}>{item.desc}</p>
              <span className={styles.collabCta}>{item.cta}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
