import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { ArticleBody } from "@/components/news/ArticleBody";
import { BookmarkButton } from "@/components/news/BookmarkButton";
import { CoverFrame } from "@/components/news/CoverFrame";
import { ReaderChrome } from "@/components/news/ReaderChrome";
import { ReadingProgress } from "@/components/news/ReadingProgress";
import { StoryCard } from "@/components/news/StoryCard";
import {
  articleBySlug,
  authorById,
  CATEGORY_MAP,
  formatUzDate,
  KIND_LABEL,
  relatedArticles,
  useSahar,
} from "@/lib/news";

export const Route = createFileRoute("/maqola/$slug")({
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useParams();
  const article = articleBySlug(slug);
  const fontSize = useSahar((s) => s.fontSize);

  if (!article) {
    return (
      <AppShell>
        <h1 className="font-display text-4xl">Sahifa topilmadi</h1>
        <p className="mt-3 text-muted">Bu maqola nashrdan chiqarilgan yoki manzil xato.</p>
        <Link to="/" className="mt-6 inline-block underline underline-offset-4">
          Bugungi sahifaga
        </Link>
      </AppShell>
    );
  }

  const author = authorById(article.authorId);
  const cat = CATEGORY_MAP[article.category];
  const related = relatedArticles(article);

  return (
    <AppShell>
      <ReadingProgress slug={article.slug} />
      <article>
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          <Link to="/bolim/$id" params={{ id: article.category }} className="hover:underline">
            {cat.label}
          </Link>
          {" · "}
          {article.kicker}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium leading-[1.12] tracking-[-0.03em] sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{article.dek}</p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-rule py-4">
          <div>
            <p className="font-medium">{author.name}</p>
            <p className="font-sans text-sm text-muted">
              {author.role} · {KIND_LABEL[article.kind]} · {article.readMinutes} daqiqa
            </p>
            <p className="font-sans text-xs text-subtle">
              {formatUzDate(new Date(article.publishedAt), false)}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <ReaderChrome />
            <BookmarkButton slug={article.slug} title={article.title} />
          </div>
        </div>
        {article.cover ? (
          <CoverFrame
            src={article.cover}
            alt={article.coverAlt ?? article.title}
            className="mt-8 aspect-[16/9] rounded-xl"
          />
        ) : null}
        <div id="maqola-matn" className="mx-auto mt-10 max-w-[42rem]">
          <ArticleBody article={article} size={fontSize} />
          <ul className="mt-10 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <li key={tag}>
                <Link
                  to="/qidiruv"
                  search={{ q: tag }}
                  className="rounded-sm bg-surface px-3 py-1.5 font-sans text-sm text-muted hover:text-ink"
                >
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-rule pt-6 text-sm leading-relaxed text-muted">{author.bio}</p>
        </div>
      </article>
      {related.length ? (
        <section className="mt-16">
          <h2 className="border-b border-ink pb-2 font-sans text-[11px] uppercase tracking-[0.2em]">
            Yonidagi sahifalar
          </h2>
          <div className="mt-2">
            {related.map((a) => (
              <StoryCard key={a.slug} article={a} variant="rule" />
            ))}
          </div>
        </section>
      ) : null}
    </AppShell>
  );
}
