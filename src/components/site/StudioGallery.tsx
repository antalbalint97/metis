"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { StudioPhoto } from "@/data/studio";

const INTERVAL_MS = 5000;
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/**
 * Auto-advancing, cross-fading slideshow of the studio photos for the monitor
 * card. Pauses on hover/focus, stops for prefers-reduced-motion, and can be
 * driven with the arrows, the dots, the keyboard or a swipe.
 */
export function StudioGallery({ photos, sizes }: { photos: StudioPhoto[]; sizes: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
  const touchStartX = useRef<number | null>(null);
  const count = photos.length;

  const go = useCallback((delta: number) => setIndex((i) => (i + delta + count) % count), [count]);

  useEffect(() => {
    if (count < 2 || paused || reducedMotion) return;
    const timer = window.setTimeout(() => go(1), INTERVAL_MS);
    return () => window.clearTimeout(timer);
  }, [count, index, paused, reducedMotion, go]);

  const current = photos[index];

  return (
    <div
      className="group absolute inset-0 overflow-hidden"
      role="region"
      aria-roledescription="galéria"
      aria-label="Fotók a stúdióról"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
      }}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
      }}
    >
      {photos.map((photo, i) => (
        <div
          key={photo.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority={i === 0}
            sizes={sizes}
            className="mt-kenburns object-cover"
            style={photo.position ? { objectPosition: photo.position } : undefined}
          />
        </div>
      ))}

      {count > 1 ? (
        <>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 pb-4">
            <p className="min-h-[1.25rem] text-sm text-monitor-foreground" aria-live="polite">
              {current.caption ?? ""}
            </p>
            <div className="flex shrink-0 items-center gap-2">
              {photos.map((photo, i) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`${i + 1}. kép`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-monitor-accent" : "w-2 bg-monitor-foreground/60 hover:bg-monitor-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Előző kép"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-lg text-monitor-foreground opacity-0 transition-opacity focus-visible:opacity-100 group-hover:opacity-100 max-md:opacity-100"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Következő kép"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-lg text-monitor-foreground opacity-0 transition-opacity focus-visible:opacity-100 group-hover:opacity-100 max-md:opacity-100"
          >
            →
          </button>
        </>
      ) : null}
    </div>
  );
}
