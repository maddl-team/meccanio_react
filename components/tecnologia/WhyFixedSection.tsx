import styles from "./tecnologia.module.css";

export function WhyFixedSection() {
  return (
    <section
      id="perche"
      className={`${styles.why} ${styles.whySpaced}`}
      aria-labelledby="perche-fissa-title"
    >
      <div className={styles.whyCard}>
        <div>
          <p className={`${styles.kicker} ${styles.whyKicker}`}>Il problema</p>
          <h2 id="perche-fissa-title" className={styles.whyTitle}>
            Perché un&apos;assistenza fissa non basta
          </h2>
        </div>
        <div>
          <p className={`${styles.whyText} ${styles.textEnd}`}>
            Un dispositivo motorizzato con una sola modalità di spinta
            costante si adatterebbe bene a un solo tipo di terreno, ma
            risulterebbe eccessivo o insufficiente in tutte le altre condizioni.
            Un percorso reale — un sentiero di montagna, una camminata in
            città, un&apos;uscita in bici — cambia continuamente pendenza e
            superficie. AI MotionEngine è pensato per accompagnare proprio
            questi cambiamenti, senza richiedere regolazioni manuali continue.
          </p>
        </div>
      </div>
    </section>
  );
}
