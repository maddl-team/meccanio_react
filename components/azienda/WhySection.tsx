import { approachChips } from "@/data/azienda";
import styles from "./azienda.module.css";

export function WhySection() {
  return (
    <section className={styles.why} aria-labelledby="perche-title">
      <div className={styles.whyGrid}>
        <h2 id="perche-title" className={styles.whyTitle}>
          Perché un&apos;azienda di ingegneria entra nel mercato degli
          esoscheletri
        </h2>
        <div>
          <p className={styles.whyText}>
            Non vendiamo un esoscheletro &quot;uguale per tutti&quot;. Analizziamo
            l&apos;esigenza, scegliamo il modello corretto, lo facciamo provare
            sul campo e garantiamo formazione e assistenza post-vendita sul
            territorio italiano. È lo stesso approccio con cui, da 25 anni,
            affrontiamo la progettazione meccanica: partire dal problema reale,
            non dal prodotto da vendere.
          </p>
          <div className={styles.chips}>
            {approachChips.map((chip) => (
              <span key={chip.label} className={styles.chip}>
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
