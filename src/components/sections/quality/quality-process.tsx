import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { qualityProcessSteps } from "@/data/quality-process";

export function QualityProcess() {
  const t = useTranslations("quality.process");
  const tSteps = useTranslations("quality.process.steps");

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} align="center" className="mx-auto" />
        <div className="mt-14 grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {qualityProcessSteps.map((step, i) => (
            <div key={step.key} className="relative flex flex-col items-center text-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-brand-sky text-brand-navy dark:bg-primary/15 dark:text-primary">
                <step.icon className="size-6" strokeWidth={1.75} />
              </span>
              <span className="mt-2 text-xs font-bold text-brand-green">{step.number}</span>
              <p className="mt-1 text-sm font-bold text-brand-navy dark:text-foreground">{tSteps(`${step.key}.title`)}</p>
              <p className="mt-1 text-xs text-muted-foreground">{tSteps(`${step.key}.description`)}</p>
              {i < qualityProcessSteps.length - 1 ? (
                <span className="absolute top-8 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-border lg:block" aria-hidden />
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
