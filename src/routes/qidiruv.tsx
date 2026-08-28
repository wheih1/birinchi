import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { StoryCard } from "@/components/news/StoryCard";
import { Input } from "@/components/ui/input";
import { CATEGORIES, searchArticles, SEARCH_HINTS, type CategoryId } from "@/lib/news";

type Search = { q?: string };

export const Route = createFileRoute("/qidiruv")({
  validateSearch: (raw: Record<string, unknown>): Search => ({
    q: typeof raw.q === "string" ? raw.q : "",
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q: initial } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [q, setQ] = useState(initial ?? "");
  const [cat, setCat] = useState<CategoryId | "all">("all");
  const hits = useMemo(
    () => searchArticles(q, { category: cat }),
    [q, cat],
  );

  return (
    <AppShell>
      <h1 className="font-display text-4xl font-medium">Qidiruv</h1>
      <p className="mt-2 text-muted">Katalog odobi: kam natija, aniq satr.</p>
      <form
        className="mt-6"
        onSubmit={(e) => {
          e.preventDefault();
          navigate({ search: { q } });
        }}
      >
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="So‘z yoki joy nomi"
          aria-label="Qidiruv"
        />
      </form>
      <div className="mt-4 flex flex-wrap gap-2">
        <FilterChip active={cat === "all"} onClick={() => setCat("all")}>
          Barchasi
        </FilterChip>
        {CATEGORIES.map((c) => (
          <FilterChip key={c.id} active={cat === c.id} onClick={() => setCat(c.id)}>
            {c.label}
          </FilterChip>
        ))}
      </div>
      {q.trim().length < 2 ? (
        <div className="mt-8">
          <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-muted">Sinab ko‘ring</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {SEARCH_HINTS.map((hint) => (
              <button
                key={hint}
                type="button"
                className="rounded-sm bg-surface px-3 py-2 text-sm"
                onClick={() => {
                  setQ(hint);
                  navigate({ search: { q: hint } });
                }}
              >
                {hint}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8">
          <p className="font-sans text-sm text-muted">{hits.length} sahifa</p>
          {hits.map((hit) => (
            <div key={hit.article.slug}>
              <StoryCard article={hit.article} variant="rule" />
            </div>
          ))}
          {hits.length === 0 ? (
            <p className="mt-6 text-muted">Hech narsa topilmadi. Boshqa so‘z yoki bo‘limni tanlang.</p>
          ) : null}
        </div>
      )}
    </AppShell>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "rounded-sm bg-ink px-3 py-2 font-sans text-sm text-paper"
          : "rounded-sm bg-surface px-3 py-2 font-sans text-sm text-ink"
      }
    >
      {children}
    </button>
  );
}
