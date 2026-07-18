export type AnalyticsValue = string | number | boolean | null | undefined;
export type AnalyticsParams = Record<string, AnalyticsValue>;
export type CleanAnalyticsPayload = Record<string, string | number | boolean>;
export type AnalyticsConsent = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export const CONSENT_KEY = "meniva_ecosystem_analytics_consent";
export const CAMPAIGN_STORAGE_KEY = "meniva_ecosystem_campaign_context_v2";
const EXPOSURE_STORAGE_KEY = `${CAMPAIGN_STORAGE_KEY}_exposures`;

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
  "page_view", "cta_click", "cross_brand_click", "email_click",
  "outbound_social_click", "file_download", "external_link_click",
  "form_start", "form_submit", "form_error", "newsletter_form_start",
  "newsletter_signup", "generate_lead", "article_view", "article_engaged",
  "article_read_25", "article_read_50", "article_read_75", "article_read_100",
  "article_cta_click", "article_share_click", "article_crosslink_click", "contact_click",
  "asset_view", "asset_download", "canvas_cta_click", "consultation_click",
  "service_card_click", "case_study_click", "mentoring_cta_click", "testimonial_expand",
  "free_resource_click", "metis_contact_click", "youtube_click", "tutor_cta_click",
  "roadmap_click", "waitlist_click", "practice_module_click", "meniva_contact_start",
  "meniva_contact_submit", "meniva_contact_success", "meniva_contact_error",
  "meniva_contact_click", "meniva_canvas_form_start", "meniva_canvas_submit",
  "meniva_canvas_success", "meniva_canvas_error", "lead_magnet_dismiss",
  "lead_magnet_book_session", "metis_mentor_interest", "metis_mentor_form_start",
  "metis_mentor_form_submit", "metis_testimonial_expand", "metis_role_view", "sign_up",
  "nullfal_signup_click", "nullfal_signup_success", "nullfal_login",
  "nullfal_start_learning", "nullfal_module_open", "nullfal_practice_start",
  "nullfal_roadmap_step_open", "nullfal_tutor_open", "experiment_exposure", "offer_view",
]);

const CAMPAIGN_KEYS = [
  "utm_source", "utm_medium", "utm_campaign", "utm_id", "utm_content", "utm_term",
  "utm_source_platform", "campaign_id", "campaign_name", "campaign_type", "offer_id",
  "landing_page_id", "experiment_id", "variant_id", "variant_name", "creative_id",
  "copy_variant", "placement", "audience_segment",
] as const;

const EXPOSURE_KEYS = [
  "experiment_id", "variant_id", "variant_name", "campaign_id", "offer_id",
  "landing_page_id", "placement",
] as const;

const CONTEXT_ENRICHED_EVENTS = new Set([
  "page_view", "asset_view", "asset_download", "cta_click", "consultation_click",
  "form_start", "form_submit", "generate_lead", "article_engaged", "article_read_75",
  "newsletter_signup", "sign_up", "offer_view",
]);

let consentDefaultPushed = false;
let lastConsentUpdate: AnalyticsConsent | null = null;
let gtmBootstrapPushed = false;
let lastPageViewKey: string | null = null;
let lastPageLocation: string | null = null;
let activePageReferrer: string | null = null;
const seenExperimentExposures = new Set<string>();

export function ensureDataLayer(): unknown[] {
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
}

export function cleanAnalyticsPayload(payload: AnalyticsParams): CleanAnalyticsPayload {
  return Object.fromEntries(
    Object.entries(payload)
      .filter(([key, value]) => (
        value !== undefined
        && value !== null
        && key !== "gtm"
        && key !== "tagTypeBlacklist"
        && !key.startsWith("gtm.")
      ))
      .map(([key, value]) => [key, typeof value === "string" ? value.slice(0, 120) : value]),
  ) as CleanAnalyticsPayload;
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
  ensureDataLayer().push(["consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500,
  }]);
}

