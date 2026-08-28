import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Play, l as Pause, o as RotateCcw } from "../_libs/lucide-react.mjs";
import { h as cn, i as Button, y as formatUzShort } from "./AppShell-CGbTTquo.mjs";
import { o as useSahar } from "./router-DV_xUG-L.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BriefingPlayer-o7nfU0Fm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BRIEFING = [
	{
		id: "b1",
		title: "Ostonada nima o‘zgardi",
		text: "Yangi o‘quv yili yaqin. Forma, darslik va ertalabki yo‘l — oila savoli shu uch nuqtada. Toshkent, Andijon va Qarshi ostonasi bir xil savolni boshqa ohangda aytadi.",
		slug: "maktab-ostonasida",
		durationMs: 9e3
	},
	{
		id: "b2",
		title: "Quyosh bor, kechki tok savolda",
		text: "Cho‘ldagi panellar yozning ochiq osmonida ishlaydi. Haqiqiy sinov kechki ikki soatda: shahar konditsionerini yoqqanda maydon javob beradimi.",
		slug: "quyosh-dalasi",
		durationMs: 8e3
	},
	{
		id: "b3",
		title: "Suvning soati",
		text: "Sirdaryo tumanlarida suv yo‘q emas. U kech keladi. Fermer grafikni emas, nasos ovozini kutadi.",
		slug: "suv-taqsimoti",
		durationMs: 7e3
	},
	{
		id: "b4",
		title: "Soya — infratuzilma",
		text: "Toshkent tushida ochiq asfalt bo‘shaydi. Daraxt osti esa to‘ladi. Soya bezak emas, yo‘l.",
		slug: "issiq-shahar",
		durationMs: 7e3
	},
	{
		id: "b5",
		title: "Samarqand o‘ziga qaytadimi",
		text: "Mavsum oxiri. Mehmon kamayadi, vitrina qoladi. Kechki soat — shaharning eng halol portreti.",
		slug: "samarqand-kechasi",
		durationMs: 7e3
	},
	{
		id: "b6",
		title: "Maydon tinch, sentabr yaqin",
		text: "Terma yig‘ini shovqinsiz. Savol gol emas, 90 daqiqalik nafas. Birinchi 20 daqiqa shoshilmasa — yoz ish bergan.",
		slug: "terma-jamoasi",
		durationMs: 7e3
	},
	{
		id: "b7",
		title: "Raqam bor, izoh kerak",
		text: "Ochiq ma’lumot ko‘paydi. O‘quvchi jadvalni emas, bir paragraf izohni qidiradi. Shu izoh — arzon ishonch.",
		slug: "ochiq-malumot",
		durationMs: 8e3
	}
];
var BRIEFING_TOTAL_MS = BRIEFING.reduce((s, b) => s + b.durationMs, 0);
function beatAt(elapsed) {
	let acc = 0;
	for (let i = 0; i < BRIEFING.length; i += 1) {
		const next = acc + BRIEFING[i].durationMs;
		if (elapsed < next) return {
			index: i,
			local: elapsed - acc
		};
		acc = next;
	}
	return {
		index: BRIEFING.length - 1,
		local: BRIEFING[BRIEFING.length - 1].durationMs
	};
}
function BriefingPlayer({ compact = false }) {
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [elapsed, setElapsed] = (0, import_react.useState)(0);
	const raf = (0, import_react.useRef)(0);
	const last = (0, import_react.useRef)(0);
	const mark = useSahar((s) => s.markBriefing);
	const { index, local } = beatAt(elapsed);
	const beat = BRIEFING[index];
	const pct = Math.min(100, elapsed / BRIEFING_TOTAL_MS * 100);
	(0, import_react.useEffect)(() => {
		if (!playing) return;
		last.current = performance.now();
		const tick = (t) => {
			const dt = t - last.current;
			last.current = t;
			setElapsed((e) => {
				const next = e + dt;
				if (next >= BRIEFING_TOTAL_MS) {
					setPlaying(false);
					mark(formatUzShort(/* @__PURE__ */ new Date()));
					return BRIEFING_TOTAL_MS;
				}
				return next;
			});
			raf.current = requestAnimationFrame(tick);
		};
		raf.current = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf.current);
	}, [playing, mark]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("rounded-xl bg-ink px-5 py-5 text-paper sm:px-7 sm:py-6", compact && "py-4"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-paper/60",
					children: [
						"Bugungi brifing · ",
						Math.round(BRIEFING_TOTAL_MS / 1e3),
						" soniya"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						size: "sm",
						variant: "ghost",
						className: "text-paper hover:bg-paper/10",
						onClick: () => {
							setElapsed(0);
							setPlaying(false);
						},
						"aria-label": "Boshidan",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						size: "sm",
						className: "bg-paper text-ink hover:opacity-90",
						onClick: () => setPlaying((p) => !p),
						children: [playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "ml-0.5 size-4" }), playing ? "Pauza" : "O‘qib berish"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 h-px overflow-hidden bg-paper/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "progress-bar h-full bg-paper",
					style: { transform: `scaleX(${pct / 100})` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 font-display text-2xl font-medium leading-snug sm:text-3xl",
				children: beat.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-base leading-relaxed text-paper/80",
				children: beat.text
			}),
			beat.slug ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/maqola/$slug",
				params: { slug: beat.slug },
				className: "mt-4 inline-block font-sans text-sm underline decoration-paper/30 underline-offset-4 hover:decoration-paper",
				children: "To‘liq sahifa"
			}) : null,
			!compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 grid gap-2 sm:grid-cols-2",
				children: BRIEFING.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						const start = BRIEFING.slice(0, i).reduce((s, b) => s + b.durationMs, 0);
						setElapsed(start);
					},
					className: cn("w-full rounded-md px-3 py-2 text-left font-sans text-sm transition-colors duration-150", i === index ? "bg-paper/12 text-paper" : "text-paper/55 hover:text-paper"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums text-paper/40",
							children: [String(i + 1).padStart(2, "0"), " · "]
						}),
						item.title,
						i === index ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-2 text-xs text-paper/40",
							children: [Math.round(local / item.durationMs * 100), "%"]
						}) : null
					]
				}) }, item.id))
			}) : null
		]
	});
}
//#endregion
export { BriefingPlayer as n, BRIEFING as t };
