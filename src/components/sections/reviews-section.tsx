import Image from "next/image";
import { Star } from "lucide-react";

import { defaultGooglePlaceQuery, getGoogleReviews } from "@/lib/google-reviews";
import { SectionShell } from "@/components/ui/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { TrustBar } from "@/components/ui/trust-bar";

const googleReviewsUrl =
  "https://www.google.com/search?sa=X&sca_esv=2d64b6c94239ce1b&biw=2552&bih=1308&sxsrf=ANbL-n6lzZmnyqbHD2i6qYDS55qUqGb8lg:1777412386108&q=rezensionen%20f%C3%BCr%20grimm%20%26%20lechner%20gmbh%20%26%20co.%20kg%20bamberg&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2tzS1NDM1NrI0Mbc0NjM3MjO03MDI-IrRrCi1KjWvODM_LzVPIe3wniKF9KLM3FwFNYWc1OSMvFQgPzcpA8hNztdTyE5XSErMTUotSl_ESqZGABEiUZ-MAAAA&rldimm=7959653294793672619&tbm=lcl&hl=de-DE&ved=0CAwQ5foLahcKEwjI9uKPwZGUAxUAAAAAHQAAAAAQCQ#lkt=LocalPoiReviews&arid=ChdDSUhNMG9nS0VJQ0FnSUNHbE9fTXNRRRAB";

export async function ReviewsSection() {
  const reviews = await getGoogleReviews();
  const roundedRating = reviews.rating ? reviews.rating.toFixed(1) : "–";
  const hasGoogleApiKey = Boolean(process.env.GOOGLE_PLACES_API_KEY);
  const hasGooglePlaceReference = Boolean(
    process.env.GOOGLE_PLACE_ID || process.env.GOOGLE_PLACE_QUERY || defaultGooglePlaceQuery,
  );
  const isGoogleConfigured = hasGoogleApiKey && hasGooglePlaceReference;
  const marqueeReviews = [...reviews.reviews, ...reviews.reviews];

  return (
    <SectionShell className="py-10">
      <div className="space-y-8">

        <div className="flex justify-end">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-stretch overflow-hidden rounded border border-[color:var(--color-outline-variant)] sm:w-auto"
          >
            <span className="flex items-center justify-center bg-white px-5 py-4">
              <Image
                src="/google-wordmark.svg"
                alt="Google"
                width={92}
                height={32}
                className="h-9 w-auto"
              />
            </span>
            <span className="flex items-center justify-center bg-[color:var(--color-secondary)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.05em] text-white sm:min-w-[260px]">
              Alle Bewertungen ansehen
            </span>
          </a>
        </div>

        {reviews.reviews.length > 0 ? (
          <div>
            <div className="relative">
              <div className="overflow-hidden">
                <div className="animate-[reviews-marquee_42s_linear_infinite] flex w-max gap-10 pb-2">
                  {marqueeReviews.map((review, index) => (
                    <article
                      key={`${review.authorName}-${review.publishedAt || review.text.slice(0, 10)}-${index}`}
                      className="min-h-[280px] w-[320px] shrink-0 border border-[color:var(--color-outline-variant)] bg-white p-6 sm:w-[360px]"
                    >
                      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.05em] text-[color:var(--color-primary)]">
                        {review.authorName}
                      </p>
                      <div className="mt-3 flex items-center justify-between gap-4">
                        {review.publishedAt ? (
                          <p className="text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--color-on-surface-variant)]">
                            {review.publishedAt}
                          </p>
                        ) : (
                          <span />
                        )}
                        <div className="flex items-center gap-1 text-[#ff8a14]">
                          {Array.from({ length: Math.max(1, review.rating) }).map((_, starIndex) => (
                            <Star key={starIndex} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      {review.text ? (
                        <p className="mt-4 text-sm leading-7 text-[color:var(--color-on-surface)]">
                          {review.text}
                        </p>
                      ) : (
                        <p className="mt-4 text-sm italic text-[color:var(--color-on-surface-variant)]">
                          5-Sterne-Bewertung ohne sichtbaren Rezensionstext
                        </p>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="border border-dashed border-[color:var(--color-outline)] bg-white px-5 py-6 sm:px-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-base font-semibold text-[color:var(--color-on-surface)]">
                  Live-Bewertungen sind aktuell noch nicht sichtbar.
                </p>
                <p className="mt-2 text-sm leading-7 text-[color:var(--color-on-surface-variant)]">
                  {!hasGoogleApiKey
                    ? "Es fehlt lokal noch der Eintrag für GOOGLE_PLACES_API_KEY. Sobald der Key in der Laufzeitumgebung gesetzt ist, können die Google-Bewertungen automatisch geladen werden."
                    : !hasGooglePlaceReference
                      ? "Der Google-Place-Verweis fehlt noch. Mit GOOGLE_PLACE_ID oder GOOGLE_PLACE_QUERY kann das richtige Unternehmensprofil eindeutig verbunden werden."
                      : "Die Verbindung zu Google Places ist gesetzt, aber die Bewertungen konnten in diesem Lauf nicht geladen werden. Sobald die Anfrage wieder beantwortet wird, erscheinen hier automatisch die aktuellen Rezensionen."}
                </p>
              </div>
              <ButtonLink href="/#kontaktformular" variant="light">
                Projekt anfragen
              </ButtonLink>
            </div>
          </div>
        )}
      </div>
    </SectionShell>
  );
}
