import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as AUTHORS, r as AppShell } from "./AppShell-CGbTTquo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tahririyat-df2D9vhA.js
var import_jsx_runtime = require_jsx_runtime();
function MastheadPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-sans text-[11px] uppercase tracking-[0.18em] text-muted",
			children: "Nima bu"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 max-w-3xl font-display text-4xl font-medium leading-tight sm:text-5xl",
			children: "Lenta emas. Sahifa."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 max-w-2xl space-y-5 font-display text-lg leading-relaxed",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "drop-cap",
					children: "Sahar — O‘zbekiston uchun ertalabki nashr. U yangilikni kartochka qilib tizmaydi. U kunni yig‘adi: bosh maqola, ustun, qisqa xabar, viloyat satri, ob-havo va namoz. Xuddi bosma gazeta kabi — lekin cho‘ntakda."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Boshqa saytlar «hozir» deb yuguradi. Biz soatni o‘lchaymiz. Maktab ostonasi, ariq navbati, kechki tok, metro sakkiz daqiqasi — shu narsalar kunning haqiqiy sarlavhasi." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Saqlangan sahifalar shu qurilmada qoladi. Qidiruv katalog odobida. Brifing — yetti nafasli teleprompter. Tun rejimi qog‘ozni siyohga aylantiradi." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/maqola/$slug",
				params: { slug: "tahririyat-odobi" },
				className: "underline underline-offset-4",
				children: "Tahririyat odobi"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "border-b border-ink pb-2 font-sans text-[11px] uppercase tracking-[0.2em]",
				children: "Mualliflar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 grid gap-6 sm:grid-cols-2",
				children: AUTHORS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl",
							children: a.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-sans text-sm text-muted",
							children: a.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed",
							children: a.bio
						})
					]
				}, a.id))
			})]
		})
	] });
}
//#endregion
export { MastheadPage as component };
