import { Clock, Phone, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";

export function MapSection() {
  const t = useTranslations("contact.office");

  return (
    <section className="pb-16 sm:pb-20">
      <Container className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="aspect-4/3 overflow-hidden rounded-2xl border sm:aspect-video">
          <iframe
            title={t("mapTitle")}
            src={`https://www.google.com/maps?q=${siteConfig.address.coordinates.lat},${siteConfig.address.coordinates.lng}&z=16&output=embed`}
            className="size-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="rounded-2xl border bg-brand-sky p-6 dark:bg-secondary">
          <h3 className="text-lg font-bold text-brand-navy dark:text-foreground">{t("title")}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{t("description")}</p>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-brand-navy dark:text-primary" />
              <div>
                <p className="font-semibold text-brand-navy dark:text-foreground">{t("hoursLabel")}</p>
                <p className="text-muted-foreground">{siteConfig.contact.hours.weekdays}</p>
                <p className="text-muted-foreground">{siteConfig.contact.hours.weekend}</p>
              </div>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-brand-navy dark:text-primary" />
              <a href={`tel:${siteConfig.contact.phone}`} className="font-medium text-brand-navy dark:text-foreground">
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-brand-navy dark:text-primary" />
              <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-brand-navy dark:text-foreground">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
