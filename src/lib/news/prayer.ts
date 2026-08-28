import type { PrayerDay, PrayerName } from "./types";
import { hmFromMinutes, minutesOfDay } from "./dates";

const NAMES: { id: PrayerName; label: string }[] = [
  { id: "bomdod", label: "Bomdod" },
  { id: "quyosh", label: "Quyosh" },
  { id: "peshin", label: "Peshin" },
  { id: "asr", label: "Asr" },
  { id: "shom", label: "Shom" },
  { id: "xufton", label: "Xufton" },
];

export const PRAYER_LABELS = NAMES;

const OFFSETS: Record<string, number> = {
  toshkent: 0,
  samarqand: 8,
  buxoro: 14,
  nukus: 22,
  andijon: -12,
  namangan: -10,
  fargona: -8,
  qarshi: 10,
  termiz: 12,
  navoiy: 12,
  urganch: 20,
  nurafshon: 2,
};

function augustBase(day: number): PrayerDay {
  const shift = Math.round((day - 15) * 0.7);
  const m = (h: number, min: number) => hmFromMinutes(h * 60 + min + shift);
  return {
    bomdod: m(4, 28),
    quyosh: m(5, 48),
    peshin: m(12, 32),
    asr: m(16, 42),
    shom: m(19, 4),
    xufton: m(20, 28),
  };
}

function applyOffset(day: PrayerDay, minutes: number): PrayerDay {
  const next = { ...day };
  (Object.keys(next) as PrayerName[]).forEach((key) => {
    const [h, m] = next[key].split(":").map(Number);
    next[key] = hmFromMinutes(h * 60 + m + minutes);
  });
  return next;
}

export function prayerFor(cityId: string, date = new Date()): PrayerDay {
  const base = augustBase(date.getDate());
  return applyOffset(base, OFFSETS[cityId] ?? 0);
}

export function nextPrayer(day: PrayerDay, now = new Date()): { id: PrayerName; label: string; at: string } {
  const nowM = minutesOfDay(now);
  for (const item of NAMES) {
    const [h, m] = day[item.id].split(":").map(Number);
    if (h * 60 + m > nowM + 1) return { ...item, at: day[item.id] };
  }
  return { ...NAMES[0], at: day.bomdod };
}
