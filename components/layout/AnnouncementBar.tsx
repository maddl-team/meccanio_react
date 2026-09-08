"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { announcement } from "@/data/site";
import { brevetti } from "@/data/brevetti";
import { contatti } from "@/data/contatti";
import { futuro } from "@/data/futuro";
import { hapo } from "@/data/hapo";
import { hypershell } from "@/data/hypershell";
import styles from "./AnnouncementBar.module.css";

export function AnnouncementBar() {
  const pathname = usePathname();
  const isBrevetti = pathname === "/brevetti";
  const isFuturo = pathname === "/futuro" || pathname.startsWith("/futuro/");
  const isContatti = pathname === "/contatti";
  const isHapo = pathname === "/hapo" || pathname.startsWith("/hapo/");
  const isHypershell =
    pathname === "/hypershell" || pathname.startsWith("/hypershell/");
  const isHyperProduct = pathname.startsWith("/hypershell/");
  const hideCta = isBrevetti || isFuturo || isContatti || isHapo || isHypershell;
  const text = isBrevetti
    ? brevetti.announcement
    : isFuturo
      ? futuro.announcement
      : isContatti
        ? contatti.announcement
        : isHapo
          ? hapo.announcement
          : isHyperProduct
            ? hypershell.productAnnouncement
            : isHypershell
              ? hypershell.announcement
              : announcement.text;
  const ctaHref = announcement.href;

  return (
    <div className={styles.bar}>
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.text}>{text}</span>
      {hideCta ? null : (
        <Link href={ctaHref} className={styles.cta}>
          {announcement.cta}
        </Link>
      )}
    </div>
  );
}
