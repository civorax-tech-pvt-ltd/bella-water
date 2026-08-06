import type { Metadata } from "next";
import { ShieldCheck, Beaker, Leaf, Heart } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { MineralComposition } from "@/components/shared/mineral-composition";
import { CTABanner } from "@/components/shared/cta-banner";

import { PurificationSteps } from "@/components/sections/purity/purification-steps";
import { CertifiedPurity } from "@/components/sections/purity/certified-purity";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.purity" });
  return pageMetadata({ locale, pathname: "/purity", title: t("title"), description: t("description") });
}

export default async function PurityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "purity.hero" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tNav("home"), path: "/" },
          { name: tNav("purity"), path: "/purity" },
        ])}
      />
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        image="/images/hero/purity-hero.webp"
        stats={[
          { icon: ShieldCheck, label: t("stats.purification") },
          { icon: Beaker, label: t("stats.microbial") },
          { icon: Leaf, label: t("stats.minerals") },
          { icon: Heart, label: t("stats.trusted") },
        ]}
      />
      <PurificationSteps />
      <MineralComposition />
      <CertifiedPurity />
      <CTABanner title={t("ctaTitle")} primaryLabel={t("ctaWhatsapp")} secondaryLabel={t("ctaQuality")} secondaryHref="/quality" />
    </>
  );
}
