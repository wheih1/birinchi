import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as useNow, h as cn, r as AppShell } from "./AppShell-CGbTTquo.mjs";
import { o as useSahar } from "./router-DV_xUG-L.mjs";
import { a as currentTemp, c as weatherAdvice, i as cityById, n as PRAYER_LABELS, o as nextPrayer, r as SKY_LABEL, s as prayerFor, t as CITIES } from "./prayer-BZYYdm-7.mjs";
import { a as ResponsiveContainer, i as Area, n as YAxis, o as Tooltip, r as XAxis, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ob-havo-BgbGhVDH.js
var import_jsx_runtime = require_jsx_runtime();
function WeatherChart({ city }) {
	const data = city.hours.map((temp, hour) => ({
		hour,
		temp
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-56 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
				data,
				margin: {
					top: 8,
					right: 8,
					left: 0,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "hour",
						tick: {
							fill: "var(--sahar-muted)",
							fontSize: 11
						},
						tickLine: false,
						axisLine: false,
						interval: 3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tick: {
							fill: "var(--sahar-muted)",
							fontSize: 11
						},
						tickLine: false,
						axisLine: false,
						width: 28,
						unit: "°"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						contentStyle: {
							background: "var(--sahar-raised)",
							border: "1px solid var(--sahar-rule)",
							borderRadius: 8,
							color: "var(--sahar-ink)",
							fontFamily: "var(--font-sans)"
						},
						formatter: (value) => [`${value}°`, "Harorat"],
						labelFormatter: (h) => `${h}:00`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "monotone",
						dataKey: "temp",
						stroke: "var(--sahar-ink)",
						fill: "var(--sahar-surface)",
						strokeWidth: 1.5
					})
				]
			})
		})
	});
}
function WeatherPage() {
	const cityId = useSahar((s) => s.cityId);
	const setCity = useSahar((s) => s.setCity);
	const now = useNow(3e4);
	const city = cityById(cityId);
	const day = prayerFor(cityId, now);
	const next = nextPrayer(day, now);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl font-medium sm:text-5xl",
			children: "Ob-havo va namoz"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-xl text-muted",
			children: "Shaharni tanlang. Harorat chizig‘i va namoz vaqtlari shu yerda, alohida ilovasiz."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 flex flex-wrap gap-2",
			children: CITIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setCity(c.id),
				className: cn("rounded-sm px-3 py-2 font-sans text-sm", c.id === cityId ? "bg-ink text-paper" : "bg-surface text-ink"),
				children: c.name
			}, c.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-raised p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-[11px] uppercase tracking-[0.16em] text-muted",
						children: city.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-display text-6xl font-medium tabular-nums",
						children: [currentTemp(city, now), "°"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-muted",
						children: [
							SKY_LABEL[city.sky],
							" · yuqori ",
							city.high,
							"° · past ",
							city.low,
							"°"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeatherChart, { city })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted",
						children: weatherAdvice(city)
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-[11px] uppercase tracking-[0.16em] text-muted",
						children: "Namoz vaqtlari"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-display text-2xl",
						children: [
							"Keyingi: ",
							next.label,
							" · ",
							next.at
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 divide-y divide-rule",
						children: PRAYER_LABELS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("tabular-nums", next.id === p.id && "font-medium"),
								children: day[p.id]
							})]
						}, p.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-sans text-xs text-subtle",
						children: "Vaqtlar avgust oyi uchun yaqinlashtirilgan. Mahalliy masjid jadvali asosiy manba."
					})
				]
			})]
		})
	] });
}
//#endregion
export { WeatherPage as component };
