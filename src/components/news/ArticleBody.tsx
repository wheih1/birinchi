import type { Article } from "@/lib/news";
import { cn } from "@/lib/utils";

export function ArticleBody({
  article,
  size,
}: {
  article: Article;
  size: "sm" | "md" | "lg";
}) {
  return (
    <div className={cn("font-display text-ink", `reader-${size}`)}>
      {article.body.map((block, i) => {
        if (block.type === "p") {
          return (
            <p key={i} className={cn("mb-5", i === 0 && "drop-cap")}>
              {block.text}
            </p>
          );
        }
        if (block.type === "h") {
          return (
            <h2 key={i} className="mb-4 mt-10 font-display text-2xl font-medium leading-snug">
              {block.text}
            </h2>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={i}
              className="my-8 border-l-2 border-ink pl-5 font-display text-[1.15em] leading-snug italic"
            >
              {block.text}
              {block.cite ? (
                <footer className="mt-3 font-sans text-sm not-italic text-muted">— {block.cite}</footer>
              ) : null}
            </blockquote>
          );
        }
        return (
          <aside key={i} className="my-8 rounded-lg bg-surface px-5 py-4">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
              {block.label}
            </p>
            <p className="mt-2 font-sans text-base leading-relaxed">{block.text}</p>
          </aside>
        );
      })}
    </div>
  );
}
