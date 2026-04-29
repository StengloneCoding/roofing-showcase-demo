import type { ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionShell({ children, className, id }: SectionShellProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 ${className || ""}`}
    >
      {children}
    </section>
  );
}
