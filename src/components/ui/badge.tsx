import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "ink",
  children,
}: {
  className?: string;
  tone?: "ink" | "live" | "mute";
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2 py-0.5 font-sans text-[11px] font-medium uppercase tracking-[0.14em]",
        tone === "ink" && "bg-ink text-paper",
        tone === "live" && "bg-live text-paper",
        tone === "mute" && "bg-surface text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
