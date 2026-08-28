import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as BookmarkCheck, h as Bookmark } from "../_libs/lucide-react.mjs";
import { h as cn, i as Button } from "./AppShell-CGbTTquo.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { o as useSahar } from "./router-DV_xUG-L.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BookmarkButton-DDcqElmX.js
var import_jsx_runtime = require_jsx_runtime();
function BookmarkButton({ slug, title, className }) {
	const bookmarked = useSahar((s) => s.bookmarks.includes(slug));
	const toggle = useSahar((s) => s.toggleBookmark);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		type: "button",
		variant: "outline",
		size: "sm",
		className: cn("min-w-11", className),
		"aria-pressed": bookmarked,
		"aria-label": bookmarked ? "Saqlanganlardan olib tashlash" : "Saqlash",
		onClick: (e) => {
			e.preventDefault();
			e.stopPropagation();
			toggle(slug);
			toast(bookmarked ? "Olib tashlandi" : "Sahifaga qo‘yildi", { description: title });
		},
		children: [bookmarked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkCheck, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden sm:inline",
			children: bookmarked ? "Saqlangan" : "Saqlash"
		})]
	});
}
//#endregion
export { BookmarkButton as t };
