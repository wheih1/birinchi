import { Link } from "@tanstack/react-router";
import { formatEventTime, latestPulse } from "@/lib/news";
import { useNow } from "@/components/layout/useNow";
import { Badge } from "@/components/ui/badge";

export function LivePulse() {
  const now = useNow(20_000);
  const event = latestPulse(now);

  const inner = (
    <div className="flex min-w-0 items-center gap-3">
      <Badge tone="live">Jonli</Badge>
      <span className="shrink-0 font-sans text-xs tabular-nums text-muted">
        {formatEventTime(event.minutes)}
      </span>
      <span className="truncate font-sans text-sm text-ink">{event.title}</span>
      <span className="hidden truncate text-sm text-muted sm:inline">— {event.body}</span>
    </div>
  );

  if (event.articleSlug) {
    return (
      <Link
        to="/maqola/$slug"
        params={{ slug: event.articleSlug }}
        className="block border-y border-rule bg-raised/70 px-4 py-2.5 hover:bg-surface"
      >
        {inner}
      </Link>
    );
  }

  return <div className="border-y border-rule bg-raised/70 px-4 py-2.5">{inner}</div>;
}
