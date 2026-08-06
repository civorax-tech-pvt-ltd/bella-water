import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/json-ld";
import { Container } from "@/components/shared/container";
import { BlogCard } from "@/components/sections/blog/blog-card";
import { blogPosts } from "@/data/blog-posts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return pageMetadata({ locale, pathname: "/blog", title: t("title"), description: t("description") });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "blog" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tNav("home"), path: "/" },
          { name: t("title"), path: "/blog" },
        ])}
      />
      <Container className="max-w-5xl pt-28 pb-16 sm:pt-32 sm:pb-20">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-green uppercase">{t("eyebrow")}</p>
        <h1 className="text-3xl font-bold text-brand-navy sm:text-4xl dark:text-foreground">{t("title")}</h1>
        <p className="mt-3 max-w-xl text-base text-muted-foreground">{t("description")}</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </>
  );
}
