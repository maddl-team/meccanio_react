import Image from "next/image";
import { ultraBoxItems } from "@/data/hypershell-x-ultra";
import styles from "./product.module.css";

export function ProductInbox() {
  return (
    <section className={styles.box} aria-labelledby="ultra-box-title">
      <div className={styles.boxInner}>
        <div className={styles.boxHead}>
          <div>
            <p className={styles.kicker}>Nella confezione</p>
            <h2 id="ultra-box-title" className={styles.sectionTitle}>
              Tutto pronto all&apos;uso.
            </h2>
          </div>
        </div>
        <div className={styles.boxGrid}>
          {ultraBoxItems.map((item) => (
            <article key={item.name} className={styles.boxCard}>
              <div className={styles.boxPhoto}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1100px) 22vw, (min-width: 720px) 50vw, 100vw"
                  className={styles.boxImg}
                />
              </div>
              <div className={styles.boxBody}>
                <div className={styles.boxName}>{item.name}</div>
                <div className={styles.boxSub}>{item.sub}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
