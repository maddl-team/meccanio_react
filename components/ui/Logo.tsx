import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

const LOGO = {
  width: 543,
  height: 160,
  blue: "/images/brand/logo-meccanio.png",
  white: "/images/brand/logo-meccanio-white.png",
} as const;

type LogoProps = {
  href?: string;
  size?: "header" | "footer";
  tone?: "blue" | "white";
  className?: string;
};

export function Logo({
  href,
  size = "header",
  tone,
  className,
}: LogoProps) {
  const variant = tone ?? (size === "footer" ? "white" : "blue");
  const classes = [styles.logo, styles[size], className]
    .filter(Boolean)
    .join(" ");

  const picture =
    size === "header" ? (
      <span
        className={`${styles.stack} ${variant === "white" ? styles.showWhite : styles.showBlue}`}
      >
        <Image
          src={LOGO.blue}
          alt=""
          width={LOGO.width}
          height={LOGO.height}
          className={`${styles.img} ${styles.blue}`}
          priority
        />
        <Image
          src={LOGO.white}
          alt=""
          width={LOGO.width}
          height={LOGO.height}
          className={`${styles.img} ${styles.white}`}
          priority
        />
      </span>
    ) : (
      <Image
        src={variant === "white" ? LOGO.white : LOGO.blue}
        alt=""
        width={LOGO.width}
        height={LOGO.height}
        className={styles.img}
      />
    );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label="Meccanio, vai alla home">
        {picture}
      </Link>
    );
  }

  return <div className={classes}>{picture}</div>;
}
