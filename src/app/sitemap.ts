import type { MetadataRoute } from "next";
import { activeLocaleCodes } from "@/config/languages";
import { localizedUrl, buildLanguageAlternates } from "@/lib/seo";
import { blogPosts } from "@/data/blog-posts";

export const dynamic = "force-static";

const staticPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/our-story", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/purity", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/products", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/quality", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/business", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/terms-and-conditions", priority: 0.2, changeFrequency: "yearly" as const },
];

const blogPaths = blogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  priority: 0.6,
  changeFrequency: "monthly" as const,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticPaths, ...blogPaths].flatMap(({ path, priority, changeFrequency }) =>
    activeLocaleCodes.map((locale) => ({
      url: localizedUrl(locale, path),
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: { languages: buildLanguageAlternates(path) },
    })),
  );
}
