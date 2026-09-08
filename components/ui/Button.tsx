import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonVariant =
  | "header"
  | "hero"
  | "heroGhost"
  | "dark"
  | "underline"
  | "accent"
  | "outline"
  | "onAccent"
  | "accentOnDark"
  | "ctaWhite"
  | "ctaGhostBlue";

type SharedButtonProps = {
  children: ReactNode;
  variant: ButtonVariant;
  className?: string;
};

type LinkButtonProps = SharedButtonProps & {
  href: string;
  type?: never;
  disabled?: never;
};

type NativeButtonProps = SharedButtonProps & {
  href?: never;
  type: "button" | "submit";
  disabled?: boolean;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "form">;

type ButtonProps = LinkButtonProps | NativeButtonProps;

function isInternalPath(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function Button(props: ButtonProps) {
  const classes = [styles.btn, styles[props.variant], props.className]
    .filter(Boolean)
    .join(" ");

  if (props.href) {
    if (isInternalPath(props.href) && !props.href.startsWith("/#")) {
      return (
        <Link href={props.href} className={classes}>
          {props.children}
        </Link>
      );
    }

    return (
      <a href={props.href} className={classes}>
        {props.children}
      </a>
    );
  }

  return (
    <button
      type={props.type}
      className={classes}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
