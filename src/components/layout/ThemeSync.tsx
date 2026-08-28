import { useEffect } from "react";
import { useSahar } from "@/lib/news";

export function ThemeSync() {
  const theme = useSahar((s) => s.theme);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  return null;
}
