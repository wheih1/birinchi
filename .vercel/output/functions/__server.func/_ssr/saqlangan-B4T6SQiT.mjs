import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as AppShell, u as articleBySlug } from "./AppShell-CGbTTquo.mjs";
import { o as useSahar } from "./router-DV_xUG-L.mjs";
import { n as StoryCard } from "./StoryCard-BSkkTfx-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/saqlangan-B4T6SQiT.js
var import_jsx_runtime = require_jsx_runtime();
function SavedPage() {
	const bookmarks = useSahar((s) => s.bookmarks);
	const progress = useSahar((s) => s.progress);
	const articles = bookmarks.map(articleBySlug).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl font-medium",
			children: "Saqlangan sahifalar"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-xl text-muted",
			children: "Bu ro‘yxat shu qurilmada qoladi. Hisob ochilmaydi — gazeta cho‘ntagidek."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children: articles.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-lg bg-surface px-5 py-8 text-muted",
				children: "Hali hech narsa saqlanmagan. Maqolada «Saqlash» ni bosing."
			}) : articles.map((a) => a ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, {
				article: a,
				variant: "rule"
			}), progress[a.slug] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "-mt-2 mb-2 font-sans text-xs text-subtle",
				children: [
					"O‘qilgan: ",
					Math.round(progress[a.slug] * 100),
					"%"
				]
			}) : null] }, a.slug) : null)
		})
	] });
}
//#endregion
export { SavedPage as component };
