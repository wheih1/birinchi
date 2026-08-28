import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { TimeSpine } from "@/components/news/TimeSpine";
import { formatClock, formatUzDate } from "@/lib/news";
import { useNow } from "@/components/layout/useNow";

export const Route = createFileRoute("/lenta")({ component: LentaPage });

function LentaPage() {
  const now = useNow(15_000);
  return (
    <AppShell>
      <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-muted">
        {formatUzDate(now)} · {formatClock(now)}
      </p>
      <h1 className="mt-2 font-display text-4xl font-medium sm:text-5xl">Kun lentasi</h1>
      <p className="mt-3 max-w-xl text-muted">
        Yangiliklar teskari tartibda yugurmaydi. Kun o‘z soati bilan ochiladi — bomdoddan yuk yo‘ligacha.
      </p>
      <div className="mt-10 max-w-2xl">
        <TimeSpine />
      </div>
    </AppShell>
  );
}
