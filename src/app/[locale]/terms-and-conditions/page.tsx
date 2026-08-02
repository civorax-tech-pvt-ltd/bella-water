import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/shared/container";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.terms" });
  return pageMetadata({ locale, pathname: "/terms-and-conditions", title: t("title"), description: t("intro") });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal.terms" });

  return (
    <Container className="max-w-3xl pt-28 pb-16 sm:pt-32 sm:pb-20">
      <h1 className="text-3xl font-bold text-brand-navy dark:text-foreground">{t("title")}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{t("lastUpdated")}</p>
      <div className="prose prose-sm dark:prose-invert mt-8 max-w-none">
        <p>{t("intro")}</p>
        <h2>{t("sections.orders.title")}</h2>
        <p>{t("sections.orders.body")}</p>
        <h2>{t("sections.delivery.title")}</h2>
        <p>{t("sections.delivery.body")}</p>
        <h2>{t("sections.liability.title")}</h2>
        <p>{t("sections.liability.body")}</p>
      </div>
    </Container>
  );
}
