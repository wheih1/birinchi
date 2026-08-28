import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as CATEGORIES, l as SEARCH_HINTS, r as AppShell, s as Input, w as searchArticles } from "./AppShell-CGbTTquo.mjs";
import { a as Route$5 } from "./router-DV_xUG-L.mjs";
import { n as StoryCard } from "./StoryCard-BSkkTfx-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/qidiruv-MdDPHmtX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SearchPage() {
	const { q: initial } = Route$5.useSearch();
	const navigate = Route$5.useNavigate();
	const [q, setQ] = (0, import_react.useState)(initial ?? "");
	const [cat, setCat] = (0, import_react.useState)("all");
	const hits = (0, import_react.useMemo)(() => searchArticles(q, { category: cat }), [q, cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl font-medium",
			children: "Qidiruv"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-muted",
			children: "Katalog odobi: kam natija, aniq satr."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
			className: "mt-6",
			onSubmit: (e) => {
				e.preventDefault();
				navigate({ search: { q } });
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "So‘z yoki joy nomi",
				"aria-label": "Qidiruv"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
				active: cat === "all",
				onClick: () => setCat("all"),
				children: "Barchasi"
			}), CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
				active: cat === c.id,
				onClick: () => setCat(c.id),
				children: c.label
			}, c.id))]
		}),
		q.trim().length < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-[11px] uppercase tracking-[0.16em] text-muted",
				children: "Sinab ko‘ring"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: SEARCH_HINTS.map((hint) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "rounded-sm bg-surface px-3 py-2 text-sm",
					onClick: () => {
						setQ(hint);
						navigate({ search: { q: hint } });
					},
					children: hint
				}, hint))
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-sans text-sm text-muted",
					children: [hits.length, " sahifa"]
				}),
				hits.map((hit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, {
					article: hit.article,
					variant: "rule"
				}) }, hit.article.slug)),
				hits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-muted",
					children: "Hech narsa topilmadi. Boshqa so‘z yoki bo‘limni tanlang."
				}) : null
			]
		})
	] });
}
function FilterChip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: active ? "rounded-sm bg-ink px-3 py-2 font-sans text-sm text-paper" : "rounded-sm bg-surface px-3 py-2 font-sans text-sm text-ink",
		children
	});
}
//#endregion
export { SearchPage as component };
