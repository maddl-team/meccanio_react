import Link from "next/link";
import styles from "./Logo.module.css";

type LogoProps = {
  href?: string;
  size?: "header" | "footer";
  className?: string;
};

export function Logo({ href, size = "header", className }: LogoProps) {
  const classes = [styles.logo, styles[size], className].filter(Boolean).join(" ");
  const inner = (
    <>
      <span className={styles.mark} aria-hidden="true">
        <span className={styles.core} />
      </span>
      <span className={styles.word}>MECCANIO</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label="Meccanio, vai alla home">
        {inner}
      </Link>
    );
  }

  return <div className={classes}>{inner}</div>;
}
