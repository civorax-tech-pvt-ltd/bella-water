import type { Metadata } from "next";
import { Phone, MessageCircle } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

import { ContactInfoGrid } from "@/components/sections/contact/contact-info-grid";
import { MapSection } from "@/components/sections/contact/map-section";
import { DeliveryAndForm } from "@/components/sections/contact/delivery-and-form";
import { CTABanner } from "@/components/shared/cta-banner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.contact" });
  return pageMetadata({ locale, pathname: "/contact", title: t("title"), description: t("description") });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact.hero" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tNav("home"), path: "/" },
          { name: tNav("contact"), path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        image="/images/hero/contact-hero.jpg"
        actions={
          <>
            <Button asChild size="lg" className="bg-whatsapp text-white hover:bg-whatsapp/90">
              <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                {t("primaryCta")}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Phone className="size-4" />
                {t("secondaryCta")}
              </a>
            </Button>
          </>
        }
      />
      <ContactInfoGrid />
      <MapSection />
      <DeliveryAndForm />
      <CTABanner title={t("ctaTitle")} primaryLabel={t("ctaWhatsapp")} />
    </>
  );
}
