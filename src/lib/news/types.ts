export type CategoryId =
  | "siyosat"
  | "iqtisod"
  | "madaniyat"
  | "sport"
  | "jahon"
  | "fan"
  | "jamiyat"
  | "viloyat";

export type ArticleKind = "lead" | "column" | "brief" | "dispatch" | "essay";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "aside"; label: string; text: string };

export type Article = {
  slug: string;
  title: string;
  dek: string;
  kicker: string;
  category: CategoryId;
  region?: string;
  authorId: string;
  publishedAt: string;
  readMinutes: number;
  kind: ArticleKind;
  cover?: string;
  coverAlt?: string;
  tags: string[];
  body: ArticleBlock[];
};

export type Author = {
  id: string;
  name: string;
  role: string;
  bio: string;
};

export type Category = {
  id: CategoryId;
  label: string;
  kicker: string;
  blurb: string;
};

export type PulseEvent = {
  id: string;
  minutes: number;
  title: string;
  body: string;
  city: string;
  articleSlug?: string;
  category: CategoryId;
};

export type Region = {
  id: string;
  name: string;
  center: string;
  note: string;
};

export type CityWeather = {
  id: string;
  name: string;
  high: number;
  low: number;
  now: number;
  sky: "ochiq" | "bulut" | "chang" | "yomg'ir" | "issiq";
  wind: number;
  humidity: number;
  hours: number[];
};

export type BriefingBeat = {
  id: string;
  title: string;
  text: string;
  slug?: string;
  durationMs: number;
};

export type PrayerName = "bomdod" | "quyosh" | "peshin" | "asr" | "shom" | "xufton";

export type PrayerDay = Record<PrayerName, string>;
