"use client";

import type { ReactNode } from "react";

import { useScrollReveal } from "@/hooks/useScrollReveal";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
  stagger?: boolean;
  threshold?: number;
};

export function ScrollReveal({
  children,
  className,
  rootMargin,
  stagger = false,
  threshold,
}: ScrollRevealProps) {
  const ref = useScrollReveal<HTMLDivElement>({ threshold, rootMargin });

  return (
    <div
      ref={ref}
      className={`${stagger ? "animate-stagger" : "animate-on-scroll"} ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
