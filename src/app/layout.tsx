import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Fraunces } from "next/font/google";
import Link from "next/link";
import "./globals.css";
// Design-system tokens + component styles (tokens before components).
import "@meniva/design-system/styles/tokens.css";
import "@meniva/design-system/styles/components.css";
import { LogoLockup, Footer as DSFooter, Navbar } from "@meniva/design-system";

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

// Warm display serif for the Metis brand — provided to the design system via
// the --font-fraunces variable that the DS metis tokens read for --font-display.
const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Metis Blog",
  description: "From questions to understanding.",
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
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${fraunces.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        {/* Page shell */}
        <div className="min-h-screen flex flex-col">
          {/* Shared DS shell: Navbar (72/64 height, mobile toggle). Logo is the
              DS Metis lettermark; wrapped in a Next Link for client-side routing. */}
          <Navbar
            sticky
            container="wide"
            logo={
              <Link href="/" aria-label="Metis">
                <LogoLockup brand="metis" />
              </Link>
            }
            items={[
              { label: "Kezdőlap", href: "/" },
              { label: "Cikkek", href: "/posts" },
              { label: "Fogalomtár", href: "/glossary" },
              { label: "Rólam", href: "/about" },
            ]}
          />

          {/* Content — width is owned per page via PageContainer (no global clamp). */}
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
