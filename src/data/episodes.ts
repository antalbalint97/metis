/**
 * Video / podcast episodes of the three video sections.
 *
 * NOTE: the entries below are the sample texts of the redesign plan
 * ("A szövegek példaszövegek"). Replace them with the real episodes, and add
 * `youtubeId` to embed the player instead of the placeholder screen.
 */

export type SectionKey = "eletkepek" | "vita" | "beszelgetesek";

export const SECTION_META: Record<
  SectionKey,
  { label: string; singular: string; href: string; title: string; lead: string; guestCta: string }
> = {
  eletkepek: {
    label: "Életképek",
    singular: "Életképek",
    href: "/eletkepek",
    title: "Életképek",
    lead:
      "Emberek és élethelyzetek, akikről a nagy médiumok nem forgatnak. Tanárok, ápolók, hajléktalan emberek, orvosok. Egy kamera, egy házi stúdió, és idő arra, hogy végigmondják.",
    guestCta: "Ismersz valakit, akinek el kéne mondania? Ajánlj vendéget az Életképekbe.",
  },
  vita: {
    label: "Vita",
    singular: "Vita",
    href: "/vita",
    title: "Vita",
    lead:
      "Két álláspont ül egy asztalnál, moderátorral. Nem kell egyetérteniük. Az ellenvéleményt a legerősebb formájában mondjuk ki.",
    guestCta: "Van egy kérdés, amiről két oldalt is meg kéne hallgatni? Javasolj vitatémát.",
  },
  beszelgetesek: {
    label: "Beszélgetések",
    singular: "Beszélgetés",
    href: "/beszelgetesek",
    title: "Beszélgetések",
    lead:
      "Hosszú, vágatlan beszélgetések olyanokkal, akik közelről látják, hogyan működik a közélet, az iskola vagy a munka.",
    guestCta: "Kivel beszélgessünk legközelebb? Ajánlj vendéget.",
  },
};

export type Chapter = { time: string; title: string };
export type TranscriptLine = { time: string; text: string };

export type Episode = {
  slug: string;
  section: SectionKey;
  number: number;
  title: string;
  excerpt: string;
  minutes: number;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  topic?: string;
  author?: string;
  youtubeId?: string;
  about?: string;
  chapters?: Chapter[];
  transcript?: TranscriptLine[];
  links?: { label: string; href: string }[];
};

export const EPISODES: Episode[] = [
  {
    slug: "ejszakai-muszak",
    section: "eletkepek",
    number: 1,
    title: "Éjszakai műszak",
    excerpt: "Harminc év a sürgősségin. Egy ápoló arról, mit nem lát a beteg, és mit nem lát a rendszer.",
    minutes: 42,
    date: "2026-10-18",
    topic: "Egészségügy",
    about:
      "A vendég harminc éve dolgozik egy budapesti kórház sürgősségi osztályán. A beszélgetés egy házi stúdióban készült, vágatlanul, egy kamerával. Nevét kérésére nem közöljük.",
    chapters: [
      { time: "00:00", title: "Bemutatkozás" },
      { time: "03:40", title: "Az első műszak" },
      { time: "14:10", title: "Amit a beteg nem lát" },
      { time: "27:55", title: "Amit a rendszer nem lát" },
      { time: "38:20", title: "Miért maradt" },
    ],
    transcript: [
      {
        time: "03:40",
        text: "„Az első műszakom után hazamentem és nem tudtam elmondani senkinek, mi történt. Nem azért, mert titok. Azért, mert nem volt rá szó.”",
      },
      {
        time: "14:10",
        text: "„A beteg a várakozást látja. Én azt látom, hogy három ember van hatra. Ugyanaz a folyosó, két valóság.”",
      },
    ],
  },
  {
    slug: "a-tanterem-utan",
    section: "eletkepek",
    number: 2,
    title: "A tanterem után",
    excerpt: "Egy vidéki tanár, aki délután futárkodik. Nem panasz, csak leltár.",
    minutes: 38,
    date: "2026-10-04",
    topic: "Oktatás",
  },
  {
    slug: "fedel-nelkul-nem-hang-nelkul",
    section: "eletkepek",
    number: 3,
    title: "Fedél nélkül, nem hang nélkül",
    excerpt: "Két év az utcán, egy a szállón. Mit jelent elveszteni, aztán visszakérni a láthatóságot.",
    minutes: 51,
    date: "2026-09-20",
    topic: "Lakhatás",
  },
  {
    slug: "a-falu-orvosa",
    section: "eletkepek",
    number: 4,
    title: "A falu orvosa",
    excerpt: "Egy háziorvos, aki három településen rendel, és tudja mindenki nevét.",
    minutes: 46,
    date: "2026-09-06",
    topic: "Vidék",
  },
  {
    slug: "alapjovedelem-ket-allaspont-egy-asztal",
    section: "vita",
    number: 1,
    title: "Alapjövedelem: két álláspont, egy asztal",
    excerpt: "Közgazdász és szociális munkás, 60 perc, moderátorral. Nem kell egyetérteniük.",
    minutes: 61,
    date: "2026-09-30",
    author: "Vendégszerzők",
  },
  {
    slug: "mit-tanit-az-osztalyterem-a-demokraciarol",
    section: "beszelgetesek",
    number: 1,
    title: "Mit tanít az osztályterem a demokráciáról?",
    excerpt: "Egy középiskolai tanárral arról, hol kezdődik a vitakultúra.",
    minutes: 54,
    date: "2026-09-23",
    author: "Antal Bálint",
  },
];

/** Episodes of a section, newest number first. */
export function getEpisodes(section: SectionKey) {
  return EPISODES.filter((e) => e.section === section).sort((a, b) => b.number - a.number);
}

/** The newest episode of a section by date: the one featured in the monitor card. */
export function getLatestEpisode(section: SectionKey) {
  return [...EPISODES.filter((e) => e.section === section)].sort((a, b) => (a.date < b.date ? 1 : -1))[0] ?? null;
}

export function getEpisode(section: SectionKey, slug: string) {
  return EPISODES.find((e) => e.section === section && e.slug === slug) ?? null;
}

export function episodeHref(e: Episode) {
  return `${SECTION_META[e.section].href}/${e.slug}`;
}
