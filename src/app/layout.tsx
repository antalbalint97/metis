import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import Link from "next/link";
import "./globals.css";
// Design-system tokens + component styles (tokens before components).
import "@meniva/design-system/styles/tokens.css";
import "@meniva/design-system/styles/components.css";
import { LogoLockup, Footer as DSFooter } from "@meniva/design-system";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
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
      className={`${inter.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        {/* Page shell */}
        <div className="min-h-screen flex flex-col">
          {/* Header band — DS LogoLockup with the real Metis mark; Next Link nav
              is kept so client-side routing is preserved. */}
          <header className="border-b border-border bg-surface">
            <div className="mx-auto w-full max-w-[1040px] px-4 sm:px-6 py-5 sm:py-6 flex items-center justify-between">
              <Link href="/" aria-label="Metis">
                {/* Logo now comes from the design system (Metis mark + wordmark). */}
                <LogoLockup brand="metis" wordmark="metis" size="lg" />
              </Link>

              <nav className="flex items-center gap-5 sm:gap-7 text-sm sm:text-base text-muted-foreground">
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
                <Link href="/posts" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
                <Link href="/glossary" className="hover:text-foreground transition-colors">
                  Glossary
                </Link>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </nav>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 mx-auto w-full max-w-[740px] px-4 sm:px-6 py-10 sm:py-14">
            {children}
          </main>

          {/* Footer band always at bottom */}
          <DSFooter
            container="content"
            copyright={`© ${new Date().getFullYear()} Metis`}
          />
        </div>
      </body>
    </html>
  );
}
