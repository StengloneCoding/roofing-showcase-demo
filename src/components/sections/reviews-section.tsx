import { Star } from "lucide-react";

import { getGoogleReviews } from "@/lib/google-reviews";

export async function ReviewsSection() {
  const reviews = await getGoogleReviews();
  const roundedRating = reviews.rating ? reviews.rating.toFixed(1) : "--";

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-[2rem] border border-black/8 bg-white/85 px-6 py-10 shadow-[0_20px_55px_rgba(40,26,18,0.08)] lg:grid-cols-[0.75fr_1.25fr] sm:px-10">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-brand)]">
            Google Bewertungen
          </p>
          <h2 className="font-display text-4xl uppercase leading-none tracking-[0.06em] text-[color:var(--color-ink)] sm:text-5xl">
            Vertrauen ist schoen. Sichtbare Rueckmeldungen sind noch besser.
          </h2>
          <p className="text-base leading-8 text-[color:var(--color-muted)]">
            {reviews.source === "google"
              ? "Die folgenden Google-Bewertungen werden serverseitig geladen und regelmaessig aktualisiert."
              : "Sobald ein Google-Places-API-Key hinterlegt ist, erscheinen hier die aktuellen Google-Bewertungen automatisch."}
          </p>
          <div className="rounded-[1.5rem] bg-[color:var(--color-background-soft)] p-5">
            <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
              {reviews.placeName}
            </p>
            <div className="mt-3 flex items-end gap-3">
              <span className="font-display text-6xl uppercase tracking-[0.08em] text-[color:var(--color-ink)]">
                {roundedRating}
              </span>
              <div className="flex gap-1 pb-2 text-[color:var(--color-accent)]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="mt-2 text-sm text-[color:var(--color-muted)]">
              {reviews.totalReviews > 0
                ? `${reviews.totalReviews} Google-Bewertungen erfasst`
                : "Noch keine Live-Bewertungen verfuegbar"}
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {reviews.reviews.length > 0 ? (
            reviews.reviews.map((review) => (
              <article
                key={`${review.authorName}-${review.publishedAt || review.text.slice(0, 12)}`}
                className="rounded-[1.5rem] border border-black/8 bg-[color:var(--color-background-soft)] p-5"
              >
                <div className="flex items-center gap-1 text-[color:var(--color-accent)]">
                  {Array.from({ length: Math.max(1, review.rating) }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-[color:var(--color-ink)]">{review.text}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-brand)]">
                  {review.authorName}
                </p>
              </article>
            ))
          ) : (
            <>
              <article className="rounded-[1.5rem] border border-dashed border-black/12 bg-[color:var(--color-background-soft)] p-5">
                <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                  Live-Review 1 erscheint hier automatisch, sobald `GOOGLE_PLACES_API_KEY` gesetzt
                  ist.
                </p>
              </article>
              <article className="rounded-[1.5rem] border border-dashed border-black/12 bg-[color:var(--color-background-soft)] p-5">
                <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                  Das Layout und die Datenanbindung sind schon vorbereitet, damit spaeter keine
                  Frontend-Nacharbeit noetig ist.
                </p>
              </article>
              <article className="rounded-[1.5rem] border border-dashed border-black/12 bg-[color:var(--color-background-soft)] p-5">
                <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                  Optional kann statt `GOOGLE_PLACE_ID` auch `GOOGLE_PLACE_QUERY` zur automatischen
                  Suche verwendet werden.
                </p>
              </article>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
