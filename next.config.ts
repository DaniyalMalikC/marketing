import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React
  reactStrictMode: true,

  // Performance
  compress: true,
  poweredByHeader: false,

  // Images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },

  // Experimental features
  experimental: {
    optimizePackageImports: [
      "@iconify/react",
      "framer-motion",
      "zustand",
    ],
  },

  // Turbopack configuration (empty to silence warning)
  turbopack: {},
};

export default nextConfig;
