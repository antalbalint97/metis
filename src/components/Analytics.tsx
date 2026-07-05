"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const CONSENT_KEY = "meniva_ecosystem_analytics_consent";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-P97RB9PD";
const BRAND_ID = process.env.NEXT_PUBLIC_BRAND_ID || "metis";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://metis.name";
const ENABLED = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== "false";
const ALLOWED_EVENTS = new Set([
  "page_view", "cta_click", "cross_brand_click", "email_click",
  "outbound_social_click", "file_download", "external_link_click",
  "form_start", "form_submit", "form_error", "newsletter_form_start",
  "newsletter_signup", "article_view", "article_read_25", "article_read_50",
  "article_read_75", "article_read_100", "article_cta_click",
  "article_share_click", "article_crosslink_click", "contact_click",
  "canvas_cta_click", "canvas_download", "consultation_click",
  "service_card_click", "case_study_click", "mentoring_cta_click",
  "testimonial_expand", "free_resource_click", "metis_contact_click",
  "youtube_click", "tutor_cta_click", "roadmap_click", "waitlist_click",
  "practice_module_click",
  "metis_mentor_interest", "metis_mentor_form_start",
  "metis_mentor_form_submit", "metis_testimonial_expand", "metis_role_view",
]);

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

function dataLayer() {
  const target = window as typeof window & { dataLayer?: unknown[] };
  target.dataLayer = target.dataLayer || [];
  return target.dataLayer;
}

function gtag(...args: unknown[]) {
  dataLayer().push(args);
}

function onCanonicalHost() {
  return window.location.hostname === new URL(SITE_URL).hostname;
}

