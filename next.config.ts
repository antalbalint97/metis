import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Consume the local design system, which ships raw TypeScript source.
  transpilePackages: ["@meniva/design-system"],
};

export default nextConfig;
