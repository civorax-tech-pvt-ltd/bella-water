import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function DeliveryBanner() {
  const t = useTranslations("home.deliveryBanner");

  return (
    <section className="relative overflow-hidden bg-brand-navy-deep py-14 sm:py-16">
      <Container className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 max-w-lg text-base text-white/70">{t("description")}</p>
          <Button asChild size="lg" className="mt-6 bg-whatsapp text-white hover:bg-whatsapp/90">
            <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" />
              {t("cta")}
            </a>
          </Button>
        </div>
        <div className="relative mx-auto aspect-video w-full max-w-lg overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, placeholder-friendly */}
          <img src="/images/lifestyle/delivery-truck.webp" alt="" className="size-full object-cover" />
        </div>
      </Container>
    </section>
  );
}
