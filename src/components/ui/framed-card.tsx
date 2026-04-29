import type { ReactNode } from "react";

type FramedCardProps = {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
};

export function FramedCard({ children, className, hoverable = false }: FramedCardProps) {
  return (
    <article
      className={`border border-[color:var(--color-outline-variant)] bg-[color:var(--color-surface-container-lowest)] ${
        hoverable
          ? "transition-colors duration-150 hover:border-[color:var(--color-primary)]"
          : ""
      } ${className || ""}`}
    >
      {children}
    </article>
  );
}
