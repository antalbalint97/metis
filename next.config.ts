import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Consume the local design system, which ships raw TypeScript source.
  transpilePackages: ["@meniva/design-system"],
  async redirects() {
    return [
      // Pages retired in the 2026 identity redesign.
      { source: "/fejlodesi-savok/:path*", destination: "/", permanent: true },
      { source: "/mentorprogram", destination: "/rolunk", permanent: true },
      { source: "/glossary", destination: "/posts", permanent: true },
      { source: "/esszek", destination: "/posts", permanent: true },
      {
        source: "/:path*",
        has: [{ type: "host", value: "metis-pi-five.vercel.app" }],
        destination: "https://metis.name/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.metis.name" }],
        destination: "https://metis.name/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    if (process.env.VERCEL_ENV !== "preview") return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
