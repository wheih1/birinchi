import type { Category, CategoryId } from "./types";

export const CATEGORIES: Category[] = [
  {
    id: "siyosat",
    label: "Siyosat",
    kicker: "Davlat va qaror",
    blurb: "Qonun, boshqaruv va ochiq savollar — shovqinsiz, lekin aniq.",
  },
  {
    id: "iqtisod",
    label: "Iqtisod",
    kicker: "Narx, mehnat, yo‘l",
    blurb: "Bozor, ish haqi, energiya va pulning kunlik tili.",
  },
  {
    id: "madaniyat",
    label: "Madaniyat",
    kicker: "Sahna va xotira",
    blurb: "Kitob, kino, me’morchilik va shahar ovozi.",
  },
  {
    id: "sport",
    label: "Sport",
    kicker: "Maydon xabari",
    blurb: "Milliy terma, klublar va jismoniy tarbiyaning tinch tomoni.",
  },
  {
    id: "jahon",
    label: "Jahon",
    kicker: "Tashqi ufq",
    blurb: "Mintaqa va dunyo — Toshkentdan qarab, shoshilmasdan.",
  },
  {
    id: "fan",
    label: "Fan",
    kicker: "Bilim izi",
    blurb: "Universitet, iqlim, tibbiyot va texnikaning sekin yangiligi.",
  },
  {
    id: "jamiyat",
    label: "Jamiyat",
    kicker: "Odatiy hayot",
    blurb: "Maktab, mahalla, yo‘l va odamlarning kun tartibi.",
  },
  {
    id: "viloyat",
    label: "Viloyat",
    kicker: "Chekka sahifa",
    blurb: "Poytaxtdan tashqaridagi voqea — har bir viloyatning o‘z ritmi.",
  },
];

export const CATEGORY_MAP: Record<CategoryId, Category> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c]),
) as Record<CategoryId, Category>;

export function categoryById(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}
