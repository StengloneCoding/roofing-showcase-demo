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
    "bg-transparent text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary)]",
  light:
    "bg-white text-[color:var(--color-foreground)] hover:bg-[color:var(--color-secondary)]",
  outline:
    "border border-white/30 bg-white/5 text-white hover:bg-white/10",
  primary:
    "bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-primary-dark)]",
};

const baseClassName =
  "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-150";

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
