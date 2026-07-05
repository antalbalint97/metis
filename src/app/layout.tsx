import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Fraunces } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
// Design-system tokens and component styles (tokens before components).
import "@meniva/design-system/styles/tokens.css";
import "@meniva/design-system/styles/components.css";
import { Footer as DSFooter, Navbar } from "@meniva/design-system";
import { SITE_URL } from "@/lib/site";
import Analytics from "@/components/Analytics";

// Shared body/UI font for the MMNC family. The DS only names the family
// ('IBM Plex Sans'); the app loads the actual faces here via next/font and wires
// them to the DS --font-sans/--font-mono tokens in globals.css.
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-plex-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

// Warm display serif for the Metis brand, provided to the design system via
// the --font-fraunces variable that the DS metis tokens read for --font-display.
const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Metis | Adatelemzés és mentorálás",
  description: "Antal Bálint mentor- és tanulótere adatelemzéshez, statisztikához, data science-hez és ML-hez.",
  authors: [{ name: "Antal Bálint", url: `${SITE_URL}/about` }],
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/brand/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/brand/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/brand/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: "Metis",
    title: "Metis | Adatelemzés és mentorálás",
    description: "Antal Bálint mentor- és tanulótere adatelemzéshez, statisztikához, data science-hez és ML-hez.",
    url: "/",
    images: [{ url: `${SITE_URL}/brand/og-default.png`, width: 1200, height: 630, alt: "Metis" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metis | Adatelemzés és mentorálás",
    description: "Antal Bálint mentor- és tanulótere adatelemzéshez, statisztikához, data science-hez és ML-hez.",
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
      alternateName: "Metis Data Mentoring",
      url: SITE_URL,
      description: "Antal Bálint mentor- és tanulótere adatelemzéshez, statisztikához, data science-hez és ML-hez.",
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
  themeColor: "#FAF7F1",
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
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${fraunces.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {/* Page shell */}
        <div className="min-h-screen flex flex-col">
          {/* Shared DS shell: Navbar (72/64 height, mobile toggle). Logo is the
              DS Metis lettermark; wrapped in a Next Link for client-side routing. */}
          <Navbar
            sticky
            container="wide"
            logo={
              <Link href="/" aria-label="Metis">
                <Image src="/brand/logo-horizontal.svg" alt="Metis" width={108} height={40} style={{ height: 32, width: "auto" }} priority />
              </Link>
            }
            items={[
              { label: "Kezdőlap", href: "/" },
              { label: "Cikkek", href: "/posts" },
              { label: "Fogalomtár", href: "/glossary" },
              { label: "Rólam", href: "/about" },
            ]}
          />

          {/* Content width is owned per page via PageContainer. */}
          <main className="flex-1">{children}</main>

          {/* Footer band always at bottom */}
          <DSFooter
            container="wide"
            copyright={`© ${new Date().getFullYear()} Metis`}
          />
        </div>
      </body>
    </html>
  );
}
