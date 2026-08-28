import { Minus, Moon, Plus, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSahar, type FontSize } from "@/lib/news";

const SIZES: FontSize[] = ["sm", "md", "lg"];

export function ReaderChrome() {
  const fontSize = useSahar((s) => s.fontSize);
  const setFontSize = useSahar((s) => s.setFontSize);
  const theme = useSahar((s) => s.theme);
  const setTheme = useSahar((s) => s.setTheme);
  const i = SIZES.indexOf(fontSize);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="size-11"
        aria-label="Kichikroq harf"
        onClick={() => setFontSize(SIZES[Math.max(0, i - 1)])}
      >
        <Minus className="size-4" />
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="size-11"
        aria-label="Kattaroq harf"
        onClick={() => setFontSize(SIZES[Math.min(SIZES.length - 1, i + 1)])}
      >
        <Plus className="size-4" />
      </Button>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => setTheme(theme === "paper" ? "night" : "paper")}
        aria-label={theme === "paper" ? "Tun rejimi" : "Qog‘oz rejimi"}
      >
        {theme === "paper" ? <Moon className="size-4" /> : <Sun className="size-4" />}
        {theme === "paper" ? "Tun" : "Qog‘oz"}
      </Button>
    </div>
  );
}
