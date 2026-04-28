import Link from "next/link";

import type { GalleryProject } from "@/lib/content";

import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionShell } from "@/components/ui/section-shell";

type GalleryShowcaseProps = {
  projects: GalleryProject[];
};

export function GalleryShowcase({ projects }: GalleryShowcaseProps) {
  return (
    <section id="referenzen" className="bg-[color:var(--color-primary)] py-16 text-white">
      <SectionShell className="py-0">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Referenzen"
            heading="Ein Auszug aus Projekten, bei denen saubere Details und zuverlässige Ausführung den Unterschied gemacht haben."
            description="Dieser Bereich ist bewusst direkt auf der Startseite verankert und per Hash-Navigation erreichbar."
            tone="light"
          />
          <ButtonLink href="/#kontaktformular" variant="light">
            Projekt anfragen
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="overflow-hidden rounded-[28px] bg-white text-[color:var(--color-foreground)] shadow-[0_22px_50px_rgba(0,0,0,0.16)]"
            >
              <div
                className="h-52 bg-[linear-gradient(135deg,#3d3d3d,#8b8b8b)]"
                style={{
                  clipPath:
                    index % 2 === 0
                      ? "polygon(0 0, 100% 0, 100% 82%, 0 100%)"
                      : "polygon(0 0, 100% 0, 100% 100%, 0 82%)",
                }}
              />
              <div className="space-y-5 p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[color:var(--color-primary)]">
                  <span>{project.serviceType}</span>
                  {project.completionYear ? <span>{project.completionYear}</span> : null}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[color:var(--color-muted)]">
                    {project.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[color:var(--color-surface-muted)] px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.result ? (
                  <p className="text-sm font-semibold text-[color:var(--color-foreground)]">
                    {project.result}
                  </p>
                ) : null}
                <Link
                  href="/#kontaktformular"
                  className="inline-flex items-center text-sm font-semibold text-[color:var(--color-primary)]"
                >
                  Mehr zum Projekt
                </Link>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
