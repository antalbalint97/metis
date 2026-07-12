export type AnalyticsValue = string | number | boolean | null | undefined;
export type AnalyticsParams = Record<string, AnalyticsValue>;
export type CleanAnalyticsPayload = Record<string, string | number | boolean>;
export type AnalyticsConsent = "granted" | "denied";

declare global { interface Window { dataLayer?: unknown[]; } }

export const CONSENT_KEY = "meniva_ecosystem_analytics_consent";
export const TRACKING_CONFIG = {
  brand: process.env.NEXT_PUBLIC_BRAND_ID || "metis",
  brand_id: process.env.NEXT_PUBLIC_BRAND_ID || "metis",
  site_id: "metis_web",
  site_url: process.env.NEXT_PUBLIC_SITE_URL || "https://metis.name",
  gtm_id: process.env.NEXT_PUBLIC_GTM_ID || "GTM-P97RB9PD",
  enabled: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== "false",
  measurement_strategy: "gtm",
} as const;

export const ALLOWED_EVENTS = new Set([
  "page_view", "cta_click", "cross_brand_click", "email_click", "outbound_social_click",
  "file_download", "external_link_click", "form_start", "form_submit", "form_error",
  "newsletter_form_start", "newsletter_signup", "generate_lead", "article_view",
  "article_read_25", "article_read_50", "article_read_75", "article_read_100",
  "article_cta_click", "article_share_click", "article_crosslink_click", "contact_click",
  "canvas_cta_click", "canvas_download", "consultation_click", "service_card_click",
  "case_study_click", "mentoring_cta_click", "testimonial_expand", "free_resource_click",
  "metis_contact_click", "youtube_click", "tutor_cta_click", "roadmap_click",
  "waitlist_click", "practice_module_click", "meniva_contact_start", "meniva_contact_submit",
  "meniva_contact_success", "meniva_contact_error", "meniva_contact_click", "meniva_canvas_view",
  "meniva_canvas_form_start", "meniva_canvas_submit", "meniva_canvas_success",
  "meniva_canvas_error", "meniva_canvas_download", "lead_magnet_view", "lead_magnet_dismiss",
  "lead_magnet_download", "lead_magnet_book_session", "metis_mentor_interest",
  "metis_mentor_form_start", "metis_mentor_form_submit", "metis_testimonial_expand",
  "metis_role_view", "sign_up", "nullfal_signup_click", "nullfal_signup_success",
  "nullfal_login", "nullfal_start_learning", "nullfal_module_open", "nullfal_practice_start",
  "nullfal_roadmap_step_open", "nullfal_tutor_open",
]);

let consentDefaultPushed = false;
let lastConsentUpdate: AnalyticsConsent | null = null;
let gtmBootstrapPushed = false;
let lastPageView: { key: string; at: number } | null = null;

export function ensureDataLayer(): unknown[] { window.dataLayer = window.dataLayer || []; return window.dataLayer; }
export function cleanAnalyticsPayload(payload: AnalyticsParams): CleanAnalyticsPayload {
  return Object.fromEntries(Object.entries(payload)
    .filter(([key, value]) => value !== undefined && value !== null && !key.startsWith("gtm."))
    .map(([key, value]) => [key, typeof value === "string" ? value.slice(0, 120) : value])) as CleanAnalyticsPayload;
}
export function pushDataLayerEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return null;
  const payload = cleanAnalyticsPayload({ ...params, event: eventName });
  ensureDataLayer().push(payload);
  return payload;
}
export function pushGtmBootstrap() {
  if (gtmBootstrapPushed) return;
  gtmBootstrapPushed = true;
  ensureDataLayer().push({ "gtm.start": Date.now(), event: "gtm.js" });
}
export function pushConsentDefault() {
  if (typeof window === "undefined" || consentDefaultPushed) return;
  consentDefaultPushed = true;
  ensureDataLayer().push(["consent", "default", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", wait_for_update: 500 }]);
}
export function getStoredAnalyticsConsent(): AnalyticsConsent | null {
  try { const value = localStorage.getItem(CONSENT_KEY); return value === "granted" || value === "denied" ? value : null; }
  catch { return null; }
}
export function updateAnalyticsConsent(value: AnalyticsConsent) {
  localStorage.setItem(CONSENT_KEY, value);
  if (lastConsentUpdate === value) return;
  lastConsentUpdate = value;
  ensureDataLayer().push(["consent", "update", { analytics_storage: value, ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" }]);
}
function resolvePageType(pathname: string) {
  if (pathname === "/") return "home";
  if (pathname === "/privacy") return "privacy";
  if (pathname.startsWith("/posts/")) return "article";
  if (pathname === "/posts") return "article_index";
  if (pathname === "/mentorprogram") return "mentor_program";
  if (pathname === "/glossary") return "glossary";
  if (pathname.startsWith("/fejlodesi-savok/")) return "resource";
  return "content";
}
export function getPageContext(overrides: AnalyticsParams = {}): CleanAnalyticsPayload {
  const pathname = window.location.pathname;
  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href;
  const canonicalMatchesRoute = canonical && new URL(canonical, window.location.href).pathname === pathname;
  const contentPage = pathname.startsWith("/posts/");
  const cleaned = cleanAnalyticsPayload({ brand: TRACKING_CONFIG.brand, brand_id: TRACKING_CONFIG.brand_id,
    site_id: TRACKING_CONFIG.site_id, site_section: pathname.split("/").filter(Boolean)[0] || "home",
    page_type: resolvePageType(pathname), page_title: document.title, page_path: pathname,
    page_location: window.location.href, page_referrer: document.referrer || undefined,
    canonical_url: canonicalMatchesRoute ? canonical : `${TRACKING_CONFIG.site_url}${pathname}`,
    content_id: contentPage ? pathname.split("/").filter(Boolean).pop() : undefined,
    content_title: contentPage ? document.querySelector("h1")?.textContent?.trim() : undefined, ...overrides });
  delete cleaned.event;
  return cleaned;
}
export function hasAnalyticsConsent() { return getStoredAnalyticsConsent() === "granted"; }
export function trackAnalyticsEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || !ALLOWED_EVENTS.has(name) || !hasAnalyticsConsent()) return false;
  return pushDataLayerEvent(name, { ...getPageContext(), ...params }) || false;
}
export function trackPageView(overrides: AnalyticsParams = {}) {
  if (typeof window === "undefined" || !hasAnalyticsConsent()) return false;
  const context = getPageContext(overrides);
  const key = `${context.brand_id}|${context.page_path}|${context.page_title}`;
  const now = Date.now();
  if (lastPageView?.key === key && now - lastPageView.at < 1500) return false;
  lastPageView = { key, at: now };
  pushDataLayerEvent("page_context", context);
  pushDataLayerEvent("page_view", context);
  return true;
}
