import { Link } from "@tanstack/react-router";
import { CATEGORY_MAP, KIND_LABEL, relativeUz, type Article } from "@/lib/news";
import { CoverFrame } from "./CoverFrame";
import { cn } from "@/lib/utils";

export function StoryCard({
  article,
  variant = "standard",
}: {
  article: Article;
  variant?: "standard" | "compact" | "rule";
}) {
  const cat = CATEGORY_MAP[article.category];

  if (variant === "rule") {
    return (
      <Link
        to="/maqola/$slug"
        params={{ slug: article.slug }}
        className="group grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 border-t border-rule py-4"
      >
        <span className="col-span-2 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          {article.kicker} · {cat.label}
        </span>
        <h3 className="col-span-2 font-display text-xl font-medium leading-snug group-hover:underline decoration-ink/30 underline-offset-4">
          {article.title}
        </h3>
        <p className="col-span-2 text-sm leading-relaxed text-muted">{article.dek}</p>
        <span className="font-sans text-xs text-subtle">
          {article.readMinutes} daq · {relativeUz(article.publishedAt)}
        </span>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link to="/maqola/$slug" params={{ slug: article.slug }} className="group block py-3">
        <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-muted">{cat.label}</p>
        <h3 className="mt-1 font-display text-lg font-medium leading-snug group-hover:underline decoration-ink/30 underline-offset-3">
          {article.title}
        </h3>
        <p className="mt-1 font-sans text-xs text-subtle">
          {KIND_LABEL[article.kind]} · {article.readMinutes} daq
        </p>
      </Link>
    );
  }

  return (
    <Link
      to="/maqola/$slug"
      params={{ slug: article.slug }}
      className={cn("group flex flex-col gap-3")}
    >
      {article.cover ? (
        <CoverFrame
          src={article.cover}
          alt={article.coverAlt ?? article.title}
          className="aspect-[16/10] rounded-lg"
          kicker={article.kicker}
        />
      ) : null}
      <div>
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          {article.kicker}
        </p>
        <h3 className="mt-1 font-display text-2xl font-medium leading-snug group-hover:underline decoration-ink/30 underline-offset-4">
          {article.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{article.dek}</p>
      </div>
    </Link>
  );
}
