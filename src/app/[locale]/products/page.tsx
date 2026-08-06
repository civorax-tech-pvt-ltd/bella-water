import type { Metadata } from "next";
import { ShieldCheck, Leaf, Award } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { CTABanner } from "@/components/shared/cta-banner";

import { ProductGrid } from "@/components/sections/products/product-grid";
import { CompareTable } from "@/components/sections/products/compare-table";
import { FeatureStrip } from "@/components/sections/products/feature-strip";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.products" });
  return pageMetadata({ locale, pathname: "/products", title: t("title"), description: t("description") });
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "products.hero" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tNav("home"), path: "/" },
          { name: tNav("products"), path: "/products" },
        ])}
      />
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        image="/images/hero/products-hero.webp"
        stats={[
          { icon: ShieldCheck, label: t("stats.purification") },
          { icon: Leaf, label: t("stats.minerals") },
          { icon: Award, label: t("stats.quality") },
        ]}
      />
      <ProductGrid />
      <CompareTable />
      <FeatureStrip />
      <CTABanner
        title={t("ctaTitle")}
        primaryLabel={t("ctaWhatsapp")}
        secondaryLabel={t("ctaDelivery")}
        secondaryHref="/contact#delivery-areas"
      />
    </>
  );
}
