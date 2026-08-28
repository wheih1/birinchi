import { Link } from "@tanstack/react-router";
import { formatEventTime, minutesOfDay, PULSE } from "@/lib/news";
import { useNow } from "@/components/layout/useNow";
import { cn } from "@/lib/utils";

export function TimeSpine({ limit }: { limit?: number }) {
  const now = useNow(30_000);
  const nowM = minutesOfDay(now);
  const items = limit ? PULSE.slice(0, limit) : PULSE;

  return (
    <ol className="relative">
      {items.map((event, i) => {
        const past = event.minutes <= nowM;
        const current =
          past && (i === items.length - 1 || items[i + 1].minutes > nowM);
        const body = (
          <div className="grid grid-cols-[4.5rem_1fr] gap-3 py-3 sm:grid-cols-[5.5rem_1fr]">
            <time className="font-sans text-sm tabular-nums text-muted">
              {formatEventTime(event.minutes)}
            </time>
            <div>
              <p className="font-display text-lg font-medium leading-snug">{event.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{event.body}</p>
              <p className="mt-1 font-sans text-xs uppercase tracking-[0.12em] text-subtle">
                {event.city}
              </p>
            </div>
          </div>
        );
        return (
          <li
            key={event.id}
            className={cn(
              "relative border-l border-rule pl-5 sm:pl-6",
              past ? "opacity-100" : "opacity-55",
            )}
          >
            <span
              className={cn(
                "absolute top-5 -left-[5px] size-2.5 rounded-full",
                current ? "bg-live" : past ? "bg-ink" : "bg-rule",
              )}
            />
            {event.articleSlug ? (
              <Link
                to="/maqola/$slug"
                params={{ slug: event.articleSlug }}
                className="block hover:bg-surface/60"
              >
                {body}
              </Link>
            ) : (
              body
            )}
          </li>
        );
      })}
    </ol>
  );
}
