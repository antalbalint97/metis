"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { testimonials } from "@/data/testimonials";

export default function MentorTestimonialsCarousel() {
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
    el.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          aria-label="Előző visszajelzés"
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-3 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface shadow-[var(--shadow-md)] text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          aria-label="Következő visszajelzés"
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-3 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface shadow-[var(--shadow-md)] text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex w-[320px] shrink-0 flex-col justify-between rounded-xl border border-border bg-surface p-5 sm:p-6 shadow-[var(--shadow-xs)]"
          >
            <div>
              <span className="inline-block rounded-md bg-accent-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                Kivonat
              </span>
              <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {`\u201E${t.quote}\u201D`}
              </blockquote>
            </div>
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
