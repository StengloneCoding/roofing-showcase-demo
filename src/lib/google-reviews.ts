import type { GoogleReviewsSnapshot } from "@/lib/content";

const fallbackReviews: GoogleReviewsSnapshot = {
  placeName: "Grimm & Lechner",
  rating: 0,
  totalReviews: 0,
  source: "fallback",
  reviews: [],
};

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

  const query = process.env.GOOGLE_PLACE_QUERY;

  if (!query) {
    return undefined;
  }

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
