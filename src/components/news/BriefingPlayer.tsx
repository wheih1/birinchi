import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Pause, Play, RotateCcw } from "lucide-react";
import { beatAt, BRIEFING, BRIEFING_TOTAL_MS, formatUzShort, useSahar } from "@/lib/news";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BriefingPlayer({ compact = false }: { compact?: boolean }) {
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const raf = useRef<number>(0);
  const last = useRef<number>(0);
  const mark = useSahar((s) => s.markBriefing);
  const { index, local } = beatAt(elapsed);
  const beat = BRIEFING[index];
  const pct = Math.min(100, (elapsed / BRIEFING_TOTAL_MS) * 100);

  useEffect(() => {
    if (!playing) return;
    last.current = performance.now();
    const tick = (t: number) => {
      const dt = t - last.current;
      last.current = t;
      setElapsed((e) => {
        const next = e + dt;
        if (next >= BRIEFING_TOTAL_MS) {
          setPlaying(false);
          mark(formatUzShort(new Date()));
          return BRIEFING_TOTAL_MS;
        }
        return next;
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [playing, mark]);

  return (
    <section className={cn("rounded-xl bg-ink px-5 py-5 text-paper sm:px-7 sm:py-6", compact && "py-4")}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-paper/60">
          Bugungi brifing · {Math.round(BRIEFING_TOTAL_MS / 1000)} soniya
        </p>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            size="sm"
            variant="ghost"
            className="text-paper hover:bg-paper/10"
            onClick={() => {
              setElapsed(0);
              setPlaying(false);
            }}
            aria-label="Boshidan"
          >
            <RotateCcw className="size-4" />
          </Button>
          <Button
            type="button"
            size="sm"
            className="bg-paper text-ink hover:opacity-90"
            onClick={() => setPlaying((p) => !p)}
          >
            {playing ? <Pause className="size-4" /> : <Play className="ml-0.5 size-4" />}
            {playing ? "Pauza" : "O‘qib berish"}
          </Button>
        </div>
      </div>

      <div className="mt-4 h-px overflow-hidden bg-paper/20">
        <div
          className="progress-bar h-full bg-paper"
          style={{ transform: `scaleX(${pct / 100})` }}
        />
      </div>

      <p className="mt-5 font-display text-2xl font-medium leading-snug sm:text-3xl">{beat.title}</p>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-paper/80">{beat.text}</p>
      {beat.slug ? (
        <Link
          to="/maqola/$slug"
          params={{ slug: beat.slug }}
          className="mt-4 inline-block font-sans text-sm underline decoration-paper/30 underline-offset-4 hover:decoration-paper"
        >
          To‘liq sahifa
        </Link>
      ) : null}

      {!compact ? (
        <ol className="mt-6 grid gap-2 sm:grid-cols-2">
          {BRIEFING.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => {
                  const start = BRIEFING.slice(0, i).reduce((s, b) => s + b.durationMs, 0);
                  setElapsed(start);
                }}
                className={cn(
                  "w-full rounded-md px-3 py-2 text-left font-sans text-sm transition-colors duration-150",
                  i === index ? "bg-paper/12 text-paper" : "text-paper/55 hover:text-paper",
                )}
              >
                <span className="tabular-nums text-paper/40">{String(i + 1).padStart(2, "0")} · </span>
                {item.title}
                {i === index ? (
                  <span className="ml-2 text-xs text-paper/40">
                    {Math.round((local / item.durationMs) * 100)}%
                  </span>
                ) : null}
              </button>
            </li>
          ))}
        </ol>
      ) : null}
    </section>
  );
}
