import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { BlogPost } from "@/data/blog-posts";

export function BlogCard({ post }: { post: BlogPost }) {
  const t = useTranslations(`blog.posts.${post.key}`);
  const tBlog = useTranslations("blog");

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-lg"
    >
      <div className="aspect-video overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, placeholder-friendly */}
        <img
          src={post.image}
          alt=""
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-medium text-muted-foreground">
          {new Date(post.publishedDate).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
          {" · "}
          {tBlog("readingTime", { minutes: post.readingMinutes })}
        </p>
        <h2 className="mt-2 text-xl font-bold text-brand-navy dark:text-foreground">{t("title")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("excerpt")}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy group-hover:gap-2.5 dark:text-primary">
          {tBlog("readMore")}
          <ArrowRight className="size-4 transition-all" />
        </span>
      </div>
    </Link>
  );
}
