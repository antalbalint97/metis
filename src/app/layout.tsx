import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metis Blog",
  description: "From questions to understanding.",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
       <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body className="min-h-screen bg-[#FAF7F2] text-zinc-900">
        {/* Page shell */}
        <div className="min-h-screen flex flex-col">
          {/* Header band */}
          <header className="border-b border-zinc-200 bg-[#FAF7F2]">
            <div className="mx-auto w-full max-w-[1040px] px-4 sm:px-6 py-5 sm:py-6 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 sm:gap-4">
                {/* 25% bigger logo, still clean */}
                <div className="relative h-12 w-16 sm:h-14 sm:w-20">
                  <Image
                  src="/images/logo.png"
                  alt="Metis"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 640px) 64px, 80px"
                  />
                </div>

                {/* Bigger name */}
                <span className="text-xl sm:text-2xl font-semibold tracking-tight">
                  metis
                </span>
              </Link>

              <nav className="flex items-center gap-5 sm:gap-7 text-sm sm:text-base text-zinc-700">
                <Link href="/" className="hover:text-zinc-900">
                  Home
                </Link>
                <Link href="/posts" className="hover:text-zinc-900">
                  Blog
                </Link>
                <Link href="/glossary" className="hover:text-zinc-900">
                  Glossary
                </Link>
                <Link href="/about" className="hover:text-zinc-900">
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
          <footer className="border-t border-zinc-200 bg-[#FAF7F2]">
            <div className="mx-auto w-full max-w-[740px] px-4 sm:px-6 py-10 text-sm text-zinc-500">
              © {new Date().getFullYear()} Metis
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}