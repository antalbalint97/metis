import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

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
    <html lang="hu" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        {/* Page shell */}
        <div className="min-h-screen flex flex-col">
          {/* Header band */}
          <header className="border-b border-border bg-surface">
            <div className="mx-auto w-full max-w-[1040px] px-4 sm:px-6 py-5 sm:py-6 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 sm:gap-4">
                <div className="relative h-12 w-16 sm:h-14 sm:w-20">
                  <Image
                    src="/images/logo_metis.png"
                    alt="Metis"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 640px) 64px, 80px"
                  />
                </div>

                <span className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                  metis
                </span>
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
          <footer className="border-t border-border bg-surface">
            <div className="mx-auto w-full max-w-[740px] px-4 sm:px-6 py-10 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Metis
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
