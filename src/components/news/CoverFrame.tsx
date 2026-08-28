import { cn } from "@/lib/utils";

export function CoverFrame({
  src,
  alt,
  className,
  kicker,
}: {
  src?: string;
  alt: string;
  className?: string;
  kicker?: string;
}) {
  return (
    <figure className={cn("relative overflow-hidden bg-surface", className)}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="size-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
        />
      ) : (
        <div className="flex size-full items-end bg-surface p-4">
          <span className="font-display text-5xl text-ink/15">{kicker?.[0] ?? "S"}</span>
        </div>
      )}
    </figure>
  );
}
