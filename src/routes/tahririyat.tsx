import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { AUTHORS } from "@/lib/news";

export const Route = createFileRoute("/tahririyat")({ component: MastheadPage });

function MastheadPage() {
  return (
    <AppShell>
      <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-muted">Nima bu</p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl font-medium leading-tight sm:text-5xl">
        Lenta emas. Sahifa.
      </h1>
      <div className="mt-8 max-w-2xl space-y-5 font-display text-lg leading-relaxed">
        <p className="drop-cap">
          Sahar — O‘zbekiston uchun ertalabki nashr. U yangilikni kartochka qilib tizmaydi. U kunni yig‘adi:
          bosh maqola, ustun, qisqa xabar, viloyat satri, ob-havo va namoz. Xuddi bosma gazeta kabi — lekin
          cho‘ntakda.
        </p>
        <p>
          Boshqa saytlar «hozir» deb yuguradi. Biz soatni o‘lchaymiz. Maktab ostonasi, ariq navbati, kechki tok,
          metro sakkiz daqiqasi — shu narsalar kunning haqiqiy sarlavhasi.
        </p>
        <p>
          Saqlangan sahifalar shu qurilmada qoladi. Qidiruv katalog odobida. Brifing — yetti nafasli teleprompter.
          Tun rejimi qog‘ozni siyohga aylantiradi.
        </p>
      </div>
      <p className="mt-6">
        <Link to="/maqola/$slug" params={{ slug: "tahririyat-odobi" }} className="underline underline-offset-4">
          Tahririyat odobi
        </Link>
      </p>
      <section className="mt-14">
        <h2 className="border-b border-ink pb-2 font-sans text-[11px] uppercase tracking-[0.2em]">Mualliflar</h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {AUTHORS.map((a) => (
            <li key={a.id} className="rounded-lg bg-surface p-5">
              <p className="font-display text-xl">{a.name}</p>
              <p className="mt-1 font-sans text-sm text-muted">{a.role}</p>
              <p className="mt-3 text-sm leading-relaxed">{a.bio}</p>
            </li>
          ))}
        </ul>
      </section>
    </AppShell>
  );
}
