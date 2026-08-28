import { create } from "zustand";
import { persist } from "zustand/middleware";

export type FontSize = "sm" | "md" | "lg";
export type ThemeName = "paper" | "night";

type SaharState = {
  theme: ThemeName;
  fontSize: FontSize;
  bookmarks: string[];
  progress: Record<string, number>;
  lastReadSlug: string | null;
  briefingDoneOn: string | null;
  cityId: string;
  followed: string[];
  setTheme: (theme: ThemeName) => void;
  setFontSize: (size: FontSize) => void;
  toggleBookmark: (slug: string) => void;
  isBookmarked: (slug: string) => boolean;
  setProgress: (slug: string, value: number) => void;
  setLastRead: (slug: string) => void;
  markBriefing: (day: string) => void;
  setCity: (id: string) => void;
  toggleFollow: (regionId: string) => void;
};

export const useSahar = create<SaharState>()(
  persist(
    (set, get) => ({
      theme: "paper",
      fontSize: "md",
      bookmarks: [],
      progress: {},
      lastReadSlug: null,
      briefingDoneOn: null,
      cityId: "toshkent",
      followed: [],
      setTheme: (theme) => set({ theme }),
      setFontSize: (fontSize) => set({ fontSize }),
      toggleBookmark: (slug) =>
        set((s) => ({
          bookmarks: s.bookmarks.includes(slug)
            ? s.bookmarks.filter((x) => x !== slug)
            : [slug, ...s.bookmarks],
        })),
      isBookmarked: (slug) => get().bookmarks.includes(slug),
      setProgress: (slug, value) =>
        set((s) => ({ progress: { ...s.progress, [slug]: Math.min(1, Math.max(0, value)) } })),
      setLastRead: (slug) => set({ lastReadSlug: slug }),
      markBriefing: (day) => set({ briefingDoneOn: day }),
      setCity: (cityId) => set({ cityId }),
      toggleFollow: (regionId) =>
        set((s) => ({
          followed: s.followed.includes(regionId)
            ? s.followed.filter((x) => x !== regionId)
            : [...s.followed, regionId],
        })),
    }),
    { name: "sahar-edition" },
  ),
);
