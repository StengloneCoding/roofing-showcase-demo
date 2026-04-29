"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { GoogleReview } from "@/lib/content";

type ReviewsCarouselProps = {
  reviews: GoogleReview[];
};

export function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const hasLoop = reviews.length > 1;
  const renderedReviews = hasLoop ? [...reviews, ...reviews, ...reviews] : reviews;
  const middleStartIndex = hasLoop ? reviews.length : 0;
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [virtualIndex, setVirtualIndex] = useState(middleStartIndex);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const logicalActiveIndex = reviews.length === 0 ? 0 : ((virtualIndex % reviews.length) + reviews.length) % reviews.length;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  const scrollToIndex = (index: number, behavior: ScrollBehavior = "smooth") => {
    if (renderedReviews.length === 0) return;

    const track = trackRef.current;
    const targetCard = cardRefs.current[index];

    setVirtualIndex(index);

    if (!track || !targetCard) return;

    track.scrollTo({
      left: Math.max(0, targetCard.offsetLeft - (track.clientWidth - targetCard.clientWidth) / 2),
      behavior,
    });
  };

  useEffect(() => {
    if (!hasLoop) return;

    const rafId = window.requestAnimationFrame(() => {
      scrollToIndex(middleStartIndex, "auto");
    });

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, [hasLoop, middleStartIndex]);

  useEffect(() => {
    if (prefersReducedMotion || isPaused || reviews.length <= 1) return;

    const intervalId = window.setInterval(() => {
      scrollToIndex(virtualIndex + 1);
    }, 6500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused, prefersReducedMotion, reviews.length, virtualIndex]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const handleScroll = () => {
      const trackRect = track.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;
      let bestIndex = 0;
      let bestDistance = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - trackCenter);

        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });

      if (!hasLoop) {
        setVirtualIndex(bestIndex);
        return;
      }

      const normalizedIndex = bestIndex % reviews.length;
      const correctedIndex = middleStartIndex + normalizedIndex;

      if (bestIndex < reviews.length || bestIndex >= reviews.length * 2) {
        setVirtualIndex(correctedIndex);

        window.requestAnimationFrame(() => {
          scrollToIndex(correctedIndex, "auto");
        });

        return;
      }

      setVirtualIndex(bestIndex);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      track.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePrevious = () => {
    setIsPaused(true);
    scrollToIndex(virtualIndex - 1);
  };

  const handleNext = () => {
    setIsPaused(true);
    scrollToIndex(virtualIndex + 1);
  };

  return (
    <div
      className="space-y-5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div
        ref={trackRef}
        className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-[7vw] pb-4 sm:mx-0 sm:px-0"
      >
        {renderedReviews.map((review, index) => (
          <article
            key={`${review.authorName}-${review.publishedAt || review.text.slice(0, 10)}-${index}`}
            data-review-card
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
            className="min-h-[280px] w-[86vw] max-w-[420px] shrink-0 snap-center rounded-3xl border border-[color:var(--color-outline-variant)]/70 bg-white p-6 shadow-[0_14px_26px_rgba(20,25,31,0.06)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.05em] text-[color:var(--color-primary)]">
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

      <div className="flex items-center justify-center gap-3 pt-1">
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-outline-variant)]/70 bg-white text-[color:var(--color-on-surface)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-surface-container-low)]"
          aria-label="Vorherige Bewertung"
          onClick={handlePrevious}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-outline-variant)]/70 bg-white text-[color:var(--color-on-surface)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-surface-container-low)]"
          aria-label="Nächste Bewertung"
          onClick={handleNext}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
