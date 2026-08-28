import { Bookmark, BookmarkCheck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useSahar } from "@/lib/news";
import { cn } from "@/lib/utils";

export function BookmarkButton({
  slug,
  title,
  className,
}: {
  slug: string;
  title?: string;
  className?: string;
}) {
  const bookmarked = useSahar((s) => s.bookmarks.includes(slug));
  const toggle = useSahar((s) => s.toggleBookmark);

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className={cn("min-w-11", className)}
      aria-pressed={bookmarked}
      aria-label={bookmarked ? "Saqlanganlardan olib tashlash" : "Saqlash"}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(slug);
        toast(bookmarked ? "Olib tashlandi" : "Sahifaga qo‘yildi", {
          description: title,
        });
      }}
    >
      {bookmarked ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}
      <span className="hidden sm:inline">{bookmarked ? "Saqlangan" : "Saqlash"}</span>
    </Button>
  );
}
