"use client";

import { useState } from "react";
import { ultraFaqs } from "@/data/hypershell-x-ultra";
import styles from "./product.module.css";

export function ProductFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className={styles.faq}
      aria-labelledby="ultra-faq-title"
    >
      <div className={styles.faqHead}>
        <p className={styles.kicker}>Domande sul prodotto</p>
        <h2 id="ultra-faq-title" className={styles.faqTitle}>
          Prima di acquistare
        </h2>
      </div>
      <div className={styles.faqList}>
        {ultraFaqs.map((item, index) => {
          const isOpen = open === index;
          const panelId = `ultra-faq-panel-${index}`;
          const buttonId = `ultra-faq-button-${index}`;

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
                <span>{item.q}</span>
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
