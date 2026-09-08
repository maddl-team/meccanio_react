import Image from "next/image";
import { services } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./home.module.css";

export function ServicesSection() {
  return (
    <section id="competenze" className={styles.services}>
      <Image
        src="/images/services/workshop.jpg"
        alt=""
        fill
        sizes="100vw"
        className={styles.servicesImg}
        aria-hidden="true"
      />
      <div className={styles.servicesOverlay} aria-hidden="true" />
      <div className={styles.servicesInner}>
        <SectionHeading
          className={styles.headingMb46}
          kicker="Cosa facciamo oggi"
          title={
            <>
              Selezioniamo, integriamo
              <br />
              e supportiamo tecnologia.
            </>
          }
          description="Il valore non è nel prodotto a catalogo, ma nella capacità di capire quale tecnologia serve davvero e di farla funzionare nel contesto reale."
          titleMaxWidth={680}
          descriptionMaxWidth={400}
          tone="dark"
        />
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article key={service.no} className={styles.serviceCard}>
              <p className={styles.serviceNo}>{service.no}</p>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
