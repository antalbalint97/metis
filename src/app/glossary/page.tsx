import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glossary | Metis",
  description: "Adatos fogalmak rövid, gyakorlati magyarázata.",
};

type Term = {
  term: string;
  desc: string;
};

type Section = {
  title: string;
  items: Term[];
};

const SECTIONS: Section[] = [
  {
    title: "Elemzői gondolkodás és EDA",
    items: [
      {
        term: "EDA (Exploratory Data Analysis, feltáró adatelemzés)",
        desc:
          "Az elemzés korai és végigkísérő szakasza, amikor megismered az adatot: mit jelent egy sor/oszlop, mi gyanús, milyen eloszlás van, mire alkalmas és mire nem.",
      },
      {
        term: "Iteratív",
        desc:
          "Olyan folyamat, ami körökben halad: kérdés → megnézés → új kérdés → finomítás. EDA tipikusan iteratív.",
      },
      {
        term: "Kérdésfeltevés",
        desc:
          "Az elemzés alapja: nem számolás, hanem jó kérdés. Például: Mi számít aktív usernek? Mikor tekintjük churn-nek?",
      },
      {
        term: "Definíció-egyeztetés",
        desc:
          "Stakeholderekkel közös nyelv megteremtése. Például churn, active user, basket, revenue mind lehet többféle.",
      },
      {
        term: "Döntéstámogatás",
        desc:
          "Az elemzés célja: a bizonytalanság csökkentése, nem bizonyítás és nem jóslás mindenáron.",
      },
      {
        term: "Bizonytalanság",
        desc:
          "Az a rész, amit nem tudunk biztosan az adatból. Kis minta, zajos mérés, hiányzó adatok, torzítások növelik.",
      },
      {
        term: "Torzítás (bias)",
        desc:
          "Olyan rendszeres hiba, ami félreviszi a következtetést. Példa: csak az aktív felhasználókat látod, a csendben eltűnőket nem.",
      },
      {
        term: "Adatminőség (data quality)",
        desc:
          "Az adat megbízhatósága: hiányok, duplikációk, hibás mértékegységek, késés, tracking hiba.",
      },
      {
        term: "Megfigyelés (observation)",
        desc:
          "Egy sor jelentése az adathalmazban. Kritikus: user-szint? tranzakció-szint? session-szint?",
      },
      {
        term: "Nevező (denominator)",
        desc:
          "Az arányok alapja: miből osztasz. Példa: churn rate = churn-ölők száma / kockázatban lévő bázis. Ha a nevező rossz, a mutató félrevisz.",
      },
      {
        term: "Mintanagyság",
        desc:
          "Hány megfigyelésből számolsz. Kis minta = nagy ingadozás, instabil arányok.",
      },
    ],
  },
  {
    title: "Leíró statisztika, eloszlások, összefoglalók",
    items: [
      {
        term: "Leíró statisztika",
        desc:
          "Olyan eszközök, amelyek az adat képét adják: középértékek, szóródás, eloszlás, percentilisek, arányok.",
      },
      {
        term: "Eloszlás",
        desc:
          "Megmutatja, hogyan terül el a változó: hol a tömeg, mennyi a szórás, vannak-e szélsőségek. Elemzői első lépés.",
      },
      {
        term: "Középérték (tipikus érték)",
        desc:
          "Egyetlen szám, ami összefoglal: átlag/medián/módusz. Nem mindegy, mikor melyik korrekt.",
      },
      {
        term: "Átlag (mean)",
        desc:
          "Összeg / darabszám. Érzékeny szélsőségekre. Bináris változónál (0/1) arányt jelent.",
      },
      {
        term: "Medián (median)",
        desc:
          "A sorba rendezett adatok közepe. Ferde eloszlásnál sokszor jobb tipikus érték üzleti adatoknál.",
      },
      {
        term: "Módusz (mode)",
        desc:
          "Leggyakoribb érték. Kategóriáknál különösen hasznos (pl. leggyakoribb csomag).",
      },
      {
        term: "Percentilis / kvantilis",
        desc:
          "Eloszlás-összefoglaló pontok (pl. 50% = medián, 90% = felső 10% alatt). Jó ferde eloszlásnál.",
      },
      {
        term: "Szóródás / variancia (általános fogalom)",
        desc:
          "Mennyire szétszórt az adat. Nem csak középérték számít, hanem a szélesség is.",
      },
      {
        term: "Ferde eloszlás (skewed distribution)",
        desc:
          "Sok kicsi, kevés nagyon nagy érték (pl. tenure, költés). Ilyenkor medián/percentilisek + eloszlás fontos.",
      },
      {
        term: "Sok nullás változó (zero-inflated)",
        desc:
          "Rengeteg 0 érték (pl. usage). Első kérdés: a 0 mit jelent? nem használja, még nem volt esélye, vagy rosszul mérjük?",
      },
      {
        term: "Outlier (szélső érték)",
        desc:
          "Extrém pontok. Nem automatikusan hiba: lehet power user, VIP ügyfél, nagy kosár. Elemzői döntés: külön kezeled? levágod vizuálisan? magyarázod?",
      },
      {
        term: "Arány (rate/ratio)",
        desc:
          "Valami / valami. Mindig kell mellé: definíció + nevező + időablak.",
      },
      {
        term: "Bináris (0/1) változó",
        desc:
          "Igen/nem jelleg. Átlaga = arány. Példa: churn=1 aránya = churn rate.",
      },
      {
        term: "Kategórikus változó",
        desc:
          "Címkék, csoportok (ország, csomag). Összefoglalás: gyakoriság, arány, top kategóriák.",
      },
      {
        term: "Numerikus változó",
        desc:
          "Szám jelleg (pénz, idő, darabszám). Összefoglalás: medián/átlag + eloszlás.",
      },
      {
        term: "Időváltozó (time)",
        desc:
          "Dátum/idősor. Elemzői fókusz: trend, szezon, összehasonlított időszak.",
      },
      {
        term: "Hisztogram",
        desc:
          "Eloszlás-ábra numerikus változóra (mely értékekből mennyi van).",
      },
      {
        term: "Boxplot",
        desc:
          "Eloszlás gyors összefoglalása (medián, kvartilisek, outlierek).",
      },
      {
        term: "Csoportosítás (grouping)",
        desc:
          "Adat bontása dimenziók mentén (ország, csomag, új vs régi). Elemzés tipikusan csoportonként érdekes.",
      },
      {
        term: "Aggregálás (aggregation)",
        desc:
          "Összegzés egy szintre (pl. user szintre, hónap szintre): sum, avg, median, count.",
      },
    ],
  },
  {
    title: "Időbeli összehasonlítás, riportos logika",
    items: [
      { term: "TY (This Year)", desc: "Aktuális időszak (pl. idei január)." },
      { term: "LY (Last Year)", desc: "Bázis összehasonlítás (pl. tavalyi január)." },
      {
        term: "Időablak (window)",
        desc:
          "Milyen időtartamon belül mérsz (7 nap, 30 nap, hónap). Ugyanaz a churn/usage mást jelent más ablakban.",
      },
      {
        term: "Trend",
        desc:
          "Időbeli változás mintázata. Riportban gyakori: MoM, YoY.",
      },
      {
        term: "Riportolás",
        desc:
          "Rendszeres, standard kimenet (KPI táblák, trend chartok). Nem feltétlen elemzés, inkább megfigyelés és követés.",
      },
      {
        term: "Ad hoc insight",
        desc:
          "Egyszeri, kérdésvezérelt megállapítás (miért esett vissza a konverzió tegnap?). Gyors, de definíció- és adatminőség-érzékeny.",
      },
      {
        term: "Dashboard",
        desc:
          "Interaktív riportfelület. Jó dashboard: definíciók tiszták, nevezők látszanak, és nem csábít hamis egy szám sztorikra.",
      },
      {
        term: "KPI (Key Performance Indicator)",
        desc:
          "Kulcsmutató, amit rendszeresen figyeltek. Veszély: ha definíció nélkül KPI-t néztek, viták lesznek.",
      },
      { term: "Metric (mutató)", desc: "Bármilyen mérőszám. KPI ennek egy kiemelt változata." },
      {
        term: "Single source of truth",
        desc:
          "Közös, hiteles definíció- és adatforrás-réteg, amiből minden riport számol. Cél: ugyanarra a kérdésre ne legyen 3 külön szám.",
      },
    ],
  },
  {
    title: "Churn, retention, usage, ügyfél-életciklus",
    items: [
      {
        term: "Churn (lemorzsolódás)",
        desc:
          "Az a jelenség, hogy a felhasználó/ügyfél nem folytatja a kapcsolatot: lemond, nem újít, vagy eltűnik (inaktív).",
      },
      {
        term: "Churn rate",
        desc:
          "Churn-ölők aránya egy időablakban. Kritikus: definíció + nevező (ki volt kockázatban).",
      },
      {
        term: "Retention (megtartás)",
        desc:
          "A churn tükre: hányan maradnak aktívak/előfizetők. Sokszor kohortokkal nézik.",
      },
      {
        term: "Reactivation (visszaaktiválás)",
        desc:
          "Korábban inaktív user újra aktív lesz. A churn definícióját bonyolíthatja.",
      },
      {
        term: "Inaktivitás",
        desc:
          "Nem használja / nem vásárol. Fontos: az inaktivitás nem mindig churn (lehet szezonális vagy ritka használatú termék).",
      },
      {
        term: "Usage (használat)",
        desc:
          "Mennyit és hogyan használja a terméket (session, event, feature usage). Nullák értelmezése különösen fontos.",
      },
      {
        term: "Tenure",
        desc:
          "Mennyi ideje él a kapcsolat: előfizetés hossza, ügyfél-életkor, vásárlói életkor.",
      },
      {
        term: "Lifecycle (életciklus)",
        desc:
          "Belépés → aktiváció → rendszeres használat → csökkenés → churn vagy megújulás. A churn gyakran életciklus-szakaszhoz kötött.",
      },
      { term: "Power user", desc: "Kiemelkedően aktív felhasználó. Outlier lehet, de üzleti motor is." },
      {
        term: "VIP / high value customer",
        desc:
          "Nagy értékű ügyfél. Ugyanaz a churn rate mást jelent, ha főleg VIP-k mennek el.",
      },
      {
        term: "Normális lemorzsolódás",
        desc:
          "Minden terméknél van baseline churn. Az elemző kérdése: mikor tér el ettől, kiknél, miért.",
      },
    ],
  },
];

function DefinitionList({ items }: { items: Term[] }) {
  return (
    <dl className="mt-5 space-y-5">
      {items.map((it) => (
        <div key={it.term} className="rounded-xl border border-border bg-surface p-4 sm:p-5 shadow-[var(--shadow-xs)]">
          <dt className="font-semibold text-foreground">{it.term}</dt>
          <dd className="mt-2 text-muted-foreground leading-relaxed">{it.desc}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function SzotarPage() {
  return (
    <article className="max-w-none">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">Adatos szótár</h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Rövid fogalommagyarázatok azokhoz a kifejezésekhez, amik elemzés közben újra és újra előjönnek.
      </p>

      <div className="mt-10 space-y-12">
        {SECTIONS.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">{section.title}</h2>
            <DefinitionList items={section.items} />
          </section>
        ))}
      </div>
    </article>
  );
}
