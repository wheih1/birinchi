import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as articlesByRegion, h as cn } from "./AppShell-CGbTTquo.mjs";
import { o as useSahar } from "./router-DV_xUG-L.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/RegionMosaic-DmaaXSiv.js
var import_jsx_runtime = require_jsx_runtime();
var REGIONS = [
	{
		id: "toshkent-sh",
		name: "Toshkent shahri",
		center: "Toshkent",
		note: "Poytaxt ritmi, metro, ish va maktab."
	},
	{
		id: "toshkent",
		name: "Toshkent viloyati",
		center: "Nurafshon",
		note: "Sanoat halqasi va bog‘lar."
	},
	{
		id: "samarqand",
		name: "Samarqand",
		center: "Samarqand",
		note: "Mehmon, me’mor va temir yo‘l."
	},
	{
		id: "buxoro",
		name: "Buxoro",
		center: "Buxoro",
		note: "Gumbaz soyasi, hunarmandlik."
	},
	{
		id: "xorazm",
		name: "Xorazm",
		center: "Urganch",
		note: "Ichan-qal’a va paxta yo‘li."
	},
	{
		id: "navoiy",
		name: "Navoiy",
		center: "Navoiy",
		note: "Kon, cho‘l va kimyo."
	},
	{
		id: "qashqadaryo",
		name: "Qashqadaryo",
		center: "Qarshi",
		note: "Neft, g‘alla, issiq yoz."
	},
	{
		id: "surxondaryo",
		name: "Surxondaryo",
		center: "Termiz",
		note: "Janub darvozasi, Amudaryo."
	},
	{
		id: "jizzax",
		name: "Jizzax",
		center: "Jizzax",
		note: "Mirzacho‘l va yangi bog‘lar."
	},
	{
		id: "sirdaryo",
		name: "Sirdaryo",
		center: "Guliston",
		note: "Suv va ekin taqsimoti."
	},
	{
		id: "fargona",
		name: "Farg‘ona",
		center: "Farg‘ona",
		note: "Vodiy, bozor, ipak."
	},
	{
		id: "andijon",
		name: "Andijon",
		center: "Andijon",
		note: "Zich hayot, avtomobil, bog‘."
	},
	{
		id: "namangan",
		name: "Namangan",
		center: "Namangan",
		note: "Gul, to‘qimachilik, soy."
	},
	{
		id: "qoraqalpoq",
		name: "Qoraqalpog‘iston",
		center: "Nukus",
		note: "Orol, muzey, keng dasht."
	}
];
function regionById(id) {
	return REGIONS.find((r) => r.id === id);
}
function RegionMosaic() {
	const followed = useSahar((s) => s.followed);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-px bg-rule sm:grid-cols-3 lg:grid-cols-4",
		children: REGIONS.map((region) => {
			const count = articlesByRegion(region.id).length;
			const on = followed.includes(region.id);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/viloyatlar",
				search: { r: region.id },
				className: cn("flex min-h-28 flex-col justify-between bg-paper p-4 transition-colors duration-150 hover:bg-surface", on && "bg-surface"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-xl font-medium leading-snug",
					children: region.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-sans text-xs text-muted",
					children: [region.center, count ? ` · ${count} sahifa` : ""]
				})]
			}, region.id);
		})
	});
}
//#endregion
export { RegionMosaic as n, regionById as r, REGIONS as t };
