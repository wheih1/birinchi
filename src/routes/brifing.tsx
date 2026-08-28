import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { BriefingPlayer } from "@/components/news/BriefingPlayer";
import { StoryCard } from "@/components/news/StoryCard";
import { articleBySlug, BRIEFING, formatUzShort, useSahar } from "@/lib/news";

export const Route = createFileRoute("/brifing")({ component: BriefingPage });

function BriefingPage() {
  const done = useSahar((s) => s.briefingDoneOn);
  const today = formatUzShort(new Date());
  const linked = BRIEFING.map((b) => (b.slug ? articleBySlug(b.slug) : undefined)).filter(Boolean);

  return (
    <AppShell>
      <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-muted">Ertalabki marosim</p>
      <h1 className="mt-2 font-display text-4xl font-medium sm:text-5xl">Bugungi brifing</h1>
      <p className="mt-3 max-w-xl text-muted">
        Yetti nafas. O‘qib berish tugmasi matnni o‘zi aytadi — ovoz emas, teleprompter. Gazeta ertalab shunday ochilardi.
      </p>
      {done === today ? (
        <p className="mt-4 font-sans text-sm text-muted">Bugungi brifing tinglandi.</p>
      ) : null}
      <div className="mt-8">
        <BriefingPlayer />
      </div>
      <section className="mt-12">
        <h2 className="border-b border-ink pb-2 font-sans text-[11px] uppercase tracking-[0.2em]">
          Brifingdagi sahifalar
        </h2>
        <div className="mt-2">
          {linked.map((a) => (a ? <StoryCard key={a.slug} article={a} variant="rule" /> : null))}
        </div>
      </section>
    </AppShell>
  );
}
