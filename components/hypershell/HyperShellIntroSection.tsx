import styles from "./hypershell.module.css";

export function HyperShellIntroSection() {
  return (
    <section className={styles.intro} aria-label="La linea e per chi è pensata">
      <div className={styles.introGrid}>
        <article className={`${styles.introCard} ${styles.introLight}`}>
          <p className={styles.introKicker}>La linea</p>
          <p className={styles.introText}>
            HyperShell è la linea di esoscheletri motorizzati selezionata da
            Meccanio per chi vuole muoversi di più, con meno fatica.
            Un&apos;intelligenza adattiva — AI MotionEngine — riconosce il tuo
            passo e la superficie che stai percorrendo, e assiste il movimento
            in tempo reale: in salita, su terreno irregolare, durante una
            camminata lunga o un&apos;uscita in bici.
          </p>
        </article>
        <article className={`${styles.introCard} ${styles.introDark}`}>
          <p className={styles.introKicker}>Per chi è pensato</p>
          <p className={styles.introText}>
            Non è un dispositivo per pochi specialisti: è pensato per
            escursionisti, sportivi, persone attive e senior che vogliono
            continuare a muoversi come vogliono, senza che la fatica decida al
            posto loro.
          </p>
        </article>
      </div>
    </section>
  );
}
