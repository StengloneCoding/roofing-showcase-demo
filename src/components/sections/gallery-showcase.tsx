import Link from "next/link";

import type { GalleryProject } from "@/lib/content";

import { SectionHeading } from "@/components/sections/section-heading";

type GalleryShowcaseProps = {
  projects: GalleryProject[];
};

export function GalleryShowcase({ projects }: GalleryShowcaseProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Projektbeispiele"
          heading="Typische Aufgaben, bei denen Planung, Material und Details sauber zusammenspielen."
          description="Diese Karten sind so aufgebaut, dass sie spaeter direkt aus dem CMS gespeist werden koennen."
        />
        <Link
          href="/referenzen"
          className="text-sm font-semibold text-[color:var(--color-brand)] transition hover:text-[color:var(--color-brand-dark)]"
        >
          Alle Referenzen ansehen
        </Link>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className="overflow-hidden rounded-[1.9rem] border border-black/8 bg-white/86 shadow-[0_20px_55px_rgba(40,26,18,0.08)]"
          >
            <div
              className="h-48 bg-[linear-gradient(135deg,rgba(108,42,32,0.92),rgba(176,45,39,0.88),rgba(196,140,45,0.88))]"
              style={{
                clipPath:
                  index % 2 === 0
                    ? "polygon(0 0, 100% 0, 100% 82%, 0 100%)"
                    : "polygon(0 0, 100% 0, 100% 100%, 0 82%)",
              }}
            />
            <div className="space-y-5 p-6">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-brand)]">
                <span>{project.serviceType}</span>
                {project.completionYear ? <span>{project.completionYear}</span> : null}
              </div>
              <div>
                <h3 className="font-display text-3xl uppercase tracking-[0.05em] text-[color:var(--color-ink)]">
                  {project.title}
                </h3>
                <p className="mt-3 text-base leading-8 text-[color:var(--color-muted)]">
                  {project.summary}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[color:var(--color-background-soft)] px-3 py-1 text-xs font-medium text-[color:var(--color-ink)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.result ? (
                <p className="text-sm font-semibold text-[color:var(--color-ink)]">{project.result}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