export function getStoredAnalyticsConsent(): AnalyticsConsent | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function updateAnalyticsConsent(value: AnalyticsConsent) {
  localStorage.setItem(CONSENT_KEY, value);
  if (lastConsentUpdate === value) return;
  lastConsentUpdate = value;
  ensureDataLayer().push(["consent", "update", {
    analytics_storage: value,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  }]);
}

function pickCampaignFields(source: Record<string, unknown>, keys: readonly string[] = CAMPAIGN_KEYS): AnalyticsParams {
  const picked: AnalyticsParams = {};
  keys.forEach((key) => {
    const value = source[key];
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") picked[key] = value;
  });
  return cleanAnalyticsPayload(picked);
}

function readStoredCampaignContext(): AnalyticsParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(CAMPAIGN_STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? pickCampaignFields(parsed as Record<string, unknown>) : {};
  } catch {
    return {};
  }
}

function writeStoredCampaignContext(context: AnalyticsParams) {
  try {
    window.sessionStorage.setItem(CAMPAIGN_STORAGE_KEY, JSON.stringify(cleanAnalyticsPayload(context)));
  } catch {
    // Storage can be unavailable in privacy-restricted browser contexts.
  }
}

export function getCampaignContext(overrides: AnalyticsParams = {}): CleanAnalyticsPayload {
  if (typeof window === "undefined") return {};
  const queryValues: Record<string, unknown> = {};
  const searchParams = new URLSearchParams(window.location.search);
  CAMPAIGN_KEYS.forEach((key) => { queryValues[key] = searchParams.get(key) || undefined; });
  const queryContext = pickCampaignFields(queryValues);
  const overrideContext = pickCampaignFields(overrides);
  const context = cleanAnalyticsPayload({ ...readStoredCampaignContext(), ...queryContext, ...overrideContext });
  if (Object.keys(queryContext).length || Object.keys(overrideContext).length) writeStoredCampaignContext(context);
  return context;
}

function resolvePageType(pathname: string) {
  const brand = TRACKING_CONFIG.brand_id;
  if (pathname === "/") return "home";
  if (pathname === "/privacy") return "privacy";
  if (brand === "meniva") {
    if (pathname.startsWith("/insights/")) return "article";
    if (pathname.startsWith("/demos/")) return "case_study";
    if (pathname === "/book-consultation") return "service";
  }
  if (brand === "metis") {
    if (pathname.startsWith("/posts/")) return "article";
    if (pathname === "/posts") return "article_index";
    if (pathname === "/mentorprogram") return "mentor_program";
    if (pathname === "/glossary") return "glossary";
    if (pathname.startsWith("/fejlodesi-savok/")) return "resource";
  }
  if (brand === "ctrlplane" && pathname.startsWith("/irasok/")) return "article";
  return "content";
}

function isContentPage(pathname: string) {
  return pathname.startsWith("/insights/") || pathname.startsWith("/posts/") || pathname.startsWith("/irasok/");
}

function resolveSiteSection() {
  return "main";
}

function stripUrlDecorations(value: string) {
  try {
    const url = new URL(value, window.location.href);
    url.search = "";
    url.hash = "";
    return url.href;
  } catch {
    return value.split("#")[0].split("?")[0];
  }
}

function resolvePageLocation(pathname: string) {
  const fallback = stripUrlDecorations(window.location.href);
  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href;
  if (!canonical) return fallback;
  try {
    const canonicalUrl = new URL(canonical, window.location.href);
    return canonicalUrl.pathname === pathname ? stripUrlDecorations(canonicalUrl.href) : fallback;
  } catch {
    return fallback;
  }
}

