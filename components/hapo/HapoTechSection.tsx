import Image from "next/image";
import { hapo } from "@/data/hapo";
import styles from "./hapo.module.css";

export function HapoTechSection() {
  return (
    <section className={styles.tech} aria-labelledby="hapo-tech-title">
      <div className={styles.techGrid}>
        <div>
          <p className={styles.kicker}>Tecnologia passiva</p>
          <h2 id="hapo-tech-title" className={styles.techTitle}>
            Passivo, non motorizzato: perché per il lavoro è la scelta giusta.
          </h2>
          <p className={styles.techText}>
            Gli esoscheletri HAPO sono dispositivi passivi: non hanno motori né
            batterie, ma molle, leve e strutture rigide che assorbono e
            redistribuiscono meccanicamente il carico. Questo li rende adatti a
            un uso continuativo durante l&apos;intero turno di lavoro, senza
            vincoli di autonomia energetica, senza manutenzione elettronica e
            con un peso ridotto rispetto ai sistemi motorizzati. Per gesti
            ripetitivi — sollevare, piegarsi, lavorare a braccia alzate — è la
            tecnologia più affidabile e meno invasiva.
          </p>
        </div>
        <div className={styles.techPhoto}>
          <Image
            src={hapo.passiveImage}
            alt={hapo.passiveImageAlt}
            fill
            sizes="(min-width: 900px) 50vw, 100vw"
            className={styles.techImg}
          />
        </div>
      </div>
    </section>
  );
}
