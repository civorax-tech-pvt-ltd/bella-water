export interface BlogPost {
  slug: string;
  /** Message key under `blog.posts.<key>` in messages/<locale>.json */
  key: string;
  publishedDate: string;
  readingMinutes: number;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-best-drinking-water-brand-nepal",
    key: "chooseWaterBrand",
    publishedDate: "2026-08-07",
    readingMinutes: 7,
    image: "/images/hero/purity-hero.webp",
  },
];
