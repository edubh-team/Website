export const UTM_STORAGE_KEY = "edubh_utm_attribution";

export type UtmTouchpoint = {
  source: string;
  medium: string;
  campaign: string;
  term?: string;
  content?: string;
  clickId?: string;
  landingPath: string;
  capturedAt: number;
};

export type UtmAttribution = {
  firstTouch: UtmTouchpoint;
  lastTouch: UtmTouchpoint;
};

export const campaignUrls = {
  facebook:
    "https://edubh.com/?utm_source=facebook&utm_medium=paid_social&utm_campaign=online_admissions_2026",
  google:
    "https://edubh.com/?utm_source=google&utm_medium=cpc&utm_campaign=online_admissions_2026",
  instagram:
    "https://edubh.com/?utm_source=instagram&utm_medium=paid_social&utm_campaign=online_admissions_2026",
} as const;

const cleanValue = (value: string | null) => {
  const cleaned = value?.trim();
  return cleaned ? cleaned.slice(0, 200) : undefined;
};

const readStoredAttribution = (): UtmAttribution | null => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = window.localStorage.getItem(UTM_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as UtmAttribution) : null;
  } catch {
    window.localStorage.removeItem(UTM_STORAGE_KEY);
    return null;
  }
};

export const captureUtmAttribution = (): UtmAttribution | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const parameters = new URLSearchParams(window.location.search);
  const source = cleanValue(parameters.get("utm_source"));

  if (!source) {
    return readStoredAttribution();
  }

  const clickId =
    cleanValue(parameters.get("gclid")) ||
    cleanValue(parameters.get("fbclid"));

  const touchpoint: UtmTouchpoint = {
    source: source.toLowerCase(),
    medium: cleanValue(parameters.get("utm_medium"))?.toLowerCase() || "unknown",
    campaign:
      cleanValue(parameters.get("utm_campaign"))?.toLowerCase() || "unspecified",
    term: cleanValue(parameters.get("utm_term")),
    content: cleanValue(parameters.get("utm_content")),
    clickId,
    landingPath: window.location.pathname,
    capturedAt: Date.now(),
  };

  const existing = readStoredAttribution();
  const attribution: UtmAttribution = {
    firstTouch: existing?.firstTouch || touchpoint,
    lastTouch: touchpoint,
  };

  window.localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(attribution));
  return attribution;
};

export const getUtmAttribution = () => captureUtmAttribution();
