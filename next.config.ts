import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/website",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
