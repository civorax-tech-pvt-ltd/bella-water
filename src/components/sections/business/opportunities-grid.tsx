import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { businessOpportunities } from "@/data/business-opportunities";

export function OpportunitiesGrid() {
  const t = useTranslations("business.opportunities");

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} align="center" className="mx-auto" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {businessOpportunities.map((item) => (
            <div key={item.key} id={item.slug} className="group overflow-hidden rounded-2xl border bg-card">
              <div className="aspect-4/3 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element -- static export, placeholder-friendly */}
                <img
                  src={item.image}
                  alt=""
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="flex size-9 items-center justify-center rounded-full bg-brand-sky text-brand-navy dark:bg-primary/15 dark:text-primary">
                  <item.icon className="size-4" strokeWidth={1.75} />
                </span>
                <h3 className="mt-3 text-base font-bold text-brand-navy dark:text-foreground">{t(`items.${item.key}.title`)}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t(`items.${item.key}.description`)}</p>
                <a href="#partner-form" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy dark:text-primary">
                  {t("learnMore")}
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
