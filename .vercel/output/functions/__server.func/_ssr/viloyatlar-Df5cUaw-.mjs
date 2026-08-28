import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as articlesByRegion, i as Button, r as AppShell, t as ARTICLES } from "./AppShell-CGbTTquo.mjs";
import { i as Route$2, o as useSahar } from "./router-DV_xUG-L.mjs";
import { n as StoryCard } from "./StoryCard-BSkkTfx-.mjs";
import { n as RegionMosaic, r as regionById, t as REGIONS } from "./RegionMosaic-DmaaXSiv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/viloyatlar-Df5cUaw-.js
var import_jsx_runtime = require_jsx_runtime();
function RegionsPage() {
	const { r } = Route$2.useSearch();
	const navigate = Route$2.useNavigate();
	const region = r ? regionById(r) : void 0;
	const followed = useSahar((s) => s.followed);
	const toggle = useSahar((s) => s.toggleFollow);
	const list = region ? articlesByRegion(region.id) : ARTICLES.filter((a) => a.category === "viloyat" || a.region);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl font-medium sm:text-5xl",
			children: "Viloyatlar"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-xl text-muted",
			children: "Xarita chizilmaydi. Nomlar mozaika bo‘lib turadi — har biri o‘z ohangida."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionMosaic, {})
		}),
		region ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: region.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-muted",
						children: [
							region.center,
							" · ",
							region.note
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: followed.includes(region.id) ? "ink" : "outline",
						onClick: () => toggle(region.id),
						children: followed.includes(region.id) ? "Kuzatilmoqda" : "Kuzatish"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: list.length ? list.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, {
						article: a,
						variant: "rule"
					}, a.slug)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: "Bu viloyatda hozircha alohida sahifa yo‘q."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-4 font-sans text-sm underline underline-offset-4",
					onClick: () => navigate({ search: {} }),
					children: "Mozaikaga qaytish"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "border-b border-ink pb-2 font-sans text-[11px] uppercase tracking-[0.2em]",
					children: "Barcha xabarlar"
				}),
				followed.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-muted",
					children: ["Kuzatilayotgan: ", followed.map((id) => REGIONS.find((x) => x.id === id)?.name).join(", ")]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: list.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, {
						article: a,
						variant: "rule"
					}, a.slug))
				})
			]
		})
	] });
}
//#endregion
export { RegionsPage as component };
