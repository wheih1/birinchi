import type { Region } from "./types";

export const REGIONS: Region[] = [
  { id: "toshkent-sh", name: "Toshkent shahri", center: "Toshkent", note: "Poytaxt ritmi, metro, ish va maktab." },
  { id: "toshkent", name: "Toshkent viloyati", center: "Nurafshon", note: "Sanoat halqasi va bog‘lar." },
  { id: "samarqand", name: "Samarqand", center: "Samarqand", note: "Mehmon, me’mor va temir yo‘l." },
  { id: "buxoro", name: "Buxoro", center: "Buxoro", note: "Gumbaz soyasi, hunarmandlik." },
  { id: "xorazm", name: "Xorazm", center: "Urganch", note: "Ichan-qal’a va paxta yo‘li." },
  { id: "navoiy", name: "Navoiy", center: "Navoiy", note: "Kon, cho‘l va kimyo." },
  { id: "qashqadaryo", name: "Qashqadaryo", center: "Qarshi", note: "Neft, g‘alla, issiq yoz." },
  { id: "surxondaryo", name: "Surxondaryo", center: "Termiz", note: "Janub darvozasi, Amudaryo." },
  { id: "jizzax", name: "Jizzax", center: "Jizzax", note: "Mirzacho‘l va yangi bog‘lar." },
  { id: "sirdaryo", name: "Sirdaryo", center: "Guliston", note: "Suv va ekin taqsimoti." },
  { id: "fargona", name: "Farg‘ona", center: "Farg‘ona", note: "Vodiy, bozor, ipak." },
  { id: "andijon", name: "Andijon", center: "Andijon", note: "Zich hayot, avtomobil, bog‘." },
  { id: "namangan", name: "Namangan", center: "Namangan", note: "Gul, to‘qimachilik, soy." },
  { id: "qoraqalpoq", name: "Qoraqalpog‘iston", center: "Nukus", note: "Orol, muzey, keng dasht." },
];

export function regionById(id: string): Region | undefined {
  return REGIONS.find((r) => r.id === id);
}
