"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  hyperXUltra,
  ultraGallery,
  ultraGalleryBadges,
  ultraReassure,
} from "@/data/hypershell-x-ultra";
import styles from "./product.module.css";

export function ProductBuySection() {
  const [shot, setShot] = useState(0);
  const [sticky, setSticky] = useState(false);
  const active = ultraGallery[shot];

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > 760);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="buy" className={styles.buy} aria-labelledby="ultra-title">
      <div className={styles.buyGrid}>
        <div className={styles.gallery}>
          <div className={styles.mainShot}>
            <span className={styles.novita}>{hyperXUltra.badge}</span>
            <Image
              key={active.src}
              src={active.src}
              alt={active.alt}
              fill
              priority
              sizes="(min-width: 1100px) 52vw, 100vw"
              className={
                active.fit === "cover" ? styles.mainImgCover : styles.mainImg
              }
            />
          </div>
          <div className={styles.thumbs}>
            {ultraGallery.map((item, index) => {
              const isActive = shot === index;
              return (
                <button
                  key={item.src}
                  type="button"
                  className={`${styles.thumb} ${isActive ? styles.thumbActive : ""}`}
                  aria-label={item.label}
                  aria-pressed={isActive}
                  onClick={() => setShot(index)}
                >
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    sizes="120px"
                    className={
                      item.fit === "cover" ? styles.thumbImgCover : styles.thumbImg
                    }
                  />
                </button>
              );
            })}
          </div>
          <div className={styles.trust}>
            {ultraGalleryBadges.map((badge) => (
              <div key={badge.title} className={styles.trustCard}>
                <div className={styles.trustTitle}>{badge.title}</div>
                <div className={styles.trustSub}>{badge.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className={styles.kicker}>{hyperXUltra.kicker}</p>
          <h1 id="ultra-title" className={styles.title}>
            {hyperXUltra.name}{" "}
            <span className={styles.accent}>{hyperXUltra.model}</span>
          </h1>
          <div className={styles.meta}>
            <div className={styles.starsRow}>
              <span className={styles.stars} aria-hidden="true">
                ★★★★★
              </span>
              <span className={styles.reviewsMeta}>
                {hyperXUltra.rating} · {hyperXUltra.reviewsCount} recensioni
              </span>
            </div>
            <span className={styles.stock}>{hyperXUltra.availableLabel}</span>
          </div>
          <p className={styles.lead}>
            {hyperXUltra.tagline} {hyperXUltra.lead}
          </p>
          <div className={styles.priceRow}>
            <span className={styles.price}>{hyperXUltra.price}</span>
            <span className={styles.oldPrice}>{hyperXUltra.oldPrice}</span>
            <span className={styles.save}>{hyperXUltra.save}</span>
          </div>

          <div className={styles.specLine}>
            <div className={styles.specLineHead}>
              <span className={styles.specLineLabel}>Dati tecnici</span>
              <span className={styles.specLineValue}>
                {hyperXUltra.power} W · {hyperXUltra.range} km ·{" "}
                {hyperXUltra.weight} kg · {hyperXUltra.modes} modalità
              </span>
            </div>
          </div>

          <Link href={hyperXUltra.buyHref} className={styles.contactCta}>
            {hyperXUltra.ctaLabel}
          </Link>

          <div className={styles.reassure}>
            {ultraReassure.map((item) => (
              <div key={item.title} className={styles.reassureItem}>
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
                <div>
                  <span className={styles.reassureTitle}>{item.title}</span>
                  <span className={styles.reassureSub}> — {item.sub}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.demo}>
            <div>
              <div className={styles.demoTitle}>Vuoi provarlo prima?</div>
              <div className={styles.demoSub}>
                Prenota una demo gratuita con i nostri tecnici.
              </div>
            </div>
            <Link href={hyperXUltra.demoHref} className={styles.demoBtn}>
              Prenota demo
            </Link>
          </div>
        </div>
      </div>

      {sticky ? (
        <div className={styles.stickyBar}>
          <div className={styles.stickyInner}>
            <div className={styles.stickyProduct}>
              <span className={styles.stickyThumb}>
                <Image
                  src={ultraGallery[0].src}
                  alt=""
                  fill
                  sizes="46px"
                  className={styles.stickyThumbImg}
                />
              </span>
              <div>
                <div className={styles.stickyName}>
                  {hyperXUltra.name} {hyperXUltra.model}
                </div>
                <div className={styles.stickyMeta}>
                  {hyperXUltra.power} W · {hyperXUltra.range} km
                </div>
              </div>
            </div>
            <div className={styles.stickyActions}>
              <div className={styles.stickyPriceRow}>
                <span className={styles.stickyPrice}>{hyperXUltra.price}</span>
                <span className={styles.stickyOld}>{hyperXUltra.oldPrice}</span>
              </div>
              <Link href={hyperXUltra.buyHref} className={styles.stickyCta}>
                {hyperXUltra.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
