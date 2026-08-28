import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { RegionMosaic } from "@/components/news/RegionMosaic";
import { StoryCard } from "@/components/news/StoryCard";
import { Button } from "@/components/ui/button";
import { articlesByRegion, ARTICLES, regionById, REGIONS, useSahar } from "@/lib/news";

type Search = { r?: string };

export const Route = createFileRoute("/viloyatlar")({
  validateSearch: (raw: Record<string, unknown>): Search => ({
    r: typeof raw.r === "string" ? raw.r : undefined,
  }),
  component: RegionsPage,
});

function RegionsPage() {
  const { r } = Route.useSearch();
  const navigate = Route.useNavigate();
  const region = r ? regionById(r) : undefined;
  const followed = useSahar((s) => s.followed);
  const toggle = useSahar((s) => s.toggleFollow);
  const list = region
    ? articlesByRegion(region.id)
    : ARTICLES.filter((a) => a.category === "viloyat" || a.region);

  return (
    <AppShell>
      <h1 className="font-display text-4xl font-medium sm:text-5xl">Viloyatlar</h1>
      <p className="mt-3 max-w-xl text-muted">
        Xarita chizilmaydi. Nomlar mozaika bo‘lib turadi — har biri o‘z ohangida.
      </p>
      <div className="mt-8">
        <RegionMosaic />
      </div>
      {region ? (
        <section className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl">{region.name}</h2>
              <p className="mt-1 text-muted">
                {region.center} · {region.note}
              </p>
            </div>
            <Button
              type="button"
              variant={followed.includes(region.id) ? "ink" : "outline"}
              onClick={() => toggle(region.id)}
            >
              {followed.includes(region.id) ? "Kuzatilmoqda" : "Kuzatish"}
            </Button>
          </div>
          <div className="mt-6">
            {list.length ? (
              list.map((a) => <StoryCard key={a.slug} article={a} variant="rule" />)
            ) : (
              <p className="text-muted">Bu viloyatda hozircha alohida sahifa yo‘q.</p>
            )}
          </div>
          <button
            type="button"
            className="mt-4 font-sans text-sm underline underline-offset-4"
            onClick={() => navigate({ search: {} })}
          >
            Mozaikaga qaytish
          </button>
        </section>
      ) : (
        <section className="mt-12">
          <h2 className="border-b border-ink pb-2 font-sans text-[11px] uppercase tracking-[0.2em]">
            Barcha xabarlar
          </h2>
          {followed.length ? (
            <p className="mt-3 text-sm text-muted">
              Kuzatilayotgan: {followed.map((id) => REGIONS.find((x) => x.id === id)?.name).join(", ")}
            </p>
          ) : null}
          <div className="mt-4">
            {list.map((a) => (
              <StoryCard key={a.slug} article={a} variant="rule" />
            ))}
          </div>
        </section>
      )}
    </AppShell>
  );
}
