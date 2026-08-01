import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  /**
   * Fully static export — `next build` emits plain HTML/CSS/JS to `out/`,
   * deployable to any static host (Netlify, S3, cPanel, GitHub Pages...).
   * This rules out Next.js API routes, ISR, and middleware at runtime —
   * see middleware.ts and public/index.html for how locale entry is
   * handled without a server.
   */
  output: "export",
  trailingSlash: true,
  images: {
    // No server available to optimize images on a static host.
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
