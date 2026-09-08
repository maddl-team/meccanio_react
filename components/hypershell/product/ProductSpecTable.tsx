import { ultraSpecColumns, ultraSpecRows } from "@/data/hypershell-x-ultra";
import styles from "./product.module.css";

const highlightIndex = 0;

export function ProductSpecTable() {
  return (
    <section
      id="specifiche"
      className={styles.tableSection}
      aria-labelledby="ultra-specs-title"
    >
      <div className={styles.tableHead}>
        <p className={styles.kicker}>Confronta la gamma</p>
        <h2 id="ultra-specs-title" className={styles.sectionTitle}>
          Specifiche tecniche
        </h2>
      </div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.thSpec} scope="col">
                Specifica
              </th>
              {ultraSpecColumns.map((name, index) => (
                <th
                  key={name}
                  className={`${styles.thModel} ${index === highlightIndex ? styles.thHighlight : ""}`}
                  scope="col"
                >
                  <div className={styles.modelName}>{name}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ultraSpecRows.map((row) => (
              <tr key={row.label}>
                <th className={styles.tdLabel} scope="row">
                  {row.label}
                </th>
                {row.values.map((value, index) => (
                  <td
                    key={`${row.label}-${ultraSpecColumns[index]}`}
                    className={`${styles.tdValue} ${index === highlightIndex ? styles.tdHighlight : ""}`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
