"use client";

import { useState } from "react";

/** Native share sheet where available, otherwise copies the link. */
export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // The user closed the share sheet; nothing to do.
    }
  }

  return (
    <button type="button" className="ds-btn ds-btn--ghost ds-btn--sm" onClick={share} data-cta-id="post_share">
      {copied ? "Link másolva" : "Megosztás"}
    </button>
  );
}
