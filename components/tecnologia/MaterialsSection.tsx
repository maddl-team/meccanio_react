import Image from "next/image";
import Link from "next/link";
import styles from "./tecnologia.module.css";

export function MaterialsSection() {
  return (
    <section
      id="materiali"
      className={styles.materials}
      aria-labelledby="materiali-title"
    >
      <div className={styles.materialsStripe} aria-hidden="true" />
      <div className={styles.materialsInner}>
        <div className={styles.materialsGrid}>
          <div className={styles.materialsPhoto}>
            <Image
              src="/images/hypershell/ultra/worn.jpg"
              alt="Esoscheletro indossato: struttura leggera a contatto con il corpo"
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              className={styles.materialsImg}
            />
          </div>
          <div>
            <h2 id="materiali-title" className={styles.materialsTitle}>
              Materiali: leggerezza e resistenza
            </h2>
            <p className={styles.materialsText}>
              La scelta dei materiali incide direttamente su comfort e
              affaticamento: un dispositivo pesante annulla in parte il
              beneficio che dovrebbe offrire. Per questo la gamma selezionata
              da Meccanio utilizza leghe leggere, fibra di carbonio e
              componenti in titanio nei punti sottoposti a maggiore
              sollecitazione, insieme a imbottiture ergonomiche a contatto con
              il corpo.
            </p>
            <div className={styles.materialsLinks}>
              <Link href="/tecnologia/materiali-e-ingegneria" className={styles.materialsLink}>
                Scopri materiali e ingegneria →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
