import { ARTICLES, articleBySlug, leadArticle, sortedByDate } from "./articles";
import { CATEGORIES } from "./categories";
import type { Article, CategoryId } from "./types";

export * from "./types";
export * from "./articles";
export * from "./authors";
export * from "./categories";
export * from "./dates";
export * from "./regions";
export * from "./weather";
export * from "./prayer";
export * from "./events";
export * from "./briefing";
export * from "./search";
export * from "./store";

export function todayDesk(): {
  lead: Article;
  columns: Article[];
  briefs: Article[];
  dispatches: Article[];
  rest: Article[];
} {
  const lead = leadArticle();
  const restAll = sortedByDate(ARTICLES.filter((a) => a.slug !== lead.slug));
  return {
    lead,
    columns: restAll.filter((a) => a.kind === "column" || a.kind === "essay").slice(0, 4),
    briefs: restAll.filter((a) => a.kind === "brief").slice(0, 6),
    dispatches: restAll.filter((a) => a.kind === "dispatch").slice(0, 4),
    rest: restAll.slice(0, 12),
  };
}

export function continueArticle(slug: string | null) {
  if (!slug) return undefined;
  return articleBySlug(slug);
}

export const KIND_LABEL: Record<Article["kind"], string> = {
  lead: "Bosh maqola",
  column: "Ustun",
  brief: "Qisqa",
  dispatch: "Xabar",
  essay: "Ocherk",
};

export const NAV = [
  { to: "/", label: "Bugun" },
  { to: "/brifing", label: "Brifing" },
  { to: "/lenta", label: "Kun lentasi" },
  { to: "/viloyatlar", label: "Viloyatlar" },
  { to: "/ob-havo", label: "Ob-havo" },
  { to: "/saqlangan", label: "Saqlangan" },
  { to: "/tahririyat", label: "Tahririyat" },
] as const;

export function categoryPath(id: CategoryId): string {
  return `/bolim/${id}`;
}

export { CATEGORIES };
