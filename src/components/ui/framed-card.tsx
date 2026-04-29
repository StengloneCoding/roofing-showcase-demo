import type { ReactNode } from "react";

type FramedCardProps = {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
};

export function FramedCard({ children, className, hoverable = false }: FramedCardProps) {
  return (
    <article
      className={`rounded-3xl border border-[color:var(--color-outline-variant)]/70 bg-[color:var(--color-surface-container-lowest)] shadow-[0_18px_40px_rgba(20,25,31,0.06)] ${
        hoverable
          ? "transition duration-200 hover:-translate-y-1 hover:border-[color:var(--color-primary)]/45 hover:shadow-[0_24px_52px_rgba(20,25,31,0.12)]"
          : ""
      } ${className || ""}`}
    >
      {children}
    </article>
  );
}
