import type { BriefingBeat } from "./types";

export const BRIEFING: BriefingBeat[] = [
  {
    id: "b1",
    title: "Ostonada nima o‘zgardi",
    text: "Yangi o‘quv yili yaqin. Forma, darslik va ertalabki yo‘l — oila savoli shu uch nuqtada. Toshkent, Andijon va Qarshi ostonasi bir xil savolni boshqa ohangda aytadi.",
    slug: "maktab-ostonasida",
    durationMs: 9000,
  },
  {
    id: "b2",
    title: "Quyosh bor, kechki tok savolda",
    text: "Cho‘ldagi panellar yozning ochiq osmonida ishlaydi. Haqiqiy sinov kechki ikki soatda: shahar konditsionerini yoqqanda maydon javob beradimi.",
    slug: "quyosh-dalasi",
    durationMs: 8000,
  },
  {
    id: "b3",
    title: "Suvning soati",
    text: "Sirdaryo tumanlarida suv yo‘q emas. U kech keladi. Fermer grafikni emas, nasos ovozini kutadi.",
    slug: "suv-taqsimoti",
    durationMs: 7000,
  },
  {
    id: "b4",
    title: "Soya — infratuzilma",
    text: "Toshkent tushida ochiq asfalt bo‘shaydi. Daraxt osti esa to‘ladi. Soya bezak emas, yo‘l.",
    slug: "issiq-shahar",
    durationMs: 7000,
  },
  {
    id: "b5",
    title: "Samarqand o‘ziga qaytadimi",
    text: "Mavsum oxiri. Mehmon kamayadi, vitrina qoladi. Kechki soat — shaharning eng halol portreti.",
    slug: "samarqand-kechasi",
    durationMs: 7000,
  },
  {
    id: "b6",
    title: "Maydon tinch, sentabr yaqin",
    text: "Terma yig‘ini shovqinsiz. Savol gol emas, 90 daqiqalik nafas. Birinchi 20 daqiqa shoshilmasa — yoz ish bergan.",
    slug: "terma-jamoasi",
    durationMs: 7000,
  },
  {
    id: "b7",
    title: "Raqam bor, izoh kerak",
    text: "Ochiq ma’lumot ko‘paydi. O‘quvchi jadvalni emas, bir paragraf izohni qidiradi. Shu izoh — arzon ishonch.",
    slug: "ochiq-malumot",
    durationMs: 8000,
  },
];

export const BRIEFING_TOTAL_MS = BRIEFING.reduce((s, b) => s + b.durationMs, 0);

export function beatAt(elapsed: number): { index: number; local: number } {
  let acc = 0;
  for (let i = 0; i < BRIEFING.length; i += 1) {
    const next = acc + BRIEFING[i].durationMs;
    if (elapsed < next) return { index: i, local: elapsed - acc };
    acc = next;
  }
  return { index: BRIEFING.length - 1, local: BRIEFING[BRIEFING.length - 1].durationMs };
}
