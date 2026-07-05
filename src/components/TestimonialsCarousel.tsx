"use client";

import { useState } from "react";
import { Card } from "@meniva/design-system";
import { testimonials } from "@/data/testimonials";
import { trackAnalyticsEvent } from "@/components/Analytics";

const INITIAL_COUNT = 6;

export default function TestimonialsCarousel() {
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, INITIAL_COUNT);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleTestimonials.map((testimonial, index) => (
          <Card
            key={`${testimonial.name}-${index}`}
            as="figure"
            padding="lg"
            className="flex min-w-0 flex-col"
          >
            <blockquote className="text-sm leading-relaxed text-muted-foreground">
              „{testimonial.quote}”
            </blockquote>

            {testimonial.full !== testimonial.quote && (
              <details
                className="testimonial-details mt-4"
                onToggle={(event) => {
                  if (event.currentTarget.open) {
                    trackAnalyticsEvent("testimonial_expand", { testimonial_index: index + 1 });
                  }
                }}
              >
                <summary>Teljes visszajelzés</summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {testimonial.full}
                </p>
              </details>
            )}

            <figcaption className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-5 text-sm">
              <span className="min-w-0">
                <strong className="font-semibold text-foreground">
                  {testimonial.name}
                </strong>
                <span className="text-muted-foreground">
                  {" · "}
                  {testimonial.role}
                </span>
              </span>
              <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                5/5
              </span>
            </figcaption>
          </Card>
        ))}
      </div>

      {testimonials.length > INITIAL_COUNT && (
        <div className="mt-7 flex justify-center">
          <button
            type="button"
            className="ds-btn ds-btn--outline ds-btn--md"
            onClick={() => setShowAll((current) => !current)}
            aria-expanded={showAll}
          >
            {showAll ? "Kevesebb visszajelzés" : "További visszajelzések"}
          </button>
        </div>
      )}
    </div>
  );
}
