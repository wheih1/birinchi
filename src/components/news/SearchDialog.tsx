import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { searchArticles, SEARCH_HINTS } from "@/lib/news";
import { cn } from "@/lib/utils";

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const hits = useMemo(() => (q.trim().length >= 2 ? searchArticles(q).slice(0, 8) : []), [q]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-ink/40 px-4 pt-[12vh]" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Qidiruv"
        className="w-full max-w-xl rounded-xl bg-raised p-4 shadow-[var(--shadow-border)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <Search className="pointer-events-none absolute top-3.5 left-3 size-4 text-subtle" />
          <Input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Maktab, suv, Samarqand…"
            className="pl-10"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate({ to: "/qidiruv", search: { q } });
                onClose();
              }
            }}
          />
        </div>
        <ul className="mt-3 max-h-80 overflow-auto">
          {hits.map((hit) => (
            <li key={hit.article.slug}>
              <button
                type="button"
                className="w-full rounded-md px-3 py-3 text-left hover:bg-surface"
                onClick={() => {
                  navigate({ to: "/maqola/$slug", params: { slug: hit.article.slug } });
                  onClose();
                }}
              >
                <p className="font-display text-lg font-medium leading-snug">{hit.article.title}</p>
                <p className="mt-1 line-clamp-2 text-sm text-muted">{hit.snippet}</p>
              </button>
            </li>
          ))}
        </ul>
        {q.trim().length < 2 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {SEARCH_HINTS.map((hint) => (
              <button
                key={hint}
                type="button"
                className={cn("rounded-sm bg-surface px-3 py-1.5 font-sans text-sm text-ink")}
                onClick={() => setQ(hint)}
              >
                {hint}
              </button>
            ))}
          </div>
        ) : null}
        <p className="mt-3 font-sans text-xs text-subtle">Enter — to‘liq qidiruv. Esc — yopish.</p>
      </div>
    </div>
  );
}
