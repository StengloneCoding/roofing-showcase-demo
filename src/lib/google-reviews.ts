import type { GoogleReviewsSnapshot } from "@/lib/content";

const fallbackReviews: GoogleReviewsSnapshot = {
  placeName: "Grimm & Lechner",
  rating: 5,
  totalReviews: 5,
  source: "fallback",
  reviews: [
    {
      authorName: "Edwin Krein",
      publishedAt: "vor 4 Jahren",
      rating: 5,
      text: "Wir haben die Firma für die Sanierung unseres Daches beauftragt. Leider kam aufgrund von Corona zu mehrmaligen Terminverschiebungen, aber als sie da waren ging es sofort los. Es gab wirklich nichts, was uns an denen gestört hätte. Schnelle und präzise Arbeit, freundlich und absolut zuverlässig. Auch der Chef hat ab und an mitangepackt und die Baustelle wurde immer sauber verlassen. Und das Beste: Der vereinbarte Preis für die Arbeiten wurde eingehalten. Alles in allem sind wir absolut zufrieden und können die Jungs jedem ohne Bedenken weiterempfehlen. Hier nochmals ein herzliches Dankeschön und großes Lob an die Mitarbeiter für die tolle Arbeit.",
    },
    {
      authorName: "Berthold",
      publishedAt: "vor 8 Monaten",
      rating: 5,
      text: "Fa. Grimm & Lechner hat eine Reparatur an unserem Dach schnell und preiswert erledigt. Schön, dass es noch Handwerker gibt, die sich auch bei kleinen Themen zuverlässig um ihre Kunden kümmern.",
    },
    {
      authorName: "Jannik Flach",
      publishedAt: "vor 6 Monaten",
      rating: 5,
      text: "Klasse Service",
    },
    {
      authorName: "Andrea Kessler",
      publishedAt: "vor 6 Jahren",
      rating: 5,
      text: "Top Dachdecker",
    },
    {
      authorName: "Husky",
      publishedAt: "vor 3 Jahren",
      rating: 5,
      text: "",
    },
  ],
};

export const defaultGooglePlaceQuery = "Grimm & Lechner Blumenstr. 3 96049 Bamberg";

type GoogleTextValue = {
  text?: string;
};

type GoogleReviewResponse = {
  authorAttribution?: {
    displayName?: string;
  };
  originalText?: GoogleTextValue;
  publishTime?: string;
  rating?: number;
  text?: GoogleTextValue;
};

type GooglePlaceResponse = {
  displayName?: GoogleTextValue;
  rating?: number;
  reviews?: GoogleReviewResponse[];
  userRatingCount?: number;
};

type GoogleSearchResponse = {
  places?: Array<{
    id?: string;
  }>;
};

async function resolvePlaceId(apiKey: string) {
  if (process.env.GOOGLE_PLACE_ID) {
    return process.env.GOOGLE_PLACE_ID;
  }

  const query = process.env.GOOGLE_PLACE_QUERY || defaultGooglePlaceQuery;

  const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "places.id",
    },
    body: JSON.stringify({
      languageCode: "de",
      textQuery: query,
    }),
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    return undefined;
  }

  const payload = (await response.json()) as GoogleSearchResponse;
  return payload.places?.[0]?.id;
}

export async function getGoogleReviews(): Promise<GoogleReviewsSnapshot> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return fallbackReviews;
  }

  try {
    const placeId = await resolvePlaceId(apiKey);

    if (!placeId) {
      return fallbackReviews;
    }

    const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "displayName,rating,userRatingCount,reviews.authorAttribution,reviews.originalText,reviews.publishTime,reviews.rating,reviews.text",
      },
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      return fallbackReviews;
    }

    const payload = (await response.json()) as GooglePlaceResponse;

    return {
      placeName: payload.displayName?.text || "Grimm & Lechner",
      rating: payload.rating || 0,
      totalReviews: payload.userRatingCount || 0,
      source: "google",
      reviews:
        payload.reviews?.slice(0, 3).map((review) => ({
          authorName: review.authorAttribution?.displayName || "Google Nutzer",
          publishedAt: review.publishTime,
          rating: review.rating || 0,
          text: review.text?.text || review.originalText?.text || "",
        })) || [],
    };
  } catch {
    return fallbackReviews;
  }
}
