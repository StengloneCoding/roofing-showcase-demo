"use client";

import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import type { ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionShell({ children, className, id }: SectionShellProps) {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id={id}
      className={`mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 animate-on-scroll ${className || ""}`}
    >
      {children}
    </section>
  );
}
