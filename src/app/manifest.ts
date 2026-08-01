import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.fullName,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/en/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0b2c5c",
    icons: [
      { src: "/images/logo/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/images/logo/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
