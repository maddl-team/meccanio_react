"use client";

import { useState } from "react";
import { quadrupediFaqs } from "@/data/futuro";
import styles from "./futuro.module.css";

export function QuadrupediFaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className={styles.faq} aria-labelledby="faq-quadrupedi-title">
      <div className={styles.faqInner}>
        <div className={styles.faqGrid}>
          <div>
            <p className={`${styles.kicker} ${styles.faqKicker}`}>FAQ</p>
            <h2 id="faq-quadrupedi-title" className={styles.faqTitle}>
              Domande frequenti
            </h2>
          </div>
          <div className={styles.faqList}>
            {quadrupediFaqs.map((item, index) => {
              const isOpen = open === index;
              const panelId = `quadrupedi-faq-panel-${index}`;
              const buttonId = `quadrupedi-faq-button-${index}`;

              return (
                <div key={item.q} className={styles.faqItem}>
                  <button
                    id={buttonId}
                    type="button"
                    className={styles.faqBtn}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <span className={styles.faqQ}>{item.q}</span>
                    <span
                      className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  {isOpen ? (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={styles.faqA}
                    >
                      {item.a}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
