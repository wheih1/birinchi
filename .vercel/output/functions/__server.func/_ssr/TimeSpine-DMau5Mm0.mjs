import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as useNow, h as cn, x as minutesOfDay } from "./AppShell-CGbTTquo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TimeSpine-DMau5Mm0.js
var import_jsx_runtime = require_jsx_runtime();
var PULSE = [
	{
		id: "p1",
		minutes: 348,
		title: "Quyosh chiqishi, Toshkent",
		body: "Shahar ertalabgi issiqqa kiradi. Soya hali uzun, yo‘l hali yumshoq.",
		city: "Toshkent",
		category: "jamiyat",
		articleSlug: "toshkent-metro"
	},
	{
		id: "p2",
		minutes: 370,
		title: "Maktab ostonasi ochildi",
		body: "Yozgi ta’mir yakuniga yaqin. Ota-onalar forma va yo‘l haqida gaplashmoqda.",
		city: "Toshkent",
		category: "jamiyat",
		articleSlug: "maktab-ostonasida"
	},
	{
		id: "p3",
		minutes: 460,
		title: "Quyosh maydoni kunduzgi cho‘qqiga chiqdi",
		body: "Navoiy-Buxoro yo‘nalishidagi panellar yozgi sinovning eng ochiq soatida.",
		city: "Navoiy",
		category: "iqtisod",
		articleSlug: "quyosh-dalasi"
	},
	{
		id: "p4",
		minutes: 495,
		title: "Samarqand: mehmon oqimi sekinlashdi",
		body: "Mavsum oxiri. Maydon tinch, lekin vitrina hali yozgi tilda.",
		city: "Samarqand",
		category: "madaniyat",
		articleSlug: "samarqand-kechasi"
	},
	{
		id: "p5",
		minutes: 545,
		title: "Terma yig‘ini: chiziq mashg‘uloti",
		body: "Hujum emas, nafas. Sentabr oynasi oldidan ritm o‘lchanmoqda.",
		city: "Toshkent",
		category: "sport",
		articleSlug: "terma-jamoasi"
	},
	{
		id: "p6",
		minutes: 620,
		title: "Bozor ertalabi yakunlandi",
		body: "Pomidor arzonlashdi, ko‘kat esa ertalabgi narxda qoldi.",
		city: "Toshkent",
		category: "iqtisod",
		articleSlug: "bozor-narxi"
	},
	{
		id: "p7",
		minutes: 690,
		title: "Ochiq ma’lumot: yangi jadval",
		body: "Portalda fayl bor. Izoh hali qisqa. Tahririyat savoli ochiq.",
		city: "Toshkent",
		category: "siyosat",
		articleSlug: "ochiq-malumot"
	},
	{
		id: "p8",
		minutes: 752,
		title: "Peshin, issiq cho‘qqa",
		body: "Ko‘cha soyaga yig‘ildi. Ochiq asfalt bo‘sh.",
		city: "Toshkent",
		category: "fan",
		articleSlug: "issiq-shahar"
	},
	{
		id: "p9",
		minutes: 850,
		title: "Soya o‘lchovi",
		body: "Piyoda yo‘lakning bir tomoni yashaydi, ikkinchisi yonadi.",
		city: "Toshkent",
		category: "fan",
		articleSlug: "issiq-shahar"
	},
	{
		id: "p10",
		minutes: 1002,
		title: "Asr, dala oxirgi suvi",
		body: "Sirdaryo tumanlarida kechki sug‘orish navbati.",
		city: "Guliston",
		category: "viloyat",
		articleSlug: "suv-taqsimoti"
	},
	{
		id: "p11",
		minutes: 1144,
		title: "Shom, shahar qaytadi",
		body: "Havo yumshaydi. Hovli, choy, kechki o‘yin.",
		city: "Toshkent",
		category: "jamiyat",
		articleSlug: "mahalla-kechasi"
	},
	{
		id: "p12",
		minutes: 1260,
		title: "Yuk yo‘li ochildi",
		body: "TIR va vagon kechasi yuradi. Ertalabki narx shu yo‘lda pishadi.",
		city: "Toshkent",
		category: "iqtisod",
		articleSlug: "yuk-yoli"
	},
	{
		id: "p13",
		minutes: 1330,
		title: "Klub o‘yini yakunlandi",
		body: "Yorug‘lik o‘chdi, hisob qoldi. Jadval yozni unutmaydi.",
		city: "Toshkent",
		category: "sport",
		articleSlug: "klub-futboli"
	}
];
function latestPulse(now = /* @__PURE__ */ new Date()) {
	const nowM = minutesOfDay(now);
	const past = PULSE.filter((e) => e.minutes <= nowM);
	return past[past.length - 1] ?? PULSE[PULSE.length - 1];
}
function formatEventTime(minutes) {
	return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
}
function TimeSpine({ limit }) {
	const now = useNow(3e4);
	const nowM = minutesOfDay(now);
	const items = limit ? PULSE.slice(0, limit) : PULSE;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "relative",
		children: items.map((event, i) => {
			const past = event.minutes <= nowM;
			const current = past && (i === items.length - 1 || items[i + 1].minutes > nowM);
			const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[4.5rem_1fr] gap-3 py-3 sm:grid-cols-[5.5rem_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
					className: "font-sans text-sm tabular-nums text-muted",
					children: formatEventTime(event.minutes)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg font-medium leading-snug",
						children: event.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-relaxed text-muted",
						children: event.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-sans text-xs uppercase tracking-[0.12em] text-subtle",
						children: event.city
					})
				] })]
			});
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: cn("relative border-l border-rule pl-5 sm:pl-6", past ? "opacity-100" : "opacity-55"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute top-5 -left-[5px] size-2.5 rounded-full", current ? "bg-live" : past ? "bg-ink" : "bg-rule") }), event.articleSlug ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/maqola/$slug",
					params: { slug: event.articleSlug },
					className: "block hover:bg-surface/60",
					children: body
				}) : body]
			}, event.id);
		})
	});
}
//#endregion
export { formatEventTime as n, latestPulse as r, TimeSpine as t };
