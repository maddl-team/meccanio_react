import { methodSteps } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./home.module.css";

export function MethodSection() {
  return (
    <section id="metodo" className={styles.method}>
      <div className={styles.container}>
        <SectionHeading
          className={styles.headingMb46}
          kicker="Come lavoriamo"
          title={
            <>
              Sette passaggi,
              <br />
              nessuna scorciatoia.
            </>
          }
          description="Nessuna fornitura parte senza prova sul campo. Il pilot serve a misurare il beneficio reale prima dell'investimento."
          titleMaxWidth={640}
          descriptionMaxWidth={400}
          tone="dark"
        />
        <div className={styles.stepGrid}>
          {methodSteps.map((step) => (
            <article key={step.no} className={styles.stepCard}>
              <p className={styles.stepNo}>{step.no}</p>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
