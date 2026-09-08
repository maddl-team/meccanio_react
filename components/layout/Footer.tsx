import Link from "next/link";
import { footerColumns, footerLegal, site } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import styles from "./Footer.module.css";

function isInternalPath(href: string) {
  return href.startsWith("/") && !href.startsWith("/#") && !href.startsWith("//");
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <Logo href="/" size="footer" tone="white" className={styles.brand} />
            <p className={styles.tagline}>
              Ingegneria, automazione e robotica applicata alla persona e al
              lavoro. Progettazione meccanica dal 1999.
            </p>
          </div>
          {footerColumns.map((column) => (
            <div key={column.label}>
              <h2 className={styles.label}>{column.label}</h2>
              <ul className={styles.links}>
                {column.links.map((item) => (
                  <li key={item.href}>
                    {isInternalPath(item.href) ? (
                      <Link href={item.href}>{item.label}</Link>
                    ) : (
                      <a href={item.href}>{item.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className={styles.label}>Contatti</h2>
            <div className={styles.links}>
              <Link href="/contatti">Scrivici</Link>
              <p>
                {site.address.street}
                <br />
                {site.address.city}
              </p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.phoneHref}>{site.phone}</a>
            </div>
          </div>
        </div>
        <div className={styles.legal}>
          <span>© 2026 Meccanio Srl — Tutti i diritti riservati</span>
          <span className={styles.legalLinks}>
            {footerLegal.map((item) =>
              isInternalPath(item.href) ? (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ),
            )}
          </span>
        </div>
      </div>
    </footer>
  );
}
