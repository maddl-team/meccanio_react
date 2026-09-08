"use client";

import { useState } from "react";
import { hapoFaqs } from "@/data/hapo";
import styles from "./hapo.module.css";

export function HapoFaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className={styles.faq} aria-labelledby="hapo-faq-title">
      <div className={styles.faqHead}>
        <p className={styles.kicker}>Domande frequenti</p>
        <h2 id="hapo-faq-title" className={styles.faqTitle}>
          Domande frequenti su HAPO
        </h2>
      </div>
      <div className={styles.faqList}>
        {hapoFaqs.map((item, index) => {
          const isOpen = open === index;
          const panelId = `hapo-faq-panel-${index}`;
          const buttonId = `hapo-faq-button-${index}`;

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
    </section>
  );
}
