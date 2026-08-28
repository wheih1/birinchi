import { useEffect } from "react";
import { useSahar } from "@/lib/news";

export function ReadingProgress({ slug }: { slug: string }) {
  const setProgress = useSahar((s) => s.setProgress);
  const setLastRead = useSahar((s) => s.setLastRead);
  const value = useSahar((s) => s.progress[slug] ?? 0);

  useEffect(() => {
    setLastRead(slug);
    const onScroll = () => {
      const el = document.getElementById("maqola-matn");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight * 0.4;
      const passed = window.scrollY - (el.offsetTop - 80);
      const next = total <= 0 ? 1 : Math.min(1, Math.max(0, passed / total));
      setProgress(slug, next);
      void rect;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug, setLastRead, setProgress]);

  return (
    <div className="fixed top-0 right-0 left-0 z-30 h-0.5 bg-rule">
      <div
        className="progress-bar h-full bg-ink"
        style={{ transform: `scaleX(${value})` }}
      />
    </div>
  );
}
