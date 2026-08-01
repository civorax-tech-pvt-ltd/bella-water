import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.privacy" });
  return pageMetadata({ locale, pathname: "/privacy-policy", title: t("title"), description: t("intro") });
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal.privacy" });

  return (
    <Container className="max-w-3xl py-16 sm:py-20">
      <h1 className="text-3xl font-bold text-brand-navy dark:text-foreground">{t("title")}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{t("lastUpdated")}</p>
      <div className="prose prose-sm dark:prose-invert mt-8 max-w-none">
        <p>{t("intro")}</p>
        <h2>{t("sections.dataCollected.title")}</h2>
        <p>{t("sections.dataCollected.body")}</p>
        <h2>{t("sections.dataUse.title")}</h2>
        <p>{t("sections.dataUse.body")}</p>
        <h2>{t("sections.contact.title")}</h2>
        <p>
          {t("sections.contact.body")} <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
        </p>
      </div>
    </Container>
  );
}
