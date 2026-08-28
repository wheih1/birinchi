const MONTHS = [
  "yanvar",
  "fevral",
  "mart",
  "aprel",
  "may",
  "iyun",
  "iyul",
  "avgust",
  "sentabr",
  "oktabr",
  "noyabr",
  "dekabr",
];

const WEEKDAYS = [
  "yakshanba",
  "dushanba",
  "seshanba",
  "chorshanba",
  "payshanba",
  "juma",
  "shanba",
];

export const TASHKENT_TZ = "Asia/Tashkent";

export type ClockParts = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  weekday: number;
};

export function tashkentParts(date = new Date()): ClockParts {
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: TASHKENT_TZ,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "short",
    hourCycle: "h23",
  });
  const bag = Object.fromEntries(fmt.formatToParts(date).map((p) => [p.type, p.value]));
  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  return {
    year: Number(bag.year),
    month: Number(bag.month),
    day: Number(bag.day),
    hour: Number(bag.hour),
    minute: Number(bag.minute),
    weekday: weekdayMap[bag.weekday ?? ""] ?? 0,
  };
}

export function editionNumber(date = new Date()): number {
  const p = tashkentParts(date);
  const start = Date.UTC(p.year, 0, 0);
  const now = Date.UTC(p.year, p.month - 1, p.day);
  return Math.round((now - start) / 86_400_000);
}

export function formatUzDate(date: Date, withWeekday = true): string {
  const p = tashkentParts(date);
  const base = `${p.day}-${MONTHS[p.month - 1]}, ${p.year}`;
  if (!withWeekday) return base;
  return `${WEEKDAYS[p.weekday]}, ${base}`;
}

export function formatUzShort(date: Date): string {
  const p = tashkentParts(date);
  return `${p.day}-${MONTHS[p.month - 1]}`;
}

export function formatClock(date: Date): string {
  const p = tashkentParts(date);
  return `${pad2(p.hour)}:${pad2(p.minute)}`;
}

export function minutesOfDay(date = new Date()): number {
  const p = tashkentParts(date);
  return p.hour * 60 + p.minute;
}

export function parseIso(iso: string): Date {
  return new Date(iso);
}

export function relativeUz(iso: string, now = new Date()): string {
  const then = parseIso(iso);
  const diff = now.getTime() - then.getTime();
  const mins = Math.round(diff / 60_000);
  if (mins < 1) return "hozir";
  if (mins < 60) return `${mins} daqiqa oldin`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours} soat oldin`;
  const days = Math.round(hours / 24);
  if (days === 1) return "kecha";
  if (days < 7) return `${days} kun oldin`;
  return formatUzShort(then);
}

export function sameCalendarDay(a: Date, b: Date): boolean {
  const pa = tashkentParts(a);
  const pb = tashkentParts(b);
  return pa.year === pb.year && pa.month === pb.month && pa.day === pb.day;
}

export function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

export function hmFromMinutes(total: number): string {
  const wrapped = ((total % 1440) + 1440) % 1440;
  return `${pad2(Math.floor(wrapped / 60))}:${pad2(wrapped % 60)}`;
}
