import { trustBadges } from "@/data/site";
import styles from "./home.module.css";

export function TrustBadgesSection() {
  return (
    <section className={styles.badges} aria-label="Impegni Meccanio">
      <div className={styles.badgeInner}>
        {trustBadges.map((badge) => (
          <article key={badge.title} className={styles.badge}>
            <p className={styles.badgeTitle}>{badge.title}</p>
            <p className={styles.badgeSub}>{badge.sub}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
