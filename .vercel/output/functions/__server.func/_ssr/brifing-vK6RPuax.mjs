import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as AppShell, u as articleBySlug, y as formatUzShort } from "./AppShell-CGbTTquo.mjs";
import { o as useSahar } from "./router-DV_xUG-L.mjs";
import { n as StoryCard } from "./StoryCard-BSkkTfx-.mjs";
import { n as BriefingPlayer, t as BRIEFING } from "./BriefingPlayer-o7nfU0Fm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brifing-vK6RPuax.js
var import_jsx_runtime = require_jsx_runtime();
function BriefingPage() {
	const done = useSahar((s) => s.briefingDoneOn);
	const today = formatUzShort(/* @__PURE__ */ new Date());
	const linked = BRIEFING.map((b) => b.slug ? articleBySlug(b.slug) : void 0).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-sans text-[11px] uppercase tracking-[0.18em] text-muted",
			children: "Ertalabki marosim"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl font-medium sm:text-5xl",
			children: "Bugungi brifing"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-xl text-muted",
			children: "Yetti nafas. O‘qib berish tugmasi matnni o‘zi aytadi — ovoz emas, teleprompter. Gazeta ertalab shunday ochilardi."
		}),
		done === today ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 font-sans text-sm text-muted",
			children: "Bugungi brifing tinglandi."
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefingPlayer, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "border-b border-ink pb-2 font-sans text-[11px] uppercase tracking-[0.2em]",
				children: "Brifingdagi sahifalar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2",
				children: linked.map((a) => a ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, {
					article: a,
					variant: "rule"
				}, a.slug) : null)
			})]
		})
	] });
}
//#endregion
export { BriefingPage as component };
