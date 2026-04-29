import { SectionShell } from "@/components/ui/section-shell";
import { SectionHeading } from "@/components/sections/section-heading";

type JobListing = {
  title: string;
  type: "Vollzeit" | "Ausbildung" | "Helfertätigkeit";
  description: string;
  location: string;
};

type JobListingsSectionProps = {
  description?: string;
  eyebrow?: string;
  heading: string;
  jobs: JobListing[];
};

export function JobListingsSection({
  description,
  eyebrow,
  heading,
  jobs,
}: JobListingsSectionProps) {
  return (
    <SectionShell>
      <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />

      <div className="mt-12">
        <ul className="space-y-4">
          {jobs.map((job) => (
            <li key={job.title}>
              <article className="border border-[color:var(--color-outline-variant)] bg-white p-6 transition-all hover:border-[color:var(--color-primary)] hover:shadow-md">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="[font-family:var(--font-heading)] text-xl font-semibold text-[color:var(--color-on-surface)]">
                      {job.title}
                    </h3>
                    <p className="mt-2 text-sm text-[color:var(--color-on-surface-variant)]">
                      {job.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-secondary)]">
                      <span className="rounded bg-[color:var(--color-surface-container-low)] px-3 py-1">
                        {job.type}
                      </span>
                      <span className="rounded bg-[color:var(--color-surface-container-low)] px-3 py-1">
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <a
                    href="#bewerbung"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-[color:var(--color-primary)] transition hover:text-[color:var(--color-secondary)] md:mt-0"
                  >
                    Jetzt bewerben
                    <span>→</span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-lg border border-[color:var(--color-secondary)] bg-[color:var(--color-secondary)]/5 p-6">
          <p className="text-sm text-[color:var(--color-on-surface)]">
            <span className="font-semibold">Deine Position nicht dabei?</span> Gerne nehmen wir auch{" "}
            <a
              href="mailto:bewerbung@grimm-lechner.de"
              className="font-semibold underline transition hover:text-[color:var(--color-secondary)]"
            >
              Initiativbewerbungen per E-Mail
            </a>{" "}
            entgegen.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
