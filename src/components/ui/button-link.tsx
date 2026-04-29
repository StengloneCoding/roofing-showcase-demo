import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  showArrow?: boolean;
  variant?: "ghost" | "light" | "outline" | "primary";
};

const variants = {
  ghost:
    "bg-transparent text-[color:var(--color-on-surface)] hover:text-[color:var(--color-secondary)]",
  light:
    "bg-[color:var(--color-surface-container-lowest)] text-[color:var(--color-on-surface)] hover:bg-[color:var(--color-surface-container)]",
  outline:
    "border border-[color:var(--color-outline)] bg-transparent text-[color:var(--color-on-surface)] hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]",
  primary:
    "bg-[color:var(--color-secondary)] text-white hover:bg-[color:var(--color-secondary-dark)]",
};

const baseClassName =
  "inline-flex min-h-12 items-center gap-2 rounded px-5 py-3 text-sm font-semibold uppercase tracking-[0.05em] transition duration-150";

export function ButtonLink({
  children,
  className,
  href,
  showArrow = true,
  variant = "primary",
}: ButtonLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      {showArrow ? <ArrowRight className="h-4 w-4" /> : null}
    </>
  );

  const mergedClassName = `${baseClassName} ${variants[variant]} ${className || ""}`;

  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={mergedClassName}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={mergedClassName}>
      {content}
    </Link>
  );
}
