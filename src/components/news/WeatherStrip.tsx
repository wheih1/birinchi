import { Link } from "@tanstack/react-router";
import { CloudSun, Droplets, Wind } from "lucide-react";
import { cityById, currentTemp, nextPrayer, prayerFor, SKY_LABEL, useSahar } from "@/lib/news";
import { useNow } from "@/components/layout/useNow";

export function WeatherStrip() {
  const cityId = useSahar((s) => s.cityId);
  const now = useNow(60_000);
  const city = cityById(cityId);
  const prayers = prayerFor(cityId, now);
  const next = nextPrayer(prayers, now);

  return (
    <Link
      to="/ob-havo"
      className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-surface px-4 py-3 text-sm text-ink hover:bg-rule/60"
    >
      <span className="flex items-center gap-2 font-medium">
        <CloudSun className="size-4" />
        {city.name} · {currentTemp(city, now)}°
      </span>
      <span className="hidden text-muted sm:inline">{SKY_LABEL[city.sky]}</span>
      <span className="flex items-center gap-3 font-sans text-xs text-muted">
        <span className="inline-flex items-center gap-1">
          <Wind className="size-3.5" /> {city.wind} km/s
        </span>
        <span className="inline-flex items-center gap-1">
          <Droplets className="size-3.5" /> {city.humidity}%
        </span>
        <span className="tabular-nums">
          {next.label} {next.at}
        </span>
      </span>
    </Link>
  );
}
