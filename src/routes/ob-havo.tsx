import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { WeatherChart } from "@/components/news/WeatherChart";
import {
  CITIES,
  cityById,
  currentTemp,
  nextPrayer,
  PRAYER_LABELS,
  prayerFor,
  SKY_LABEL,
  useSahar,
  weatherAdvice,
} from "@/lib/news";
import { useNow } from "@/components/layout/useNow";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ob-havo")({ component: WeatherPage });

function WeatherPage() {
  const cityId = useSahar((s) => s.cityId);
  const setCity = useSahar((s) => s.setCity);
  const now = useNow(30_000);
  const city = cityById(cityId);
  const day = prayerFor(cityId, now);
  const next = nextPrayer(day, now);

  return (
    <AppShell>
      <h1 className="font-display text-4xl font-medium sm:text-5xl">Ob-havo va namoz</h1>
      <p className="mt-3 max-w-xl text-muted">
        Shaharni tanlang. Harorat chizig‘i va namoz vaqtlari shu yerda, alohida ilovasiz.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {CITIES.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCity(c.id)}
            className={cn(
              "rounded-sm px-3 py-2 font-sans text-sm",
              c.id === cityId ? "bg-ink text-paper" : "bg-surface text-ink",
            )}
          >
            {c.name}
          </button>
        ))}
      </div>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-xl bg-raised p-5">
          <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-muted">{city.name}</p>
          <p className="mt-2 font-display text-6xl font-medium tabular-nums">{currentTemp(city, now)}°</p>
          <p className="mt-1 text-muted">
            {SKY_LABEL[city.sky]} · yuqori {city.high}° · past {city.low}°
          </p>
          <div className="mt-6">
            <WeatherChart city={city} />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">{weatherAdvice(city)}</p>
        </div>
        <div className="rounded-xl bg-surface p-5">
          <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-muted">Namoz vaqtlari</p>
          <p className="mt-2 font-display text-2xl">
            Keyingi: {next.label} · {next.at}
          </p>
          <ul className="mt-5 divide-y divide-rule">
            {PRAYER_LABELS.map((p) => (
              <li key={p.id} className="flex items-center justify-between py-3">
                <span>{p.label}</span>
                <span className={cn("tabular-nums", next.id === p.id && "font-medium")}>{day[p.id]}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-sans text-xs text-subtle">
            Vaqtlar avgust oyi uchun yaqinlashtirilgan. Mahalliy masjid jadvali asosiy manba.
          </p>
        </div>
      </section>
    </AppShell>
  );
}
