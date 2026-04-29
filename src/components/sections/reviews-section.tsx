import { getGoogleReviews } from "@/lib/google-reviews";
import { SectionShell } from "@/components/ui/section-shell";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ReviewsCarousel } from "@/components/sections/reviews-carousel";

export async function ReviewsSection() {
  const reviews = await getGoogleReviews();
  const roundedRating = reviews.rating ? reviews.rating.toFixed(1) : "–";

  return (
    <SectionShell className="py-10">
      <div className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--color-secondary)]">
            Beispielstimmen
          </p>
          <h2 className="[font-family:var(--font-heading)] text-3xl font-semibold tracking-[-0.01em] text-[color:var(--color-on-surface)] sm:text-5xl">
            So können Kundenstimmen für {reviews.placeName} aussehen.
          </h2>
          <p className="text-base leading-7 text-[color:var(--color-on-surface-variant)] sm:text-lg">
            Diese Demo zeigt neutrale Platzhalterbewertungen, die später durch echte Rezensionen oder Referenzen ersetzt werden können.
          </p>
        </div>

        <ScrollReveal className="flex justify-end" threshold={0.15}>
          <div className="inline-flex items-center gap-4 rounded-2xl border border-[color:var(--color-outline-variant)]/70 bg-white px-5 py-4 text-sm text-[color:var(--color-on-surface)] shadow-[0_12px_26px_rgba(20,25,31,0.06)]">
            <span className="text-lg font-semibold text-[color:var(--color-primary)]">{roundedRating} / 5</span>
            <span>{reviews.totalReviews} Beispielbewertungen</span>
          </div>
        </ScrollReveal>

        {reviews.reviews.length > 0 ? (
          <ReviewsCarousel reviews={reviews.reviews} />
        ) : (
          <div className="rounded-3xl border border-dashed border-[color:var(--color-outline)] bg-white px-5 py-6 sm:px-6">
            <p className="text-sm leading-7 text-[color:var(--color-on-surface-variant)]">
              Hinterlegen Sie später echte Kundenstimmen, Google-Rezensionen oder Projektzitate, sobald die Demo in eine echte Website übergeht.
            </p>
          </div>
        )}
      </div>
    </SectionShell>
  );
}
