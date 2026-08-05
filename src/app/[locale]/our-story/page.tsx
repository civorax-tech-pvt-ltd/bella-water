import type { Metadata } from "next";
import { Droplets, Leaf, ShieldCheck, Award } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { CTABanner } from "@/components/shared/cta-banner";

import { StoryJourney } from "@/components/sections/our-story/story-journey";
import { MissionSection } from "@/components/sections/our-story/mission-section";
import { FactorySection } from "@/components/sections/our-story/factory-section";
import { ManufacturingProcess } from "@/components/sections/our-story/manufacturing-process";
import { LocalRootsSection } from "@/components/sections/our-story/local-roots-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.ourStory" });
  return pageMetadata({ locale, pathname: "/our-story", title: t("title"), description: t("description") });
}

export default async function OurStoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "ourStory.hero" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tNav("home"), path: "/" },
          { name: tNav("ourStory"), path: "/our-story" },
        ])}
      />
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        image="/images/hero/our-story-hero.jpg"
        stats={[
          { icon: Droplets, label: t("stats.purity") },
          { icon: Leaf, label: t("stats.minerals") },
          { icon: ShieldCheck, label: t("stats.quality") },
          { icon: Award, label: t("stats.trusted") },
        ]}
      />
      <StoryJourney />
      <MissionSection />
      <FactorySection />
      <ManufacturingProcess />
      <LocalRootsSection />
      <CTABanner
        title={t("ctaTitle")}
        primaryLabel={t("ctaWhatsapp")}
        secondaryLabel={t("ctaProducts")}
        secondaryHref="/products"
      />
    </>
  );
}
