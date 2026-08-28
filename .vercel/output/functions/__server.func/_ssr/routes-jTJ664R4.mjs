import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as CloudSun, n as Wind, p as Droplets } from "../_libs/lucide-react.mjs";
import { C as relativeUz, D as useNow, E as todayDesk, a as CATEGORIES, c as KIND_LABEL, g as continueArticle, h as cn, o as CATEGORY_MAP, r as AppShell, u as articleBySlug } from "./AppShell-CGbTTquo.mjs";
import { o as useSahar } from "./router-DV_xUG-L.mjs";
import { n as StoryCard, t as CoverFrame } from "./StoryCard-BSkkTfx-.mjs";
import { n as BriefingPlayer } from "./BriefingPlayer-o7nfU0Fm.mjs";
import { n as formatEventTime, r as latestPulse, t as TimeSpine } from "./TimeSpine-DMau5Mm0.mjs";
import { t as BookmarkButton } from "./BookmarkButton-DDcqElmX.mjs";
import { a as currentTemp, i as cityById, o as nextPrayer, r as SKY_LABEL, s as prayerFor } from "./prayer-BZYYdm-7.mjs";
import { n as RegionMosaic } from "./RegionMosaic-DmaaXSiv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-jTJ664R4.js
var import_jsx_runtime = require_jsx_runtime();
function LeadStory({ article }) {
	const cat = CATEGORY_MAP[article.category];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:items-end",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/maqola/$slug",
			params: { slug: article.slug },
			className: "block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverFrame, {
				src: article.cover,
				alt: article.coverAlt ?? article.title,
				className: "aspect-[16/10] rounded-xl sm:aspect-[16/9]",
				kicker: article.kicker
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-muted",
					children: [
						article.kicker,
						" · ",
						cat.label
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-[2.15rem] font-medium leading-[1.12] tracking-[-0.03em] sm:text-5xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/maqola/$slug",
						params: { slug: article.slug },
						className: "hover:underline decoration-ink/25 underline-offset-4",
						children: article.title
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-prose text-base leading-relaxed text-muted sm:text-lg",
					children: article.dek
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-sans text-sm text-subtle",
						children: [
							KIND_LABEL[article.kind],
							" · ",
							article.readMinutes,
							" daqiqa · ",
							relativeUz(article.publishedAt)
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkButton, {
						slug: article.slug,
						title: article.title
					})]
				})
			]
		})]
	});
}
function Badge({ className, tone = "ink", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-sm px-2 py-0.5 font-sans text-[11px] font-medium uppercase tracking-[0.14em]", tone === "ink" && "bg-ink text-paper", tone === "live" && "bg-live text-paper", tone === "mute" && "bg-surface text-muted", className),
		children
	});
}
function LivePulse() {
	const now = useNow(2e4);
	const event = latestPulse(now);
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-w-0 items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: "live",
				children: "Jonli"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "shrink-0 font-sans text-xs tabular-nums text-muted",
				children: formatEventTime(event.minutes)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate font-sans text-sm text-ink",
				children: event.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "hidden truncate text-sm text-muted sm:inline",
				children: ["— ", event.body]
			})
		]
	});
	if (event.articleSlug) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/maqola/$slug",
		params: { slug: event.articleSlug },
		className: "block border-y border-rule bg-raised/70 px-4 py-2.5 hover:bg-surface",
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-y border-rule bg-raised/70 px-4 py-2.5",
		children: inner
	});
}
function WeatherStrip() {
	const cityId = useSahar((s) => s.cityId);
	const now = useNow(6e4);
	const city = cityById(cityId);
	const prayers = prayerFor(cityId, now);
	const next = nextPrayer(prayers, now);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/ob-havo",
		className: "flex flex-wrap items-center justify-between gap-3 rounded-lg bg-surface px-4 py-3 text-sm text-ink hover:bg-rule/60",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2 font-medium",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudSun, { className: "size-4" }),
					city.name,
					" · ",
					currentTemp(city, now),
					"°"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden text-muted sm:inline",
				children: SKY_LABEL[city.sky]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-3 font-sans text-xs text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wind, { className: "size-3.5" }),
							" ",
							city.wind,
							" km/s"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, { className: "size-3.5" }),
							" ",
							city.humidity,
							"%"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums",
						children: [
							next.label,
							" ",
							next.at
						]
					})
				]
			})
		]
	});
}
function Home() {
	const desk = todayDesk();
	const last = useSahar((s) => s.lastReadSlug);
	const progress = useSahar((s) => s.progress);
	const cont = continueArticle(last);
	const leftover = cont && (progress[cont.slug] ?? 0) > .08 && (progress[cont.slug] ?? 0) < .92;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LivePulse, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeatherStrip, {})
		}),
		leftover && cont ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/maqola/$slug",
			params: { slug: cont.slug },
			className: "mt-6 flex items-center justify-between gap-4 rounded-lg border border-rule bg-raised px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-sans text-[11px] uppercase tracking-[0.14em] text-muted",
				children: "Davom ettirish"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-lg",
				children: cont.title
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-sans text-xs tabular-nums text-muted",
				children: [Math.round((progress[cont.slug] ?? 0) * 100), "%"]
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadStory, { article: desk.lead })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefingPlayer, { compact: true })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Ustunlar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2",
				children: desk.columns.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, {
					article: a,
					variant: "rule"
				}, a.slug))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Kun lentasi" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeSpine, { limit: 7 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/lenta",
					className: "mt-4 inline-block font-sans text-sm underline underline-offset-4",
					children: "To‘liq lenta"
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Xabarlar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-10 sm:grid-cols-2",
				children: desk.dispatches.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, { article: a }, a.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Qisqa" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 divide-y divide-rule",
				children: desk.briefs.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, {
					article: a,
					variant: "compact"
				}, a.slug))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Bo‘limlar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid grid-cols-2 gap-3",
				children: CATEGORIES.map((c) => {
					const sample = articleBySlug(desk.rest.find((a) => a.category === c.id)?.slug ?? desk.lead.slug);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/bolim/$id",
						params: { id: c.id },
						className: "block rounded-lg bg-surface px-4 py-4 hover:bg-rule/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-[11px] uppercase tracking-[0.14em] text-muted",
								children: c.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-xl",
								children: c.label
							}),
							sample ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-2 text-sm text-muted",
								children: sample.title
							}) : null
						]
					}) }, c.id);
				})
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Viloyatlar mozaikasi" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm text-muted",
					children: "Poytaxt lentasi emas — har bir viloyatning o‘z satri. Tanlang, sahifa ochiladi."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionMosaic, {})
				})
			]
		})
	] });
}
function SectionLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "border-b border-ink pb-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em]",
		children
	});
}
//#endregion
export { Home as component };
