import { tashkentParts } from "./dates";
import type { CityWeather } from "./types";

function curve(base: number, amp: number, hour: number, peak = 15): number {
  const t = (hour - peak) / 7.4;
  return Math.round(base + amp * Math.exp(-t * t) * 1.15 - amp * 0.35);
}

function hours(base: number, amp: number): number[] {
  return Array.from({ length: 24 }, (_, h) => curve(base, amp, h));
}

export const CITIES: CityWeather[] = [
  { id: "toshkent", name: "Toshkent", high: 36, low: 22, now: 34, sky: "issiq", wind: 12, humidity: 28, hours: hours(28, 9) },
  { id: "samarqand", name: "Samarqand", high: 34, low: 19, now: 32, sky: "ochiq", wind: 10, humidity: 26, hours: hours(26, 9) },
  { id: "buxoro", name: "Buxoro", high: 38, low: 22, now: 36, sky: "issiq", wind: 14, humidity: 18, hours: hours(29, 10) },
  { id: "nukus", name: "Nukus", high: 37, low: 21, now: 35, sky: "chang", wind: 22, humidity: 22, hours: hours(28, 10) },
  { id: "andijon", name: "Andijon", high: 33, low: 20, now: 31, sky: "ochiq", wind: 8, humidity: 36, hours: hours(26, 8) },
  { id: "namangan", name: "Namangan", high: 32, low: 19, now: 30, sky: "ochiq", wind: 7, humidity: 38, hours: hours(25, 8) },
  { id: "fargona", name: "Farg‘ona", high: 33, low: 20, now: 31, sky: "ochiq", wind: 8, humidity: 34, hours: hours(26, 8) },
  { id: "qarshi", name: "Qarshi", high: 39, low: 23, now: 37, sky: "issiq", wind: 16, humidity: 16, hours: hours(30, 10) },
  { id: "termiz", name: "Termiz", high: 41, low: 25, now: 39, sky: "issiq", wind: 11, humidity: 20, hours: hours(32, 10) },
  { id: "navoiy", name: "Navoiy", high: 38, low: 21, now: 36, sky: "chang", wind: 18, humidity: 17, hours: hours(29, 10) },
  { id: "urganch", name: "Urganch", high: 36, low: 21, now: 34, sky: "issiq", wind: 15, humidity: 24, hours: hours(28, 9) },
  { id: "nurafshon", name: "Nurafshon", high: 35, low: 21, now: 33, sky: "ochiq", wind: 11, humidity: 30, hours: hours(27, 9) },
];

export const SKY_LABEL: Record<CityWeather["sky"], string> = {
  ochiq: "Ochiq osmon",
  bulut: "Bulutli",
  chang: "Changli shamol",
  "yomg'ir": "Yengil yomg‘ir",
  issiq: "Issiq, quruq",
};

export function currentTemp(city: CityWeather, date = new Date()): number {
  return city.hours[tashkentParts(date).hour] ?? city.now;
}

export function cityById(id: string): CityWeather {
  return CITIES.find((c) => c.id === id) ?? CITIES[0];
}

export function weatherAdvice(city: CityWeather): string {
  if (city.high >= 38) {
    return "Tushda soyada qoling. Suvni ko‘proq oling, ochiq maydonda ishni ertalabga suring.";
  }
  if (city.sky === "chang") {
    return "Shamol chang ko‘taradi. Deraza va nafas yo‘lini yoping, ko‘zoynak foydali.";
  }
  if (city.high >= 34) {
    return "Yozning oxirgi issiq kuni. Ertalabki soatlar yurish va bozor uchun qulay.";
  }
  return "Havo yurish uchun yumshoq. Kechqurun salqinlashadi.";
}
