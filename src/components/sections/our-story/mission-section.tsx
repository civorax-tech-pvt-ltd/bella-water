import { Users, Building2, Globe2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

const items = [
  { key: "families", icon: Users, image: "/images/lifestyle/family.webp" },
  { key: "workplaces", icon: Building2, image: "/images/lifestyle/workplace.webp" },
  { key: "future", icon: Globe2, image: "/images/lifestyle/river.webp" },
] as const;

export function MissionSection() {
  const t = useTranslations("ourStory.mission");

  return (
    <section className="bg-brand-sky py-16 sm:py-20 dark:bg-secondary">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
        <div className="grid gap-4 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.key} className="overflow-hidden rounded-2xl border bg-card">
              <div className="aspect-square overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element -- static export, placeholder-friendly */}
                <img src={item.image} alt="" className="size-full object-cover" />
              </div>
              <div className="flex items-center gap-2 p-4">
                <span className="flex size-8 items-center justify-center rounded-full bg-brand-sky text-brand-navy dark:bg-primary/15 dark:text-primary">
                  <item.icon className="size-4" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-navy dark:text-foreground">{t(`items.${item.key}.title`)}</p>
                  <p className="text-xs text-muted-foreground">{t(`items.${item.key}.description`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
