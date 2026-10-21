"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

const TYPES = [
  { key: "iras", label: "Írás" },
  { key: "valasz", label: "Válasz egy cikkre" },
  { key: "vendeg", label: "Vendég ajánlása" },
] as const;
type TypeKey = (typeof TYPES)[number]["key"];

const SECTIONS = ["Esszé", "Vita", "Életképek", "Egyéb"];

/**
 * Submission form. There is no backend: submitting opens the visitor's mail
 * client with everything filled in, addressed to the editors.
 */
export function SubmissionForm() {
  const params = useSearchParams();
  const initial = TYPES.find((t) => t.key === params.get("tipus"))?.key ?? "iras";
  const [type, setType] = useState<TypeKey>(initial);
  const [section, setSection] = useState(initial === "vendeg" ? "Életképek" : "Esszé");
  const [consent, setConsent] = useState(false);
  const replyTo = params.get("cikk") ?? "";

  const titleLabel = type === "vendeg" ? "Kit ajánlasz?" : type === "valasz" ? "Melyik írásra válaszolsz?" : "Az írás címe";
  const titlePlaceholder = type === "vendeg" ? "Név vagy foglalkozás" : type === "valasz" ? "Az eredeti írás címe" : "Munkacím is lehet";
  const bodyLabel = type === "vendeg" ? "Miért kéne elmondania?" : "A szöveg";

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const typeLabel = TYPES.find((t) => t.key === type)!.label;
    const title = String(data.get("title") ?? "");
    const body = [
      `Típus: ${typeLabel}`,
      type === "vendeg" ? null : `Rovat: ${section}`,
      `Név: ${data.get("name")}`,
      `E-mail: ${data.get("email")}`,
      `${titleLabel} ${title}`,
      "",
      "Rövid összefoglaló:",
      String(data.get("summary") ?? ""),
      "",
      `${bodyLabel}:`,
      String(data.get("text") ?? ""),
      "",
      "Hozzájárulok, hogy a Metis a nevem alatt közölje, és elfogadom, hogy indoklással elutasíthatja.",
    ]
      .filter((l) => l !== null)
      .join("\n");
    const subject = `[Metis] ${typeLabel}: ${title}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Mit küldesz?">
        {TYPES.map((t) => (
          <button key={t.key} type="button" className="mt-chip !h-10 !px-5" aria-pressed={type === t.key} onClick={() => setType(t.key)}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium">
          Neved
          <input name="name" required autoComplete="name" placeholder="Teljes név" className="mt-field font-normal" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium">
          E-mail
          <input name="email" type="email" required autoComplete="email" placeholder="nev@pelda.hu" className="mt-field font-normal" />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-medium">
        {titleLabel}
        <input
          key={type}
          name="title"
          required
          defaultValue={type === "valasz" ? replyTo : ""}
          placeholder={titlePlaceholder}
          className="mt-field font-normal"
        />
      </label>

      {type !== "vendeg" ? (
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium">Rovat</span>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Rovat">
            {SECTIONS.map((s) => (
              <button
                key={s}
                type="button"
                className="mt-chip mt-chip--accent !rounded-[var(--radius-sm)]"
                aria-pressed={section === s}
                onClick={() => setSection(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <label className="flex flex-col gap-2 text-sm font-medium">
        Rövid összefoglaló
        <textarea name="summary" rows={3} placeholder="Két-három mondat: miről szól, és miért most." className="mt-field font-normal" />
      </label>

      <label className="flex flex-col gap-2 text-sm font-medium">
        {bodyLabel}
        <textarea
          name="text"
          rows={type === "vendeg" ? 5 : 10}
          placeholder={
            type === "vendeg"
              ? "Mit lát közelről, amit mi nem? Hogyan érhetjük el?"
              : "Illeszd be ide. Nincs hosszkorlát, de a 6–12 perces olvasás a jellemző."
          }
          className="mt-field font-normal"
        />
      </label>

      <p className="rounded-[var(--radius-sm)] border border-dashed border-border-strong px-4 py-4 text-center text-sm text-subtle-foreground">
        Ha .docx, .md vagy .pdf fájlban küldenéd, csatold a megnyíló levélhez.
      </p>

      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-[18px] w-[18px] accent-[var(--accent)]" />
        Hozzájárulok, hogy az írást a Metis a nevem alatt közölje, és elfogadom, hogy indoklással elutasíthatja.
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="ds-btn ds-btn--primary ds-btn--lg" data-cta-id="submission_send" data-analytics-placement="submission_form">
          Beküldöm
        </button>
        <span className="text-sm text-subtle-foreground">Öt munkanapon belül válaszolunk.</span>
      </div>
    </form>
  );
}
