"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";
import { navItems } from "@/data/site";
import { hapoConsultHref } from "@/data/hapo";
import { hyperConsultHref } from "@/data/hypershell";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import type { NavItem } from "@/types/content";
import styles from "./Header.module.css";

function isItemActive(item: NavItem, pathname: string) {
  if (item.href === "/azienda") {
    return pathname === "/azienda" || pathname === "/brevetti";
  }
  if (item.href === "/") return pathname === "/";
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

function isChildActive(href: string, pathname: string) {
  return pathname === href;
}

export function Header() {
  const pathname = usePathname();
  const isAzienda = pathname === "/azienda";
  const isBrevetti = pathname === "/brevetti";
  const isFuturo = pathname === "/futuro" || pathname.startsWith("/futuro/");
  const isContatti = pathname === "/contatti";
  const isHapo = pathname === "/hapo" || pathname.startsWith("/hapo/");
  const isHypershell =
    pathname === "/hypershell" || pathname.startsWith("/hypershell/");
  const isHyperProduct = pathname.startsWith("/hypershell/");
  const isProductLine = isHapo || isHypershell;
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 60);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1100) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  const ctaLabel = isContatti
    ? "Invia un messaggio"
    : isHapo
      ? "Richiedi consulenza"
      : isHyperProduct
        ? "Richiedi informazioni"
        : isHypershell
          ? "Chiedi un consiglio"
          : isBrevetti || isFuturo
            ? "Contattaci"
            : isAzienda
              ? "Prenota una dimostrazione"
              : "Richiedi una consulenza";
  const ctaHref = isContatti
    ? "#form"
    : isHapo
      ? hapoConsultHref
      : isHypershell
        ? hyperConsultHref
        : "/contatti";

  return (
    <header
      className={`${styles.header} ${solid || isProductLine ? styles.solid : ""} ${open ? styles.open : ""}`}
    >
      <div className={styles.inner}>
        <Logo href="/" className={styles.logo} />
        <nav className={styles.nav} aria-label="Navigazione principale">
          {navItems.map((item) => {
            const isActive = isItemActive(item, pathname);
            const triggerClass = isActive ? styles.active : undefined;

            if (!item.children?.length) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={triggerClass}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.label} className={styles.item}>
                <Link
                  href={item.href}
                  className={`${styles.trigger} ${isActive ? styles.active : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  <span className={styles.caret} aria-hidden="true" />
                </Link>
                <div className={styles.dropdown}>
                  {item.children.map((child) => {
                    const childActive = isChildActive(child.href, pathname);
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={childActive ? styles.dropActive : undefined}
                        aria-current={childActive ? "page" : undefined}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>
        <div className={styles.actions}>
          <Button href={ctaHref} variant="header">
            {ctaLabel}
          </Button>
        </div>
        <button
          type="button"
          className={styles.toggle}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={styles.bars} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
      {open ? (
        <div className={styles.panel} id={panelId}>
          <nav className={styles.panelNav} aria-label="Menu mobile">
            {navItems.map((item) => {
              const isActive = isItemActive(item, pathname);
              return (
                <div key={item.label} className={styles.panelGroup}>
                  <Link
                    href={item.href}
                    className={isActive ? styles.active : undefined}
                    aria-current={isActive ? "page" : undefined}
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                  {item.children?.filter((child) => child.href !== item.href)
                    .length ? (
                    <div className={styles.panelChildren}>
                      {item.children
                        .filter((child) => child.href !== item.href)
                        .map((child) => {
                          const childActive = isChildActive(
                            child.href,
                            pathname,
                          );
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={childActive ? styles.active : undefined}
                              aria-current={childActive ? "page" : undefined}
                              onClick={close}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
          <Button href={ctaHref} variant="header" className={styles.panelCta}>
            {ctaLabel}
          </Button>
        </div>
      ) : null}
    </header>
  );
}
