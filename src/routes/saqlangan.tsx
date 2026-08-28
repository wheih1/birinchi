import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { StoryCard } from "@/components/news/StoryCard";
import { articleBySlug, useSahar } from "@/lib/news";

export const Route = createFileRoute("/saqlangan")({ component: SavedPage });

function SavedPage() {
  const bookmarks = useSahar((s) => s.bookmarks);
  const progress = useSahar((s) => s.progress);
  const articles = bookmarks.map(articleBySlug).filter(Boolean);

  return (
    <AppShell>
      <h1 className="font-display text-4xl font-medium">Saqlangan sahifalar</h1>
      <p className="mt-2 max-w-xl text-muted">
        Bu ro‘yxat shu qurilmada qoladi. Hisob ochilmaydi — gazeta cho‘ntagidek.
      </p>
      <div className="mt-8">
        {articles.length === 0 ? (
          <p className="rounded-lg bg-surface px-5 py-8 text-muted">
            Hali hech narsa saqlanmagan. Maqolada «Saqlash» ni bosing.
          </p>
        ) : (
          articles.map((a) =>
            a ? (
              <div key={a.slug}>
                <StoryCard article={a} variant="rule" />
                {progress[a.slug] ? (
                  <p className="-mt-2 mb-2 font-sans text-xs text-subtle">
                    O‘qilgan: {Math.round(progress[a.slug] * 100)}%
                  </p>
                ) : null}
              </div>
            ) : null,
          )
        )}
      </div>
    </AppShell>
  );
}
