import React from "react";

function getLanguage(className?: string) {
  if (!className) return null;
  const m = className.match(/language-([a-z0-9_-]+)/i);
  return m ? m[1].toLowerCase() : null;
}

type CodeProps = {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export function Code({ inline, className, children }: CodeProps) {
  const lang = getLanguage(className);
  const code = String(children ?? "").replace(/\n$/, "");

  if (inline) {
    return (
      <code className="rounded-md bg-zinc-100 px-1.5 py-0.5 text-[0.95em]">
        {code}
      </code>
    );
  }

  const isCalc = lang === "calc" || lang === "math" || lang === "textcalc";
  const isPython = lang === "python" || lang === "py";

  if (isCalc) {
    return (
    <div className="my-8 rounded-xl border border-zinc-200 bg-zinc-50 p-5">
    <div className="mb-3 text-sm font-semibold text-zinc-700">
    Számolás - lépésről lépésre
    </div>


    <div className="whitespace-pre-wrap font-mono text-sm leading-6 text-zinc-900">
    {code}
    </div>
    </div>
    );
  }

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950">
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
        <span className="text-xs font-medium text-zinc-300">
          {isPython ? "python" : lang ?? "code"}
        </span>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-6 text-zinc-100">
        <code className={className}>{code}</code>
      </pre>
    </div>
  );
}