import { T as tashkentParts, b as hmFromMinutes, x as minutesOfDay } from "./AppShell-CGbTTquo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prayer-BZYYdm-7.js
function curve(base, amp, hour, peak = 15) {
	const t = (hour - peak) / 7.4;
	return Math.round(base + amp * Math.exp(-t * t) * 1.15 - amp * .35);
}
function hours(base, amp) {
	return Array.from({ length: 24 }, (_, h) => curve(base, amp, h));
}
var CITIES = [
	{
		id: "toshkent",
		name: "Toshkent",
		high: 36,
		low: 22,
		now: 34,
		sky: "issiq",
		wind: 12,
		humidity: 28,
		hours: hours(28, 9)
	},
	{
		id: "samarqand",
		name: "Samarqand",
		high: 34,
		low: 19,
		now: 32,
		sky: "ochiq",
		wind: 10,
		humidity: 26,
		hours: hours(26, 9)
	},
	{
		id: "buxoro",
		name: "Buxoro",
		high: 38,
		low: 22,
		now: 36,
		sky: "issiq",
		wind: 14,
		humidity: 18,
		hours: hours(29, 10)
	},
	{
		id: "nukus",
		name: "Nukus",
		high: 37,
		low: 21,
		now: 35,
		sky: "chang",
		wind: 22,
		humidity: 22,
		hours: hours(28, 10)
	},
	{
		id: "andijon",
		name: "Andijon",
		high: 33,
		low: 20,
		now: 31,
		sky: "ochiq",
		wind: 8,
		humidity: 36,
		hours: hours(26, 8)
	},
	{
		id: "namangan",
		name: "Namangan",
		high: 32,
		low: 19,
		now: 30,
		sky: "ochiq",
		wind: 7,
		humidity: 38,
		hours: hours(25, 8)
	},
	{
		id: "fargona",
		name: "Farg‘ona",
		high: 33,
		low: 20,
		now: 31,
		sky: "ochiq",
		wind: 8,
		humidity: 34,
		hours: hours(26, 8)
	},
	{
		id: "qarshi",
		name: "Qarshi",
		high: 39,
		low: 23,
		now: 37,
		sky: "issiq",
		wind: 16,
		humidity: 16,
		hours: hours(30, 10)
	},
	{
		id: "termiz",
		name: "Termiz",
		high: 41,
		low: 25,
		now: 39,
		sky: "issiq",
		wind: 11,
		humidity: 20,
		hours: hours(32, 10)
	},
	{
		id: "navoiy",
		name: "Navoiy",
		high: 38,
		low: 21,
		now: 36,
		sky: "chang",
		wind: 18,
		humidity: 17,
		hours: hours(29, 10)
	},
	{
		id: "urganch",
		name: "Urganch",
		high: 36,
		low: 21,
		now: 34,
		sky: "issiq",
		wind: 15,
		humidity: 24,
		hours: hours(28, 9)
	},
	{
		id: "nurafshon",
		name: "Nurafshon",
		high: 35,
		low: 21,
		now: 33,
		sky: "ochiq",
		wind: 11,
		humidity: 30,
		hours: hours(27, 9)
	}
];
var SKY_LABEL = {
	ochiq: "Ochiq osmon",
	bulut: "Bulutli",
	chang: "Changli shamol",
	"yomg'ir": "Yengil yomg‘ir",
	issiq: "Issiq, quruq"
};
function currentTemp(city, date = /* @__PURE__ */ new Date()) {
	return city.hours[tashkentParts(date).hour] ?? city.now;
}
function cityById(id) {
	return CITIES.find((c) => c.id === id) ?? CITIES[0];
}
function weatherAdvice(city) {
	if (city.high >= 38) return "Tushda soyada qoling. Suvni ko‘proq oling, ochiq maydonda ishni ertalabga suring.";
	if (city.sky === "chang") return "Shamol chang ko‘taradi. Deraza va nafas yo‘lini yoping, ko‘zoynak foydali.";
	if (city.high >= 34) return "Yozning oxirgi issiq kuni. Ertalabki soatlar yurish va bozor uchun qulay.";
	return "Havo yurish uchun yumshoq. Kechqurun salqinlashadi.";
}
var NAMES = [
	{
		id: "bomdod",
		label: "Bomdod"
	},
	{
		id: "quyosh",
		label: "Quyosh"
	},
	{
		id: "peshin",
		label: "Peshin"
	},
	{
		id: "asr",
		label: "Asr"
	},
	{
		id: "shom",
		label: "Shom"
	},
	{
		id: "xufton",
		label: "Xufton"
	}
];
var PRAYER_LABELS = NAMES;
var OFFSETS = {
	toshkent: 0,
	samarqand: 8,
	buxoro: 14,
	nukus: 22,
	andijon: -12,
	namangan: -10,
	fargona: -8,
	qarshi: 10,
	termiz: 12,
	navoiy: 12,
	urganch: 20,
	nurafshon: 2
};
function augustBase(day) {
	const shift = Math.round((day - 15) * .7);
	const m = (h, min) => hmFromMinutes(h * 60 + min + shift);
	return {
		bomdod: m(4, 28),
		quyosh: m(5, 48),
		peshin: m(12, 32),
		asr: m(16, 42),
		shom: m(19, 4),
		xufton: m(20, 28)
	};
}
function applyOffset(day, minutes) {
	const next = { ...day };
	Object.keys(next).forEach((key) => {
		const [h, m] = next[key].split(":").map(Number);
		next[key] = hmFromMinutes(h * 60 + m + minutes);
	});
	return next;
}
function prayerFor(cityId, date = /* @__PURE__ */ new Date()) {
	return applyOffset(augustBase(date.getDate()), OFFSETS[cityId] ?? 0);
}
function nextPrayer(day, now = /* @__PURE__ */ new Date()) {
	const nowM = minutesOfDay(now);
	for (const item of NAMES) {
		const [h, m] = day[item.id].split(":").map(Number);
		if (h * 60 + m > nowM + 1) return {
			...item,
			at: day[item.id]
		};
	}
	return {
		...NAMES[0],
		at: day.bomdod
	};
}
//#endregion
export { currentTemp as a, weatherAdvice as c, cityById as i, PRAYER_LABELS as n, nextPrayer as o, SKY_LABEL as r, prayerFor as s, CITIES as t };
