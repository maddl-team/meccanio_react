import Image from "next/image";
import Link from "next/link";
import { techPrinciples } from "@/data/tecnologia";
import styles from "./tecnologia.module.css";

export function PrinciplesSection() {
  return (
    <section
      id="principi"
      className={styles.principles}
      aria-labelledby="principi-title"
    >
      <div className={styles.principlesHead}>
        <div>
          <p className={`${styles.kicker} ${styles.principlesKicker}`}>
            Due principi
          </p>
          <h2 id="principi-title" className={styles.principlesTitle}>
            Due principi di funzionamento, due esigenze diverse
          </h2>
        </div>
        <Link href="#faq" className={styles.principlesFaq}>
          Esoscheletro passivo o motorizzato: quali differenze? →
        </Link>
      </div>
      <div className={styles.principleGrid}>
        {techPrinciples.map((item) => (
          <Link key={item.id} href={item.href} className={styles.principleCard}>
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(min-width: 1025px) 50vw, 100vw"
              className={styles.principleImg}
            />
            <span className={styles.principleGrad} aria-hidden="true" />
            <div className={styles.principleBody}>
              <p className={styles.principleKicker}>{item.kicker}</p>
              <h3 className={styles.principleName}>{item.title}</h3>
              <p className={styles.principleDesc}>{item.desc}</p>
              <span className={styles.principleCta}>{item.cta}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
