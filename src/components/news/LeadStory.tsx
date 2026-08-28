import { Link } from "@tanstack/react-router";
import { CATEGORY_MAP, KIND_LABEL, relativeUz, type Article } from "@/lib/news";
import { CoverFrame } from "./CoverFrame";
import { BookmarkButton } from "./BookmarkButton";

export function LeadStory({ article }: { article: Article }) {
  const cat = CATEGORY_MAP[article.category];
  return (
    <article className="grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:items-end">
      <Link to="/maqola/$slug" params={{ slug: article.slug }} className="block">
        <CoverFrame
          src={article.cover}
          alt={article.coverAlt ?? article.title}
          className="aspect-[16/10] rounded-xl sm:aspect-[16/9]"
          kicker={article.kicker}
        />
      </Link>
      <div className="flex flex-col gap-4">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          {article.kicker} · {cat.label}
        </p>
        <h2 className="font-display text-[2.15rem] font-medium leading-[1.12] tracking-[-0.03em] sm:text-5xl">
          <Link to="/maqola/$slug" params={{ slug: article.slug }} className="hover:underline decoration-ink/25 underline-offset-4">
            {article.title}
          </Link>
        </h2>
        <p className="max-w-prose text-base leading-relaxed text-muted sm:text-lg">{article.dek}</p>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-sans text-sm text-subtle">
            {KIND_LABEL[article.kind]} · {article.readMinutes} daqiqa · {relativeUz(article.publishedAt)}
          </span>
          <BookmarkButton slug={article.slug} title={article.title} />
        </div>
      </div>
    </article>
  );
}
