import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";

import { HomeHero } from "@/components/sections/home/home-hero";
import { TrustBar } from "@/components/sections/home/trust-bar";
import { PurityPreview } from "@/components/sections/home/purity-preview";
import { ProductsPreview } from "@/components/sections/home/products-preview";
import { WhyChoose } from "@/components/sections/home/why-choose";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { DeliveryBanner } from "@/components/sections/home/delivery-banner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.home" });
  return pageMetadata({ locale, pathname: "/", title: t("title"), description: t("description") });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HomeHero />
      <TrustBar />
      <PurityPreview />
      <ProductsPreview />
      <WhyChoose />
      <TestimonialsSection />
      <DeliveryBanner />
    </>
  );
}
