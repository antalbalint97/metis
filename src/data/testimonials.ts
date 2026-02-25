export interface Testimonial {
  /** Short excerpt for carousel cards */
  quote: string;
  /** Full-length testimonial for the dedicated section */
  full: string;
  /** First name only */
  name: string;
  /** Optional role/context label */
  role?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Az órák nagyon jó hangulatúak voltak, Bálint személyisége pedig kifejezetten biztató és önbizalmat adó volt. A kitűzött célt sikerült elérni",
    full: "Az órák nagyon jó hangulatúak voltak, Bálint személyisége pedig kifejezetten biztató és önbizalmat adó volt. Nagyon türelmes, ha valamit nem értettem, más oldalról közelítettük meg a dolgot. A kitűzött célt sikerült elérni, és sokkal magabiztosabbnak érzem magam a statisztika terén. Mindenképp ajánlom mindenkinek, aki szeretne fejlődni.",
    name: "Csenge",
    role: "Statisztika felkészülés",
  },
  {
    quote:
      "Én nagyon ajánlom, hogy tőled vegyenek órát, mert alaposan el magyarázod nem csak elmondod mit hogyan kéne csinálni. Figyelsz hogy ne menjünk el részletek felett. És úgy érzem személyre szabott az egész óra.",
    full: "Én nagyon ajánlom, hogy tőled vegyenek órát, mert alaposan elmagyarázod, nem csak elmondod, mit hogyan kéne csinálni. Figyelsz, hogy ne menjünk el részletek felett. És úgy érzem, személyre szabott az egész óra. Nem egy sablon alapján haladunk, hanem tényleg arra koncentrálunk, ami nekem a legfontosabb. Ez hatalmas különbség volt a korábbi tanulásaimhoz képest.",
    name: "Petra",
    role: "Python és adatelemzés",
  },
  {
    quote:
      "Szeretném megköszönni a segítséget, amit a közös órák során kaptam. Már egy kétórás alkalom is rengeteget segített: át tudtunk beszélni olyan témákat, amik egyedül nem mentek, és sokkal érthetőbbé vált minden.",
    full: "Szeretném megköszönni a segítséget, amit a közös órák során kaptam. Már egy kétórás alkalom is rengeteget segített: át tudtunk beszélni olyan témákat, amik egyedül nem mentek, és sokkal érthetőbbé vált minden. Nagyon türelmes, érthetően magyaráz, és teljesen az én tempómhoz igazodott. Bátran tudom ajánlani, mert tényleg sokat számított nekem ez a felkészítés.",
    name: "Panni",
    role: "Vizsga felkészülés",
  },
  {
    quote:
      "Sokat segített, 88 százalékosra sikerült a vizsgám pár napos intenzív tanulás után. Megértettem a homályos részeket és a számolásokat. Közvetlen jó hangulatú órák, bátran lehet kérdezni.",
    full: "Sokat segített, 88 százalékosra sikerült a vizsgám pár napos intenzív tanulás után. Megértettem a homályos részeket és a számolásokat. Közvetlen, jó hangulatú órák, bátran lehet kérdezni. Ami különösen jó volt, hogy nem csak a megoldást mutatta meg, hanem a gondolkodásmódot is. Így a vizsgán is tudtam alkalmazni, amit tanultam.",
    name: "István",
    role: "Statisztika vizsga",
  },
  {
    quote:
      "Pénzügyi táblázat tervezése céljából kerestem magántanárt. A személyes órán minden segítséget megkaptam, még a táblázat is megosztásra került velem, így ha kell, visszanézhetek minden végrehajtott műveletet.",
    full: "Pénzügyi táblázat tervezése céljából kerestem magántanárt. A személyes órán minden segítséget megkaptam, még a táblázat is megosztásra került velem, így ha kell, visszanézhetek minden végrehajtott műveletet, amire szükségem van. Amennyiben a későbbiekben segítségre van szükségem, jelzem, és rövid időn belül meg is kapom a választ. Mindenkinek ajánlom, elégedett vagyok a közös munkával.",
    name: "Bence",
    role: "Pénzügyi modellezés",
  },
  {
    quote:
      "Bálint rendkívül türelmes és segítőkész tanár és mentor egyben. Bárkinek nyugodt szívvel ajánlom, aki szeretné elkezdeni vagy továbbfejleszteni a programozási tudását.",
    full: "Bálint rendkívül türelmes és segítőkész tanár és mentor egyben. Bárkinek nyugodt szívvel ajánlom, aki szeretné elkezdeni vagy továbbfejleszteni a programozási tudását. Az alapoktól kezdtük a Python nyelvet, és nemcsak a kódolásban segít, hanem az egyik legfontosabb készség fejlesztésében is: a logikus gondolkodásban és a komplex problémák hatékony lebontásában. Az órák nem merülnek ki a programozásban, karriertanácsadásban és interjúkra való felkészülésben is támogat. Teljes mértékben elégedett vagyok vele, jelenleg is a tanulója vagyok, és továbbra is veszek tőle órákat.",
    name: "Laci",
    role: "Python és karrierváltás",
  },
  {
    quote:
      "Bálint tényleg nagyon felkészült, nagyon jó humorú és őszintén nem éreztem magam kellemetlenül, ha valamit lassabban értettem meg. Időpont és egyéb részletek egyeztetésében is nagyon rugalmas!",
    full: "Bálint tényleg nagyon felkészült, nagyon jó humorú és őszintén nem éreztem magam kellemetlenül, ha valamit lassabban értettem meg. Időpont és egyéb részletek egyeztetésében is nagyon rugalmas! Köszi, Bálint! Szerintem az a legjobb benne, hogy tényleg alkalmazkodik ahhoz, ki milyen szinten van, és úgy építi fel az órákat, hogy az neked a leghasznosabb legyen.",
    name: "Kata",
    role: "Adatelemzés alapok",
  },
];
