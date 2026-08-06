import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/json-ld";
import { Container } from "@/components/shared/container";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog-posts";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const t = await getTranslations({ locale, namespace: `blog.posts.${post.key}` });
  return pageMetadata({ locale, pathname: `/blog/${slug}`, title: t("title"), description: t("excerpt") });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: `blog.posts.${post.key}` });
  const tBlog = await getTranslations({ locale, namespace: "blog" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const sections = t.raw("sections") as { heading: string; paragraphs: string[] }[];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tNav("home"), path: "/" },
          { name: tBlog("title"), path: "/blog" },
          { name: t("title"), path: `/blog/${slug}` },
        ])}
      />
      <JsonLd
        data={articleSchema(locale, {
          slug: post.slug,
          title: t("title"),
          description: t("excerpt"),
          image: post.image,
          publishedDate: post.publishedDate,
        })}
      />

      <Container className="max-w-3xl pt-28 pb-16 sm:pt-32 sm:pb-20">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" />
          {tBlog("backToBlog")}
        </Link>

        <p className="mt-6 text-xs font-medium text-muted-foreground">
          {new Date(post.publishedDate).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" })}
          {" · "}
          {tBlog("readingTime", { minutes: post.readingMinutes })}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-balance text-brand-navy sm:text-4xl dark:text-foreground">
          {t("title")}
        </h1>

        <div className="mt-8 aspect-video overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, placeholder-friendly */}
          <img src={post.image} alt="" className="size-full object-cover" />
        </div>

        <div className="prose prose-sm sm:prose-base dark:prose-invert mt-10 max-w-none">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border bg-brand-sky p-8 text-center dark:bg-secondary">
          <p className="text-sm font-medium text-muted-foreground">{tBlog("eyebrow")}</p>
          <Button asChild size="lg" className="bg-whatsapp text-white hover:bg-whatsapp/90">
            <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" />
              {tNav("whatsappUs")}
            </a>
          </Button>
        </div>
      </Container>
    </>
  );
}
