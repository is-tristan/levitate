import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Prefer modern formats when the browser supports them
    formats: ["image/avif", "image/webp"],
    // Tighter set of generated widths for this layout
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    qualities: [65, 70, 75, 85],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress-1520445-6276921.cloudwaysapps.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;

import("@opennextjs/cloudflare").then(m => m.initOpenNextCloudflareForDev());
