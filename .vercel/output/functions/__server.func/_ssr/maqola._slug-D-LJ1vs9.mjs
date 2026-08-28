import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Minus, i as Sun, s as Plus, u as Moon } from "../_libs/lucide-react.mjs";
import { S as relatedArticles, c as KIND_LABEL, h as cn, i as Button, o as CATEGORY_MAP, p as authorById, r as AppShell, u as articleBySlug, v as formatUzDate } from "./AppShell-CGbTTquo.mjs";
import { n as Route, o as useSahar } from "./router-DV_xUG-L.mjs";
import { n as StoryCard, t as CoverFrame } from "./StoryCard-BSkkTfx-.mjs";
import { t as BookmarkButton } from "./BookmarkButton-DDcqElmX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/maqola._slug-D-LJ1vs9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ArticleBody({ article, size }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("font-display text-ink", `reader-${size}`),
		children: article.body.map((block, i) => {
			if (block.type === "p") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mb-5", i === 0 && "drop-cap"),
				children: block.text
			}, i);
			if (block.type === "h") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 mt-10 font-display text-2xl font-medium leading-snug",
				children: block.text
			}, i);
			if (block.type === "quote") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "my-8 border-l-2 border-ink pl-5 font-display text-[1.15em] leading-snug italic",
				children: [block.text, block.cite ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "mt-3 font-sans text-sm not-italic text-muted",
					children: ["— ", block.cite]
				}) : null]
			}, i);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "my-8 rounded-lg bg-surface px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted",
					children: block.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-sans text-base leading-relaxed",
					children: block.text
				})]
			}, i);
		})
	});
}
var SIZES = [
	"sm",
	"md",
	"lg"
];
function ReaderChrome() {
	const fontSize = useSahar((s) => s.fontSize);
	const setFontSize = useSahar((s) => s.setFontSize);
	const theme = useSahar((s) => s.theme);
	const setTheme = useSahar((s) => s.setTheme);
	const i = SIZES.indexOf(fontSize);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "outline",
				size: "icon",
				className: "size-11",
				"aria-label": "Kichikroq harf",
				onClick: () => setFontSize(SIZES[Math.max(0, i - 1)]),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "outline",
				size: "icon",
				className: "size-11",
				"aria-label": "Kattaroq harf",
				onClick: () => setFontSize(SIZES[Math.min(SIZES.length - 1, i + 1)]),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				onClick: () => setTheme(theme === "paper" ? "night" : "paper"),
				"aria-label": theme === "paper" ? "Tun rejimi" : "Qog‘oz rejimi",
				children: [theme === "paper" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }), theme === "paper" ? "Tun" : "Qog‘oz"]
			})
		]
	});
}
function ReadingProgress({ slug }) {
	const setProgress = useSahar((s) => s.setProgress);
	const setLastRead = useSahar((s) => s.setLastRead);
	const value = useSahar((s) => s.progress[slug] ?? 0);
	(0, import_react.useEffect)(() => {
		setLastRead(slug);
		const onScroll = () => {
			const el = document.getElementById("maqola-matn");
			if (!el) return;
			el.getBoundingClientRect();
			const total = el.offsetHeight - window.innerHeight * .4;
			const passed = window.scrollY - (el.offsetTop - 80);
			const next = total <= 0 ? 1 : Math.min(1, Math.max(0, passed / total));
			setProgress(slug, next);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [
		slug,
		setLastRead,
		setProgress
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed top-0 right-0 left-0 z-30 h-0.5 bg-rule",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "progress-bar h-full bg-ink",
			style: { transform: `scaleX(${value})` }
		})
	});
}
function ArticlePage() {
	const { slug } = Route.useParams();
	const article = articleBySlug(slug);
	const fontSize = useSahar((s) => s.fontSize);
	if (!article) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "Sahifa topilmadi"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-muted",
			children: "Bu maqola nashrdan chiqarilgan yoki manzil xato."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "mt-6 inline-block underline underline-offset-4",
			children: "Bugungi sahifaga"
		})
	] });
	const author = authorById(article.authorId);
	const cat = CATEGORY_MAP[article.category];
	const related = relatedArticles(article);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingProgress, { slug: article.slug }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/bolim/$id",
						params: { id: article.category },
						className: "hover:underline",
						children: cat.label
					}),
					" · ",
					article.kicker
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl font-display text-4xl font-medium leading-[1.12] tracking-[-0.03em] sm:text-5xl",
				children: article.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-lg leading-relaxed text-muted",
				children: article.dek
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-rule py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: author.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-sans text-sm text-muted",
						children: [
							author.role,
							" · ",
							KIND_LABEL[article.kind],
							" · ",
							article.readMinutes,
							" daqiqa"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs text-subtle",
						children: formatUzDate(new Date(article.publishedAt), false)
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReaderChrome, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkButton, {
						slug: article.slug,
						title: article.title
					})]
				})]
			}),
			article.cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverFrame, {
				src: article.cover,
				alt: article.coverAlt ?? article.title,
				className: "mt-8 aspect-[16/9] rounded-xl"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "maqola-matn",
				className: "mx-auto mt-10 max-w-[42rem]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleBody, {
						article,
						size: fontSize
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 flex flex-wrap gap-2",
						children: article.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/qidiruv",
							search: { q: tag },
							className: "rounded-sm bg-surface px-3 py-1.5 font-sans text-sm text-muted hover:text-ink",
							children: tag
						}) }, tag))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 border-t border-rule pt-6 text-sm leading-relaxed text-muted",
						children: author.bio
					})
				]
			})
		] }),
		related.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "border-b border-ink pb-2 font-sans text-[11px] uppercase tracking-[0.2em]",
				children: "Yonidagi sahifalar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2",
				children: related.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, {
					article: a,
					variant: "rule"
				}, a.slug))
			})]
		}) : null
	] });
}
//#endregion
export { ArticlePage as component };
