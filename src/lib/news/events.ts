import { minutesOfDay } from "./dates";
import type { PulseEvent } from "./types";

export const PULSE: PulseEvent[] = [
  {
    id: "p1",
    minutes: 5 * 60 + 48,
    title: "Quyosh chiqishi, Toshkent",
    body: "Shahar ertalabgi issiqqa kiradi. Soya hali uzun, yo‘l hali yumshoq.",
    city: "Toshkent",
    category: "jamiyat",
    articleSlug: "toshkent-metro",
  },
  {
    id: "p2",
    minutes: 6 * 60 + 10,
    title: "Maktab ostonasi ochildi",
    body: "Yozgi ta’mir yakuniga yaqin. Ota-onalar forma va yo‘l haqida gaplashmoqda.",
    city: "Toshkent",
    category: "jamiyat",
    articleSlug: "maktab-ostonasida",
  },
  {
    id: "p3",
    minutes: 7 * 60 + 40,
    title: "Quyosh maydoni kunduzgi cho‘qqiga chiqdi",
    body: "Navoiy-Buxoro yo‘nalishidagi panellar yozgi sinovning eng ochiq soatida.",
    city: "Navoiy",
    category: "iqtisod",
    articleSlug: "quyosh-dalasi",
  },
  {
    id: "p4",
    minutes: 8 * 60 + 15,
    title: "Samarqand: mehmon oqimi sekinlashdi",
    body: "Mavsum oxiri. Maydon tinch, lekin vitrina hali yozgi tilda.",
    city: "Samarqand",
    category: "madaniyat",
    articleSlug: "samarqand-kechasi",
  },
  {
    id: "p5",
    minutes: 9 * 60 + 5,
    title: "Terma yig‘ini: chiziq mashg‘uloti",
    body: "Hujum emas, nafas. Sentabr oynasi oldidan ritm o‘lchanmoqda.",
    city: "Toshkent",
    category: "sport",
    articleSlug: "terma-jamoasi",
  },
  {
    id: "p6",
    minutes: 10 * 60 + 20,
    title: "Bozor ertalabi yakunlandi",
    body: "Pomidor arzonlashdi, ko‘kat esa ertalabgi narxda qoldi.",
    city: "Toshkent",
    category: "iqtisod",
    articleSlug: "bozor-narxi",
  },
  {
    id: "p7",
    minutes: 11 * 60 + 30,
    title: "Ochiq ma’lumot: yangi jadval",
    body: "Portalda fayl bor. Izoh hali qisqa. Tahririyat savoli ochiq.",
    city: "Toshkent",
    category: "siyosat",
    articleSlug: "ochiq-malumot",
  },
  {
    id: "p8",
    minutes: 12 * 60 + 32,
    title: "Peshin, issiq cho‘qqa",
    body: "Ko‘cha soyaga yig‘ildi. Ochiq asfalt bo‘sh.",
    city: "Toshkent",
    category: "fan",
    articleSlug: "issiq-shahar",
  },
  {
    id: "p9",
    minutes: 14 * 60 + 10,
    title: "Soya o‘lchovi",
    body: "Piyoda yo‘lakning bir tomoni yashaydi, ikkinchisi yonadi.",
    city: "Toshkent",
    category: "fan",
    articleSlug: "issiq-shahar",
  },
  {
    id: "p10",
    minutes: 16 * 60 + 42,
    title: "Asr, dala oxirgi suvi",
    body: "Sirdaryo tumanlarida kechki sug‘orish navbati.",
    city: "Guliston",
    category: "viloyat",
    articleSlug: "suv-taqsimoti",
  },
  {
    id: "p11",
    minutes: 19 * 60 + 4,
    title: "Shom, shahar qaytadi",
    body: "Havo yumshaydi. Hovli, choy, kechki o‘yin.",
    city: "Toshkent",
    category: "jamiyat",
    articleSlug: "mahalla-kechasi",
  },
  {
    id: "p12",
    minutes: 21 * 60,
    title: "Yuk yo‘li ochildi",
    body: "TIR va vagon kechasi yuradi. Ertalabki narx shu yo‘lda pishadi.",
    city: "Toshkent",
    category: "iqtisod",
    articleSlug: "yuk-yoli",
  },
  {
    id: "p13",
    minutes: 22 * 60 + 10,
    title: "Klub o‘yini yakunlandi",
    body: "Yorug‘lik o‘chdi, hisob qoldi. Jadval yozni unutmaydi.",
    city: "Toshkent",
    category: "sport",
    articleSlug: "klub-futboli",
  },
];

export function pulseAround(now = new Date(), span = 24 * 60): PulseEvent[] {
  const nowM = minutesOfDay(now);
  return [...PULSE].sort((a, b) => {
    const da = (a.minutes - nowM + span) % span;
    const db = (b.minutes - nowM + span) % span;
    return da - db;
  });
}

export function latestPulse(now = new Date()): PulseEvent {
  const nowM = minutesOfDay(now);
  const past = PULSE.filter((e) => e.minutes <= nowM);
  return past[past.length - 1] ?? PULSE[PULSE.length - 1];
}

export function formatEventTime(minutes: number): string {
  const h = String(Math.floor(minutes / 60)).padStart(2, "0");
  const m = String(minutes % 60).padStart(2, "0");
  return `${h}:${m}`;
}
