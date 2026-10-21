export const SITE_URL = "https://metis.name";
export const CTRLPLANE_URL = "https://ctrplane.com";
export const NULLFAL_URL = "https://nullfal.com";

export const CONTACT_EMAIL = "learn.metis@gmail.com";

export const TAGLINE = "Szociográfia · Vitakultúra · Szolidaritás";

/** Main sections (rovatok), in navigation order. */
export const SECTIONS = [
  { label: "Életképek", href: "/eletkepek" },
  { label: "Esszék", href: "/posts" },
  { label: "Vita", href: "/vita" },
  { label: "Beszélgetések", href: "/beszelgetesek" },
] as const;

export const NAV_ITEMS = [...SECTIONS, { label: "Rólunk", href: "/rolunk" }] as const;
