import { contactDetails } from "@/data/contatti";
import styles from "./contatti.module.css";

export function ContactDetailsSection() {
  return (
    <section className={styles.details} aria-labelledby="recapiti-title">
      <div className={styles.detailsInner}>
        <p className={`${styles.kicker} ${styles.detailsKicker}`}>Diretto</p>
        <h2 id="recapiti-title" className={styles.detailsTitle}>
          Recapiti diretti
        </h2>
        <div className={styles.detailsGrid}>
          {contactDetails.map((item) => {
            const content = (
              <>
                <p className={styles.detailLabel}>{item.label}</p>
                <p className={styles.detailValue}>{item.value}</p>
              </>
            );

            if (item.href) {
              const external = item.href.startsWith("http");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={styles.detailCard}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {content}
                </a>
              );
            }

            return (
              <article key={item.label} className={styles.detailCard}>
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
