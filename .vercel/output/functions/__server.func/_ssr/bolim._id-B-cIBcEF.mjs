import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as CATEGORIES, d as articlesByCategory, m as categoryById, r as AppShell } from "./AppShell-CGbTTquo.mjs";
import { r as Route$1 } from "./router-DV_xUG-L.mjs";
import { n as StoryCard } from "./StoryCard-BSkkTfx-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bolim._id-B-cIBcEF.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryPage() {
	const { id } = Route$1.useParams();
	const cat = categoryById(id);
	const list = articlesByCategory(id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-sans text-[11px] uppercase tracking-[0.18em] text-muted",
			children: "Bo‘lim"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl font-medium sm:text-5xl",
			children: cat?.label ?? "Topilmadi"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-xl text-muted",
			children: cat?.blurb
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "mt-6 flex flex-wrap gap-2",
			children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/bolim/$id",
				params: { id: c.id },
				className: "rounded-sm px-3 py-2 font-sans text-sm hover:bg-surface [&.active]:bg-ink [&.active]:text-paper",
				children: c.label
			}, c.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children: list.length ? list.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, {
				article: a,
				variant: "rule"
			}, a.slug)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "Bu bo‘limda hozircha sahifa yo‘q."
			})
		})
	] });
}
//#endregion
export { CategoryPage as component };
