import { partnerValues } from "@/data/site";
import { Button } from "@/components/ui/Button";
import styles from "./home.module.css";

export function PartnersSection() {
  return (
    <section id="partner" className={styles.partners} aria-labelledby="partner-title">
      <div className={styles.partnerGrid}>
        <div>
          <p className={`${styles.kicker} ${styles.partnerKicker}`}>Per i produttori</p>
          <h2 id="partner-title" className={styles.partnerTitle}>
            Cerchi un partner tecnico per il mercato italiano?
          </h2>
          <p className={styles.partnerLead}>
            Portiamo competenza ingegneristica, capacità di demo e test,
            formazione e assistenza post-vendita. Presidio diretto su Roma e
            Centro Italia, con possibilità di sviluppo su scala nazionale.
          </p>
          <div>
            <Button href="/contatti" variant="accent">
              Proponi una collaborazione
            </Button>
          </div>
        </div>
        <div className={styles.valueGrid}>
          {partnerValues.map((item) => (
            <article key={item.no} className={styles.valueCard}>
              <p className={styles.valueNo}>{item.no}</p>
              <h3 className={styles.valueTitle}>{item.title}</h3>
              <p className={styles.valueDesc}>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