function loadGtm() {
  if (!ENABLED || !onCanonicalHost() || document.getElementById("ecosystem-gtm")) return;
  const script = document.createElement("script");
  script.id = "ecosystem-gtm";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`;
  document.head.appendChild(script);
}

export function trackAnalyticsEvent(name: string, params: AnalyticsParams = {}) {
  if (!ALLOWED_EVENTS.has(name) || localStorage.getItem(CONSENT_KEY) !== "granted") return false;
  const safeParams = Object.fromEntries(
    Object.entries(params)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => [key, typeof value === "string" ? value.slice(0, 120) : value]),
  );
  dataLayer().push({ brand: BRAND_ID, brand_id: BRAND_ID, ...safeParams, event: name });
  return true;
}

function pageType(pathname: string) {
  if (pathname.startsWith("/posts/")) return "article";
  if (pathname === "/posts") return "article_index";
  if (pathname === "/mentorprogram") return "mentor_program";
  if (pathname === "/glossary") return "glossary";
  if (pathname.startsWith("/fejlodesi-savok/")) return "resource";
  if (pathname === "/privacy") return "privacy";
  return pathname === "/" ? "home" : "content";
}

function setConsent(value: "granted" | "denied") {
  localStorage.setItem(CONSENT_KEY, value);
  gtag("consent", "update", {
    analytics_storage: value,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  if (value === "granted") loadGtm();
  window.dispatchEvent(new CustomEvent("analytics-consent-change", { detail: value }));
}

export default function Analytics() {
  const pathname = usePathname();
  const [consent, setConsentState] = useState<"granted" | "denied" | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    dataLayer();
    gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });
    const saved = localStorage.getItem(CONSENT_KEY) as "granted" | "denied" | null;
    setConsentState(saved);
    setShowBanner(!saved);
    if (saved === "granted") {
      gtag("consent", "update", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
      loadGtm();
    }
  }, []);

  useEffect(() => {
    const isArticle = pathname.startsWith("/posts/");
    const context = {
      event: "page_context",
      brand: BRAND_ID,
      brand_id: BRAND_ID,
      page_type: pageType(pathname),
      page_title: document.title.slice(0, 120),
      page_path: pathname,
      canonical_url: document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href || `${SITE_URL}${pathname}`,
      content_id: isArticle ? pathname.split("/").pop() : undefined,
      content_title: isArticle ? document.querySelector("h1")?.textContent?.trim().slice(0, 120) : undefined,
    };
    dataLayer().push(context);
    if (consent === "granted") trackAnalyticsEvent("page_view", context);
  }, [pathname, consent]);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const element = (event.target as Element | null)?.closest<HTMLElement>("a,button,[data-analytics-event]");
      if (!element) return;
      const explicit = element.dataset.analyticsEvent;
      if (explicit) {
        const ctaParams = { cta_id: element.dataset.ctaId, cta_location: element.dataset.analyticsPlacement };
        if (explicit !== "cta_click") trackAnalyticsEvent("cta_click", ctaParams);
        trackAnalyticsEvent(explicit, ctaParams);
        if (!(element instanceof HTMLAnchorElement)) return;
      }
      if (!(element instanceof HTMLAnchorElement)) return;
      const url = new URL(element.href, window.location.href);
      const ecosystem: Record<string, string> = { "www.meniva.net": "meniva", "meniva.net": "meniva", "ctrplane.com": "ctrlplane", "www.ctrplane.com": "ctrlplane", "metis.name": "metis", "www.metis.name": "metis", "nullfal.com": "nullfal", "www.nullfal.com": "nullfal" };
      const destinationUrl = `${url.origin}${url.pathname}`;
      if (url.protocol === "mailto:") trackAnalyticsEvent("email_click", { cta_location: element.dataset.analyticsPlacement || "link" });
      else if (url.protocol === "tel:") trackAnalyticsEvent("contact_click", { method: "phone" });
      else if (/\.(pdf|docx?|xlsx?|csv|zip)$/i.test(url.pathname)) trackAnalyticsEvent("file_download", { file_name: url.pathname.split("/").pop() });
      else if (["linkedin.com", "www.linkedin.com", "github.com", "www.github.com", "x.com", "www.x.com"].includes(url.hostname)) trackAnalyticsEvent("outbound_social_click", { link_domain: url.hostname, destination_url: destinationUrl });
      else if (ecosystem[url.hostname] && url.hostname !== window.location.hostname) trackAnalyticsEvent("cross_brand_click", { source_brand: BRAND_ID, destination_brand: ecosystem[url.hostname], destination_url: destinationUrl, cta_id: element.dataset.ctaId, cta_location: element.dataset.analyticsPlacement });
      else if (url.origin !== window.location.origin) trackAnalyticsEvent("external_link_click", { link_domain: url.hostname, destination_url: destinationUrl });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const choose = (value: "granted" | "denied") => {
    const wasGranted = consent === "granted";
    setConsent(value);
    setConsentState(value);
    setShowBanner(false);
    if (value === "denied" && wasGranted) window.location.reload();
  };

  return (
    <>
      {showBanner ? (
        <aside role="dialog" aria-label="Analitikai sĂĽtik" style={{ position: "fixed", zIndex: 1000, left: 16, right: 16, bottom: 16, maxWidth: 680, margin: "auto", padding: 20, borderRadius: 12, background: "#111827", color: "white", boxShadow: "0 16px 48px rgba(0,0,0,.3)" }}>
          <strong>Analitikai sĂĽtik</strong>
          <p style={{ margin: "8px 0 16px", lineHeight: 1.5 }}>NĂ©vtelen hasznĂˇlati adatokat csak a beleegyezĂ©sed utĂˇn gyĹ±jtĂĽnk. HirdetĂ©si cĂ©lĂş tĂˇrolĂˇst nem hasznĂˇlunk. <a href="/privacy" style={{ color: "#93c5fd" }}>AdatvĂ©delmi tĂˇjĂ©koztatĂł</a></p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button type="button" onClick={() => choose("granted")} className="ds-btn ds-btn--primary ds-btn--sm">Elfogadom</button>
            <button type="button" onClick={() => choose("denied")} className="ds-btn ds-btn--outline ds-btn--sm" style={{ color: "white" }}>ElutasĂ­tom</button>
          </div>
        </aside>
      ) : (
        <button type="button" onClick={() => setShowBanner(true)} style={{ position: "fixed", zIndex: 900, right: 12, bottom: 12, padding: "7px 10px", borderRadius: 8, border: "1px solid #9ca3af", background: "#fff", color: "#111827", fontSize: 12 }}>SĂĽti beĂˇllĂ­tĂˇsok</button>
      )}
    </>
  );
}
