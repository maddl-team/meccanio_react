import Image from "next/image";
import { ultraFeatures } from "@/data/hypershell-x-ultra";
import styles from "./product.module.css";

export function ProductFeatures() {
  return (
    <section className={styles.features} aria-label="Caratteristiche">
      {ultraFeatures.map((feature) => (
        <div
          key={feature.kicker}
          className={`${styles.featureRow} ${feature.reverse ? styles.featureRowReverse : ""}`}
        >
          <div className={styles.featureCopy}>
            <p className={styles.kicker}>{feature.kicker}</p>
            <h2 className={styles.featureTitle}>{feature.title}</h2>
            <p className={styles.featureBody}>{feature.body}</p>
            <div className={styles.featureMetrics}>
              {feature.metrics.map((metric) => (
                <div key={metric.l}>
                  <div className={styles.metricValue}>{metric.v}</div>
                  <div className={styles.metricLabel}>{metric.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.featureMedia}>
            <Image
              src={feature.image}
              alt={feature.imageAlt}
              fill
              sizes="(min-width: 1100px) 48vw, 100vw"
              className={
                feature.image.endsWith(".png")
                  ? styles.featureImgContain
                  : styles.featureImg
              }
            />
          </div>
        </div>
      ))}
    </section>
  );
}
