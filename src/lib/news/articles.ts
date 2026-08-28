import type { Article } from "./types";

function iso(daysAgo: number, hour: number, minute = 0): string {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  d.setHours(hour, minute, 0, 0);
  return d.toISOString();
}

export const ARTICLES: Article[] = [
  {
    slug: "maktab-ostonasida",
    title: "Maktab ostonasida: yangi o‘quv yili oldidan nima o‘zgardi",
    dek: "1-sentabr yaqin. Darslik, forma, yo‘l va ertalabki avtobus — ota-onalar savoli shu to‘rt nuqtada to‘plangan. Sahar tahririyati Toshkent, Andijon va Qarshidagi maktab ostonasini aylanib chiqdi.",
    kicker: "Kun mavzusi",
    category: "jamiyat",
    region: "toshkent-sh",
    authorId: "kamola",
    publishedAt: iso(0, 6, 10),
    readMinutes: 8,
    kind: "lead",
    cover: "/covers/maktab.jpg",
    coverAlt: "Ertalabki yorug‘likdagi bo‘sh maktab yo‘lagi",
    tags: ["ta'lim", "maktab", "sentabr", "oilalar"],
    body: [
      {
        type: "p",
        text: "Yozning oxirgi haftasi maktab hovlisida odatdagidan tinchroq. Hovuzdagi suv kamaygan, daraxt soyasi uzun. Lekin ostonadagi suhbat allaqachon sentabrga o‘tgan: forma tikiladimi, darslik omborda bormi, ertalabki 7:40 dagi avtobus yana to‘lib ketadimi.",
      },
      {
        type: "p",
        text: "Tahririyat uch shaharda — Toshkent, Andijon va Qarshida — o‘qituvchi, ota-ona va mahalla faollari bilan gaplashdi. Raqamlar turlicha, savol esa bir xil: bolaning ertalabki soati qanday o‘tadi, va bu soat oila byudjetiga qancha tushadi.",
      },
      {
        type: "h",
        text: "Forma va darslik: narx, navbat, andoza",
      },
      {
        type: "p",
        text: "Toshkentning Yunusobod tumanidagi maktab oldida tikuvchilik ustaxonasi ertalabdan ochiq. Andoza o‘zgargan emas, lekin mato bahosi yoz boshiga nisbatan sezilarli. Ota-onalar aytishicha, asosiy xarajat forma emas — sumka, poyabzal va yo‘l. Qarshida esa bozor narxi poytaxtnikidan past, ammo tanlov tor.",
      },
      {
        type: "quote",
        text: "Bizga yangi binolar kerak emas, ertalabki 40 daqiqa kerak: xavfsiz yo‘l, ochiq eshik, tinch dars.",
        cite: "Andijonlik o‘qituvchi",
      },
      {
        type: "p",
        text: "Darslik masalasi bu yil ham ombor va maktab o‘rtasidagi masofaga bog‘liq. Shahar maktablarida to‘plamlar oldindan kelgan. Chekka tumanlarda esa o‘qituvchilar «avval asosiy fanlar, qolgani keyin» degan tartibni eslatishadi. Bu — inqiroz emas, lekin reja teshigi.",
      },
      {
        type: "aside",
        label: "Sahar eslatmasi",
        text: "1-sentabrga qadar maktab ostonasida ertalabki yo‘lni bir marta piyoda o‘lchang. Chorraha, soy va avtobus bekatidagi to‘planish — shu uch nuqta odatda xavfni belgilaydi.",
      },
      {
        type: "h",
        text: "Ostonaning o‘zi dars",
      },
      {
        type: "p",
        text: "Yangi o‘quv yili haqidagi gap odatda binolar, planşetlar va tanlov fanlariga ketadi. Ostonada esa boshqa haqiqat turadi: bola uyqudan darsgacha qancha vaqt yuradi, nonushta qiladimi, soy bormi. Shu kichik geografiya yil davomidagi charchoqni belgilaydi.",
      },
      {
        type: "p",
        text: "Sahar bu sahifani «yangilik» deb bermaydi. Bu — kun tartibi. Sentabrning birinchi darsidan oldin ostonani o‘lchash — shahar o‘zini o‘lchashi demak.",
      },
    ],
  },
  {
    slug: "quyosh-dalasi",
    title: "Quyosh dalasi: cho‘lda tok qanday oqadi",
    dek: "Navoiy va Buxoro oralig‘idagi yangi quyosh maydonlari yozning eng issiq haftasida sinovdan o‘tdi. Raqamlar chiroyli. Savol boshqa: tunda nima yonadi?",
    kicker: "Energiya",
    category: "iqtisod",
    region: "navoiy",
    authorId: "javlon",
    publishedAt: iso(0, 7, 40),
    readMinutes: 7,
    kind: "dispatch",
    cover: "/covers/quyosh.jpg",
    coverAlt: "Dasht ustidagi quyosh panellari",
    tags: ["energiya", "quyosh", "navoiy", "tok"],
    body: [
      {
        type: "p",
        text: "Cho‘lning yozgi havo qatlami tushda titraydi. Panellar esa jim. Ular shovqin qilmaydi, bayroq ham ko‘tarmaydi. Lekin stansiyadagi operatorlar aytishicha, avgustning o‘rtalari — yilning eng «serhosil» kunlari: osmon ochiq, soya yo‘q, issiqlik esa asbob-uskunani sinaydi.",
      },
      {
        type: "p",
        text: "Quyosh elektr stansiyasi kunduzi tarmoqqa tok beradi. Kechqurun, shahar konditsionerlarini yoqqanda, manzara o‘zgaradi. Shuning uchun tahririyat savoli oddiy: kunlik rekordmi, yoki kechki barqarorlikmi?",
      },
      {
        type: "h",
        text: "Akkumulyator — haqiqiy sarhad",
      },
      {
        type: "p",
        text: "Maydon kengayishi oson ko‘rinadi: yer bor, quyosh bor. Qimmat joyi — saqlash. Operatorlar kechki ikki soatni «eng nozik oyna» deb atashadi. Agar saqlash quvvati oshmasa, kunduzi ishlab chiqarilgan tokning bir qismi tarmoqda siqiladi, kechqurun esa eski manbalar yana ishga tushadi.",
      },
      {
        type: "quote",
        text: "Biz panel sonini emas, kechki soatni o‘lchaymiz. Shahar o‘sha paytda yashaydi.",
        cite: "Stansiya muhandisi",
      },
      {
        type: "p",
        text: "Iqtisodiyot sahifasi uchun bu — texnika emas, tarqatma. Agar yozgi issiq yillardan-yilga cho‘zilsa, konditsioner kechki cho‘qqini oshiradi. Quyosh maydoni shu cho‘qqa javob bera olmasa, u go‘zal manzara bo‘lib qoladi.",
      },
      {
        type: "aside",
        label: "Raqam",
        text: "Tahririyat olgan tushuntirishga ko‘ra, kechki ikki soatdagi talab kunduzgi o‘rtacha yukdan sezilarli yuqori. Saqlash shu farqni yopishi kerak.",
      },
    ],
  },
  {
    slug: "samarqand-kechasi",
    title: "Samarqand kechasi: mehmon ketgach nima qoladi",
    dek: "Yozgi mavsum oxirida Registon atrofi tinchlanadi. Mehmon oqimi pasayadi, lekin shahar o‘ziga qaytmaydi — u mehmon uchun sozlangan holda qoladi.",
    kicker: "Shaharnoma",
    category: "madaniyat",
    region: "samarqand",
    authorId: "madina",
    publishedAt: iso(0, 8, 15),
    readMinutes: 6,
    kind: "essay",
    cover: "/covers/samarqand.jpg",
    coverAlt: "Samarqand me’morchiligi, kechki soyalar",
    tags: ["samarqand", "turizm", "me'morchilik", "shahar"],
    body: [
      {
        type: "p",
        text: "Kechqurun maydon yorug‘i o‘chganda, toshning asl rangi qaytadi. Kun bo‘yi suratga tushgan gumbaz endi oddiy sirt: salqin, biroz changli, oyoq tovushiga javob beradigan. Shu payt shahar o‘zini eslaydi.",
      },
      {
        type: "p",
        text: "Yozgi mavsum Samarqandga pul keltirdi. Shu bilan birga u ko‘chani ham o‘zgartirdi: kafe menyusi uch tilda, suvenir do‘koni kechasi ham ochiq, mahalla esa bir ko‘cha orqada. Mehmon ketganda menyu qoladi. Mahalla ham.",
      },
      {
        type: "quote",
        text: "Biz mehmonni kutamiz. Lekin kechasi o‘z ko‘chamizda gaplashishni ham xohlaymiz.",
        cite: "Yashovchi, eski shahar",
      },
      {
        type: "p",
        text: "Madaniyat sahifasi turizmni inkor etmaydi. U boshqa o‘lchovni so‘raydi: shahar faqat ko‘rsatiladigan joy bo‘lib qolmasin. Kechki soat — shu o‘lchovning eng halol payti. O‘sha paytda musiqa o‘chadi, tosh gapiradi.",
      },
      {
        type: "p",
        text: "Sentabr yaqin. Maktab ochiladi, mehmon kamayadi. Samarqand o‘ziga qaytishi mumkin. Yoki yozgi yorug‘likni qishgacha yoqib qo‘yishi mumkin. Tanlov shu ikki kecha orasida.",
      },
    ],
  },
  {
    slug: "suv-taqsimoti",
    title: "Suv taqsimoti: yozning oxirgi haftasida ariq nima deydi",
    dek: "Sirdaryo va Qashqadaryo tumanlarida ekinning so‘nggi sug‘orishi ketmoqda. Fermerlar aytadi: suv bor. Lekin u kech keladi.",
    kicker: "Daladan",
    category: "viloyat",
    region: "sirdaryo",
    authorId: "shohruh",
    publishedAt: iso(0, 5, 50),
    readMinutes: 6,
    kind: "dispatch",
    cover: "/covers/vodiy.jpg",
    coverAlt: "Sug‘orish kanali va yozgi dala",
    tags: ["suv", "qishloq", "sirdaryo", "fermer"],
    body: [
      {
        type: "p",
        text: "Ertalabki ariq ovozi shahardagi konditsionerdan boshqacha. U to‘xtab-to‘xtab oqadi. Fermer soatiga qarab turadi, nasosga qarab turadi, qo‘shnisining dalasiga qarab turadi. Suv — shu uch narsaning kelishuvi.",
      },
      {
        type: "p",
        text: "Yozning oxirgi haftasi g‘alla emas, takroriy ekin va bog‘ uchun muhim. Kechikkan suv meva sifatini o‘zgartiradi, paxta esa chigitga qarab «ichib» qoladi. Tuman suv xo‘jaligi aytadi: grafik bor. Dala aytadi: grafik kechasi keladi.",
      },
      {
        type: "h",
        text: "Navbat — yozgi konstitutsiya",
      },
      {
        type: "p",
        text: "Ariq bo‘yida yozilmagan qonun ishlaydi. Kim ertalab oladi, kim kechasi. Kim nasos qo‘ygan, kim ariqni tozalagan. Bu nizom mahkama emas, mahalla. Lekin qurg‘oqchilik yillarida mahalla ham charchaydi.",
      },
      {
        type: "quote",
        text: "Suv yo‘qligi emas, suvning soati bizni charchatadi.",
        cite: "Guliston tumanidagi dehqon",
      },
      {
        type: "aside",
        label: "Eslatma",
        text: "Sahar viloyat sahifasi suvni «inqiroz» deb yozmaydi. U soatni yozadi. Soat — eng aniq reportaj.",
      },
    ],
  },
  {
    slug: "terma-jamoasi",
    title: "Terma jamoasi: sentabr oyna oldida",
    dek: "Yozgi yig‘in yakunlanmoqda. Maydon tinch, lekin tarkib haqidagi savol ochiq: tezlikmi, yoki barqaror chiziqmi?",
    kicker: "Maydon",
    category: "sport",
    authorId: "bekzod",
    publishedAt: iso(0, 9, 5),
    readMinutes: 5,
    kind: "column",
    cover: "/covers/stadion.jpg",
    coverAlt: "Bo‘sh stadion, kechki osmon",
    tags: ["futbol", "terma", "yig'in"],
    body: [
      {
        type: "p",
        text: "Yozgi yig‘in odatda shovqinli bo‘ladi: yangi ism, yangi sxema, yangi va’da. Bu safar maydon boshqacha — mashg‘ulot qisqa, suhbat uzun. Murabbiy shtabi «chiziqni ushlash» haqida gapiradi. Bu — hujumning tili emas, himoyaning tili.",
      },
      {
        type: "p",
        text: "Sentabr oynasi yaqin. Raqiblar turlicha, lekin savol bir: jamoa 90 daqiqani qanday taqsimlaydi. Birinchi bo‘limdagi shoshqaloqlik yozgi o‘yinlarda ko‘p takrorlandi. Ikkinchi bo‘limda esa nafas qisildi.",
      },
      {
        type: "quote",
        text: "Biz go‘zal gol emas, tinch daqiqani qidiramiz. Tinch daqiqa o‘yinni ushlab turadi.",
        cite: "Yig‘in ishtirokchisi",
      },
      {
        type: "p",
        text: "Sport sahifasi tarkibni taxmin qilmaydi. U ritmni o‘lchaydi. Agar sentabrda jamoa birinchi 20 daqiqani shoshmasdan o‘tsa — yozgi yig‘in ish bergan. Aks holda, maydon yana shovqinli hikoya aytadi.",
      },
    ],
  },
  {
    slug: "toshkent-metro",
    title: "Metro ertalab: sakkiz daqiqa jimjitlik",
    dek: "Toshkent metrosida ertalabki soat — shaharning eng halol portreti. Hech kim nutq o‘qimaydi. Hammasini eshik va qadam aytadi.",
    kicker: "Shaharnoma",
    category: "jamiyat",
    region: "toshkent-sh",
    authorId: "kamola",
    publishedAt: iso(1, 6, 30),
    readMinutes: 5,
    kind: "essay",
    cover: "/covers/metro.jpg",
    coverAlt: "Toshkent metro yo‘lagi",
    tags: ["toshkent", "metro", "shahar", "ertalab"],
    body: [
      {
        type: "p",
        text: "Ertalabki vagon jim. Telefon yoniq, lekin ovoz yo‘q. Kimdir forma dazmollangan, kimdir qahva tutib turibdi, kimdir deraza qorong‘isiga qarab turibdi. Shahar shu sakkiz daqiqada o‘zini yig‘adi.",
      },
      {
        type: "p",
        text: "Yozning oxirida konditsioner ishlaydi, lekin eshik oldida baribir issiq. Navbat yo‘q, siqilish bor. Bu ikkisi boshqa narsa. Navbat tartib. Siqilish — shahar o‘sganining belgisidir.",
      },
      {
        type: "p",
        text: "Yangi bekatlar xaritani kengaytirdi. Ertalabki oqim esa hali ham bir nechta chiziqda to‘planadi. Reja chizilgan. Oyoq oqimi rejani tuzatadi. Shu tuzatish — eng aniq statistika.",
      },
      {
        type: "aside",
        label: "Kuzatuv",
        text: "7:50–8:20 oralig‘i eng zich. Agar ish 9:00 da boshlansa, 20 daqiqa erta chiqish vagonni butunlay boshqa joyga aylantiradi.",
      },
    ],
  },
  {
    slug: "orol-muzeyi",
    title: "Nukus: muzey soyasida yoz",
    dek: "Qoraqalpog‘istonda yoz quruq, shamol uzun. Savitskiy to‘plami esa salqin zalda turibdi. Tashrifchilar kam. Savol ko‘p: shahar o‘z boyligini qanday ko‘rsatadi?",
    kicker: "Chekka sahifa",
    category: "viloyat",
    region: "qoraqalpoq",
    authorId: "shohruh",
    publishedAt: iso(1, 11, 20),
    readMinutes: 6,
    kind: "dispatch",
    cover: "/covers/tog.jpg",
    coverAlt: "Keng dasht va uzoq tizma",
    tags: ["nukus", "muzey", "orol", "madaniyat"],
    body: [
      {
        type: "p",
        text: "Nukus yozida soy qadrlanadi. Muzey zali shu soyaning eng tiniq joyi. Devordagi ranglar tashqaridagi changdan keskin farq qiladi: ichkarida vaqt sekin, tashqarida shamol tez.",
      },
      {
        type: "p",
        text: "Tashrif statistikasi yozda pasayadi. Issiqlik, masofa, aviachipta. Lekin kelgan odam uzoq qoladi. Bu — ommaviy turizm emas, sekin turizm. Shahar shu sekinlikni yo‘qotmasligi kerak, lekin yashirish ham kerak emas.",
      },
      {
        type: "quote",
        text: "Bizga shovqinli festival emas, salqin zal va aniq yo‘l kerak.",
        cite: "Muzey xodimi",
      },
      {
        type: "p",
        text: "Orol mavzusi har yozda qaytadi. U endi faqat fojia tili bilan yozilmasa ham bo‘ladi: qurigan tub, yangi o‘simlik, muzeydagi rang, bozordagi qovun. Chekka sahifa shu aralashmani ushlab turadi.",
      },
    ],
  },
  {
    slug: "kitob-yozgi",
    title: "Yozgi kitob: nima o‘qildi, nima qoldi",
    dek: "Kutubxona zalida konditsioner sekin. Stol uzun, kitob qaytishi esa notekis. Yozgi o‘qish statistikasi kutilganidek emas — va bu yomon xabar emas.",
    kicker: "Ustun",
    category: "madaniyat",
    authorId: "madina",
    publishedAt: iso(1, 16, 40),
    readMinutes: 5,
    kind: "column",
    cover: "/covers/kutubxona.jpg",
    coverAlt: "Kutubxona o‘qish zali",
    tags: ["kitob", "kutubxona", "o'qish"],
    body: [
      {
        type: "p",
        text: "Yozgi o‘qish ro‘yxatlari har yili chiqadi. Ular chiroyli. Zalga kirgan odam esa ro‘yxatni emas, soyani qidiradi. Shu farq — nashr bozori bilan o‘quvchi orasidagi masofa.",
      },
      {
        type: "p",
        text: "Kutubxona xodimlari aytishicha, qustda badiiy nasr kamroq, bolalar adabiyoti va til o‘rganish qo‘llanmalari ko‘proq qaytadi. Bu «madaniyat pasaydi» degani emas. Bu — yozning tili. Yoz imtihon va dam olish orasida o‘tadi.",
      },
      {
        type: "p",
        text: "Sahar kitob sahifasini reyting qilmaydi. U zalni tasvirlaydi. Agar sentabrda o‘qish zali yana to‘lsa — yoz ishini qilgan. Kitob o‘qilmasa ham, zal eslab qolinadi. Eslab qolish — keyingi o‘qishning boshi.",
      },
    ],
  },
  {
    slug: "bozor-narxi",
    title: "Bozor ertalab: qovun, pomidor, so‘z",
    dek: "Avgusning oxirida bozor to‘la. Narx pasaygan joy ham bor, qimmat qolgan joy ham. Eng qimmat narsa — soya ostidagi joy.",
    kicker: "Kunlik",
    category: "iqtisod",
    region: "toshkent-sh",
    authorId: "javlon",
    publishedAt: iso(0, 10, 20),
    readMinutes: 4,
    kind: "brief",
    cover: "/covers/bozor.jpg",
    coverAlt: "Yopiq bozor ravoqlari",
    tags: ["bozor", "narx", "oziq-ovqat"],
    body: [
      {
        type: "p",
        text: "Ertalabki bozor hidi shahar yangiligidan oldin keladi. Qovun kesiladi, pomidor qutilanadi, choy quyiladi. Narx taxtaga yozilgan, lekin kelishuv ko‘zda. Bu — ochiq ma’lumotning eng eski shakli.",
      },
      {
        type: "p",
        text: "Toshkent va Buxoro bozorlarida mevani solishtirsak, farq masofada emas, saqlashda. Sovutgich yo‘q joyda kunlik narx tebranadi. Sovutgich bor joyda haftalik. Shu tebranish — yozgi inflyatsiyaning kichik modeli.",
      },
      {
        type: "aside",
        label: "Kuzatuv",
        text: "Pomidor avgust oxirida arzonlashadi. Ko‘kat esa issiqda tez nobud bo‘ladi — shu bois ertalabki soat eng halol narxni beradi.",
      },
    ],
  },
  {
    slug: "mintaqa-diplomatiya",
    title: "Mintaqa: sekin gap, uzun yo‘l",
    dek: "Yoz oxirida mintaqaviy uchrashuvlar tinchroq o‘tadi. Bayonotlar qisqa. Temir yo‘l va suv esa uzun gapni kutadi.",
    kicker: "Tashqi ufq",
    category: "jahon",
    authorId: "azizbek",
    publishedAt: iso(0, 12, 5),
    readMinutes: 6,
    kind: "column",
    cover: "/covers/toshkent-sahar.jpg",
    coverAlt: "Toshkent ertalabki ufq",
    tags: ["mintaqa", "diplomatiya", "transport"],
    body: [
      {
        type: "p",
        text: "Yozgi tashqi kun tartibi odatda shovqinli bo‘lmaydi. Dam olish, issiqlik, ta’til. Lekin stol ostida yo‘l qoladi: yuk, chegara, suv. Shu uch narsa kuzgi uchrashuvlarni belgilaydi.",
      },
      {
        type: "p",
        text: "Toshkent nuqtai nazaridan mintaqa — qo‘shni emas, tarmoq. Poyezd kechiksa, bozor sezadi. Suv kechiksa, dala sezadi. Bayonot kechiksa, faqat matbuot sezadi. Shuning uchun Sahar bayonotni emas, tarmoqni o‘qiydi.",
      },
      {
        type: "h",
        text: "Temir yo‘l — eng tinch diplomat",
      },
      {
        type: "p",
        text: "Yuk poyezdi nutq o‘qimaydi. U keladi yoki kechikadi. Kechikish sababi texnika bo‘lishi mumkin, tartib ham. Ikkisini ajratish — tashqi siyosat tahlilining eng foydali mashqi.",
      },
      {
        type: "quote",
        text: "Agar poyezd va ariq ishlasa, bayonot o‘z-o‘zidan yumshoq bo‘ladi.",
        cite: "Tahririyat izohi",
      },
    ],
  },
  {
    slug: "issiq-shahar",
    title: "Issiq shahar: soyani qayerdan qidiramiz",
    dek: "Toshkent yozining oxirgi to‘lqini asfaltni qizdiradi. Daraxt bor joyda odam to‘planadi. Yo‘q joyda — vitrina oldi.",
    kicker: "Iqlim",
    category: "fan",
    region: "toshkent-sh",
    authorId: "sevara",
    publishedAt: iso(0, 14, 10),
    readMinutes: 6,
    kind: "dispatch",
    cover: "/covers/toshkent-sahar.jpg",
    coverAlt: "Issiq shahar ertalabgi manzarasi",
    tags: ["iqlim", "issiqlik", "shahar", "soya"],
    body: [
      {
        type: "p",
        text: "Asfalt tushda qo‘l kuyadigan darajada issiq. Piyoda yo‘lakning bir tomoni soya, ikkinchisi ochiq. Odamlar ochiq tomondan o‘tmaydi. Shahar shu kichik tanlov bilan o‘zini chizadi.",
      },
      {
        type: "p",
        text: "Yangi binolar shisha va ochiq maydonni yaxshi ko‘radi. Yoz esa daraxtni yaxshi ko‘radi. Ikkalasini birlashtirish qimmat emas, lekin reja talab qiladi: chuqur ildiz, suv, besh yil sabr. Sabr — shahar byudjetida kam uchraydigan satr.",
      },
      {
        type: "h",
        text: "Soya — infratuzilma",
      },
      {
        type: "p",
        text: "Biz soyani bezak deb o‘ylaymiz. Issiqda u transport. U odamni bekatga yetkazadi, bolani maktab ostonasida ushlab turadi, bozor navbatini yumshatadi. Soya yo‘q joyda konditsioner ishlaydi, tok ketadi, ko‘cha bo‘shaydi.",
      },
      {
        type: "aside",
        label: "O‘lchov",
        text: "Tushda ochiq asfalt va daraxt ostidagi farq bir necha daraja. Bu farq — shahar salomatligining oddiy termometri.",
      },
    ],
  },
  {
    slug: "qarshi-yoz",
    title: "Qarshi: issiqning poytaxti",
    dek: "Qashqadaryo yozida havo boshqa tilda gapiradi. Ish ertalabga suriladi, ko‘cha tushda jim, kechqurun esa uzun.",
    kicker: "Viloyat",
    category: "viloyat",
    region: "qashqadaryo",
    authorId: "shohruh",
    publishedAt: iso(2, 8, 0),
    readMinutes: 5,
    kind: "dispatch",
    cover: "/covers/vodiy.jpg",
    coverAlt: "Yozgi dala va issiq osmon",
    tags: ["qarshi", "issiqlik", "mehnat"],
    body: [
      {
        type: "p",
        text: "Qarshi tushida ko‘cha bo‘shaydi. Bu dangasalik emas, aql. Qurilish, bozor, hatto suhbat ertalabga o‘tadi. Kechqurun odamlar yana chiqadi — havo ruxsat berganda.",
      },
      {
        type: "p",
        text: "Poytaxtlik mehmon bu ritmni «sekin» deb ataydi. Mahalliy ritm esa aniq: tana issiqni biladi. Mehnat qonuni ham, odatiy tartib ham shu bilimga moslashmasa, charchoq avj oladi.",
      },
      {
        type: "p",
        text: "Sahar bu yozni ekzotika qilmaydi. U soatni yozadi. Agar maktab 1-sentabrda ertalab ochilsa, Qarshi ostonasi Toshkentnikidan boshqacha issiq bo‘ladi. Forma, soy, suv — uch kichik siyosat.",
      },
    ],
  },
  {
    slug: "universitet-laboratoriya",
    title: "Laboratoriya jimligi: yozgi fan qanday yashaydi",
    dek: "Talabalar ta’tilda. Laboratoriya esa to‘xtamaydi: asbob, namuna, sekin o‘lchov. Fan yangiligi ba’zan shu jimlikda tug‘iladi.",
    kicker: "Universitet",
    category: "fan",
    authorId: "sevara",
    publishedAt: iso(2, 13, 30),
    readMinutes: 5,
    kind: "column",
    cover: "/covers/kutubxona.jpg",
    coverAlt: "Jim o‘qish va izlanish zali",
    tags: ["fan", "universitet", "laboratoriya"],
    body: [
      {
        type: "p",
        text: "Yozgi universitet yo‘lagi bo‘sh. Eshik orqasida esa sovutgich ovozi, ekran yorug‘i, daftar. Tadqiqotchi ta’tilni kutmaydi, chunki namuna kutmaydi.",
      },
      {
        type: "p",
        text: "Ommaviy fan yangiligi odatda katta e’lon bilan keladi. Haqiqiy ish esa takroriy o‘lchov. Yoz — shu takror uchun qulay: dars yo‘q, zal tinch, asbob bo‘sh.",
      },
      {
        type: "quote",
        text: "Biz kashfiyotni quvamiz. Lekin avval asbobni ishontiramiz.",
        cite: "Yosh tadqiqotchi",
      },
      {
        type: "p",
        text: "Agar sentabrda talaba shu zalga qaytsa, yozgi jimlik uning darsiga qo‘shiladi. Fan shu qo‘shilishda yashaydi — e’londa emas.",
      },
    ],
  },
  {
    slug: "mahalla-kechasi",
    title: "Mahalla kechasi: hovli, choy, xabar",
    dek: "Yangilik ilovasidan oldin xabar hovlidan o‘tardi. Hali ham o‘tadi. Faqat endi choy yonida telefon ham bor.",
    kicker: "Jamiyat",
    category: "jamiyat",
    authorId: "kamola",
    publishedAt: iso(2, 19, 10),
    readMinutes: 4,
    kind: "essay",
    cover: "/covers/bozor.jpg",
    coverAlt: "Soyali ravoq va hovli yorug‘i",
    tags: ["mahalla", "hovli", "jamiyat"],
    body: [
      {
        type: "p",
        text: "Kechqurun hovli salqin. Choy quyiladi, bolalar uzoqroqda yuguradi, katta odamlar esa kunni qisqa qilib aytadi. Bu — eng eski tahririyat.",
      },
      {
        type: "p",
        text: "Telefon xabarni tezlatdi. Lekin u ohangni olib tashladi. Hovlida ohang bor: kim jiddiy aytadi, kim kulib aytadi, kim jim qoladi. Jimlik ham xabar.",
      },
      {
        type: "p",
        text: "Sahar mahallani romantik qilmaydi. U faqat eslatadi: shahar yangiligining bir qismi hali ham oyoq kiyimsiz o‘tadi — gilam ustida, choy yonida.",
      },
    ],
  },
  {
    slug: "buxoro-hunar",
    title: "Buxoro: hunar kechasi va turist ertalabi",
    dek: "Do‘kon ertalab ochiladi, ustaxona kechasi ishlaydi. Mehmon vitrinani ko‘radi. Usta esa chaqmoqni.",
    kicker: "Hunar",
    category: "madaniyat",
    region: "buxoro",
    authorId: "madina",
    publishedAt: iso(3, 9, 45),
    readMinutes: 5,
    kind: "dispatch",
    cover: "/covers/bozor.jpg",
    coverAlt: "Buxoro ravoqlari va hunar soyasi",
    tags: ["buxoro", "hunar", "turizm"],
    body: [
      {
        type: "p",
        text: "Buxoro ertalabi vitrina uchun. Kechasi esa ish uchun. Mis, mato, yog‘och — bular kechasi ovoz chiqaradi. Ertalab esa jim turadi, narx kutadi.",
      },
      {
        type: "p",
        text: "Turist hunarni «suvenir» deb ataydi. Usta esa «vaqt» deb ataydi. Ikki til bir do‘konda uchrashadi. Ba’zan kelishadi, ba’zan yo‘q. Yo‘q bo‘lsa, hunar ichkariga — hovliga qaytadi.",
      },
      {
        type: "p",
        text: "Madaniyat siyosati vitrinani yaxshi ko‘radi. Hunar esa chiroqni. Agar kechki ustaxona o‘chsa, ertalabki vitrina ham bir kun o‘chadi. Shu ketma-ketlikni unutmaslik kerak.",
      },
    ],
  },
  {
    slug: "andijon-bog",
    title: "Andijon bog‘i: zich shahar, yumshoq meva",
    dek: "Vodiy avgustda shirin. Lekin bog‘ yo‘li tor, mashina ko‘p, soya kam. Meva yetadi. Odam qanday yetadi?",
    kicker: "Vodiy",
    category: "viloyat",
    region: "andijon",
    authorId: "shohruh",
    publishedAt: iso(3, 7, 15),
    readMinutes: 5,
    kind: "dispatch",
    cover: "/covers/vodiy.jpg",
    coverAlt: "Vodiy dalasi va kanal",
    tags: ["andijon", "bog'", "vodiy"],
    body: [
      {
        type: "p",
        text: "Andijon avgusti hidli. Shaftoli, uzum, pomidor — bozor ertalabdan to‘la. Shahar ham to‘la. Ikki to‘lalik bir yo‘lda uchrashganda, navbat chiqadi.",
      },
      {
        type: "p",
        text: "Zichlik — vodiy baxti va tashvishi. Yer qimmat, hovli kichik, ko‘cha tor. Yozda bu go‘zal. Maktab ochilganda esa ertalabki oqim qattiqroq bo‘ladi.",
      },
      {
        type: "aside",
        label: "Yo‘l",
        text: "Bog‘dan bozorgacha masofa qisqa. Vaqt esa uzun — tiqilinch tufayli. Meva shu vaqtni yoqtirmaydi.",
      },
    ],
  },
  {
    slug: "ochiq-malumot",
    title: "Ochiq ma’lumot: raqam bor, izoh yo‘q",
    dek: "Davlat portallarida jadvallar ko‘paydi. O‘quvchi esa savol beradi: bu raqam nima deydi, va u kechami?",
    kicker: "Tahririyat",
    category: "siyosat",
    authorId: "nilufar",
    publishedAt: iso(0, 11, 30),
    readMinutes: 7,
    kind: "column",
    cover: "/covers/kutubxona.jpg",
    coverAlt: "Jadval va kitob yorug‘i",
    tags: ["ochiq-ma'lumot", "davlat", "matbuot"],
    body: [
      {
        type: "p",
        text: "Ochiq ma’lumot — yaxshi yangilik. Jadval chiqdi, fayl yuklandi, sana yozildi. Lekin sahifa o‘quvchisi jadvalni o‘qimaydi, u izohni qidiradi. Izoh yo‘q joyda raqam shovqinga aylanadi.",
      },
      {
        type: "p",
        text: "Tahririyat ishi shu izohni yozish. Kim yozadi? Agar faqat matbuot yozsa, kechikish bor. Agar idora o‘zi qisqa izoh bersa — bir paragraf, oddiy til — ishonch oshadi. Ishonch — alohida byudjet satri emas, lekin u yo‘q joyda har qanday jadval arzon ko‘rinadi.",
      },
      {
        type: "h",
        text: "Kechikish — alohida xabar",
      },
      {
        type: "p",
        text: "Raqam kechiksa, u yolg‘on bo‘lmasligi mumkin. Lekin u foydasiz bo‘lishi mumkin. Yozgi suv, ertalabki transport, maktab formasi — bular kechikishni yoqtirmaydi. Ochiq ma’lumot shu uch sohada erta bo‘lsa, u haqiqiy ochiqlik.",
      },
      {
        type: "quote",
        text: "Bizga ko‘proq portal emas, erta izoh kerak.",
        cite: "Tahririyat",
      },
      {
        type: "p",
        text: "Sahar bu mavzuni ayblov qilmaydi. U odob so‘raydi: raqam chiqsa, yoniga bir gap qo‘ying. Bir gap — ochiq davlatning eng arzon sarmoyasi.",
      },
    ],
  },
  {
    slug: "yuk-yoli",
    title: "Yuk yo‘li: kechasi harakatlanadigan iqtisod",
    dek: "TIR va vagon kechasi yuradi. Shahar uxlaydi, narx esa yo‘lda pishadi. Logistika — eng tinch iqtisodiyot sahifasi.",
    kicker: "Transport",
    category: "iqtisod",
    authorId: "javlon",
    publishedAt: iso(1, 21, 0),
    readMinutes: 5,
    kind: "dispatch",
    cover: "/covers/toshkent-sahar.jpg",
    coverAlt: "Keng yo‘l va ertalabgi tuman",
    tags: ["logistika", "yuk", "transport"],
    body: [
      {
        type: "p",
        text: "Kechasi yo‘l boshqacha. Yengil mashina kam, yuk ko‘p. Haydovchi choyxonada qisqa to‘xtaydi, hujjat tekshiriladi, yana yo‘l. Shu takror — importning yurak urishi.",
      },
      {
        type: "p",
        text: "Bozordagi pomidor kechagi vagonning bolasi. Kechikkan ruxsatnoma ertalabki narxga aylanadi. Shuning uchun logistika sahifasi «quruq» emas. U ertalabki dasturxonga bog‘liq.",
      },
      {
        type: "p",
        text: "Yozgi issiq haydovchini charchatadi, meva esa tez buziladi. Sovutgichli transport qimmat. Shu qimmatlik bozorda ko‘rinadi. Iqtisodni tushunmoqchi bo‘lgan odam kechasi yo‘l chetida bir soat tursin.",
      },
    ],
  },
  {
    slug: "ayollar-mehnati",
    title: "Ko‘rinmas soat: uy va ish orasidagi yo‘l",
    dek: "Rasmiy ish kuni sakkiz soat. Uning oldi va orqasi esa yozilmaydi. Yozgi issiq shu yozilmagan soatni og‘irlashtiradi.",
    kicker: "Jamiyat",
    category: "jamiyat",
    authorId: "kamola",
    publishedAt: iso(3, 15, 20),
    readMinutes: 6,
    kind: "essay",
    cover: "/covers/maktab.jpg",
    coverAlt: "Ertalabki yo‘lak yorug‘i",
    tags: ["mehnat", "oilalar", "ayollar"],
    body: [
      {
        type: "p",
        text: "Ertalabki dasturxon, maktab ostonasi, ish eshigi, kechki bozor — bu to‘rt nuqta ko‘p ayolning kun xaritasi. Xarita oddiy. Vaqt esa zich.",
      },
      {
        type: "p",
        text: "Yozda maktab yopiq, lekin bu dam emas. Bolalar uyda, issiq kuchli, ovqat tez buziladi. Sentabr ochilganda xarita yana o‘zgaradi: ertalabki yo‘l qaytadi. Ikkala holatda ham yozilmagan soat qoladi.",
      },
      {
        type: "quote",
        text: "Men ishga charchab kelmayman. Men ishdan oldin charchayman.",
        cite: "Suhbatdosh, Toshkent",
      },
      {
        type: "p",
        text: "Sahar bu sahifani slogan qilmaydi. U soatni ko‘rsatadi. Agar shahar ertalabki transportni, soyani va yaqin do‘konni o‘ylasa — yozilmagan soat qisqaradi. Qisqarish — tinch islohot.",
      },
    ],
  },
  {
    slug: "termiz-darvoza",
    title: "Termiz: janub darvozasida shamol",
    dek: "Amudaryo yaqinida yoz boshqacha issiq. Chegara, yuk, qadimiy tosh — uch qatlam bir shaharda yotadi.",
    kicker: "Janub",
    category: "viloyat",
    region: "surxondaryo",
    authorId: "shohruh",
    publishedAt: iso(4, 10, 0),
    readMinutes: 5,
    kind: "dispatch",
    cover: "/covers/tog.jpg",
    coverAlt: "Janubiy tizma va ochiq osmon",
    tags: ["termiz", "chegara", "surxondaryo"],
    body: [
      {
        type: "p",
        text: "Termiz tushida havo og‘ir. Daryo yaqinida shamol bor, lekin u salqin emas. Shahar shu og‘irlikka o‘rgan gan: ertalab ish, tushda soy, kechqurun suhbat.",
      },
      {
        type: "p",
        text: "Janub darvozasi faqat chegara emas. U muzey, yo‘l va bozor. Yuk kechasi o‘tadi, turist ertalab keladi, mahalliy odam esa ikkalasini ham ko‘rib turadi.",
      },
      {
        type: "p",
        text: "Sahar Termizni ekzotika qilmaydi. U issiqni, masofani va sabrni yozadi. Sabr — janubning infratuzilmasi.",
      },
    ],
  },
  {
    slug: "klub-futboli",
    title: "Klub kechasi: yorug‘lik o‘chganda hisob qoladi",
    dek: "Yozgi o‘yinlar issiqda o‘tadi. Tomoshabin kamroq, maydon qattiqroq. Hisob esa baribir ertalab gap bo‘ladi.",
    kicker: "Liga",
    category: "sport",
    authorId: "bekzod",
    publishedAt: iso(2, 22, 10),
    readMinutes: 4,
    kind: "brief",
    cover: "/covers/stadion.jpg",
    coverAlt: "Stadion yorug‘i o‘chgan kecha",
    tags: ["futbol", "klub", "liga"],
    body: [
      {
        type: "p",
        text: "Yozgi liga o‘yini kechqurun boshlanadi, chunki tushda maydon yashamaydi. Yorug‘lik minoralari ishlaydi, havo biroz yumshaydi, lekin oyoq osti hali issiq.",
      },
      {
        type: "p",
        text: "Tomoshabin soni ta’til tufayli kamayadi. Bu — klub kassasi uchun og‘riq, o‘yin sifatini esa o‘zgacha qiladi: shovqin kam, xato eshitiladi. Murabbiy shu eshitilishni yoqtirmasligi mumkin. Tahlilchi esa yoqtiradi.",
      },
      {
        type: "p",
        text: "Sentabrda tomoshabin qaytadi. Yozgi hisob esa qoladi. Jadval yozni unutmaydi.",
      },
    ],
  },
  {
    slug: "jahon-iqlim",
    title: "Jahon issiqligi: bizning yoz yolg‘iz emas",
    dek: "Mintaqadagi issiq to‘lqinlar bir xil xabarni aytadi: soya, suv, kechki tok. Farq — shaharlarning javobida.",
    kicker: "Iqlim",
    category: "jahon",
    authorId: "azizbek",
    publishedAt: iso(1, 15, 0),
    readMinutes: 5,
    kind: "column",
    cover: "/covers/quyosh.jpg",
    coverAlt: "Quyosh maydoni va dasht",
    tags: ["iqlim", "jahon", "issiqlik"],
    body: [
      {
        type: "p",
        text: "Yozgi issiq endi «g‘alati yil» emas. U takrorlanadi. O‘rta yer dengizi, Fors ko‘rfazi, Markaziy Osiyo — har biri o‘z rekordini aytadi. Rekord charchatadi. Odatiy issiq esa xavfliroq, chunki u sezilmay qoladi.",
      },
      {
        type: "p",
        text: "Javoblar turlicha: kimdir ish soatini siljitadi, kimdir soy ekadi, kimdir konditsionerni subsidiyalaydi. Eng arzon javob — ertalabki tartib. Eng qimmati — kechki tok.",
      },
      {
        type: "p",
        text: "Toshkent bu suhbatning chekkasida emas. U o‘rtasida. Shuning uchun Sahar jahon issiqligini uzoq xabar qilmaydi. U soyadan boshlaydi.",
      },
    ],
  },
  {
    slug: "namangan-gul",
    title: "Namangan: gul va to‘qimachilik orasida",
    dek: "Shahar o‘zini gul bilan eslatadi. Yoz oxirida esa sex ovozi kuchliroq: mato, buyurtma, sentabr oldidagi shoshilish.",
    kicker: "Vodiy",
    category: "viloyat",
    region: "namangan",
    authorId: "shohruh",
    publishedAt: iso(4, 8, 40),
    readMinutes: 4,
    kind: "brief",
    cover: "/covers/vodiy.jpg",
    coverAlt: "Vodiy yozgi manzarasi",
    tags: ["namangan", "to'qimachilik", "gul"],
    body: [
      {
        type: "p",
        text: "Namangan haqida yozilganda avval gul keladi. Bu adolatli, lekin to‘liq emas. Yoz oxirida sexlar kechasi ham ishlaydi. Maktab formasi, kuzgi buyurtma, eksport partiyasi — guldan ko‘ra shovqinliroq haqiqat.",
      },
      {
        type: "p",
        text: "To‘qimachilik shaharni ushlab turadi. Gul esa shaharni yumshatadi. Ikkalasi kerak. Faqat gul qolsa, ish yo‘q. Faqat sex qolsa, ko‘cha qattiq.",
      },
    ],
  },
  {
    slug: "tahririyat-odobi",
    title: "Nima uchun biz lenta emas, sahifamiz",
    dek: "Sahar yangilikni «hozir» deb yugurmaydi. U kunni yig‘adi, soatni o‘lchaydi, ohangni saqlaydi. Bu sekinlik — nuqson emas, usul.",
    kicker: "Tahririyat",
    category: "siyosat",
    authorId: "nilufar",
    publishedAt: iso(0, 5, 5),
    readMinutes: 6,
    kind: "essay",
    cover: "/covers/kutubxona.jpg",
    coverAlt: "Tahririyat o‘qish zali",
    tags: ["tahririyat", "matbuot", "odob"],
    body: [
      {
        type: "p",
        text: "Yangilik saytlari odatda lentaga o‘xshaydi: sarlavha, rasm, keyingi sarlavha. Ko‘z charchaydi, xotira qolmaydi. Sahar boshqa narsani sinab ko‘radi — ertalabki gazeta odobi. Bir sahifa. Bir ohang. Bir kun.",
      },
      {
        type: "p",
        text: "Biz «breaking» so‘zini ishlatmaymiz. Agar voqea haqiqatan shoshilinch bo‘lsa, u o‘zini bildiradi. Aks holda, u ertalabki brifingga kiritiladi yoki kiritilmaydi. Kiritilmaslik ham tahririyat qarori.",
      },
      {
        type: "h",
        text: "O‘quvchiga hurmat",
      },
      {
        type: "p",
        text: "Hurmat — kamroq bildirishnoma, aniqroq matn. Hurmat — muallif ismi, o‘qish vaqti, manba. Hurmat — kechasi ham o‘qiladigan harf o‘lchami. Texnika buni osonlashtiradi. Odob esa tanlov.",
      },
      {
        type: "quote",
        text: "Biz o‘quvchini ushlab turmaymiz. Uni ertalab kutamiz.",
        cite: "Sahar tahririyati",
      },
      {
        type: "p",
        text: "Agar bu usul sizga sekin ko‘rin sa, to‘g‘ri sezgan siz. Sekinlik — bizning yagona shoshilishimiz.",
      },
    ],
  },
  {
    slug: "fargona-ipak",
    title: "Farg‘ona: ipak yo‘li endi omborxonada",
    dek: "Ipak so‘zi go‘zal. Sexdagi dastgoh esa aniq. Yozgi buyurtmalar kuzgi bozorni belgilaydi.",
    kicker: "Vodiy",
    category: "iqtisod",
    region: "fargona",
    authorId: "javlon",
    publishedAt: iso(4, 12, 20),
    readMinutes: 5,
    kind: "dispatch",
    cover: "/covers/vodiy.jpg",
    coverAlt: "Vodiy kanali va ekin",
    tags: ["farg'ona", "ipak", "to'qimachilik"],
    body: [
      {
        type: "p",
        text: "Ipak yo‘li haqidagi gaplar odatda xarita va karvon bilan keladi. Farg‘onada esa u ombor, dastgoh va hisob-kitob. Yoz oxiri — buyurtma oynasi. Kim shu oynani o‘tkazib yuborsa, kuzgi bozorda jim qoladi.",
      },
      {
        type: "p",
        text: "Kichik sexlar katta brend kabi shovqin qilmaydi. Ular kechasi ishlaydi, ertalab topshiradi. Shu tinch zanjir viloyat iqtisodining katta qismi. Uni statistika ba’zan «boshqa» deb ataydi. Dala esa «ish» deb ataydi.",
      },
      {
        type: "p",
        text: "Sahar ipakni romantika qilmaydi. U buyurtma muddatini yozadi. Muddat — eng halol she’r.",
      },
    ],
  },
  {
    slug: "jizzax-mirzachol",
    title: "Mirzacho‘l: yangi bog‘, eski shamol",
    dek: "Jizzax dalasida daraxt qatori yosh. Shamol esa keksa. Ikkalasi bir yozda uchrashadi.",
    kicker: "Daladan",
    category: "viloyat",
    region: "jizzax",
    authorId: "shohruh",
    publishedAt: iso(5, 9, 10),
    readMinutes: 4,
    kind: "brief",
    cover: "/covers/quyosh.jpg",
    coverAlt: "Ochiq dasht va qator panellar",
    tags: ["jizzax", "bog'", "shamollar"],
    body: [
      {
        type: "p",
        text: "Yosh bog‘ birinchi yozida ko‘p suv ichadi. Shamol esa bargni sinab ko‘radi. Agronomlar aytadi: daraxt tutsa, keyingi besh yil osonroq. Tutmasa — qator bo‘shaydi.",
      },
      {
        type: "p",
        text: "Bu sahifa g‘alaba hikoyasi emas. U sinov hikoyasi. Cho‘lga daraxt ekish — she’r. Uni yozgacha saqlash — ish.",
      },
    ],
  },
  {
    slug: "xorazm-qala",
    title: "Xorazm: qal’a soyasi va yo‘l changi",
    dek: "Ichan-qal’a yozda erta ochiladi, tushda jim, kechqurun yana yorug‘. Mehmon shu ritmga moslashadi yoki charchaydi.",
    kicker: "Xorazm",
    category: "madaniyat",
    region: "xorazm",
    authorId: "madina",
    publishedAt: iso(5, 11, 0),
    readMinutes: 5,
    kind: "dispatch",
    cover: "/covers/samarqand.jpg",
    coverAlt: "Qadimiy me’morchilik soyasi",
    tags: ["xorazm", "xiva", "turizm"],
    body: [
      {
        type: "p",
        text: "Qal’a ichida yoz boshqacha eshitiladi. Tashqarida mashina, ichkarida qadam. G‘isht issiqni saqlaydi, kechasi esa qaytaradi. Mehmon shu qaytishni sezmasa, tushda ko‘chada qoladi.",
      },
      {
        type: "p",
        text: "Turizm xo‘jaligi ertalabki soatni dasturlashi kerak: muzey, hovli, choy. Tushdagi dastur odamni charchatadi, pulni esa kamaytiradi. Bu oddiy arifmetika, lekin u hali ham unutiladi.",
      },
      {
        type: "p",
        text: "Xorazm sahifasi go‘zallikni inkor etmaydi. U soatni qo‘yadi. Go‘zallik soat bilan yashasa, u uzoqroq turadi.",
      },
    ],
  },
  {
    slug: "navoiy-kon",
    title: "Navoiy: kon changi va shahar bog‘i",
    dek: "Sanoat shahri o‘zini faqat quvur bilan ko‘rsatmaydi. Yozda bog‘ ham bahs mavzusi: suv, soya, kechki havo.",
    kicker: "Sanoat",
    category: "iqtisod",
    region: "navoiy",
    authorId: "javlon",
    publishedAt: iso(5, 14, 30),
    readMinutes: 5,
    kind: "column",
    cover: "/covers/quyosh.jpg",
    coverAlt: "Sanoat dashti va ochiq osmon",
    tags: ["navoiy", "sanoat", "shahar"],
    body: [
      {
        type: "p",
        text: "Navoiy haqida yozilganda avval kon keladi. Bu to‘g‘ri, lekin shahar kon emas. Shahar — kechki bog‘, ertalabki avtobus, issiq shamol. Sanoat shu uch narsani yumshatmasa, u faqat ish beradi, yashash bermaydi.",
      },
      {
        type: "p",
        text: "Bog‘ suvi sanoat suvidan kam. Lekin u odamni ushlab turadi. Yozgi kechada o‘tiradigan joy bo‘lsa, mutaxassis qoladi. Bo‘lmasa, u Toshkentga qaraydi. Shu qarash — kadr siyosatining eng ochiq ko‘rsatkichi.",
      },
    ],
  },
  {
    slug: "sport-maktabi",
    title: "Hovli sporti: stadionsiz ham ritm bor",
    dek: "Yozgi kechada hovli maydoni to‘la. Bu terma jamoasi emas. Bu — shaharning nafas mashqi.",
    kicker: "Hovli",
    category: "sport",
    authorId: "bekzod",
    publishedAt: iso(3, 20, 40),
    readMinutes: 4,
    kind: "essay",
    cover: "/covers/stadion.jpg",
    coverAlt: "Bo‘sh maydon kechasi",
    tags: ["sport", "hovli", "yoshlar"],
    body: [
      {
        type: "p",
        text: "Katta stadion yozda ba’zan bo‘sh. Hovli esa to‘la. Chiroq zaif, to‘r eski, lekin o‘yin aniq. Bu yerda statistika yo‘q. Ritmi bor.",
      },
      {
        type: "p",
        text: "Agar shahar faqat katta arenani o‘ylasa, u tomoshabin tayyorlaydi. Hovlini o‘ylasa — o‘yinchi. Ikkalasi kerak. Lekin yoz kechasi haqiqat hovlida.",
      },
    ],
  },
  {
    slug: "toshkent-viloyat",
    title: "Nurafshon: poytaxt soyasi, o‘z ishi",
    dek: "Toshkent viloyati poytaxtga yopishgan. Lekin ertalabki yo‘l boshqa: sanoat, bog‘, yangi mahalla.",
    kicker: "Halqa",
    category: "viloyat",
    region: "toshkent",
    authorId: "shohruh",
    publishedAt: iso(2, 7, 50),
    readMinutes: 4,
    kind: "brief",
    cover: "/covers/toshkent-sahar.jpg",
    coverAlt: "Poytaxt ufqidagi ertalab",
    tags: ["nurafshon", "toshkent", "yo'l"],
    body: [
      {
        type: "p",
        text: "Poytaxtga kiruvchi yo‘l ertalab uzun. Viloyat shu yo‘lning bir uchi. Kimdir Toshkentga ishga ketadi, kimdir joyida qoladi. Qolganlar odatda ko‘rinmaydi, chunki xabar poytaxtga oqadi.",
      },
      {
        type: "p",
        text: "Sahar viloyatni «Toshkent atrofi» deb yozmaydi. U o‘z ertalabiga ega. Sanoat smenasi, bog‘ sug‘orishi, maktab avtobusi — uch alohida soat.",
      },
    ],
  },
];

export function articleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function articlesByCategory(id: string): Article[] {
  return ARTICLES.filter((a) => a.category === id);
}

export function articlesByRegion(id: string): Article[] {
  return ARTICLES.filter((a) => a.region === id);
}

export function leadArticle(): Article {
  return ARTICLES.find((a) => a.kind === "lead") ?? ARTICLES[0];
}

export function sortedByDate(list: Article[] = ARTICLES): Article[] {
  return [...list].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}
