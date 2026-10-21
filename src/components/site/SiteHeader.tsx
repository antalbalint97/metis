"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/site";
import { MetisMark } from "./MetisMark";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-4 py-5 sm:px-8 lg:px-16">
        <Link
          href="/"
          aria-label="Metis, kezdőlap"
          className="flex items-center gap-3.5 text-foreground no-underline"
          onClick={() => setOpen(false)}
        >
          <MetisMark id="hdr-mark" />
          <span className="mt-wordmark text-xl">METIS</span>
        </Link>

        <nav aria-label="Rovatok" className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "border-b-2 border-accent pb-1 text-[15px] text-foreground no-underline"
                    : "border-b-2 border-transparent pb-1 text-[15px] text-muted-foreground no-underline transition-colors hover:text-foreground"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/irj-nekunk"
            className="ds-btn ds-btn--primary ds-btn--sm no-underline"
            data-cta-id="header_write"
            data-analytics-placement="header"
            onClick={() => setOpen(false)}
          >
            Írj nekünk
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              {open ? (
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Rovatok"
          className="absolute inset-x-0 top-full border-y border-border bg-background px-4 pb-6 pt-2 shadow-md sm:px-8 lg:hidden"
        >
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className="grid grid-cols-[40px_1fr] items-baseline border-b border-border py-3.5 text-lg text-foreground no-underline"
            >
              <span className="mt-num text-sm">{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
