"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { TRACKING_CONFIG, ensureDataLayer, getStoredAnalyticsConsent, pushConsentDefault, pushGtmBootstrap, trackAnalyticsEvent, trackPageView, updateAnalyticsConsent, type AnalyticsConsent } from "@/lib/analytics";

export { trackAnalyticsEvent } from "@/lib/analytics";

const ECOSYSTEM: Record<string, string> = { "www.meniva.net": "meniva", "meniva.net": "meniva", "ctrplane.com": "ctrlplane", "www.ctrplane.com": "ctrlplane", "metis.name": "metis", "www.metis.name": "metis", "nullfal.com": "nullfal", "www.nullfal.com": "nullfal" };

function loadGtm() {
  ensureDataLayer();
  if (!TRACKING_CONFIG.enabled || window.location.hostname !== new URL(TRACKING_CONFIG.site_url).hostname || document.getElementById("ecosystem-gtm")) return;
  pushGtmBootstrap();
  const script = document.createElement("script");
  script.id = "ecosystem-gtm";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(TRACKING_CONFIG.gtm_id)}`;
  document.head.appendChild(script);
}

function ctaParams(element: HTMLElement) {
  return { cta_id: element.dataset.ctaId || element.dataset.cta, cta_location: element.dataset.analyticsPlacement || element.dataset.location || "unspecified", cta_text: element.textContent?.trim().replace(/\s+/g, " ") };
}

export default function Analytics() {
  const pathname = usePathname();
  const [consent, setConsent] = useState<AnalyticsConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    pushConsentDefault();
    const saved = getStoredAnalyticsConsent();
    const stateTimer = window.setTimeout(() => { setConsent(saved); setShowBanner(!saved); }, 0);
    if (saved === "granted") { updateAnalyticsConsent("granted"); loadGtm(); }
    return () => window.clearTimeout(stateTimer);
  }, []);

  useEffect(() => {
    if (consent !== "granted") return;
    const timer = window.setTimeout(() => trackPageView(), 60);
    return () => window.clearTimeout(timer);
  }, [pathname, consent]);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const element = (event.target as Element | null)?.closest<HTMLElement>("a,button,[data-analytics-event],[data-gtag]");
      if (!element) return;
      const explicit = element.dataset.analyticsEvent || (element.dataset.gtag === "cta" ? "cta_click" : undefined);
      const params = ctaParams(element);
      if (explicit) { if (explicit !== "cta_click") trackAnalyticsEvent("cta_click", params); trackAnalyticsEvent(explicit, params); if (!(element instanceof HTMLAnchorElement)) return; }
      if (!(element instanceof HTMLAnchorElement)) return;
      const url = new URL(element.href, window.location.href);
      const destinationUrl = `${url.origin}${url.pathname}`;
      if (url.protocol === "mailto:") trackAnalyticsEvent("email_click", { cta_location: params.cta_location });
      else if (url.protocol === "tel:") trackAnalyticsEvent("contact_click", { method: "phone" });
      else if (/\.(pdf|docx?|xlsx?|csv|zip)$/i.test(url.pathname)) trackAnalyticsEvent("file_download", { file_name: url.pathname.split("/").pop() });
      else if (["linkedin.com", "www.linkedin.com", "github.com", "www.github.com", "x.com", "www.x.com"].includes(url.hostname)) trackAnalyticsEvent("outbound_social_click", { link_domain: url.hostname, destination_url: destinationUrl });
      else if (ECOSYSTEM[url.hostname] && url.hostname !== window.location.hostname) trackAnalyticsEvent("cross_brand_click", { source_brand: TRACKING_CONFIG.brand_id, destination_brand: ECOSYSTEM[url.hostname], destination_url: destinationUrl, ...params });
      else if (url.origin !== window.location.origin) trackAnalyticsEvent("external_link_click", { link_domain: url.hostname, destination_url: destinationUrl });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const choose = (value: AnalyticsConsent) => {
    const wasGranted = consent === "granted";
    updateAnalyticsConsent(value);
    if (value === "granted") loadGtm();
    setConsent(value);
    setShowBanner(false);
    window.dispatchEvent(new CustomEvent("analytics-consent-change", { detail: value }));
    if (value === "denied" && wasGranted) window.location.reload();
  };

  useEffect(() => { const open = () => setShowBanner(true); window.addEventListener("open-analytics-settings", open); return () => window.removeEventListener("open-analytics-settings", open); }, []);

  return showBanner ? (
    <aside role="dialog" aria-label="Analitikai sütik" style={{ position: "fixed", zIndex: 1000, left: 16, right: 16, bottom: 16, maxWidth: 680, margin: "auto", padding: 20, borderRadius: 12, background: "#111827", color: "white", boxShadow: "0 16px 48px rgba(0,0,0,.3)" }}>
      <strong>Analitikai sütik</strong>
      <p style={{ margin: "8px 0 16px", lineHeight: 1.5 }}>Névtelen használati adatokat csak a beleegyezésed után gyűjtünk. Hirdetési célú tárolást nem használunk. <a href="/privacy" style={{ color: "#93c5fd" }}>Adatvédelmi tájékoztató</a></p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}><button type="button" onClick={() => choose("granted")} className="ds-btn ds-btn--primary ds-btn--sm">Elfogadom</button><button type="button" onClick={() => choose("denied")} className="ds-btn ds-btn--outline ds-btn--sm" style={{ color: "white" }}>Elutasítom</button></div>
    </aside>
  ) : <button type="button" onClick={() => setShowBanner(true)} style={{ position: "fixed", zIndex: 900, right: 12, bottom: 12, padding: "7px 10px", borderRadius: 8, border: "1px solid #9ca3af", background: "#fff", color: "#111827", fontSize: 12 }}>Süti beállítások</button>;
}
