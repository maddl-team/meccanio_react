"use client";

import { useState } from "react";
import { materialiFaqs } from "@/data/tecnologia";
import styles from "./tecnologia.module.css";

export function MaterialiFaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className={styles.faq}
      aria-labelledby="faq-materiali-title"
    >
      <div className={styles.faqInner}>
        <div className={styles.faqGrid}>
          <div>
            <p className={`${styles.kicker} ${styles.faqKicker}`}>FAQ</p>
            <h2 id="faq-materiali-title" className={styles.faqTitle}>
              Domande frequenti su materiali e ingegneria
            </h2>
          </div>
          <div className={styles.faqList}>
            {materialiFaqs.map((item, index) => {
              const isOpen = open === index;
              const panelId = `materiali-faq-panel-${index}`;
              const buttonId = `materiali-faq-button-${index}`;

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
