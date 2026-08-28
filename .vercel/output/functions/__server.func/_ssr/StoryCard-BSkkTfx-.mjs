import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as relativeUz, c as KIND_LABEL, h as cn, o as CATEGORY_MAP } from "./AppShell-CGbTTquo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StoryCard-BSkkTfx-.js
var import_jsx_runtime = require_jsx_runtime();
function CoverFrame({ src, alt, className, kicker }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
		className: cn("relative overflow-hidden bg-surface", className),
		children: src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "size-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex size-full items-end bg-surface p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-5xl text-ink/15",
				children: kicker?.[0] ?? "S"
			})
		})
	});
}
function StoryCard({ article, variant = "standard" }) {
	const cat = CATEGORY_MAP[article.category];
	if (variant === "rule") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/maqola/$slug",
		params: { slug: article.slug },
		className: "group grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 border-t border-rule py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "col-span-2 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted",
				children: [
					article.kicker,
					" · ",
					cat.label
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "col-span-2 font-display text-xl font-medium leading-snug group-hover:underline decoration-ink/30 underline-offset-4",
				children: article.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "col-span-2 text-sm leading-relaxed text-muted",
				children: article.dek
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-sans text-xs text-subtle",
				children: [
					article.readMinutes,
					" daq · ",
					relativeUz(article.publishedAt)
				]
			})
		]
	});
	if (variant === "compact") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/maqola/$slug",
		params: { slug: article.slug },
		className: "group block py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-[11px] uppercase tracking-[0.14em] text-muted",
				children: cat.label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-1 font-display text-lg font-medium leading-snug group-hover:underline decoration-ink/30 underline-offset-3",
				children: article.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 font-sans text-xs text-subtle",
				children: [
					KIND_LABEL[article.kind],
					" · ",
					article.readMinutes,
					" daq"
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/maqola/$slug",
		params: { slug: article.slug },
		className: cn("group flex flex-col gap-3"),
		children: [article.cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverFrame, {
			src: article.cover,
			alt: article.coverAlt ?? article.title,
			className: "aspect-[16/10] rounded-lg",
			kicker: article.kicker
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted",
				children: article.kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-1 font-display text-2xl font-medium leading-snug group-hover:underline decoration-ink/30 underline-offset-4",
				children: article.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: article.dek
			})
		] })]
	});
}
//#endregion
export { StoryCard as n, CoverFrame as t };
