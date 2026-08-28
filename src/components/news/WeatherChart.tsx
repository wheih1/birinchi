import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { CityWeather } from "@/lib/news";

export function WeatherChart({ city }: { city: CityWeather }) {
  const data = city.hours.map((temp, hour) => ({ hour, temp }));
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <XAxis
            dataKey="hour"
            tick={{ fill: "var(--sahar-muted)", fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            interval={3}
          />
          <YAxis
            tick={{ fill: "var(--sahar-muted)", fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            width={28}
            unit="°"
          />
          <Tooltip
            contentStyle={{
              background: "var(--sahar-raised)",
              border: "1px solid var(--sahar-rule)",
              borderRadius: 8,
              color: "var(--sahar-ink)",
              fontFamily: "var(--font-sans)",
            }}
            formatter={(value) => [`${value}°`, "Harorat"]}
            labelFormatter={(h) => `${h}:00`}
          />
          <Area
            type="monotone"
            dataKey="temp"
            stroke="var(--sahar-ink)"
            fill="var(--sahar-surface)"
            strokeWidth={1.5}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
