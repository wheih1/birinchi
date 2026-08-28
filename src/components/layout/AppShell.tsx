import { useEffect, useState, type ReactNode } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { X } from "lucide-react";
import { CATEGORIES, NAV } from "@/lib/news";
import { Masthead } from "./Masthead";
import { SiteFooter } from "./SiteFooter";
import { SearchDialog } from "@/components/news/SearchDialog";
import { Button } from "@/components/ui/button";

export function AppShell({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "/" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setSearch(true);
      }
      if (e.key === "s" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        navigate({ to: "/saqlangan" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#mazmun"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Mazmunga o‘tish
      </a>
      <Masthead onMenu={() => setMenu(true)} onSearch={() => setSearch(true)} />
      {menu ? (
        <div className="fixed inset-0 z-40 bg-ink/40 lg:hidden" onClick={() => setMenu(false)}>
          <aside
            className="h-full w-[min(100%,20rem)] bg-paper p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <p className="font-display text-2xl">Sahifa</p>
              <Button type="button" variant="ghost" size="icon" onClick={() => setMenu(false)} aria-label="Yopish">
                <X className="size-5" />
              </Button>
            </div>
            <nav className="mt-6 flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenu(false)}
                  className="rounded-md px-3 py-3 text-base hover:bg-surface"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <p className="mt-8 font-sans text-[11px] uppercase tracking-[0.16em] text-muted">Bo‘limlar</p>
            <nav className="mt-2 flex flex-col">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.id}
                  to="/bolim/$id"
                  params={{ id: c.id }}
                  onClick={() => setMenu(false)}
                  className="rounded-md px-3 py-3 hover:bg-surface"
                >
                  {c.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      ) : null}
      <SearchDialog open={search} onClose={() => setSearch(false)} />
      <main id="mazmun" className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
