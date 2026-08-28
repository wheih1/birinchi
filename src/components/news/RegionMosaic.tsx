import { Link } from "@tanstack/react-router";
import { articlesByRegion, REGIONS, useSahar } from "@/lib/news";
import { cn } from "@/lib/utils";

export function RegionMosaic() {
  const followed = useSahar((s) => s.followed);
  return (
    <div className="grid grid-cols-2 gap-px bg-rule sm:grid-cols-3 lg:grid-cols-4">
      {REGIONS.map((region) => {
        const count = articlesByRegion(region.id).length;
        const on = followed.includes(region.id);
        return (
          <Link
            key={region.id}
            to="/viloyatlar"
            search={{ r: region.id }}
            className={cn(
              "flex min-h-28 flex-col justify-between bg-paper p-4 transition-colors duration-150 hover:bg-surface",
              on && "bg-surface",
            )}
          >
            <span className="font-display text-xl font-medium leading-snug">{region.name}</span>
            <span className="font-sans text-xs text-muted">
              {region.center}
              {count ? ` · ${count} sahifa` : ""}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
