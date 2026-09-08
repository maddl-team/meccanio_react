import { trustStats } from "@/data/site";
import { Button } from "@/components/ui/Button";
import styles from "./home.module.css";

export function AboutSection() {
  return (
    <section id="azienda" className={styles.about} aria-labelledby="azienda-title">
      <div className={styles.aboutGrid}>
        <div>
          <p className={`${styles.kicker} ${styles.aboutKicker}`}>Chi è Meccanio</p>
          <h2 id="azienda-title" className={styles.aboutTitle}>
            Un&apos;azienda tecnica, prima che commerciale.
          </h2>
          <p className={styles.aboutText}>
            Meccanio nasce dalla progettazione meccanica e dall&apos;automazione
            industriale: macchine, impianti, attrezzature speciali, ricerca
            applicata e sviluppo di soluzioni tecniche su commessa. Oltre 25 anni
            di lavoro in officina e in ufficio tecnico, accanto a chi produce.
          </p>
          <p className={styles.aboutText}>
            Da quella base stiamo estendendo le nostre competenze verso la
            robotica applicata alla persona e al lavoro. Non cambiamo mestiere:
            applichiamo lo stesso metodo ingegneristico a una nuova famiglia di
            tecnologie.
          </p>
          <div className={styles.aboutCtas}>
            <Button href="#metodo" variant="dark">
              Come lavoriamo
            </Button>
            <Button href="/contatti" variant="underline">
              Parla con i nostri ingegneri →
            </Button>
          </div>
        </div>
        <div className={styles.statGrid}>
          {trustStats.map((stat) => (
            <article key={stat.value} className={styles.statCard}>
              <p className={styles.statValue}>{stat.value}</p>
              <p className={styles.statLabel}>{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
