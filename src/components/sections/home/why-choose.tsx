import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";

const commitmentKeys = ["testing", "packaging", "delivery", "sustainability"] as const;

export function WhyChoose() {
  const t = useTranslations("home.whyChoose");

  return (
    <section className="bg-brand-sky py-16 sm:py-20 dark:bg-secondary">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative order-2 aspect-4/3 overflow-hidden rounded-3xl lg:order-1">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, placeholder-friendly */}
          <img src="/images/lifestyle/girl-drinking-water.jpg" alt="" className="size-full object-cover" />
          <div className="absolute right-4 bottom-4 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg dark:bg-card">
            <CheckCircle2 className="size-5 text-brand-green" />
            <span className="text-sm font-semibold text-brand-navy dark:text-foreground">{t("badge")}</span>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Badge variant="outline" className="mb-3 border-brand-green text-brand-green">
            {t("eyebrow")}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl dark:text-foreground">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t("description")}</p>
          <ul className="mt-6 space-y-3">
            {commitmentKeys.map((key) => (
              <li key={key} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-green" />
                <span className="text-sm text-foreground">{t(`commitments.${key}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
