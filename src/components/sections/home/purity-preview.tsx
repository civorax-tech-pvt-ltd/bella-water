import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { purificationSteps } from "@/data/purification-process";

export function PurityPreview() {
  const t = useTranslations("home.purityPreview");
  const tSteps = useTranslations("purity.process.steps");

  return (
    <section className="bg-brand-navy-deep py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} tone="inverted" />
          <Button asChild variant="secondary" className="w-fit">
            <Link href="/purity">
              {t("cta")}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {purificationSteps.map((step) => (
            <div key={step.key} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white">
                  {step.number}
                </span>
                <step.icon className="size-5 text-brand-green" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-base font-bold text-white">{tSteps(`${step.key}.title`)}</h3>
              <p className="mt-2 text-sm text-white/70">{tSteps(`${step.key}.description`)}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