export function getPageContext(overrides: AnalyticsParams = {}): CleanAnalyticsPayload {
  const pathname = window.location.pathname;
  const pageLocation = resolvePageLocation(pathname);
  const contentPage = isContentPage(pathname);
  const rawReferrer = activePageReferrer || document.referrer || undefined;
  const cleanOverrides = cleanAnalyticsPayload(overrides);
  const cleaned = cleanAnalyticsPayload({
    brand: TRACKING_CONFIG.brand,
    brand_id: TRACKING_CONFIG.brand_id,
    site_id: TRACKING_CONFIG.site_id,
    site_section: resolveSiteSection(),
    page_type: resolvePageType(pathname),
    page_title: document.title,
    page_path: pathname,
    page_location: pageLocation,
    page_referrer: rawReferrer ? stripUrlDecorations(rawReferrer) : undefined,
    canonical_url: pageLocation,
    content_id: contentPage ? pathname.split("/").filter(Boolean).pop() : undefined,
    content_title: contentPage ? document.querySelector("h1")?.textContent?.trim() : undefined,
    ...cleanOverrides,
  });
  delete cleaned.event;
  return cleaned;
}

export function hasAnalyticsConsent() {
  return getStoredAnalyticsConsent() === "granted";
}

export function trackAnalyticsEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || !ALLOWED_EVENTS.has(name) || !hasAnalyticsConsent()) return false;
  const campaignContext = CONTEXT_ENRICHED_EVENTS.has(name) ? getCampaignContext() : {};
  return pushDataLayerEvent(name, { ...getPageContext(), ...campaignContext, ...params }) || false;
}

function readExposureKeys() {
  try {
    const raw = window.sessionStorage.getItem(EXPOSURE_STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((value): value is string => typeof value === "string") : [];
  } catch {
    return [];
  }
}

function rememberExposure(key: string) {
  seenExperimentExposures.add(key);
  try {
    const keys = Array.from(new Set([...readExposureKeys(), key])).slice(-200);
    window.sessionStorage.setItem(EXPOSURE_STORAGE_KEY, JSON.stringify(keys));
  } catch {
    // Session dedupe still works for this page when storage is unavailable.
  }
}

export function trackExperimentExposure(params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || !hasAnalyticsConsent()) return false;
  const context = getPageContext();
  const campaignContext = getCampaignContext(params);
  const fields = pickCampaignFields(campaignContext, EXPOSURE_KEYS);
  const experimentId = fields.experiment_id;
  const variantId = fields.variant_id;
  if (typeof experimentId !== "string" || !experimentId || typeof variantId !== "string" || !variantId) return false;

  const dedupeKey = `${experimentId}|${variantId}|${context.page_path}`;
  if (seenExperimentExposures.has(dedupeKey) || readExposureKeys().includes(dedupeKey)) return false;
  rememberExposure(dedupeKey);
  return pushDataLayerEvent("experiment_exposure", { ...context, ...fields }) || false;
}

export function trackPageView(overrides: AnalyticsParams = {}) {
  if (typeof window === "undefined" || !hasAnalyticsConsent()) return false;
  const initialContext = getPageContext(overrides);
  const key = `${initialContext.brand_id}|${initialContext.site_id}|${initialContext.page_path}|${initialContext.page_location}|${initialContext.page_title}`;
  if (lastPageViewKey === key) return false;

  const nextReferrer = lastPageLocation && lastPageLocation !== initialContext.page_location
    ? lastPageLocation
    : activePageReferrer || document.referrer || undefined;
  const context = cleanAnalyticsPayload({
    ...initialContext,
    page_referrer: nextReferrer ? stripUrlDecorations(nextReferrer) : undefined,
  });
  const pageViewPayload = cleanAnalyticsPayload({ ...context, ...getCampaignContext() });
  lastPageViewKey = key;
  activePageReferrer = typeof context.page_referrer === "string" ? context.page_referrer : null;
  lastPageLocation = typeof context.page_location === "string" ? context.page_location : null;
  pushDataLayerEvent("page_context", context);
  pushDataLayerEvent("page_view", pageViewPayload);
  return true;
}
