import type { CSSProperties, ReactNode } from "react";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  kicker: string;
  title: ReactNode;
  description: string;
  titleSize?: "md" | "lg";
  tone?: "light" | "dark";
  titleMaxWidth: number;
  descriptionMaxWidth: number;
  descriptionSize?: 16 | 17;
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
  titleSize = "md",
  tone = "light",
  titleMaxWidth,
  descriptionMaxWidth,
  descriptionSize = 16,
  className,
}: SectionHeadingProps) {
  const titleWrapStyle: CSSProperties = { maxWidth: titleMaxWidth };
  const descStyle: CSSProperties = { maxWidth: descriptionMaxWidth };

  return (
    <div className={[styles.row, className].filter(Boolean).join(" ")}>
      <div style={titleWrapStyle}>
        <p className={styles.kicker}>{kicker}</p>
        <h2 className={`${styles.title} ${styles[titleSize]}`}>{title}</h2>
      </div>
      <p
        className={`${styles.desc} ${styles[tone]} ${styles[`size${descriptionSize}`]}`}
        style={descStyle}
      >
        {description}
      </p>
    </div>
  );
}
