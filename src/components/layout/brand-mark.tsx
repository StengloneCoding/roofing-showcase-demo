type BrandMarkProps = {
  companyName: string;
};

export function BrandMark({ companyName }: BrandMarkProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--color-primary),var(--color-secondary))] text-white shadow-[0_10px_24px_rgba(15,19,24,0.18)]">
        <svg viewBox="0 0 40 40" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[2.2]">
          <path d="M8 23.5 20 12l12 11.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.5 22.5v8h13v-8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-on-surface-variant)]">
          Dachdecker Demo
        </p>
        <p className="truncate text-sm font-semibold text-[color:var(--color-on-surface)] sm:text-base">
          {companyName}
        </p>
      </div>
    </div>
  );
}
