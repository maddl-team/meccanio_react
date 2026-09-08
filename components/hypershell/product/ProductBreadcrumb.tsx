import Link from "next/link";
import styles from "./product.module.css";

export function ProductBreadcrumb() {
  return (
    <nav className={styles.crumb} aria-label="Percorso">
      <Link href="/" className={styles.crumbLink}>
        Home
      </Link>
      {" / "}
      <Link href="/hypershell" className={styles.crumbLink}>
        HyperShell
      </Link>
      {" / "}
      <span className={styles.crumbCurrent}>X Ultra</span>
    </nav>
  );
}
