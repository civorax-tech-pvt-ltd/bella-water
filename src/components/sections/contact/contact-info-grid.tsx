import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";

export function ContactInfoGrid() {
  const t = useTranslations("contact.info");

  const items = [
    {
      key: "call",
      icon: Phone,
      value: siteConfig.contact.phoneDisplay,
      href: `tel:${siteConfig.contact.phone}`,
      note: t("call.note"),
    },
    {
      key: "whatsapp",
      icon: MessageCircle,
      value: siteConfig.contact.whatsapp,
      href: siteConfig.contact.whatsappLink,
      note: t("whatsapp.note"),
    },
    {
      key: "email",
      icon: Mail,
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      note: t("email.note"),
    },
    {
      key: "visit",
      icon: MapPin,
      value: siteConfig.address.factory,
      href: undefined,
      note: t("visit.note"),
    },
  ] as const;

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <p className="mb-2 text-center text-sm font-semibold tracking-wide text-brand-green uppercase">
          {t("eyebrow")}
        </p>
        <h2 className="text-center text-2xl font-bold text-brand-navy sm:text-3xl dark:text-foreground">
          {t("title")}
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Wrapper = item.href ? "a" : "div";
            return (
              <Wrapper
                key={item.key}
                {...(item.href ? { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
                className="rounded-2xl border bg-card p-6 text-center transition-colors hover:border-brand-navy/40"
              >
                <span className="mx-auto flex size-11 items-center justify-center rounded-full bg-brand-sky text-brand-navy dark:bg-primary/15 dark:text-primary">
                  <item.icon className="size-5" strokeWidth={1.75} />
                </span>
                <p className="mt-3 text-sm font-bold text-brand-navy dark:text-foreground">{t(`${item.key}.title`)}</p>
                <p className="mt-1 text-sm text-foreground">{item.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.note}</p>
              </Wrapper>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
