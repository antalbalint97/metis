"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials";

export default function FullTestimonials() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {testimonials.map((t, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={t.name}
            className="rounded-xl border border-border bg-surface shadow-[var(--shadow-xs)]"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-foreground">
                  {t.name}
                </span>
                {t.role && (
                  <span className="hidden sm:inline text-xs text-muted-foreground">
                    {t.role}
                  </span>
                )}
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={`shrink-0 text-muted-foreground transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="border-t border-border px-5 py-4 sm:px-6">
                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                  {`\u201E${t.full}\u201D`}
                </blockquote>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
