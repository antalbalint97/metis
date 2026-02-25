"use client";

import { useRef, useEffect, useState, useCallback } from "react";

const testimonials = [
  {
    quote:
      "Az órák nagyon jó hangulatúak voltak, Bálint személyisége pedig kifejezetten biztató és önbizalmat adó volt. A kitűzött célt sikerült elérni",
    name: "Csenge",
  },
  {
    quote:
      "Én nagyon ajánlom, hogy tőled vegyenek órát, mert alaposan el magyarázod nem csak elmondod mit hogyan kéne csinálni. Figyelsz hogy ne menjünk el részletek felett. És úgy érzem személyre szabott az egész óra.",
    name: "Petra",
  },
  {
    quote:
      "Szeretném megköszönni a segítséget, amit a közös órák során kaptam. Már egy kétórás alkalom is rengeteget segített: át tudtunk beszélni olyan témákat, amik egyedül nem mentek, és sokkal érthetőbbé vált minden. Nagyon türelmes, érthetően magyaráz, és teljesen az én tempómhoz igazodott. Bátran tudom ajánlani, mert tényleg sokat számított nekem ez a felkészítés.",
    name: "Panni",
  },
  {
    quote:
      "Sokat segített, 88 százalékosra sikerült a vizsgám pár napos intenzív tanulás után. Megértettem a homályos részeket és a számolásokat. Közvetlen jó hangulatú órák, bátran lehet kérdezni.",
    name: "István",
  },
  {
    quote:
      "Pénzügyi táblázat tervezése céljából kerestem magántanárt. A személyes órán minden segítséget megkaptam, még a táblázat is megosztásra került velem, így ha kell, visszanézhetek minden végrehajtott műveletet, amire szükségem van. Amennyiben a későbbiekben segítségre van szükségem, jelzem, és rövid időn belül meg is kapom a választ. Mindenkinek ajánlom, elégedett vagyok a közös munkával.",
    name: "Bence",
  },
  {
    quote:
      "Bálint rendkívül türelmes és segítőkész tanár és mentor egyben. Bárkinek nyugodt szívvel ajánlom, aki szeretné elkezdeni vagy továbbfejleszteni a programozási tudását. Az alapoktól kezdtük a Python nyelvet, és nemcsak a kódolásban segít, hanem az egyik legfontosabb készség fejlesztésében is: a logikus gondolkodásban és a komplex problémák hatékony lebontásában. Az órák nem merülnek ki a programozásban, karriertanácsadásban és interjúkra való felkészülésben is támogat. Teljes mértékben elégedett vagyok vele, jelenleg is a tanulója vagyok, és továbbra is veszek tőle órákat.",
    name: "Laci",
  },
  {
    quote:
      "Bálint tényleg nagyon felkészült, nagyon jó humorú és őszintén nem éreztem magam kellemetlenül, ha valamit lassabban értettem meg. Időpont és egyéb részletek egyeztetésében is nagyon rugalmas! Köszi, Bálint!",
    name: "Kata",
  },
];

export default function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  /* auto-scroll */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (isHovered) return;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 2;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 1, behavior: "auto" });
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isHovered]);

  /* listen for scroll to update arrow state */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 340;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          aria-label="Előző visszajelzés"
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-3 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface shadow-[var(--shadow-md)] text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {/* Right arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          aria-label="Következő visszajelzés"
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-3 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface shadow-[var(--shadow-md)] text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M6 4L10 8L6 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex w-[320px] shrink-0 flex-col justify-between rounded-xl border border-border bg-surface p-5 sm:p-6 shadow-[var(--shadow-xs)]"
          >
            <blockquote className="text-sm leading-relaxed text-muted-foreground">
              {`\u201E${t.quote}\u201D`}
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium text-foreground">
              {"— "}
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
