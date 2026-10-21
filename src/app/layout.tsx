import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
// Design-system tokens and component styles (tokens before components).
import "@meniva/design-system/styles/tokens.css";
import "@meniva/design-system/styles/components.css";
import { SITE_URL } from "@/lib/site";
import Analytics from "@/components/Analytics";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

// The Metis abstract identity system uses Inter for display and body alike;
// globals.css wires it into the DS --font-display/--font-sans tokens.
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

// Monospace for code blocks.
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

const SITE_TITLE = "Metis | Történetek és viták, amelyek máshol nem férnek be";
const SITE_DESCRIPTION =
  "Vlog, podcast és írások egy házi stúdióból: szociográfia, vitakultúra, szolidaritás. Olyan történetek és viták, amelyek a nagy médiumokba nem férnek be.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  authors: [{ name: "Antal Bálint", url: `${SITE_URL}/about` }],
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/brand/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/brand/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/brand/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: [{ url: "/brand/icon-32.png?v=2", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: "Metis",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    images: [{ url: `${SITE_URL}/brand/og-default.png`, width: 1200, height: 630, alt: "Metis" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/brand/og-default.png`],
  },
};

const PERSON_ID = `${SITE_URL}/#antal-balint`;
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Metis",
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "hu-HU",
      image: `${SITE_URL}/brand/og-default.png`,
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Antal Bálint",
      url: `${SITE_URL}/about`,
      image: `${SITE_URL}/images/balint.jpg`,
      jobTitle: "Data Scientist and Mentor",
      knowsAbout: ["Adatelemzés", "Statisztika", "Python", "SQL", "Data science", "Machine learning"],
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="hu"
      data-brand="metis"
      className={`${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          {/* Content width is owned per page. */}
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
