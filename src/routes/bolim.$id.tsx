import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { StoryCard } from "@/components/news/StoryCard";
import { articlesByCategory, CATEGORIES, categoryById } from "@/lib/news";

export const Route = createFileRoute("/bolim/$id")({ component: CategoryPage });

function CategoryPage() {
  const { id } = Route.useParams();
  const cat = categoryById(id);
  const list = articlesByCategory(id);

  return (
    <AppShell>
      <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-muted">Bo‘lim</p>
      <h1 className="mt-2 font-display text-4xl font-medium sm:text-5xl">{cat?.label ?? "Topilmadi"}</h1>
      <p className="mt-3 max-w-xl text-muted">{cat?.blurb}</p>
      <nav className="mt-6 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <Link
            key={c.id}
            to="/bolim/$id"
            params={{ id: c.id }}
            className="rounded-sm px-3 py-2 font-sans text-sm hover:bg-surface [&.active]:bg-ink [&.active]:text-paper"
          >
            {c.label}
          </Link>
        ))}
      </nav>
      <div className="mt-8">
        {list.length ? (
          list.map((a) => <StoryCard key={a.slug} article={a} variant="rule" />)
        ) : (
          <p className="text-muted">Bu bo‘limda hozircha sahifa yo‘q.</p>
        )}
      </div>
    </AppShell>
  );
}
