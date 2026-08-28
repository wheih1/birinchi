import { ARTICLES } from "./articles";
import { CATEGORY_MAP } from "./categories";
import { authorById } from "./authors";
import { REGIONS } from "./regions";
import type { Article, CategoryId } from "./types";

function fold(s: string): string {
  return s
    .toLowerCase()
    .replace(/[‘’ʻ`']/g, "'")
    .replace(/g‘/g, "g'")
    .replace(/o‘/g, "o'")
    .replace(/ў/g, "o'")
    .replace(/ғ/g, "g'");
}

function haystack(article: Article): string {
  const author = authorById(article.authorId);
  const cat = CATEGORY_MAP[article.category];
  const body = article.body.map((b) => ("text" in b ? b.text : "")).join(" ");
  return fold(
    [
      article.title,
      article.dek,
      article.kicker,
      article.tags.join(" "),
      author.name,
      cat.label,
      body,
    ].join(" "),
  );
}

export type SearchHit = {
  article: Article;
  score: number;
  snippet: string;
};

function snippetOf(article: Article, q: string): string {
  const text = `${article.dek} ${article.body.find((b) => b.type === "p")?.text ?? ""}`;
  const f = fold(text);
  const i = f.indexOf(q);
  if (i < 0) return article.dek;
  const start = Math.max(0, i - 42);
  const slice = text.slice(start, start + 140).trim();
  return `${start > 0 ? "…" : ""}${slice}${start + 140 < text.length ? "…" : ""}`;
}

export function searchArticles(
  query: string,
  opts?: { category?: CategoryId | "all"; kind?: Article["kind"] | "all" },
): SearchHit[] {
  const q = fold(query.trim());
  if (q.length < 2) return [];
  const tokens = q.split(/\s+/).filter(Boolean);
  const hits: SearchHit[] = [];

  for (const article of ARTICLES) {
    if (opts?.category && opts.category !== "all" && article.category !== opts.category) continue;
    if (opts?.kind && opts.kind !== "all" && article.kind !== opts.kind) continue;
    const hay = haystack(article);
    let score = 0;
    for (const token of tokens) {
      if (fold(article.title).includes(token)) score += 8;
      if (fold(article.dek).includes(token)) score += 4;
      if (article.tags.some((t) => fold(t).includes(token))) score += 3;
      if (fold(authorById(article.authorId).name).includes(token)) score += 3;
      if (hay.includes(token)) score += 1;
    }
    if (score > 0) {
      hits.push({ article, score, snippet: snippetOf(article, tokens[0] ?? q) });
    }
  }

  return hits.sort((a, b) => b.score - a.score || a.article.title.localeCompare(b.article.title));
}

export function relatedArticles(article: Article, limit = 4): Article[] {
  const scored = ARTICLES.filter((a) => a.slug !== article.slug).map((other) => {
    let score = 0;
    if (other.category === article.category) score += 4;
    if (other.region && other.region === article.region) score += 3;
    if (other.authorId === article.authorId) score += 2;
    const overlap = other.tags.filter((t) => article.tags.includes(t)).length;
    score += overlap * 2;
    if (other.kind === "essay" && article.kind === "essay") score += 1;
    return { other, score };
  });
  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.other);
}

export const SEARCH_HINTS = [
  "maktab",
  "suv",
  "soya",
  "samarqand",
  "tok",
  "metro",
  "bozor",
  "terma",
];

export function suggestQuery(q: string): string[] {
  const f = fold(q);
  const pool = [
    ...SEARCH_HINTS,
    ...ARTICLES.flatMap((a) => a.tags),
    ...REGIONS.map((r) => r.name),
  ];
  const uniq = Array.from(new Set(pool.map((p) => p.toLowerCase())));
  return uniq.filter((p) => fold(p).includes(f) && fold(p) !== f).slice(0, 6);
}
