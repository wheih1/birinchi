import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { BriefingPlayer } from "@/components/news/BriefingPlayer";
import { LeadStory } from "@/components/news/LeadStory";
import { LivePulse } from "@/components/news/LivePulse";
import { RegionMosaic } from "@/components/news/RegionMosaic";
import { StoryCard } from "@/components/news/StoryCard";
import { TimeSpine } from "@/components/news/TimeSpine";
import { WeatherStrip } from "@/components/news/WeatherStrip";
import {
  articleBySlug,
  CATEGORIES,
  continueArticle,
  todayDesk,
  useSahar,
} from "@/lib/news";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const desk = todayDesk();
  const last = useSahar((s) => s.lastReadSlug);
  const progress = useSahar((s) => s.progress);
  const cont = continueArticle(last);
  const leftover = cont && (progress[cont.slug] ?? 0) > 0.08 && (progress[cont.slug] ?? 0) < 0.92;

  return (
    <AppShell>
      <LivePulse />
      <div className="mt-6">
        <WeatherStrip />
      </div>

      {leftover && cont ? (
        <Link
          to="/maqola/$slug"
          params={{ slug: cont.slug }}
          className="mt-6 flex items-center justify-between gap-4 rounded-lg border border-rule bg-raised px-4 py-3"
        >
          <span>
            <span className="block font-sans text-[11px] uppercase tracking-[0.14em] text-muted">
              Davom ettirish
            </span>
            <span className="font-display text-lg">{cont.title}</span>
          </span>
          <span className="font-sans text-xs tabular-nums text-muted">
            {Math.round((progress[cont.slug] ?? 0) * 100)}%
          </span>
        </Link>
      ) : null}

      <section className="mt-10">
        <LeadStory article={desk.lead} />
      </section>

      <section className="mt-12">
        <BriefingPlayer compact />
      </section>

      <section className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <SectionLabel>Ustunlar</SectionLabel>
          <div className="mt-2">
            {desk.columns.map((a) => (
              <StoryCard key={a.slug} article={a} variant="rule" />
            ))}
          </div>
        </div>
        <aside>
          <SectionLabel>Kun lentasi</SectionLabel>
          <div className="mt-4">
            <TimeSpine limit={7} />
          </div>
          <Link to="/lenta" className="mt-4 inline-block font-sans text-sm underline underline-offset-4">
            To‘liq lenta
          </Link>
        </aside>
      </section>

      <section className="mt-14">
        <SectionLabel>Xabarlar</SectionLabel>
        <div className="mt-6 grid gap-10 sm:grid-cols-2">
          {desk.dispatches.map((a) => (
            <StoryCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionLabel>Qisqa</SectionLabel>
          <div className="mt-2 divide-y divide-rule">
            {desk.briefs.map((a) => (
              <StoryCard key={a.slug} article={a} variant="compact" />
            ))}
          </div>
        </div>
        <div>
          <SectionLabel>Bo‘limlar</SectionLabel>
          <ul className="mt-4 grid grid-cols-2 gap-3">
            {CATEGORIES.map((c) => {
              const sample = articleBySlug(
                desk.rest.find((a) => a.category === c.id)?.slug ?? desk.lead.slug,
              );
              return (
                <li key={c.id}>
                  <Link
                    to="/bolim/$id"
                    params={{ id: c.id }}
                    className="block rounded-lg bg-surface px-4 py-4 hover:bg-rule/70"
                  >
                    <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-muted">{c.kicker}</p>
                    <p className="mt-1 font-display text-xl">{c.label}</p>
                    {sample ? (
                      <p className="mt-2 line-clamp-2 text-sm text-muted">{sample.title}</p>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="mt-14">
        <SectionLabel>Viloyatlar mozaikasi</SectionLabel>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Poytaxt lentasi emas — har bir viloyatning o‘z satri. Tanlang, sahifa ochiladi.
        </p>
        <div className="mt-5">
          <RegionMosaic />
        </div>
      </section>
    </AppShell>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <h2 className="border-b border-ink pb-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em]">
      {children}
    </h2>
  );
}
