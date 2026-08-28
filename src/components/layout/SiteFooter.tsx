import { Link } from "@tanstack/react-router";
import { CATEGORIES, NAV } from "@/lib/news";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-ink px-4 py-10 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        <div>
          <p className="masthead-word text-3xl tracking-[0.28em]">SAHAR</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Tahririy kunlik nashr. Lenta emas — sahifa. Shovqin emas — ohang.
          </p>
        </div>
        <div>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted">Bo‘limlar</p>
          <ul className="mt-3 space-y-1">
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <Link to="/bolim/$id" params={{ id: c.id }} className="text-sm hover:underline">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-muted">Sahifa</p>
          <ul className="mt-3 space-y-1">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-sm hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl font-sans text-xs text-subtle">
        Sahar tahririyati · O‘qish uchun yozilgan nashr · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
