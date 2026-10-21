import Link from "next/link";
import { CONTACT_EMAIL, SECTIONS } from "@/lib/site";
import { MetisMark } from "./MetisMark";

const linkClass = "text-monitor-muted no-underline transition-colors hover:text-monitor-foreground";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-monitor-muted">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-4 pb-10 pt-14 sm:px-8 lg:px-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr] lg:gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3.5">
              <MetisMark id="ftr-mark" tone="dark" width={28} />
              <span className="mt-wordmark text-xl font-light text-monitor-foreground">METIS</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              Történetek és viták, amelyek máshol nem férnek be. Nem piaci alapon, átláthatóan.
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-monitor-accent">Benned a létra</p>
          </div>

          <nav aria-label="Rovatok" className="flex flex-col gap-3 text-sm">
            <p className="mb-1 font-semibold text-monitor-foreground">Rovatok</p>
            {SECTIONS.map((s) => (
              <Link key={s.href} href={s.href} className={linkClass}>
                {s.label}
              </Link>
            ))}
          </nav>

          <nav aria-label="Metis" className="flex flex-col gap-3 text-sm">
            <p className="mb-1 font-semibold text-monitor-foreground">Metis</p>
            <Link href="/rolunk" className={linkClass}>Rólunk</Link>
            <Link href="/irj-nekunk" className={linkClass}>Szerzőknek</Link>
            <Link href="/about" className={linkClass}>Antal Bálint</Link>
            <Link href="/privacy" className={linkClass}>Adatvédelem</Link>
          </nav>

          <div className="flex flex-col gap-3.5">
            <p className="text-sm font-semibold text-monitor-foreground">Hírlevél</p>
            <p className="text-sm leading-relaxed">Új epizódok és cikkek, kéthetente. Semmi más.</p>
            {/* No newsletter backend yet: subscribing opens a pre-filled e-mail. */}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Hírlevél feliratkozás")}&body=${encodeURIComponent("Szeretnék feliratkozni a Metis hírlevélre.")}`}
              className="inline-flex h-10 w-fit items-center rounded-[var(--radius-sm)] bg-monitor-accent px-4 text-sm font-semibold text-ink no-underline transition-opacity hover:opacity-90"
              data-cta-id="newsletter_subscribe"
              data-analytics-placement="footer"
            >
              Feliratkozom
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-monitor-line pt-6 text-[13px] sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Metis · metis.name</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>{CONTACT_EMAIL}</a>
        </div>
      </div>
    </footer>
  );
}
