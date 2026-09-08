import styles from "./hapo.module.css";

export function HapoIntroSection() {
  return (
    <section className={styles.intro} aria-label="Il problema e l'approccio">
      <div className={styles.introGrid}>
        <article className={`${styles.introCard} ${styles.introLight}`}>
          <p className={styles.introKicker}>Il problema</p>
          <p className={styles.introText}>
            Fatica, sovraccarichi e disturbi muscoloscheletrici non hanno tutti
            la stessa causa — e non hanno tutti la stessa soluzione. HAPO è la
            linea di esoscheletri passivi selezionata da Meccanio per il mondo
            del lavoro: dispositivi che redistribuiscono il carico su schiena,
            spalle, braccia e collo, senza batterie e senza complicare i gesti
            quotidiani di chi lavora in fabbrica, in magazzino, in cantiere o
            in ambito sanitario.
          </p>
        </article>
        <article className={`${styles.introCard} ${styles.introDark}`}>
          <p className={styles.introKicker}>Il nostro approccio</p>
          <p className={styles.introText}>
            Non vendiamo un modello unico spacciato per universale. Analizziamo
            il compito reale, individuiamo la zona del corpo più sotto sforzo e
            proponiamo il dispositivo HAPO corretto — con una dimostrazione sul
            campo prima di ogni decisione.
          </p>
        </article>
      </div>
    </section>
  );
}
