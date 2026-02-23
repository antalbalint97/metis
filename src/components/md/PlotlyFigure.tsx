"use client";


import dynamic from "next/dynamic";
import type React from "react";
import { useEffect, useMemo, useState } from "react";

type PlotComponentProps = {
  data: any[];
  layout?: any;
  frames?: any[] | undefined;
  config?: any;
  style?: React.CSSProperties;
  useResizeHandler?: boolean;
};

const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
}) as unknown as React.ComponentType<PlotComponentProps>;
type PlotlySpec = {
  data: any[];
  layout?: any;
  frames?: any[];
  config?: any;
};

type PlotlyFigureProps = {
  id?: string;
  height?: number;
};

export function PlotlyFigure({ id, height = 420 }: PlotlyFigureProps) {
  const [spec, setSpec] = useState<PlotlySpec | null>(null);
  const [error, setError] = useState<string | null>(null);

  const url = useMemo(() => {
    if (!id) return null;
    return `/plots/${id}.json`;
  }, [id]);

  useEffect(() => {
    if (!url) return;

    let cancelled = false;

    (async () => {
      try {
        setError(null);
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to load plot: ${res.status}`);
        const json = (await res.json()) as PlotlySpec;
        if (!cancelled) setSpec(json);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? "Unknown error");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [url]);

  /* ---------- Edge cases ---------- */

  if (!id) {
    return (
      <figure className="my-8 rounded-xl border border-border bg-muted p-5 text-sm text-muted-foreground">
        Plotly ábra: hiányzó id.
      </figure>
    );
  }

  if (error) {
    return (
      <figure className="my-8 rounded-xl border border-border bg-muted p-5 text-sm text-muted-foreground">
        Nem sikerült betölteni a Plotly ábrát ({id}): {error}
      </figure>
    );
  }

  if (!spec) {
    return (
      <figure className="my-8 rounded-xl border border-border bg-muted p-5 text-sm text-muted-foreground">
        Ábra betöltése…
      </figure>
    );
  }

  /* ---------- Normal render ---------- */

  const layout = {
    ...spec.layout,
    height,
    margin: spec.layout?.margin ?? { l: 40, r: 20, t: 30, b: 40 },
  };

  const config = {
    responsive: true,
    displaylogo: false,
    ...(spec.config ?? {}),
  };

  return (
    <figure className="my-10 rounded-xl border border-border bg-surface p-3">
      <Plot
        data={spec.data}
        layout={layout}
        frames={spec.frames}
        config={config}
        style={{ width: "100%" }}
        useResizeHandler
      />
    </figure>
  );
}
