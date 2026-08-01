import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";

const items = [
  { key: "location", icon: MapPin, value: siteConfig.address.factory },
  { key: "phone", icon: Phone, value: siteConfig.contact.phoneDisplay },
  { key: "email", icon: Mail, value: siteConfig.contact.email },
  { key: "hours", icon: Clock, value: siteConfig.contact.hours.weekdays },
] as const;

export function LocalRootsSection() {
  const t = useTranslations("ourStory.localRoots");

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-green uppercase">{t("eyebrow")}</p>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance text-brand-navy sm:text-4xl dark:text-foreground">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">{t("description")}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.key} className="flex items-start gap-3 rounded-2xl border bg-card p-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-sky text-brand-navy dark:bg-primary/15 dark:text-primary">
                <item.icon className="size-4" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">{t(`items.${item.key}`)}</p>
                <p className="mt-0.5 text-sm font-medium text-brand-navy dark:text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
