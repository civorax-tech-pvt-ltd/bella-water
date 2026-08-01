import type { Metadata } from "next";
import { ShieldCheck, Beaker, Leaf, Heart } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { MineralComposition } from "@/components/shared/mineral-composition";
import { CTABanner } from "@/components/shared/cta-banner";

import { QualityProcess } from "@/components/sections/quality/quality-process";
import { CertificationsSection } from "@/components/sections/quality/certifications-section";
import { QualityStandards } from "@/components/sections/quality/quality-standards";
import { SealSafety } from "@/components/sections/quality/seal-safety";
import { StorageInfo } from "@/components/sections/quality/storage-info";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.quality" });
  return pageMetadata({ locale, pathname: "/quality", title: t("title"), description: t("description") });
}

export default async function QualityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "quality.hero" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tNav("home"), path: "/" },
          { name: tNav("quality"), path: "/quality" },
        ])}
      />
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        image="/images/hero/quality-hero.jpg"
        stats={[
          { icon: ShieldCheck, label: t("stats.purification") },
          { icon: Beaker, label: t("stats.tested") },
          { icon: Leaf, label: t("stats.minerals") },
          { icon: Heart, label: t("stats.safe") },
        ]}
      />
      <QualityProcess />
      <CertificationsSection />
      <MineralComposition />
      <QualityStandards />
      <SealSafety />
      <StorageInfo />
      <CTABanner title={t("ctaTitle")} primaryLabel={t("ctaWhatsapp")} secondaryLabel={t("ctaContact")} secondaryHref="/contact" />
    </>
  );
}
