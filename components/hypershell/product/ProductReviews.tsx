import { ultraReviews } from "@/data/hypershell-x-ultra";
import styles from "./product.module.css";

export function ProductReviews() {
  return (
    <section className={styles.reviews} aria-labelledby="ultra-reviews-title">
      <div className={styles.reviewsGrid}>
        <div className={styles.reviewsIntro}>
          <p className={styles.kicker}>Voci dal campo</p>
          <h2 id="ultra-reviews-title" className={styles.reviewsTitle}>
            4,8 su 5,
            <br />
            da chi lo indossa.
          </h2>
          <div className={styles.reviewsStars}>
            <span className={styles.stars} aria-hidden="true">
              ★★★★★
            </span>
          </div>
          <p className={styles.reviewsLead}>
            Recensioni verificate di clienti Meccanio. Escursionisti, ciclisti e
            operatori che usano l&apos;esoscheletro ogni giorno.
          </p>
        </div>
        <div className={styles.reviewCards}>
          {ultraReviews.map((review) => (
            <article key={review.name} className={styles.reviewCard}>
              <span className={styles.reviewStars} aria-hidden="true">
                ★★★★★
              </span>
              <p className={styles.reviewText}>“{review.text}”</p>
              <div className={styles.reviewAuthor}>
                <span className={styles.avatar} aria-hidden="true">
                  {review.initials}
                </span>
                <div>
                  <div className={styles.reviewName}>{review.name}</div>
                  <div className={styles.reviewRole}>{review.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
