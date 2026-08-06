import type { Metadata } from "next";
import { Users, Leaf, TrendingUp, Truck } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { CTABanner } from "@/components/shared/cta-banner";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

import { OpportunitiesGrid } from "@/components/sections/business/opportunities-grid";
import { PrivateLabel } from "@/components/sections/business/private-label";
import { WhyPartner } from "@/components/sections/business/why-partner";
import { PartnerInquiryForm } from "@/components/sections/business/partner-inquiry-form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.business" });
  return pageMetadata({ locale, pathname: "/business", title: t("title"), description: t("description") });
}

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "business.hero" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tNav("home"), path: "/" },
          { name: tNav("business"), path: "/business" },
        ])}
      />
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        image="/images/hero/business-hero.webp"
        stats={[
          { icon: Users, label: t("stats.brand") },
          { icon: Leaf, label: t("stats.quality") },
          { icon: TrendingUp, label: t("stats.opportunity") },
          { icon: Truck, label: t("stats.support") },
        ]}
        actions={
          <>
            <Button asChild size="lg">
              <a href="#partner-form">{t("primaryCta")}</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                {t("secondaryCta")}
              </a>
            </Button>
          </>
        }
      />
      <OpportunitiesGrid />
      <PrivateLabel />
      <WhyPartner />
      <PartnerInquiryForm />
      <CTABanner title={t("ctaTitle")} primaryLabel={t("ctaWhatsapp")} secondaryLabel={t("ctaCall")} secondaryHref="/contact" />
    </>
  );
}
