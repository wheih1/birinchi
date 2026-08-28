import { Link } from "@tanstack/react-router";
import { Menu, Search } from "lucide-react";
import { editionNumber, formatClock, formatUzDate, NAV } from "@/lib/news";
import { useNow } from "./useNow";
import { Button } from "@/components/ui/button";

export function Masthead({
  onMenu,
  onSearch,
}: {
  onMenu: () => void;
  onSearch: () => void;
}) {
  const now = useNow(30_000);
  return (
    <header className="px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between gap-3 font-sans text-xs text-muted sm:text-sm">
        <p className="min-w-0 truncate">{formatUzDate(now)}</p>
        <p className="shrink-0 tabular-nums">
          № {editionNumber(now)} · {formatClock(now)}
        </p>
      </div>
      <div className="double-rule mt-3" />
      <div className="flex items-center justify-between gap-2 py-3 sm:py-4">
        <Button type="button" variant="ghost" size="icon" className="lg:hidden" onClick={onMenu} aria-label="Menyu">
          <Menu className="size-5" />
        </Button>
        <Link to="/" className="block min-w-0 flex-1 text-center">
          <p className="masthead-word text-[clamp(2.4rem,8vw,5.4rem)] text-ink">SAHAR</p>
          <p className="mt-1 font-sans text-[11px] tracking-[0.22em] text-muted uppercase sm:text-xs">
            Kunning birinchi sahifasi
          </p>
        </Link>
        <Button type="button" variant="ghost" size="icon" onClick={onSearch} aria-label="Qidiruv">
          <Search className="size-5" />
        </Button>
      </div>
      <div className="double-rule" />
      <nav className="hidden gap-1 overflow-x-auto py-3 lg:flex" aria-label="Asosiy">
        {NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="rounded-sm px-3 py-2 font-sans text-sm text-ink hover:bg-surface [&.active]:underline [&.active]:underline-offset-4"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
