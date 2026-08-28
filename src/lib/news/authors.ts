import type { Author } from "./types";

export const AUTHORS: Author[] = [
  {
    id: "nilufar",
    name: "Nilufar Karimova",
    role: "Siyosat muharriri",
    bio: "Qonun matnlari va ochiq ma’lumotlar ustida ishlaydi. Toshkent.",
  },
  {
    id: "javlon",
    name: "Javlon Rahimov",
    role: "Iqtisod muxbiri",
    bio: "Energiya, transport va kichik biznes raqamlarini kuzatadi.",
  },
  {
    id: "madina",
    name: "Madina Yusupova",
    role: "Madaniyat ustuni",
    bio: "Teatr, nashr va shahar me’morchiligi haqida yozadi.",
  },
  {
    id: "bekzod",
    name: "Bekzod Tursunov",
    role: "Sport sahifasi",
    bio: "Maydon tahlili — shovqinsiz, raqam va ritm bilan.",
  },
  {
    id: "azizbek",
    name: "Azizbek Nazarov",
    role: "Jahon desk",
    bio: "Mintaqaviy diplomatik oqimlarni Toshkent nuqtai nazaridan beradi.",
  },
  {
    id: "sevara",
    name: "Sevara Alimova",
    role: "Fan va iqlim",
    bio: "Suv, issiqlik va universitet laboratoriyalari.",
  },
  {
    id: "kamola",
    name: "Kamola Ergasheva",
    role: "Jamiyat muxbiri",
    bio: "Maktab, mahalla va shahar odati — sekin reportaj.",
  },
  {
    id: "shohruh",
    name: "Shohruh Qodirov",
    role: "Viloyatlar",
    bio: "Farg‘ona vodiysidan Qoraqalpog‘istongacha yo‘l yozuvlari.",
  },
];

export const AUTHOR_MAP: Record<string, Author> = Object.fromEntries(
  AUTHORS.map((a) => [a.id, a]),
);

export function authorById(id: string): Author {
  return AUTHOR_MAP[id] ?? AUTHORS[0];
}
