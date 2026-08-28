import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as useNow, _ as formatClock, r as AppShell, v as formatUzDate } from "./AppShell-CGbTTquo.mjs";
import { t as TimeSpine } from "./TimeSpine-DMau5Mm0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lenta-CaoBiHko.js
var import_jsx_runtime = require_jsx_runtime();
function LentaPage() {
	const now = useNow(15e3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-sans text-[11px] uppercase tracking-[0.18em] text-muted",
			children: [
				formatUzDate(now),
				" · ",
				formatClock(now)
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl font-medium sm:text-5xl",
			children: "Kun lentasi"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-xl text-muted",
			children: "Yangiliklar teskari tartibda yugurmaydi. Kun o‘z soati bilan ochiladi — bomdoddan yuk yo‘ligacha."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 max-w-2xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeSpine, {})
		})
	] });
}
//#endregion
export { LentaPage as component };
