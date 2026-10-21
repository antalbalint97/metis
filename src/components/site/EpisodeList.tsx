"use client";

import { useState } from "react";
import type { Episode } from "@/data/episodes";
import { EpisodeRow } from "./EpisodeRow";
import { SectionHead } from "./ui";

/** Episode list with topic filter chips (only shown when episodes carry topics). */
export function EpisodeList({ episodes, overline }: { episodes: Episode[]; overline: string }) {
  const topics = Array.from(new Set(episodes.map((e) => e.topic).filter((t): t is string => Boolean(t))));
  const [topic, setTopic] = useState<string | null>(null);
  const shown = topic ? episodes.filter((e) => e.topic === topic) : episodes;

  return (
    <>
      <SectionHead overline={overline} title="Az összes epizód, sorban">
        {topics.length > 1 ? (
          <div className="flex flex-wrap gap-2" role="group" aria-label="Szűrés téma szerint">
            <button type="button" className="mt-chip" aria-pressed={topic === null} onClick={() => setTopic(null)}>
              Mind
            </button>
            {topics.map((t) => (
              <button key={t} type="button" className="mt-chip" aria-pressed={topic === t} onClick={() => setTopic(t)}>
                {t}
              </button>
            ))}
          </div>
        ) : null}
      </SectionHead>
      <div className="mt-7 border-t border-border">
        {shown.map((e) => (
          <EpisodeRow key={e.slug} episode={e} />
        ))}
      </div>
    </>
  );
}
