type BrandMarkProps = {
  companyName: string;
};

export function BrandMark({ companyName }: BrandMarkProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-dashed border-black/12 bg-[linear-gradient(135deg,rgba(239,49,45,0.14),rgba(15,19,24,0.08))] text-[color:var(--color-primary)] shadow-[0_10px_24px_rgba(15,19,24,0.12)]">
        <svg viewBox="0 0 40 40" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[2.2]">
          <rect x="8.5" y="9.5" width="23" height="21" rx="4.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.5 25 18 19.5l4 3.5 5.5-6 4 8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="16" cy="16" r="1.7" fill="currentColor" stroke="none" />
        </svg>
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-on-surface-variant)]">
          Logo-Platzhalter
        </p>
        <p className="truncate text-sm font-semibold text-[color:var(--color-on-surface)] sm:text-base">
          {companyName}
        </p>
      </div>
    </div>
  );
}
